/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = nextConfig
