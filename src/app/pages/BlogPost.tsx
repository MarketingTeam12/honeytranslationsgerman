import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BlogPost as BlogPostType, blogCopy, getAllBlogPosts } from './blogData';
import { fetchPublishedBlogBySlug, resolveBlogImage } from '../lib/blogApi';

export function BlogPost() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const copy = blogCopy[language];
  const staticPost = getAllBlogPosts(language).find((item) => item.slug === slug);
  const [dynamicPost, setDynamicPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(!staticPost);
  const post = dynamicPost || staticPost;

  useEffect(() => {
    if (!slug || staticPost) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    setIsLoading(true);

    fetchPublishedBlogBySlug(slug)
      .then((blog) => {
        if (isMounted) {
          setDynamicPost(blog);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [slug, staticPost]);

  useEffect(() => {
    if (!post) return;

    document.title = post.seoTitle || post.title;
    const description = post.seoDescription || post.excerpt;
    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;
  }, [post]);

  if (isLoading) {
    return (
      <div className="px-6 py-32 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#151249]">Loading article...</h1>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="px-6 py-32 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#151249]">{copy.emptyTitle}</h1>
        <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-[#151249] hover:text-yellow-600">
          <ArrowLeft className="h-4 w-4" />
          {copy.backToBlog}
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-16">
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="mb-8 inline-flex items-center gap-2 font-semibold text-[#151249] hover:text-yellow-600">
            <ArrowLeft className="h-4 w-4" />
            {copy.backToBlog}
          </Link>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-[#151249]">{post.category}</span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-[#151249]">{post.title}</h1>
          <p className="text-xl leading-relaxed text-gray-600">{post.excerpt}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="container mx-auto max-w-4xl">
          <img src={resolveBlogImage(post.image)} alt={post.title} className="mb-10 aspect-video w-full rounded-2xl object-cover shadow-xl" />
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
