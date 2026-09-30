'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { PLATFORM_URL, NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full z-50 px-6 py-5 md:py-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-3.5 group" 
          title="Vyoma Learn (VyomaLearn)" 
          aria-label="Vyoma Learn Home"
        >
          <BrandLogo 
            alt="Vyoma Learn Logo" 
            className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-md group-hover:scale-105 transition-transform" 
          />
          <span className="font-brand font-bold text-2xl md:text-[26px] tracking-tight text-slate-900 select-none">
            VyomaLearn<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path}
                className={`text-sm font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-slate-900 after:transition-all ${
                  isActive 
                    ? 'text-slate-900 font-semibold after:w-full' 
                    : 'text-slate-700 hover:text-slate-900 after:w-0 hover:after:w-full'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`${PLATFORM_URL}/login`}
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight size={14} className="hidden sm:inline" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-white/50 rounded-xl transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-200/60 bg-white/95 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-2 shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-100 text-slate-900 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href={`${PLATFORM_URL}/login`}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-center text-sm font-semibold rounded-xl transition-colors"
          >
            Sign In to Platform
          </a>
        </div>
      )}
    </header>
  );
}