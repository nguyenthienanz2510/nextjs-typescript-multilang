import { useTranslation } from 'next-i18next'
import { Link } from 'next-translate-routes'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LanguageSwitcher from '../components/common/LanguageSwitcher'

export default function Home() {
  const { t } = useTranslation(['common'])
  return (
    <>
      <div className='container'>
        <nav className='flex h-20 items-center justify-between'>
          <Link href='/'>Next.js Multi-Language</Link>
          <ul className='flex gap-5'>
            <li>
              <Link href='/'>{t('common:home')}</Link>
            </li>
            <li>
              <Link href='/about'>{t('common:about')}</Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </nav>
        <div className='mt-20'>
          <p>{t('common:home')}</p>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
