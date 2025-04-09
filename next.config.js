/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  // Enable static exports if needed
  // output: 'export',
  // Disable image optimization for static exports
  // images: {
  //   unoptimized: true,
  // },
  // Configure webpack to handle client-side features
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
  // Ensure proper handling of client components
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
