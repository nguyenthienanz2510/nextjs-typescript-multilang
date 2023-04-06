import LanguageSwitcher from '@src/components/common/LanguageSwitcher'
import ThemeSwitcher from '@src/components/common/SwitchThemeButton'
import classNames from 'classnames'
import { Link } from 'next-translate-routes'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function MainHeader() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={classNames(
        'fixed top-0 left-0 right-0 text-color-text-light-primary backdrop-blur-[4px] transition-all',
        {
          'bg-color-bg-dark-primary': !(scrollY > 80),
          'bg-color-bg-dark-primary/80 dark:bg-color-bg-dark-primary/60': scrollY > 80
        }
      )}
    >
      <div className='flex h-16 items-center justify-between px-4 sm:h-20 sm:px-10'>
        <div className='flex h-7 items-center'>
          <Link href={'/'}>
            <div className='flex text-18 sm:text-24'>
              <span className='text-gradient-primary border-bottom-primary font-bold'>Vietnamese</span>
              <span className='text-color-primary'>History</span>
            </div>
          </Link>
          <div className='mx-20 hidden xl:block'>
            <Navbar />
          </div>
        </div>
        <div className='mr-12 hidden items-center gap-2 sm:flex'>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <Sidebar />
      </div>
    </header>
  )
}
