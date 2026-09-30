import { getAllBlogs } from '@/lib/blogs';

export default async function sitemap() {
  const baseUrl = 'https://vyomalearn.in';
  const blogs = getAllBlogs();

  const blogEntries = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug || post.id}`,
    lastModified: new Date('2026-09-18'),
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
      priority: 0.85,
    },
  ];

  return [...staticRoutes, ...blogEntries];
}