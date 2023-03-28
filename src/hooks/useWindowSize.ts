import { useEffect, useState } from 'react'

interface windowSize {
  windowWidth: number | undefined
  windowHeight: number | undefined
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<windowSize>({
    windowWidth: undefined,
    windowHeight: undefined
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
