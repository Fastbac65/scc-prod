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
  // async rewrites() {
  //   return [
  //     {
  //       source: '/shop/:path*',
  //       destination: 'https://www.squarespace.com/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
