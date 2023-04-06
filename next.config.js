/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const i18nConfig = require('./next-i18next.config')
const withTranslateRoutes = require('next-translate-routes/plugin')

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  i18n: i18nConfig.i18n
}

module.exports = withTranslateRoutes(nextConfig)
