import classNames from 'classnames'
import { useRouter } from 'next-translate-routes'
import Link from 'next/link'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import path from 'src/constant/path'

export default function Navbar() {
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
        name: t('common:language'),
        slug: path.faq
      }
    ],
    [t]
  )
  return (
    <ul className='flex text-color-text-light'>
      {dataNavbar.map((item) => (
        <li key={item.slug} className='mr-8'>
          <Link href={item.slug}>
            <span
              className={classNames('nav-link-hover-effect mr-12 text-12 uppercase', {
                'nav-link-hover-effect--active': item.slug == route
              })}
            >
              {item.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
