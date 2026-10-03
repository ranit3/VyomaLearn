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
    sitemap: 'https://www.vyomalearn.in/sitemap.xml',
    host: 'https://www.vyomalearn.in',
  };
}
