import path from '@src/constant/path'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { Link, useRouter } from 'next-translate-routes'
import React, { useMemo, useRef, useState } from 'react'
import styles from './sidebar.module.scss'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const sideBarBody = useRef<HTMLDivElement | null>(null)
  const overlayElement = useRef<HTMLDivElement | null>(null)
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

  const handleSidebarSwitcher = () => {
    if (!isOpen) {
      setIsOpen(!isOpen)
      overlayElement.current && (overlayElement.current.style.display = 'block')
    } else {
      setIsOpen(!isOpen)
      overlayElement.current && (overlayElement.current.style.display = 'none')
    }
    sideBarBody.current?.children[0].childNodes.forEach((item, index) => {
      if ((item as HTMLElement).style.animation.includes('sidebarAnimationShow')) {
        ;(item as HTMLElement).style.animation = `${styles.sidebarAnimationHide} ease forwards ${1 / index + 0.25}s`
      } else {
        ;(item as HTMLElement).style.animation = `${styles.sidebarAnimationShow} 0.5s ease forwards ${
          index / 10 + 0.25
        }s`
      }
    })
  }
  return (
    <React.Fragment>
      <div className={`${styles.sidebar__top} pr-4 sm:pr-10`}>
        <button className='ml-auto flex h-6 w-7 items-center justify-center'>
          <label htmlFor='hamburgerIcon' className={styles['hamburger__icon']}>
            <input id='hamburgerIcon' type='checkbox' onClick={handleSidebarSwitcher} />
            <span />
            <span />
            <span />
          </label>
        </button>
      </div>
      <div className={`${styles.sidebar__body} ${isOpen ? styles.active : ''} w-full sm:w-[420px]`} ref={sideBarBody}>
        <ul>
          {dataNavbar.map((item) => (
            <li key={item.slug} className='py-5 opacity-0'>
              <Link href={item.slug}>
                <span
                  className={classNames('nav-link-hover-effect text-14 uppercase', {
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
      <div className={styles.overlay} ref={overlayElement}></div>
    </React.Fragment>
  )
}
