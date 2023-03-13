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
        destination: 'https://forms.gle/jnfihb3Jz2Q17xUB8',
        permanent: false
        
      }
    ]
  }
}

module.exports = nextConfig
