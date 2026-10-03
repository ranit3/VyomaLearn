import { NextResponse } from 'next/server';
import { getBlogBySlug } from '@/lib/blogs';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json(blog);
}
