/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')

const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE || 'en'

/**
 * @type {import("next/dist/server/config-shared").I18NConfig}
 */
const config = {
  // debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [DEFAULT_LOCALE, 'vi']
  },
  fallbackLng: {
    default: [DEFAULT_LOCALE]
  },
  localePath: resolve('./public/locales')
}

module.exports = config
