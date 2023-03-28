import LanguageSwitcher from '@src/components/common/LanguageSwitcher'
import ThemeSwitcher from '@src/components/common/SwitchThemeButton'
import { Link } from 'next-translate-routes'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function MainHeader() {
  return (
    <header className='bg-color-bg-dark-primary text-color-text-light-primary'>
      <div className='flex h-16 items-center justify-between px-4 sm:h-20 sm:px-10'>
        <div className='flex h-7 items-center'>
          <Link href={'/'}>
            <div className='text-18 sm:text-24'>
              <span className='box-content border-b-4 border-color-primary font-bold sm:border-b-[6px]'>
                Vietnamese
              </span>
              History
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
