import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import CLITerminal from '../components/CLITerminal';

function MyApp({ Component, pageProps }) {
  const [isCLIOpen, setIsCLIOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Trigger on Ctrl + I (Windows) or Cmd + I (Mac)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'i') { 
        e.preventDefault();
        setIsCLIOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <CLITerminal isOpen={isCLIOpen} onClose={() => setIsCLIOpen(false)} />
    </>
  )
}

export default MyApp
