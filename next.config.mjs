/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://learn.vyomalearn.in/admin/login',
        permanent: false,
      },
      {
        source: '/admin/:path*',
        destination: 'https://learn.vyomalearn.in/admin/:path*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;