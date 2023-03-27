import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkMode from 'src/hooks/useTheme'

interface ThemeSwitcherProps {
  size?: number
}

export default function ThemeSwitcher({ size = 20 }: ThemeSwitcherProps) {
  const [colorTheme, setTheme] = useDarkMode()
  const [darkMode, setDarkMode] = useState(colorTheme === 'dark' ? true : false)
  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme)
    setDarkMode(checked)
  }

  return <DarkModeSwitch id='react-toggle-dark-mode' checked={darkMode} onChange={toggleDarkMode} size={size} />
}
