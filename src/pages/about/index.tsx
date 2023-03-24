import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function About() {
  const { t } = useTranslation('')
  return (
    <div className='container'>
      <p>{t('header.About')}</p>
      <p>{t('header.About')}</p>
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