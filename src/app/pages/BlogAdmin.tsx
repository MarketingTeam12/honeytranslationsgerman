import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  FileText,
  ImagePlus,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Search,
  Tag,
  Upload,
  UserRound
} from 'lucide-react';
import { publishBlog } from '../lib/blogApi';

const ADMIN_SESSION_KEY = 'honey_blog_admin_authenticated';
const ADMIN_EMAIL = 'admin@honeytranslations.com';
const ADMIN_PASSWORD = 'admin123';

function isAdminAuthenticated() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
}

export function BlogAdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAdminAuthenticated()) {
      navigate('/blog/admin/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
      navigate('/blog/admin/dashboard', { replace: true });
      return;
    }

    setError('Invalid admin email or password.');
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#eef5ff_0%,#ffffff_46%,#f7faff_100%)] px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_100px_-55px_rgba(21,18,73,0.45)] lg:grid-cols-[0.95fr_1.05fr]">
          <section className="relative hidden overflow-hidden bg-[linear-gradient(135deg,#151249_0%,#1d2f6f_62%,#0f172a_100%)] p-10 text-white lg:block">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl"></div>
            <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl"></div>
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12">
                  <LayoutDashboard className="h-7 w-7 text-yellow-300" />
                </div>
                <h1 className="max-w-md text-4xl font-black leading-tight">Honey Blog Admin</h1>
                <p className="mt-5 max-w-md text-base leading-7 text-white/78">
                  Manage article drafts, upload featured visuals, and prepare SEO-ready translation content from one focused dashboard.
                </p>
              </div>
              <div className="grid gap-3">
                {['Secure admin access', 'Clean publishing workflow', 'SEO content fields included'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white/86 backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="p-6 sm:p-10 lg:p-14">
            <div className="mx-auto max-w-md">
              <div className="mb-8">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#151249] text-white">
                  <LockKeyhole className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-[#151249]">Admin Login</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">Sign in to open the blog publishing dashboard.</p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Email Address</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setError('');
                    }}
                    placeholder="admin@honeytranslations.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-[#151249] outline-none transition focus:border-[#151249] focus:bg-white focus:ring-4 focus:ring-[#151249]/10"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Password</span>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setError('');
                    }}
                    placeholder="Enter password"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-[#151249] outline-none transition focus:border-[#151249] focus:bg-white focus:ring-4 focus:ring-[#151249]/10"
                  />
                </label>

                {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">{error}</p>}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#151249] px-6 py-4 font-bold text-white shadow-lg shadow-[#151249]/20 transition hover:-translate-y-0.5 hover:bg-[#211d62]"
                >
                  Login to Dashboard
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>

              <p className="mt-6 rounded-2xl bg-blue-50 px-4 py-3 text-xs font-medium leading-5 text-blue-800">
                Demo credentials: admin@honeytranslations.com / admin123
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export function BlogAdminDashboard() {
  const navigate = useNavigate();
  const [imageName, setImageName] = useState('');
  const [published, setPublished] = useState(false);
  const [publishError, setPublishError] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);
  const categories = useMemo(() => ['Translation', 'Localization', 'Legal', 'Medical', 'Technical', 'Business'], []);
  const recentDrafts = [
    { title: 'How to Choose a Certified Translator', category: 'Translation', status: 'Draft' },
    { title: 'Legal Document Translation Tips', category: 'Legal', status: 'Review' },
    { title: 'Website Localization Checklist', category: 'Localization', status: 'Draft' },
    { title: 'Medical Translation Accuracy', category: 'Medical', status: 'Ready' }
  ];

  if (!isAdminAuthenticated()) {
    return <Navigate to="/blog/admin" replace />;
  }

  const handlePublish = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPublished(false);
    setPublishError('');
    setIsPublishing(true);

    try {
      await publishBlog(new FormData(event.currentTarget));
      if (event.currentTarget) {
        event.currentTarget.reset();
      }
      setImageName('');
      setPublished(true);
    } catch (error) {
      setPublishError(error instanceof Error ? error.message : 'Could not publish blog.');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    navigate('/blog/admin', { replace: true });
  };

  return (
    <main className="min-h-screen bg-[#f6f8fc] px-4 py-5 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#151249] text-white">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Honey Admin</p>
              <h1 className="text-base font-black text-[#151249]">Blog Manager</h1>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-[#151249] transition hover:border-[#151249]/30 hover:bg-slate-50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </header>

        <div className="grid gap-4 lg:grid-cols-[245px_minmax(0,1fr)] lg:items-start">
          <aside className="space-y-4">
            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-black text-[#151249]">Existing Posts</h2>
                <span className="rounded-full bg-yellow-100 px-2 py-1 text-[10px] font-bold text-[#151249]">{recentDrafts.length}</span>
              </div>
              <div className="space-y-2">
                {recentDrafts.map((draft) => (
                  <article key={draft.title} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <p className="line-clamp-2 text-xs font-bold leading-5 text-[#151249]">{draft.title}</p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold text-slate-500">{draft.category}</span>
                      <span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold text-slate-600">{draft.status}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Search className="h-4 w-4" />
              </div>
              <h2 className="text-sm font-black text-[#151249]">Tip</h2>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Keep the slug short, add a focused SEO title, and upload a wide featured image for a cleaner blog listing.
              </p>
            </section>
          </aside>

          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_18px_70px_-52px_rgba(21,18,73,0.45)] sm:p-5">
            <div className="mb-4 flex flex-col gap-2 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-black text-[#151249]">Upload New Blog</h2>
                <p className="mt-1 text-xs leading-5 text-slate-500">Fill all required fields and publish from the dashboard.</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#151249] px-3 py-1.5 text-[11px] font-bold text-white">
                <FileText className="h-3.5 w-3.5" />
                Editor
              </span>
            </div>

            <form className="space-y-4" onSubmit={handlePublish} encType="multipart/form-data">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Blog Title">
                  <input name="title" className="admin-input admin-input-compact" placeholder="Enter blog title" required />
                </Field>
                <Field label="Slug">
                  <input name="slug" className="admin-input admin-input-compact" placeholder="example-blog-slug" required />
                </Field>
                <Field label="Category">
                  <select name="category" className="admin-input admin-input-compact" required defaultValue="">
                    <option value="" disabled>Select category</option>
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Author">
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input name="author" className="admin-input admin-input-compact pl-11" placeholder="Author name" required />
                  </div>
                </Field>
              </div>

              <Field label="Short Description">
                <textarea name="shortDescription" className="admin-input admin-input-compact min-h-20 resize-y" placeholder="Write a short blog summary" required />
              </Field>

              <div className="grid gap-4 md:grid-cols-[1fr_210px]">
                <Field label="Featured Image Upload">
                  <label className="flex min-h-24 cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-center transition hover:border-[#151249]/40 hover:bg-blue-50/60">
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      className="hidden"
                      onChange={(event) => setImageName(event.target.files?.[0]?.name || '')}
                    />
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#151249] shadow-sm">
                      <ImagePlus className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="line-clamp-1 text-xs font-black text-[#151249]">{imageName || 'Upload featured image'}</p>
                      <p className="mt-1 text-[11px] text-slate-500">PNG, JPG or WEBP</p>
                    </div>
                  </label>
                </Field>
                <Field label="SEO Title">
                  <input name="seoTitle" className="admin-input admin-input-compact" placeholder="SEO optimized title" />
                </Field>
              </div>

              <Field label="SEO Description">
                <textarea name="seoDescription" className="admin-input admin-input-compact min-h-20 resize-y" placeholder="Meta description for search engines" />
              </Field>

              <Field label="Main Content">
                <textarea name="content" className="admin-input admin-input-compact min-h-48 resize-y" placeholder="Write the full blog content here" required />
              </Field>

              {published && (
                <p className="rounded-lg bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-700">
                  Blog published successfully. It is saved permanently and will appear on the public blog page.
                </p>
              )}

              {publishError && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-xs font-semibold text-red-700">
                  {publishError}
                </p>
              )}

              <div className="flex justify-end border-t border-slate-200 pt-4">
                <button
                  type="submit"
                  disabled={isPublishing}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-5 py-2.5 text-xs font-black text-[#151249] shadow-lg shadow-yellow-400/20 transition hover:-translate-y-0.5 hover:shadow-yellow-400/35 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  <Upload className="h-4 w-4" />
                  {isPublishing ? 'Publishing...' : 'Publish Blog'}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#151249]">{label}</span>
      {children}
    </label>
  );
}
