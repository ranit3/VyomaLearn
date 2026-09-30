'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Search, BookOpen } from 'lucide-react';

const CATEGORIES = ['All', 'Cognitive AI', 'Socratic Method', 'Adaptive STEM'];

const getCategoryBadgeColor = (category) => {
  switch (category) {
    case 'Cognitive AI':
      return 'bg-blue-600 text-white';
    case 'Socratic Method':
      return 'bg-indigo-600 text-white';
    case 'Adaptive STEM':
      return 'bg-emerald-600 text-white';
    default:
      return 'bg-slate-700 text-white';
  }
};

export default function BlogListView({ initialBlogs = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = !searchQuery.trim() || 
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialBlogs, selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col pt-8 pb-24">
      {/* Header Section */}
      <section className="px-6 pt-4 pb-12 max-w-7xl mx-auto w-full text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
          <span>Articles, Research & Educational Science</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
          Insights & <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Updates</span>
        </h1>
        
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Explore the science of real-time cognitive tracking, Socratic AI dialogue, and how VyomaLearn builds profound conceptual mastery.
        </p>

        {/* Search & Category Filter Controls */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-white placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-xs transition-all"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 max-w-7xl mx-auto w-full relative z-10">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => {
              const badgeColor = getCategoryBadgeColor(post.category);

              return (
                <article 
                  key={post.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 flex flex-col group"
                >
                  <Link href={`/blog/${post.slug || post.id}`} className="flex flex-col h-full">
                    {/* Image Container with Floating Badges */}
                    <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                      
                      {/* Floating Category Tag */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md ${badgeColor}`}>
                          {post.category}
                        </span>
                      </div>

                      {/* Floating Read Time */}
                      <div className="absolute top-3.5 right-3.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900/75 text-white backdrop-blur-md shadow-md">
                          <Clock size={11} /> {post.readTime}
                        </span>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6 md:p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-3">
                          <Calendar size={13} />
                          <span>{post.date}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h2>
                        
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      {/* Footer / Author Bar */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-xs shrink-0">
                            {post.author ? post.author.charAt(0).toUpperCase() : 'V'}
                          </div>
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                            {post.author}
                          </span>
                        </div>
                        
                        <span className="text-blue-600 dark:text-blue-400 flex items-center gap-1 text-xs font-bold group-hover:translate-x-1 transition-transform">
                          Read <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-lg mx-auto p-8">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">No matching articles found</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Try adjusting your search query or selecting a different category filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-blue-600 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}