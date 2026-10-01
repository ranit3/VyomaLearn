'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getAllBlogs } from '@/lib/blogs';

export default function HomeBlogSection() {
  const blogs = getAllBlogs().slice(0, 3);

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
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mb-3">
              Explore Our Latest Insights
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Discover the research behind real-time cognitive modeling, Socratic AI dialogue, and how VyomaLearn builds profound, durable conceptual mastery.
            </p>
          </div>

          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-900 text-sm font-semibold shadow-sm hover:shadow-md transition-all group"
            >
              <span>View All Articles</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:border-slate-300 transition-all duration-300 flex flex-col h-full"
            >
              <Link href={`/blog/${post.slug || post.id}`} className="flex flex-col h-full">
                
                {/* Image Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full border shadow-sm backdrop-blur-md bg-white/95 ${getCategoryBadge(post.category)}`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time Tag */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-950/75 text-white backdrop-blur-md">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  
                  {/* Metadata Row */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-400" />
                      {post.date}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600 truncate">{post.author}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Read More Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mt-auto">
                    <span>Read Article</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 text-slate-700 flex items-center justify-center transition-all duration-200 group-hover:translate-x-1">
                      <ArrowRight size={14} />
                    </div>
                  </div>

                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex md:hidden justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-900 text-sm font-semibold shadow-sm hover:shadow-md transition-all"
          >
            <span>View All Articles</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
