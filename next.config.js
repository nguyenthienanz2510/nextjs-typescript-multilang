/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const withTranslateRoutes = require('next-translate-routes/plugin')
const path = require('node:path');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'src/assets/styles')
    }

    return config
  }
}

module.exports = withTranslateRoutes(nextConfig)
