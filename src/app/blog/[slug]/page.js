import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Sparkles, BookOpen } from 'lucide-react';
import { getAllBlogs, getBlogBySlug } from '@/lib/blogs';
import { PLATFORM_URL } from '@/lib/constants';

export const dynamicParams = true; // Allow newly published blogs from admin panel to render on demand!
export const revalidate = 60;

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((post) => ({
    slug: post.slug || post.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Vyoma Learn',
    };
  }

  const title = post.seoTitle ? post.seoTitle : `${post.title} | Vyoma Learn`;
  const description = post.seoDescription || post.excerpt;
  const url = `https://vyomalearn.in/blog/${post.slug || post.id}`;

  const meta = {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.created_at || '2026-09-18T00:00:00.000Z',
      authors: [post.author],
      images: [
        {
          url: post.imageUrl || '/logo.png',
          width: 1200,
          height: 800,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.imageUrl || '/logo.png'],
    },
  };

  if (post.keywords) {
    meta.keywords = post.keywords;
  }

  return meta;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const allBlogs = await getAllBlogs();
  const relatedPosts = allBlogs.filter((b) => (b.slug || b.id) !== (post.slug || post.id)).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.seoTitle || post.title,
    "description": post.seoDescription || post.excerpt,
    "image": post.imageUrl,
    "datePublished": post.created_at || "2026-09-18T00:00:00.000Z",
    "dateModified": post.updated_at || post.created_at || "2026-09-18T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://vyomalearn.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vyoma Learn",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vyomalearn.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://vyomalearn.in/blog/${post.slug || post.id}`
    }
  };

  // Sanitize content: strip any HTML comments (placeholders), clean LaTeX math, and normalize typography
  const articleBody = (post.content || '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\$\int\s*\int_?R?\s*f\(x,y\)\s*dA\$/g, '∬_R f(x,y) dA')
    .replace(/\$([^$]+)\$/g, '$1')
    .replace(/([^\s])—([^\s])/g, '$1 — $2');

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Raw Custom Meta Tags if provided by admin */}
      {post.rawMetaTags && (
        <div 
          dangerouslySetInnerHTML={{ __html: post.rawMetaTags }} 
          style={{ display: 'none' }} 
        />
      )}

      <article className="pt-6 pb-20 px-6 max-w-4xl mx-auto w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Category & Read Time */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            {post.category || 'General'}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Clock size={13} />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Calendar size={13} />
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.25] mb-6">
          {post.title}
        </h1>

        {/* Excerpt Lead */}
        <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 border-l-4 border-blue-600 pl-4">
          {post.excerpt}
        </p>

        {/* Author Byline */}
        <div className="flex items-center justify-between py-4 border-y border-slate-200 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
              {(post.author || 'V').charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">{post.author}</p>
              <p className="text-xs text-slate-500">VyomaLearn Research & Pedagogy</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Published {post.date || 'Sep 2026'}</span>
          </div>
        </div>

        {/* Cover Image */}
        {post.imageUrl && (
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden mb-12 shadow-lg bg-slate-100">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base sm:text-lg">
          <ReactMarkdown
            components={{
              h1: () => null, // Skip redundant H1 inside body since post.title is already displayed above
              h2: ({ children }) => (
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-4 tracking-tight">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-9 mb-3 tracking-tight">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-6 mb-2 tracking-tight">
                  {children}
                </h4>
              ),
              p: ({ children }) => (
                <p className="leading-relaxed mb-6 text-slate-700">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-slate-900">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-slate-800">
                  {children}
                </em>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 bg-blue-50/60 p-4 sm:p-6 rounded-r-2xl my-6 text-slate-800 italic font-serif text-lg">
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-slate-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-outside pl-6 space-y-2 mb-6 text-slate-700">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">
                  {children}
                </li>
              ),
              hr: () => (
                <hr className="my-10 border-slate-200" />
              ),
              a: ({ href, children }) => (
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 underline font-medium hover:text-blue-700 transition-colors"
                >
                  {children}
                </a>
              ),
              img: ({ src, alt }) => (
                <figure className="my-8 rounded-2xl overflow-hidden shadow-md bg-slate-50 border border-slate-200">
                  <img 
                    src={src} 
                    alt={alt || post.title} 
                    className="w-full h-auto object-cover max-h-[500px]" 
                    loading="lazy"
                  />
                  {alt && (
                    <figcaption className="p-3 text-xs text-center text-slate-500 italic bg-slate-50 border-t border-slate-100">
                      {alt}
                    </figcaption>
                  )}
                </figure>
              ),
              code: ({ children }) => (
                <code className="px-1.5 py-0.5 rounded bg-slate-100 text-blue-600 font-mono text-sm">
                  {children}
                </code>
              )
            }}
          >
            {articleBody}
          </ReactMarkdown>
        </div>

        {/* Mid-Article Call to Action */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Experience this pedagogical method</h3>
            <p className="text-slate-300 text-sm max-w-md">
              Create an account on the VyomaLearn platform to start self-paced AI tutoring with adaptive remediation today.
            </p>
          </div>
          <a
            href={`${PLATFORM_URL}/login`}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Start Learning Free</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Insights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug || related.id}`}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-2">
                    {related.category}
                  </span>
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {related.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>
    </div>
  );
}
