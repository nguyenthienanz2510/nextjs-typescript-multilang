// import the original type declarations
import 'react-i18next'
// import all namespaces (for the default language, only)
import { Resources as MyResources } from './src/i18n/resources'

declare module 'react-i18next' {
  // and extend them!
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Resources extends MyResources {}
}
