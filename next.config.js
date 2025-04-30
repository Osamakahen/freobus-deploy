/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['*'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
