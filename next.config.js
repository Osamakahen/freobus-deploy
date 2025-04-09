/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Enable standalone output for Vercel
  output: 'standalone',
  // TypeScript configuration
  typescript: {
    // Enable type checking during build
    ignoreBuildErrors: false,
  },
  // ESLint configuration
  eslint: {
    // Enable ESLint during build
    ignoreDuringBuilds: false,
  },
  // Remove experimental section as it's not needed
  experimental: {}
};

module.exports = nextConfig;
