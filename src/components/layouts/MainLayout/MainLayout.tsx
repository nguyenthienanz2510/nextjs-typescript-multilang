import React from 'react'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'

interface MainLayoutProps {
  children?: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col bg-white dark:bg-color-bg-dark-secondary'>
      <MainHeader />
      <main className='container mx-auto mt-16 flex-1 pt-12 pb-20 sm:mt-20'>{children}</main>
      <MainFooter />
    </div>
  )
}
