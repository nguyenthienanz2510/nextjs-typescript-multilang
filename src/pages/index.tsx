import { useTranslation } from 'next-i18next'
import { Link } from 'next-translate-routes'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LanguageSwitcher from 'src/components/common/LanguageSwitcher'
import SwitchThemeButton from 'src/components/common/SwitchThemeButton'
import MainLayout from 'src/components/layouts/MainLayout/MainLayout'

export default function Home() {
  const { t } = useTranslation(['common'])

  return (
    <MainLayout>
      <div className='container'>
        <nav className='flex h-20 items-center justify-between dark:bg-color-bg-dark-secondary bg-color-bg-dark-primary text-color-primary dark:text-color-third'>
          <Link href='/'>Next.js Multi-Language</Link>
          <ul className='flex gap-5'>
            <li>
              <Link href='/'>{t('common:home')}</Link>
            </li>
            <li>
              <Link href='/about'>{t('common:about')}</Link>
            </li>
          </ul>
          <SwitchThemeButton />
          <LanguageSwitcher />
        </nav>
        <div className='mt-20'>
          <p>{t('common:home')}</p>
        </div>
      </div>
    </MainLayout>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
