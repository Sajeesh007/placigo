/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports =withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    disable: false
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
})
