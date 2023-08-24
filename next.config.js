/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sissamx.com.mx',
        pathname: '/hi-sports/images/**'
      }
    ],
    unoptimized: true,
  }
}

module.exports = nextConfig
