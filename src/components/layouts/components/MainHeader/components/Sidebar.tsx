import path from '@src/constant/path'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { Link, useRouter } from 'next-translate-routes'
import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './sidebar.module.scss'
import useWindowSize from '@src/hooks/useWindowSize'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const sideBarBody = useRef<HTMLDivElement | null>(null)
  const sideBarBg = useRef<HTMLDivElement | null>(null)
  const overlayElement = useRef<HTMLDivElement | null>(null)
  const { windowWidth, windowHeight } = useWindowSize()
  const { t } = useTranslation(['common'])
  const { route } = useRouter()

  const sidebar = useMemo(() => {
    return {
      open: () => ({
        clipPath:
          (windowWidth || 0) >= 640
            ? `circle(${(windowHeight || 0) * 2 + 200}px at 366px 40px)`
            : `circle(${(windowHeight || 0) * 2 + 200}px at ${(windowWidth || 0) - 30}px 32px)`,
        transition: {
          type: 'spring',
          stiffness: 20,
          restDelta: 2
        }
      }),
      closed: {
        clipPath:
          (windowWidth || 0) >= 640 ? `circle(0px at 366px 40px)` : `circle(0px at ${(windowWidth || 0) - 30}px 32px)`,
        transition: {
          delay: 0.5,
          type: 'spring',
          stiffness: 400,
          damping: 40
        }
      }
    }
  }, [windowWidth, windowHeight])

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
      // sideBarBg.current && (sideBarBg.current.style.background = 'black')
      overlayElement.current && (overlayElement.current.style.display = 'block')
    } else {
      setIsOpen(!isOpen)
      // sideBarBg.current && (sideBarBg.current.style.background = 'transparent')
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
      <div className={`${styles.sidebar__top} h-16 pr-4 sm:h-20 sm:pr-10`}>
        <button className='ml-auto flex h-6 w-7 items-center justify-center'>
          <label htmlFor='hamburgerIcon' className={styles['hamburger__icon']}>
            <input id='hamburgerIcon' type='checkbox' onClick={handleSidebarSwitcher} />
            <span />
            <span />
            <span />
          </label>
        </button>
      </div>

      <div
        className={`${styles.sidebar__body} ${
          isOpen ? styles.active : ''
        } w-full px-4 pt-16 sm:w-[420px] sm:px-10 sm:pt-20`}
        ref={sideBarBody}
      >
        <ul>
          {dataNavbar.map((item) => (
            <motion.li key={item.slug} className='opacity-0'>
              <Link href={item.slug}>
                <motion.span
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className={classNames('inline-block py-4 text-14 font-semibold uppercase', {
                    'text-color-primary': item.slug == route
                  })}
                >
                  {item.name}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        className={`${styles.sidebar__bg} w-full sm:w-[420px]`}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
        ref={sideBarBg}
      />
      <div className={styles.overlay} ref={overlayElement}></div>
    </React.Fragment>
  )
}
