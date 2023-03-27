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
        <div className='mt-10'>
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
