/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  // Remove experimental flag as it's no longer needed
  experimental: {
    // Server actions are enabled by default in latest Next.js
  }
}

module.exports = nextConfig
