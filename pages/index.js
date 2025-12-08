import { useState } from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import EducationTimeline from '../components/EducationTimeline'
import ProjectList from '../components/ProjectList'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Aymane Fakihi | Full Stack Developer &amp; Designer</title>
        <meta name="description" content="Aymane Fakihi, Next.js and Node.js specialist building scalable web solutions and applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero onAnimationComplete={() => setShowContent(true)} />
        
        <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <section id="about">
            <About />
          </section>
          <section id="education">
            <EducationTimeline />
          </section>
          <ProjectList />
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>

      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Footer />
      </div>
    </div>
  )
}
