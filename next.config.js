/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV == 'production' ? 'standalone' : undefined,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
