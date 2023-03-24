import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function About() {
  const { t } = useTranslation(['common'])
  return (
    <div className='container'>
      <p>{t('common:about.About description')}</p>
      <p>{t('common:about.About title')}</p>
    </div>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}