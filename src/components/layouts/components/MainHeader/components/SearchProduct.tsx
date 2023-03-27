import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchProduct() {
  return (
    <form className='relative'>
      <input
        placeholder='Search...'
        type='text'
        className='focus:border-color block w-full border border-gray-300 bg-gray-100 py-4 px-3 text-14 text-color-text-dark sm:py-2 sm:px-3'
      />
      <button className='absolute top-0 right-0 h-full w-10'>
        <FontAwesomeIcon
          icon={faSearch}
          size={'lg'}
          className='text-color-text-dark transition-all hover:text-color-primary'
        />
      </button>
    </form>
  )
}
