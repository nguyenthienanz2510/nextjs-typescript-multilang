import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from 'src/components/layouts/MainLayout/MainLayout'

export default function HomePage() {
  const { t } = useTranslation(['common'])

  return (
    <MainLayout>
      <div>
        <p>{t('common:home')}</p>
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
