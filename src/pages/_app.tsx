import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { withTranslateRoutes } from 'next-translate-routes'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withTranslateRoutes(appWithTranslation(App))
