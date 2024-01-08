/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
    output: 'export',
    images: { unoptimized: false },
}


module.exports = withNextIntl(nextConfig);