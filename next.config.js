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
};

module.exports = nextConfig;
