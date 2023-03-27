import styles from './sidebar.module.scss'

export default function Sidebar() {
  return (
    <div className={`${styles.sidebar} w-full sm:w-[440px]`}>
      <div className={`${styles.sidebar__top} flex h-20 items-center justify-end pr-4 sm:pr-10`}>
        <div className='ml-auto flex h-7 w-7 items-center justify-center'>
          <label htmlFor='hamburgerIcon' className={styles['hamburger__icon']}>
            <input id='hamburgerIcon' type='checkbox' />
            <span />
            <span />
            <span />
          </label>
        </div>
      </div>
      <div className={`${styles.sidebar__top} h-full bg-black px-10 py-5`}>content here</div>
    </div>
  )
}
