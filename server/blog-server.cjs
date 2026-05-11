const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = Number(process.env.BLOG_API_PORT || 5175);
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const DB_FILE = path.join(DATA_DIR, 'blogs.json');
const UPLOAD_DIR = path.join(ROOT, 'public', 'uploads', 'blog');

fs.mkdirSync(DATA_DIR, { recursive: true });
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, '[]\n', 'utf8');
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
}

function readBlogs() {
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function writeBlogs(blogs) {
  fs.writeFileSync(DB_FILE, JSON.stringify(blogs, null, 2), 'utf8');
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function estimateReadTime(content) {
  const words = String(content || '').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 180))} min read`;
}

function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function parseMultipart(buffer, contentType) {
  const boundaryMatch = /boundary=(?:"([^"]+)"|([^;]+))/i.exec(contentType || '');
  if (!boundaryMatch) return { fields: {}, files: {} };

  const boundary = Buffer.from(`--${boundaryMatch[1] || boundaryMatch[2]}`);
  const fields = {};
  const files = {};
  let start = buffer.indexOf(boundary);

  while (start !== -1) {
    start += boundary.length;
    if (buffer[start] === 45 && buffer[start + 1] === 45) break;
    if (buffer[start] === 13 && buffer[start + 1] === 10) start += 2;

    const headerEnd = buffer.indexOf(Buffer.from('\r\n\r\n'), start);
    if (headerEnd === -1) break;

    const headers = buffer.slice(start, headerEnd).toString('utf8');
    const next = buffer.indexOf(boundary, headerEnd + 4);
    if (next === -1) break;

    let value = buffer.slice(headerEnd + 4, next);
    if (value.length >= 2 && value[value.length - 2] === 13 && value[value.length - 1] === 10) {
      value = value.slice(0, -2);
    }

    const name = /name="([^"]+)"/.exec(headers)?.[1];
    const filename = /filename="([^"]*)"/.exec(headers)?.[1];
    const mimeType = /Content-Type:\s*([^\r\n]+)/i.exec(headers)?.[1] || 'application/octet-stream';

    if (name && filename) {
      files[name] = { filename, mimeType, data: value };
    } else if (name) {
      fields[name] = value.toString('utf8');
    }

    start = next;
  }

  return { fields, files };
}

function saveUploadedImage(file) {
  if (!file || !file.data?.length) return '';

  const allowed = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);
  const ext = path.extname(file.filename || '').toLowerCase();
  const safeExt = allowed.has(ext) ? ext : '.jpg';
  const filename = `${Date.now()}-${crypto.randomUUID()}${safeExt}`;
  fs.writeFileSync(path.join(UPLOAD_DIR, filename), file.data);
  return `/uploads/blog/${filename}`;
}

function handleUploadAsset(req, res, pathname) {
  const relativePath = pathname.replace('/uploads/blog/', '');
  const safeName = path.basename(relativePath);
  const filePath = path.join(UPLOAD_DIR, safeName);

  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif'
  }[ext] || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=31536000'
  });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {});
    return;
  }

  if (req.method === 'GET' && url.pathname.startsWith('/uploads/blog/')) {
    handleUploadAsset(req, res, url.pathname);
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/blogs') {
    const blogs = readBlogs().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    sendJson(res, 200, blogs);
    return;
  }

  if (req.method === 'GET' && url.pathname.startsWith('/api/blogs/')) {
    const slug = decodeURIComponent(url.pathname.replace('/api/blogs/', ''));
    const blog = readBlogs().find((item) => item.slug === slug);
    sendJson(res, blog ? 200 : 404, blog || { message: 'Blog not found' });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/blogs') {
    try {
      const body = await getRequestBody(req);
      const { fields, files } = parseMultipart(body, req.headers['content-type']);
      const title = fields.title?.trim();
      const content = fields.content?.trim();
      const slug = slugify(fields.slug || title);

      if (!title || !slug || !content) {
        sendJson(res, 400, { message: 'Title, slug and content are required.' });
        return;
      }

      const blogs = readBlogs();
      if (blogs.some((blog) => blog.slug === slug)) {
        sendJson(res, 409, { message: 'A blog with this slug already exists.' });
        return;
      }

      const image = saveUploadedImage(files.image);
      const now = new Date();
      const blog = {
        id: crypto.randomUUID(),
        slug,
        title,
        category: fields.category?.trim() || 'Translation',
        author: fields.author?.trim() || 'Honey Translations',
        excerpt: fields.shortDescription?.trim() || '',
        content: content.split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean),
        image,
        seoTitle: fields.seoTitle?.trim() || title,
        seoDescription: fields.seoDescription?.trim() || fields.shortDescription?.trim() || '',
        date: now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: estimateReadTime(content),
        createdAt: now.toISOString()
      };

      blogs.unshift(blog);
      writeBlogs(blogs);
      sendJson(res, 201, blog);
    } catch (error) {
      sendJson(res, 500, { message: error.message || 'Could not save blog.' });
    }
    return;
  }

  sendJson(res, 404, { message: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`Blog API running at http://localhost:${PORT}`);
});
