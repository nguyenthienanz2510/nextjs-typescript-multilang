import path from '@src/constant/path'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { Link, useRouter } from 'next-translate-routes'
import React, { useMemo, useRef, useState } from 'react'
import styles from './sidebar.module.scss'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const sideBar = useRef<HTMLDivElement | null>(null)
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
      }
    ],
    [t]
  )

  const handleOpenSidebar = () => {
    setIsOpen(!isOpen)
    console.log(sideBar.current?.style)
    document.querySelectorAll<HTMLElement>('.sidebar__body ul li').forEach((item, index) => {
      if (item.style.animation.includes('sidebarItemAnimationShow')) {
        item.style.animation = `${styles.sidebarItemAnimationHide} ease forwards ${1 / index + 0.25}s`
      } else {
        item.style.animation = `${styles.sidebarItemAnimationShow} 0.5s ease forwards ${index / 10 + 0.25}s`
      }
    })
  }
  return (
    <React.Fragment>
      <div className={`${styles.sidebar} ${isOpen ? styles.active : ''} `} ref={sideBar}>
        <div className={`${styles.sidebar__top} flex h-20 items-center justify-end pr-4 sm:pr-10`}>
          <button className='ml-auto flex h-7 w-7 items-center justify-center'>
            <label htmlFor='hamburgerIcon' className={styles['hamburger__icon']}>
              <input id='hamburgerIcon' type='checkbox' onClick={handleOpenSidebar} />
              <span />
              <span />
              <span />
            </label>
          </button>
        </div>
        <div className={`${styles.sidebar__body} sidebar__body px-10 py-5`}>
          <ul>
            {dataNavbar.map((item) => (
              <li key={item.slug} className='py-5 opacity-0'>
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
        </div>
      </div>
      <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`}></div>
    </React.Fragment>
  )
}
