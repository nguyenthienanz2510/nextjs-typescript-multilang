import classNames from 'classnames'
import { Link, useRouter } from 'next-translate-routes'
// import Link from 'next/link'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import path from 'src/constant/path'

export default function NavbarMobile() {
  const { t } = useTranslation(['common'])
  const { route } = useRouter()
  const dataNavbar = useMemo(
    () => [
      {
        name: t('common:home'),
        slug: path.home
      },
      {
        name: t('common:about'),
        slug: path.about
      },
      {
        name: t('common:contact'),
        slug: path.contact
      },
      {
        name: t('common:vietnamese'),
        slug: path.faq
      }
    ],
    [t]
  )
  return (
    <div className='text-color-text-light'>
      <ul>
        {dataNavbar.map((item) => (
          <li key={item.slug}>
            <Link href={item.slug}>
              <span
                className={classNames('border-b-color-black container mx-auto mr-12 block border-b-2 py-4 uppercase', {
                  'text-color-primary': item.slug == route
                })}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
