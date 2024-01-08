/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
    async redirects() {
        return [
          {
            source: '/old-blog/:slug',
            destination: '/news/:slug', // Matched parameters can be used in the destination
            permanent: true,
          },
        ]
      },
    output: 'standalone',
    images: { unoptimized: false },
}




module.exports = withNextIntl(nextConfig);