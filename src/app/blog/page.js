import React from 'react';
import BlogListView from '@/components/BlogListView';
import { getAllBlogs } from '@/lib/blogs';

export const revalidate = 60; // Revalidate every 60 seconds for fresh blogs & fast caching

export const metadata = {
  title: 'Blog & Educational Insights | Vyoma Learn',
  description: 'Read the latest insights, pedagogical research, and updates on Agentic AI education, cognitive tracking, and Socratic learning from VyomaLearn.',
  alternates: {
    canonical: 'https://vyomalearn.in/blog',
  },
  openGraph: {
    title: 'Blog & Educational Insights | Vyoma Learn',
    description: 'Explore the science of real-time cognitive tracking, Socratic AI dialogue, and how VyomaLearn builds profound conceptual mastery.',
    url: 'https://vyomalearn.in/blog',
    type: 'website',
  },
};

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Vyoma Learn Blog & Insights",
    "description": "Educational research and articles on Agentic AI, cognitive tracking, and Socratic learning.",
    "url": "https://vyomalearn.in/blog",
    "blogPost": blogs.map((b) => ({
      "@type": "BlogPosting",
      "headline": b.seoTitle || b.title,
      "description": b.seoDescription || b.excerpt,
      "datePublished": b.date || "2026-09-18",
      "url": `https://vyomalearn.in/blog/${b.slug || b.id}`,
      "image": b.imageUrl,
      "author": {
        "@type": "Organization",
        "name": b.author || "VyomaLearn Editorial"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <BlogListView initialBlogs={blogs} />
    </>
  );
}
