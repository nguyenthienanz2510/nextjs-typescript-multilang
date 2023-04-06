import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Link } from 'next-translate-routes'
import React from 'react'
import styles from './login.module.scss'


export default function LoginPage() {
  const { t } = useTranslation(['common'])

  return (
    <React.Fragment>
      <header className='container fixed top-0 left-0 right-0 bg-transparent py-6'>
        <div className='flex h-7 items-center'>
          <Link href={'/'}>
            <div className='flex text-18 sm:text-24'>
              <span className='text-gradient-primary border-bottom-primary font-bold'>Vietnamese</span>
              <span className='text-color-primary'>History</span>
            </div>
          </Link>
        </div>
      </header>
      <div className={`${styles.container} container h-[600px]`}>

      </div>
    </React.Fragment>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
