import { NextResponse } from 'next/server';
import { DEFAULT_BLOGS } from '@/lib/blogs';

export const dynamic = 'force-dynamic';

export async function GET() {
  const backendBaseUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`${backendBaseUrl.replace(/\/+$/, '')}/api/blogs`, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' },
      cache: 'no-store'
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return NextResponse.json(data);
      }
    }
  } catch (_) {
    // If backend is unreachable or local development, fall through to default blogs
  }

  return NextResponse.json(DEFAULT_BLOGS);
}
