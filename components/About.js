import { motion } from 'framer-motion'
import LocationGreeting from './LocationGreeting'
import { About3D } from './About3D'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/aymane_fakihi.pdf'
    link.download = 'aymane_fakihi.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="section-padding" id="about" style={{ background: 'var(--bg-primary)' }} aria-label="About me">
      <div className="container-max">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('about_title')}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('about_p1')}
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('about_p2').split('EMSI Rabat').map((part, i, arr) =>
                i < arr.length - 1
                  ? <span key={i}>{part}<strong style={{ color: 'var(--text-primary)' }}>EMSI Rabat</strong></span>
                  : <span key={i}>{part}</span>
              )}
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('about_p3')}
            </p>

            {/* Available badge */}
            <div
              className="flex items-center gap-3 p-4 rounded-xl border"
              style={{ background: 'rgba(20,184,166,0.08)', borderColor: 'rgba(20,184,166,0.25)' }}
            >
              <span className="w-3 h-3 rounded-full bg-[#14b8a6] animate-pulse flex-shrink-0" />
              <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                {t('about_available')}
              </p>
            </div>

            <LocationGreeting />

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                aria-label="Download resume PDF"
              >
                {t('about_download')}
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Scroll to contact section"
              >
                {t('about_contact')}
              </motion.button>
            </div>
          </div>

          <motion.div
            className="relative mx-auto"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <About3D />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
