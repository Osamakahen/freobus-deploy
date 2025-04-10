/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static export for Vercel
  images: {
    unoptimized: true,  // Required for static export
    domains: ['images.unsplash.com']
  },
  // Remove experimental section as it's not needed
}

module.exports = nextConfig
