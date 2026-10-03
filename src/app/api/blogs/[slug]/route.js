import { NextResponse } from 'next/server';
import { DEFAULT_BLOGS } from '@/lib/blogs';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { slug } = await params;
  const backendBaseUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`${backendBaseUrl.replace(/\/+$/, '')}/api/blogs/${encodeURIComponent(slug)}`, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' },
      cache: 'no-store'
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch (_) {}

  // Fallback to static blogs
  const found = DEFAULT_BLOGS.find(b => b.slug === slug || b.id === slug);
  if (found) {
    return NextResponse.json(found);
  }

  return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
}
