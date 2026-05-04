import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import CLITerminal from '../components/CLITerminal'
import { ThemeProvider } from '../context/ThemeContext'
import { LanguageProvider } from '../context/LanguageContext'

function MyApp({ Component, pageProps }) {
  const [isCLIOpen, setIsCLIOpen] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'i') {
        e.preventDefault()
        setIsCLIOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <CLITerminal isOpen={isCLIOpen} onClose={() => setIsCLIOpen(false)} />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default MyApp
