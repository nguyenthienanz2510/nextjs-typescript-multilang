import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from 'src/components/layouts/MainLayout'

export default function ContactPage() {
  const { t } = useTranslation(['common'])

  return (
    <MainLayout>
      <div className='mt-20'>
        <p>{t('common:contact')}</p>
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
