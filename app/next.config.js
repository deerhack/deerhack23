/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  images: {
    domains: [
      'cdn-icons-png.flaticon.com'
    ]
  }
}

module.exports = nextConfig
