import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'next-translate-routes'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from 'src/components/common/LanguageSwitcher'
import SwitchThemeButton from 'src/components/common/SwitchThemeButton'
import Navbar from './Navbar'
import SearchProduct from './SearchProduct'

export default function MainHeader() {
  const [isFixedHeader, setIsFixedHeader] = useState(false)
  const HEADER_HEIGHT = 180
  const { t } = useTranslation(['common'])

  useEffect(() => {
    window.scrollY > HEADER_HEIGHT ? setIsFixedHeader(true) : setIsFixedHeader(false)
  }, [])

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      window.scrollY > HEADER_HEIGHT ? setIsFixedHeader(true) : setIsFixedHeader(false)
    }
  }

  return (
    <header className='hidden bg-color-bg-dark-primary sm:block'>
      <div className='container mx-auto flex h-32 items-center justify-between'>
        <div>
          <Link href={'/'}>
            <img src='https://gerz.vercel.app/assets/logo-main-a01b92f2.svg' className='h-20' alt='logo' />
          </Link>
        </div>

        <div className='flex items-center text-color-text-light'>
          <div className='ml-5 flex'>
            <SwitchThemeButton />
            <div className='mx-6 flex items-center text-color-text-dark'>
              <LanguageSwitcher />
            </div>
            <div className='flex items-center gap-2'>
              <Link href='/login'>
                <FontAwesomeIcon icon={faRightToBracket} size={'lg'} color={'#feffff'} />
                <span className='ml-2'>{t('common:login')}</span>
              </Link>
              <span className='h-4 border-r border-gray-400'></span>
              <Link href='/register'>{t('common:register')}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-t-color-bg-dark-secondary'>
        <div className='container mx-auto flex h-16 items-center justify-between'>
          <Navbar />
          <SearchProduct />
        </div>
      </div>
      <div
        className={`fixed ${
          isFixedHeader ? 'top-0' : 'top-[-64px]'
        } left-0 right-0 z-50 border-t-2 border-t-color-bg-dark-secondary bg-[rgba(29,30,35,0.92)] backdrop-blur-md duration-500`}
      >
        <div className='container mx-auto flex h-16 items-center justify-between'>
          <Navbar />
          <SearchProduct />
        </div>
      </div>
    </header>
  )
}
