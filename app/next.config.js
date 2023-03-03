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
  },
  async redirects() {
    return [
      {
        source: '/register',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLScbL3gIgXPh_UDM8PWu6nFJJE3-x4mwON9Dc-dzMGuXiPSkQw/viewform',
        permanent: false
        
      }
    ]
  }
}

module.exports = nextConfig
