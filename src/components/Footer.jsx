import React from 'react';
import Link from 'next/link';
import { MessageCircle, Code, Globe } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { PLATFORM_URL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3.5 mb-4 group">
              <BrandLogo
                alt="VyomaLearn Logo"
                className="w-11 h-11 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
              />
              <span className="font-brand font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                VyomaLearn
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Empowering the next generation of learners with adaptive AI and deep assessment technologies.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/ranit3/VyomaLearn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-600 transition-colors"
                aria-label="GitHub Repository"
              >
                <Code size={18} />
              </a>
              <a 
                href={`${PLATFORM_URL}`} 
                className="text-slate-400 hover:text-blue-600 transition-colors"
                aria-label="Platform Portal"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Product</h3>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/subscriptions" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
              <li><a href={`${PLATFORM_URL}/login`} className="hover:text-blue-600 transition-colors">Sign In</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Resources</h3>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog & Insights</Link></li>
              <li><a href={`${PLATFORM_URL}/community`} className="hover:text-blue-600 transition-colors">Community</a></li>
              <li><a href={`${PLATFORM_URL}/institute`} className="hover:text-blue-600 transition-colors">Institute Access</a></li>
              <li><Link href="/about#developers" className="hover:text-blue-600 transition-colors">Developers & Team</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Legal</h3>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Vyoma Learn (VyomaLearn). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}