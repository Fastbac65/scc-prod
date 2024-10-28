/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'southcurlcurlslsc.com.au',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
