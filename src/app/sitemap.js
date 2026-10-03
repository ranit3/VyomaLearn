import { getAllBlogs } from '@/lib/blogs';

export const revalidate = 60;

export default async function sitemap() {
  const baseUrl = 'https://www.vyomalearn.in';
  const blogs = await getAllBlogs();

  const blogEntries = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug || post.id}`,
    lastModified: post.updated_at ? new Date(post.updated_at) : (post.created_at ? new Date(post.created_at) : new Date()),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/subscriptions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  return [...staticRoutes, ...blogEntries];
}
