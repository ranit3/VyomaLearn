'use client';

import React, { useEffect, useRef } from 'react';

// Cache script promises to avoid multiple simultaneous injections
const scriptLoadCache = new Map();

function loadExternalScript(src) {
  if (scriptLoadCache.has(src)) {
    return scriptLoadCache.get(src);
  }

  const promise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (
        existing.getAttribute('data-loaded') === 'true' ||
        (src.includes('p5') && typeof window !== 'undefined' && window.p5) ||
        (src.includes('vanta') && typeof window !== 'undefined' && window.VANTA?.TOPOLOGY)
      ) {
        resolve();
        return;
      }
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)));
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      script.setAttribute('data-loaded', 'true');
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });

  promise.catch(() => scriptLoadCache.delete(src));
  scriptLoadCache.set(src, promise);
  return promise;
}

export default function VantaTopologyBackground({
  color = 0x237bb1,
  backgroundColor = 0x4ce8e8,
  mouseControls = true,
  touchControls = true,
  gyroControls = false,
  minHeight = 200.00,
  minWidth = 200.00,
  scale = 1.00,
  scaleMobile = 1.00,
  targetFps = 28,
  className = ""
}) {
  const containerRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    async function initVanta() {
      try {
        if (!window.p5) {
          await loadExternalScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js');
        }

        if (window.p5 && !window.p5._hasSlowedFramerate) {
          window.p5._hasSlowedFramerate = true;
          const originalSetup = window.p5.prototype.setup;
          window.p5.prototype.setup = function() {
            try {
              if (typeof this.frameRate === 'function') {
                this.frameRate(targetFps);
              }
            } catch (_) {}
            if (typeof originalSetup === 'function') {
              return originalSetup.apply(this, arguments);
            }
          };
        }

        if (!window.VANTA || !window.VANTA.TOPOLOGY) {
          await loadExternalScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js');
        }

        if (isMounted && containerRef.current && window.VANTA?.TOPOLOGY) {
          if (vantaEffectRef.current && typeof vantaEffectRef.current.destroy === 'function') {
            try {
              vantaEffectRef.current.destroy();
            } catch (_) {}
          }

          vantaEffectRef.current = window.VANTA.TOPOLOGY({
            el: containerRef.current,
            mouseControls,
            touchControls,
            gyroControls,
            minHeight,
            minWidth,
            scale,
            scaleMobile,
            color,
            backgroundColor
          });

          const applyFrameRate = () => {
            if (vantaEffectRef.current?.p5 && typeof vantaEffectRef.current.p5.frameRate === 'function') {
              vantaEffectRef.current.p5.frameRate(targetFps);
              return true;
            }
            return false;
          };

          if (!applyFrameRate()) {
            let checks = 0;
            const timer = setInterval(() => {
              checks++;
              if (applyFrameRate() || checks > 40) {
                clearInterval(timer);
              }
            }, 50);
          }
        }
      } catch (err) {
        console.error("Error initializing Vanta Topology background:", err);
      }
    }

    initVanta();

    return () => {
      isMounted = false;
      if (vantaEffectRef.current && typeof vantaEffectRef.current.destroy === 'function') {
        try {
          vantaEffectRef.current.destroy();
        } catch (_) {}
        vantaEffectRef.current = null;
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [color, backgroundColor, mouseControls, touchControls, gyroControls, minHeight, minWidth, scale, scaleMobile]);

  return (
    <div 
      className="absolute top-0 left-0 w-full h-[100vh] pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <div
        ref={containerRef}
        className={`w-full h-full ${className}`}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          backgroundColor: typeof backgroundColor === 'number' ? '#' + backgroundColor.toString(16).padStart(6, '0') : backgroundColor
        }}
      />
      {/* Soft gradient fade into sweet matte blue background as user scrolls down */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10" 
        style={{
          background: 'linear-gradient(to bottom, transparent, #edf4fa)'
        }}
      />
    </div>
  );
}