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
      <div className='h-[1000px]'>
        <p className='mt-4 text-color-primary'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet, iste ipsum iusto tempora maxime quidem
          adipisci voluptas corporis quam. Temporibus ut voluptates ea hic possimus accusamus rerum quia vero.
        </p>
        <p className='mt-4 text-color-secondary'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet, iste ipsum iusto tempora maxime quidem
          adipisci voluptas corporis quam. Temporibus ut voluptates ea hic possimus accusamus rerum quia vero.
        </p>
        <p className='mt-4 text-color-third'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet, iste ipsum iusto tempora maxime quidem
          adipisci voluptas corporis quam. Temporibus ut voluptates ea hic possimus accusamus rerum quia vero.
        </p>
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
