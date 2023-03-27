import LanguageSwitcher from '@src/components/common/LanguageSwitcher'
import ThemeSwitcher from '@src/components/common/SwitchThemeButton'
import { Link } from 'next-translate-routes'
import Sidebar from './components/Sidebar'

export default function MainHeader() {
  return (
    <header className='bg-color-bg-dark-primary text-color-text-light-primary'>
      <div className='flex h-20 items-center justify-between px-4 sm:px-10'>
        <div className='flex h-7 items-center'>
          <Link href={'/'}>
            <div className='text-20 sm:text-24'>
              <span className='box-content border-b-[6px] border-color-primary font-bold'>Vietnamese</span>History
            </div>
          </Link>
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
