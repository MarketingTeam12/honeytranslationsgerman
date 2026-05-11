import type { BlogPost } from '../pages/blogData';

export type ApiBlogPost = BlogPost & {
  id: string;
  author: string;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
};

export const BLOG_API_BASE = import.meta.env.VITE_BLOG_API_BASE || '';

export function resolveBlogImage(image: string) {
  if (!image) return 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop';
  if (image.startsWith('/uploads/')) return BLOG_API_BASE ? `${BLOG_API_BASE}${image}` : image;
  return image;
}

export async function fetchPublishedBlogs() {
  const response = await fetch(`${BLOG_API_BASE}/api/blogs`);
  if (!response.ok) {
    throw new Error('Could not fetch blogs');
  }
  return (await response.json()) as ApiBlogPost[];
}

export async function fetchPublishedBlogBySlug(slug: string) {
  const response = await fetch(`${BLOG_API_BASE}/api/blogs/${encodeURIComponent(slug)}`);
  if (!response.ok) {
    return null;
  }
  return (await response.json()) as ApiBlogPost;
}

export async function publishBlog(formData: FormData) {
  const response = await fetch(`${BLOG_API_BASE}/api/blogs`, {
    method: 'POST',
    body: formData
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not publish blog');
  }

  return data as ApiBlogPost;
}
