import LanguageSwitcher from '@src/components/common/LanguageSwitcher'
import ThemeSwitcher from '@src/components/common/SwitchThemeButton'
import { Link } from 'next-translate-routes'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function MainHeader() {
  return (
    <header className='fixed top-0 left-0 right-0 bg-color-bg-dark-primary/80 text-color-text-light-primary backdrop-blur-[8px] dark:bg-color-bg-dark-primary/70'>
      <div className='flex h-16 items-center justify-between px-4 sm:h-20 sm:px-10'>
        <div className='flex h-7 items-center'>
          <Link href={'/'}>
            <div className='flex text-18 sm:text-24'>
              <span className='text-gradient-primary border-bottom-primary font-bold'>Vietnamese</span>
              <span className='text-color-secondary'>History</span>
            </div>
          </Link>
          <div className='mx-20 hidden xl:block'>
            <Navbar />
          </div>
        </div>
        <div className='mr-12 flex items-center gap-5'>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <Sidebar />
      </div>
    </header>
  )
}
