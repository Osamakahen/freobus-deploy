/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Remove experimental.serverActions as it's now enabled by default
  experimental: {
    // Add any other experimental features you need here
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Enable static exports if needed
  // output: 'export',
  // Disable image optimization for static exports
  // images: {
  //   unoptimized: true,
  // },
  // Optimize development performance
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
