'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getStaticBlogs } from '@/lib/blogs';

export default function HomeBlogSection() {
  const [blogs, setBlogs] = useState(() => getStaticBlogs().slice(0, 3));

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setBlogs(data.slice(0, 3));
        }
      })
      .catch(() => {});
  }, []);

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'Cognitive AI':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Socratic Method':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Adaptive STEM':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <section id="blog-section" className="py-20 md:py-28 w-full relative z-10 overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-semibold mb-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
              <span>Pedagogical Science & Insights</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
              Deep Dives into Cognitive AI & Socratic Education
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg font-normal">
              Explore our latest research on cognitive load theory, adaptive pacing, and self-directed mastery.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-900 font-semibold text-sm shadow-sm hover:shadow transition-all group shrink-0"
          >
            <span>View All Insights</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image Container */}
              <Link href={`/blog/${post.slug || post.id}`} className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative block">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-600 font-bold">
                    VyomaLearn
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border shadow-sm backdrop-blur-md ${getCategoryBadge(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Content Container */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-3">
                  <Link href={`/blog/${post.slug || post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-slate-600 text-sm font-normal line-clamp-3 leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  <span className="text-slate-500 font-medium">By {post.author}</span>
                  <Link 
                    href={`/blog/${post.slug || post.id}`}
                    className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
