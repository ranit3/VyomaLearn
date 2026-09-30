'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import VantaTopologyBackground from './VantaTopologyBackground';

export default function WebsiteBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Force light mode for website marketing pages as intended
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Traditional Sweet Matte Blue Dot Pattern Background across entire site */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -2,
          backgroundColor: '#edf4fa',
          backgroundImage: 'radial-gradient(circle, rgba(96, 165, 250, 0.25) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Floating Orb (Flashlight Effect tracking cursor) */}
      <div 
        className="fixed top-0 left-0 w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-[80px] mix-blend-multiply pointer-events-none"
        style={{
          zIndex: -1,
          transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
          willChange: 'transform'
        }}
      />

      {/* Soothing Window Shade Shadow Effect */}
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden opacity-30 mix-blend-multiply"
        style={{ zIndex: -1 }}
      >
        <div className="absolute top-1/2 left-0 w-full h-32 bg-slate-400/30 blur-[30px] -translate-y-1/2" />
        <div className="absolute top-[-20%] left-[30%] w-48 h-[140%] bg-slate-400/30 blur-[40px] rotate-[-25deg]" />
        <div className="absolute top-[-20%] left-[70%] w-16 h-[140%] bg-slate-400/20 blur-[30px] rotate-[-25deg]" />
      </div>

      {/* On homepage only: animated Vanta Topology background in the first instance (first 100vh) */}
      {isHomePage && (
        <VantaTopologyBackground 
          color={0x237bb1}
          backgroundColor={0x4ce8e8}
          mouseControls={true}
          touchControls={true}
          gyroControls={false}
          minHeight={200.00}
          minWidth={200.00}
          scale={1.00}
          scaleMobile={1.00}
          targetFps={28}
        />
      )}
    </>
  );
}