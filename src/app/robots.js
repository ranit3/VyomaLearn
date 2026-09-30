export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://vyomalearn.in/sitemap.xml',
    host: 'https://vyomalearn.in',
  };
}