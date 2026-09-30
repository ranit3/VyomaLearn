'use client';

import React from 'react';

/**
 * BrandLogo component for VyomaLearn
 * Uses the official emblem created for the platform.
 * Inversion is disabled to ensure crisp, dark contrast against the light page background
 * regardless of mobile OS dark-mode preferences.
 */
export default function BrandLogo({
  className = "w-11 h-11 object-contain select-none",
  alt = "VyomaLearn Logo",
  variant = "dark",
  ...props
}) {
  const src = variant === 'light' ? '/logo_light.png' : '/logo.png';

  return (
    <img
      src={src}
      alt={alt}
      width={48}
      height={48}
      className={`${className} select-none transition-all`}
      {...props}
    />
  );
}
