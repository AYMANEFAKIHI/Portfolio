import { createContext, useContext, useLayoutEffect, useState } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} })

export function ThemeProvider({ children }) {
  // Start at 'dark' to match the server-rendered markup exactly (avoids a
  // hydration mismatch). The inline script in _document.js already applied
  // the real saved theme class to <html> before first paint for CSS purposes;
  // this layout effect corrects the React state to match before the browser
  // paints, so nothing ever visibly flashes.
  const [theme, setTheme] = useState('dark')

  const applyTheme = (t) => {
    const html = document.documentElement
    const body = document.body
    if (t === 'light') {
      html.classList.add('light')
      html.classList.remove('dark')
      body.classList.add('light')
      body.classList.remove('dark')
    } else {
      html.classList.add('dark')
      html.classList.remove('light')
      body.classList.add('dark')
      body.classList.remove('light')
    }
  }

  useLayoutEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    if (saved !== theme) setTheme(saved)
    applyTheme(saved)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    applyTheme(next)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
