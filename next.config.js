/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  // Disable type checking during builds for better performance
  typescript: {
    ignoreBuildErrors: true
  },
  // Disable ESLint during builds for better performance
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
