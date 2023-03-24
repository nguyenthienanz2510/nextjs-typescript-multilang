/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const withTranslateRoutes = require('next-translate-routes/plugin')

const nextConfig = {
  reactStrictMode: true,
  i18n
}

module.exports = withTranslateRoutes(nextConfig)
