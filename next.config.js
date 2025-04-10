/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  eslint: {
    // Don't fail builds on ESLint errors during deployment
    ignoreDuringBuilds: true
  },
  typescript: {
    // Don't fail builds on TS errors during deployment
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
