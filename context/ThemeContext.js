import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    // Apply to BOTH html and body so all CSS vars cascade correctly
    applyTheme(saved)
    setMounted(true)
  }, [])

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

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    applyTheme(next)
  }

  // Prevent flash — render children only after theme is read from localStorage
  if (!mounted) return <div style={{ visibility: 'hidden' }}>{children}</div>

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
