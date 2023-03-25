import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'next-translate-routes'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from 'src/components/common/LanguageSwitcher'
import SwitchThemeButton from 'src/components/common/SwitchThemeButton'
import path from 'src/constant/path'
import SearchProduct from '../SearchProduct'
import NavbarMobile from './NavbarMobile'

export default function MainHeaderMobile() {
  const { t } = useTranslation(['common'])
  const [isOpenNavBar, setIsOpenNavBar] = useState(false)
  const [isUserOpen, setIsUserOpen] = useState(false)

  const handleOpenNavBar = () => {
    setIsOpenNavBar(!isOpenNavBar)
  }

  return (
    <header
      className={`top-0 left-0 right-0 z-50 bg-color-bg-dark-primary sm:hidden ${isOpenNavBar ? 'fixed' : 'relative'}`}
    >
      <div className='container mx-auto flex h-20 items-center justify-between'>
        <button className='button__hover--primary h-10 w-10' onClick={handleOpenNavBar}>
          <FontAwesomeIcon icon={faBars} size={'xl'} color={'#feffff'} />
        </button>
        <div>
          <Link href={path.home}>
            <img src='https://gerz.vercel.app/assets/logo-main-a01b92f2.svg' className='h-16' alt='logo' />
          </Link>
        </div>
        <Link href={path.login}>
          <FontAwesomeIcon icon={faCartShopping} size={'xl'} color={'#feffff'} />
        </Link>
      </div>
      <div
        className={`absolute top-20 h-[calc(100vh_-_80px)] overflow-y-scroll bg-color-bg-dark-secondary transition-all ${
          isOpenNavBar ? 'left-0 right-0' : '-left-full right-full'
        }`}
      >
        <div className='border-color-black flex items-center border-b-2 py-4 text-color-text-light'>
          <div className='container mx-auto flex justify-between'>
            <div className='flex items-center'>
              <Link href={path.login}>{t('common:login')}/</Link>
              <Link href={path.register}>{t('common:register')}</Link>
            </div>
            <SwitchThemeButton size={24} />
          </div>
        </div>
        <div className='border-color-black flex items-center border-b-2 py-4 text-color-text-light'>
          <div className='container mx-auto flex justify-between'>
            <span>{t('common:language')}</span>
            <LanguageSwitcher />
          </div>
        </div>

        <NavbarMobile />
        <div className='border-t-2 border-color-bg-dark-secondary'>
          <SearchProduct />
        </div>
      </div>
    </header>
  )
}
