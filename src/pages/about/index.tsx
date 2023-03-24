import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Link } from 'next-translate-routes'
import LanguageSwitcher from '../../components/common/LanguageSwitcher'

export default function About() {
  const { t } = useTranslation(['common'])
  return (
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
      <p>{t('common:about')}</p>
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
