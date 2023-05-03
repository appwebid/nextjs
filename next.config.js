/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV == 'production' ? 'standalone' : undefined,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: process?.env?.NEXT_PUBLIC_IMAGES_DOMAIN?.split(` `) || [],
    minimumCacheTTL: 7,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ],
  },
};

module.exports = nextConfig;
