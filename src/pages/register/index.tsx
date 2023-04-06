import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from 'src/components/layouts/MainLayout/MainLayout'

export default function RegisterPage() {
  const { t } = useTranslation(['common'])

  return (
    <MainLayout>
      <div className=''>
        <p>{t('common:register')}</p>
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
