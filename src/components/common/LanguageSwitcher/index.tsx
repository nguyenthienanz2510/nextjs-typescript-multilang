import { Link } from 'next-translate-routes'
import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()

  const { locales, locale: activeLocale } = router

  const otherLocales = locales?.filter((locale) => locale !== activeLocale && locale !== 'default')

  return (
    <span className='text-muted cursor-pointer'>
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router
        return (
          <span key={'locale-' + locale}>
            {/* <Link href={{ pathname, query }} as={asPath} locale={locale}>
              {locale === 'en' ? 'English' : locale === 'vi' ? 'Tieng Viet' : null}
            </Link> */}
            <a href={`/${locale}${asPath}`}>{locale === 'en' ? 'English' : locale === 'vi' ? 'Tieng Viet' : null}</a>
          </span>
        )
      })}
    </span>
  )
}
