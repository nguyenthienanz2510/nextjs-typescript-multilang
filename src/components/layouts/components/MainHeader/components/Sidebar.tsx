import styles from './sidebar.module.scss'

export default function Sidebar() {
  return (
    <div className='fixed top-0 right-0 bottom-0 w-[380px]'>
      <div className='flex h-20 items-center justify-end pr-4 sm:pr-10 xl:pr-16'>
        <div className='ml-auto flex h-7 w-7 items-center justify-center'>
          <label htmlFor='hamburgerIcon' className={styles.hamburgerIcon}>
            <input id='hamburgerIcon' type='checkbox' />
            <span />
            <span />
            <span />
          </label>
        </div>
      </div>
      <div className='h-full bg-color-bg-dark-primary'>
        
      </div>
    </div>
  )
}
