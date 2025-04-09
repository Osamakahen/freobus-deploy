/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Webpack configuration to handle module resolution
  webpack: (config, { isServer }) => {
    // Add any necessary webpack configurations here
    return config;
  },
  // TypeScript configuration
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  // Enable standalone output for Vercel
  output: 'standalone',
  // Ignore TypeScript and ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Add any other experimental features here if needed
  }
};

module.exports = nextConfig;
