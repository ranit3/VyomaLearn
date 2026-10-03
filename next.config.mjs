/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
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
