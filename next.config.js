/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
  // Server Actions are enabled by default in Next.js 14
  experimental: {}
}

module.exports = nextConfig
