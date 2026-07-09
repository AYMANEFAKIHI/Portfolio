/** @type {import('next').NextConfig} */
const path = require('path')

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  webpack(config) {
    config.resolve.alias['@splinetool/react-spline'] = path.resolve(
      __dirname,
      'node_modules/@splinetool/react-spline/dist/react-spline.js'
    )
    return config
  },
}

module.exports = nextConfig
