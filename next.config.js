/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'southcurlcurlslsc.org',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
