/** @type {import('next').NextConfig} */
const path = require('path');

console.log('path',path.join(__dirname, 'styles'))

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    // TODO config use global import instead `@use` in every file
  },
}

module.exports = nextConfig
