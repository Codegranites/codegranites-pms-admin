const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      { hostname: 'lh3.googleusercontent.com' }
    ]
  },
}




module.exports = nextConfig;
