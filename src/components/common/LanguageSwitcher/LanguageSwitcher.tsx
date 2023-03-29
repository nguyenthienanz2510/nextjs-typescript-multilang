import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SelectBox from '../SelectBox'

export default function LanguageSwitcher() {
  const router = useRouter()

  const { locales, locale: activeLocale } = router

  const otherLocales = locales?.filter((locale) => locale !== activeLocale && locale !== 'default')

  return (
    <span className='cursor-pointer'>
      <SelectBox
        selectBox={
          <ul className='rounded-lg bg-color-bg-dark-third p-2 text-color-text-light-primary'>
            {locales?.map((locale) => {
              const { pathname, query, asPath } = router
              return (
                <li
                  key={'locale-' + locale}
                  className='flex w-full justify-between gap-5 rounded-lg hover:bg-color-bg-dark-hover'
                >
                  <Link href={{ pathname, query }} as={asPath} locale={locale}>
                    <span
                      className={classNames('flex w-full min-w-[200px] justify-between py-2 px-5 leading-5', {
                        'text-color-primary': locale === activeLocale,
                        'text-color-text-light-primary': locale !== activeLocale
                      })}
                    >
                      <span>{locale === 'en' ? 'English' : locale === 'vi' ? 'Vietnamese' : null}</span>
                      {locale === activeLocale && <FontAwesomeIcon className='text-color-success' icon={faCheck} />}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        }
      >
        <button className='flex items-center justify-center rounded-lg p-2 text-14 font-bold uppercase leading-4 hover:bg-color-bg-dark-hover'>
          <span>{activeLocale}</span> <FontAwesomeIcon className='ml-[6px]' fontWeight={700} icon={faChevronDown} />
        </button>
      </SelectBox>
    </span>
  )
}
