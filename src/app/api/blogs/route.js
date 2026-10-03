import { NextResponse } from 'next/server';
import { getAllBlogs } from '@/lib/blogs';

export const dynamic = 'force-dynamic';

export async function GET() {
  const blogs = await getAllBlogs();
  return NextResponse.json(blogs);
}
