import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Popover from '../Popover'

export default function LanguageSwitcher() {
  const router = useRouter()

  const { locales, locale: activeLocale } = router

  const otherLocales = locales?.filter((locale) => locale !== activeLocale && locale !== 'default')

  return (
    <span className='text-muted cursor-pointer'>
      <Popover
        popover={
          <div className='rounded border bg-color-bg-dark-primary p-2 text-color-text-light-primary'>
            {otherLocales?.map((locale) => {
              const { pathname, query, asPath } = router
              return (
                <span key={'locale-' + locale}>
                  <Link href={{ pathname, query }} as={asPath} locale={locale}>
                    {locale === 'en' ? 'English' : locale === 'vi' ? 'Tieng Viet' : null}
                  </Link>

                  {/* <a href={`/${locale}${asPath}`}>{locale === 'en' ? 'English' : locale === 'vi' ? 'Tieng Viet' : null}</a> */}
                </span>
              )
            })}
          </div>
        }
      >
        <div className='flex items-center justify-center gap-[6px] text-14 font-bold uppercase'>
          <span>{activeLocale}</span> <FontAwesomeIcon fontWeight={700} icon={faChevronDown} />
        </div>
      </Popover>
    </span>
  )
}
