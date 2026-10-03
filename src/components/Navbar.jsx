'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { PLATFORM_URL, NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full z-50 px-4 sm:px-6 py-4 md:py-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <Link 
          href="/" 
          className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0" 
          title="Vyoma Learn (VyomaLearn)" 
          aria-label="Vyoma Learn Home"
        >
          <BrandLogo 
            alt="Vyoma Learn Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" 
          />
          <span className="font-brand font-bold text-xl sm:text-2xl md:text-[26px] tracking-tight text-slate-950 select-none">
            VyomaLearn<span className="text-slate-950">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path}
                className={`text-sm font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-slate-950 after:transition-all ${
                  isActive 
                    ? 'text-slate-950 font-semibold after:w-full' 
                    : 'text-slate-600 hover:text-slate-950 after:w-0 hover:after:w-full'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 hover:bg-white/60 rounded-xl transition-colors shrink-0 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border border-slate-200/80 bg-white/95 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-2 shadow-xl">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-100 text-slate-950 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
