import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import EducationTimeline from '../components/EducationTimeline'
import Experience from '../components/Experience'
import GithubActivity from '../components/GithubActivity'
import StatsBand from '../components/StatsBand'
import ProjectList from '../components/ProjectList'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Aymane Fakihi | Full Stack Developer &amp; Designer</title>
        <meta
          name="description"
          content="Aymane Fakihi — Full Stack Developer based in Rabat, Morocco. Specializing in Next.js, Node.js, and scalable web applications. Building platforms used by 5,000+ users."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#14b8a6] focus:text-black focus:rounded-lg focus:font-semibold">
        Skip to main content
      </a>

      <Hero />

      <StatsBand />

      <main id="main-content">
        <section id="about" aria-label="About Aymane Fakihi">
          <About />
        </section>

        <section id="education" aria-label="Education history">
          <EducationTimeline />
        </section>

        <Experience />

        <ProjectList />

        <GithubActivity />

        <section id="skills" aria-label="Technical skills">
          <Skills />
        </section>

        <section id="contact" aria-label="Contact form">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}
