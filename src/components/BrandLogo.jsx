'use client';

import React from 'react';

/**
 * BrandLogo component for VyomaLearn
 * Uses the official emblem created for the platform.
 */
export default function BrandLogo({
  className = "w-11 h-11 object-contain select-none",
  alt = "VyomaLearn Logo",
  variant = "auto",
  ...props
}) {
  const src = variant === 'light' ? '/logo_light.png' : variant === 'dark' ? '/logo_dark.png' : '/logo.png';
  const autoClass = variant === 'auto' ? 'dark:invert' : '';

  return (
    <img
      src={src}
      alt={alt}
      width={48}
      height={48}
      className={`${className} ${autoClass} select-none transition-all`}
      {...props}
    />
  );
}