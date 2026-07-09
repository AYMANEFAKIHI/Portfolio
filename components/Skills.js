import { useState } from 'react'
import { motion } from 'framer-motion'
import CertificationsGrid from './CertificationsGrid'
import { useLanguage } from '../context/LanguageContext'

const skillCategories = {
  'Frontend': [
    { name: 'JavaScript', icon: '⚡' }, { name: 'React', icon: '⚛️' }, { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '🔷' }, { name: 'Tailwind CSS', icon: '🎨' }, { name: 'HTML5', icon: '🌐' },
  ],
  'Backend': [
    { name: 'Node.js', icon: '🟢' }, { name: 'Python', icon: '🐍' }, { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' }, { name: 'REST APIs', icon: '🔗' }, { name: 'GraphQL', icon: '◈' },
  ],
  'DevOps & Cloud': [
    { name: 'Git', icon: '📦' }, { name: 'Docker', icon: '🐳' }, { name: 'AWS', icon: '☁️' },
    { name: 'Firebase', icon: '🔥' }, { name: 'Vercel', icon: '△' }, { name: 'Linux', icon: '🐧' },
  ],
  'Testing & Tools': [
    { name: 'Jest', icon: '🃏' }, { name: 'Cypress', icon: '🌲' }, { name: 'Figma', icon: '🎭' },
    { name: 'Adobe XD', icon: '🎨' }, { name: 'Redis', icon: '🔴' }, { name: 'Socket.io', icon: '🔌' },
  ],
}

const certifications = [
  { name: "CS50x: Introduction to Computer Science", issuer: "Harvard University", date: "April 2026", file: "https://cs50.harvard.edu/certificates/a4e1a9b0-9489-415e-a8a2-ffddafc35320", isExternal: true, tier: "featured" },
  { name: "Introduction to Software Development", issuer: "Coursera — Amazon", date: "April 2026", file: "https://coursera.org/verify/QLYP7R491K8T", isExternal: true, tier: "featured" },
  { name: "AWS AI Practitioner Challenge", issuer: "Udacity", date: "March 2026", file: "https://www.udacity.com/certificate/e/6e465114-2c35-11f1-b9ee", isExternal: true, tier: "featured" },
  { name: "AWS Cloud Practitioner Essentials (Français)", issuer: "AWS Training & Certification", date: "Jul. 2026", file: "https://aws.amazon.com/certification/certified-cloud-practitioner/", isExternal: true, tier: "featured", logo: "/aws_logo.png" },
  { name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations", issuer: "Oracle University", date: "Mar. 2026", file: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.pdf", tier: "featured" },
  { name: "Oracle Cloud Infrastructure 2025 Certified Foundations", issuer: "Oracle University", date: "Mar. 2026", file: "ORACLE.pdf", tier: "featured" },
  { name: "Oracle Data Platform 2025 Certified Foundations", issuer: "Oracle University", date: "Mar. 2026", file: "Oracle Data Platform 2025 Certified Foundations Associate.pdf", tier: "featured" },
  { name: "Data Science Essentials with Python", issuer: "Cisco Networking Academy", date: "Mar. 2026", file: "Data Science Essentials with Python.pdf", tier: "featured" },
  { name: "Software Engineering: Design and Project Management", issuer: "HKUST", date: "Mar. 2026", file: "Software Engineering Software Design and Project.pdf", tier: "featured" },
  { name: "Using Python to Access Web Data", issuer: "University of Michigan", date: "Mar. 2026", file: "Using Python to Access Web Data.pdf", tier: "other" },
  { name: "Intro à la programmation orientée objet (C++)", issuer: "EPFL", date: "Nov. 2025", file: "Coursera C++.pdf", tier: "other" },
  { name: "JavaScript, jQuery et JSON", issuer: "University of Michigan", date: "Nov. 2025", file: "Coursera JavaScript, jQuery, and JSON.pdf", tier: "other" },
  { name: "Introduction to Career Skills in Data Analytics", issuer: "LinkedIn", date: "Jul. 2025", file: "Introduction to Career Skills in Data Analytics.pdf", tier: "other" },
  { name: "Career Preparation Workshop", issuer: "Cisco", date: "Apr. 2025", file: "Career Preparation Workshop.pdf", tier: "other" },
  { name: "English for IT 2", issuer: "Cisco", date: "Apr. 2025", file: "English for IT 2.pdf", tier: "other" },
  { name: "CSS Essentials", issuer: "Cisco", date: "Mar. 2025", file: "CSS Essentials.pdf", tier: "other" },
  { name: "English for IT 1", issuer: "Cisco", date: "Mar. 2025", file: "English for IT 1.pdf", tier: "other" },
  { name: "Ethical Hacker", issuer: "Cisco", date: "Mar. 2025", file: "Ethical Hacker.pdf", tier: "other" },
  { name: "HTML Essentials", issuer: "Cisco", date: "Mar. 2025", file: "HTML Essentials.pdf", tier: "other" },
  { name: "JavaScript Essentials 1", issuer: "Cisco", date: "Mar. 2025", file: "JavaScript Essentials 1.pdf", tier: "other" },
  { name: "JavaScript Essentials 2", issuer: "Cisco", date: "Mar. 2025", file: "JavaScript Essentials 2.pdf", tier: "other" },
  { name: "Networking Basics", issuer: "Cisco", date: "Mar. 2025", file: "Networking Basics.pdf", tier: "other" },
  { name: "Python Essentials 1", issuer: "Cisco", date: "Mar. 2025", file: "Python 1.pdf", tier: "other" },
  { name: "Python Essentials 2", issuer: "Cisco", date: "Mar. 2025", file: "Python 2.pdf", tier: "other" },
  { name: "Introduction to Modern AI", issuer: "Cisco", date: "Feb. 2025", file: "Introduction to Modern AI.pdf", tier: "other" },
  { name: "Developing Your Emotional Intelligence", issuer: "LinkedIn", date: "", file: "Developing Your Emotional Intelligence.pdf", tier: "other" },
  { name: "What Is Generative AI?", issuer: "LinkedIn", date: "", file: "What Is Generative AI.pdf", tier: "other" },
]

const Skills = () => {
  const { t } = useLanguage()
  const [showAllCerts, setShowAllCerts] = useState(false)
  const featuredCerts = certifications.filter(c => c.tier === 'featured')
  const otherCerts = certifications.filter(c => c.tier === 'other')
  const displayedCerts = showAllCerts ? certifications : featuredCerts

  return (
    <section className="section-padding" id="skills" style={{ background: 'var(--bg-primary)' }} aria-label="Skills and technologies">
      <div className="container-max">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          {t('skills_title')}
        </motion.h2>
        <motion.p className="text-center mb-16 text-lg" style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
          {t('skills_subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {Object.entries(skillCategories).map(([category, skills], catIdx) => (
            <motion.div key={category}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.15, duration: 0.7 }} viewport={{ once: true }}
              className="p-6 rounded-2xl border transition-colors duration-300"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <h3 className="text-sm font-semibold mb-5 uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border cursor-default transition-all duration-200"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (catIdx * 0.1) + (i * 0.04), duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  >
                    <span className="text-xs" role="img" aria-hidden="true">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              {t('skills_certs')}
              <span className="ml-3 text-sm font-normal" style={{ color: 'var(--text-muted)' }}>({certifications.length} total)</span>
            </h3>
          </div>
          <CertificationsGrid certifications={displayedCerts} />
          <div className="text-center mt-8">
            <motion.button
              onClick={() => setShowAllCerts(p => !p)}
              className="px-6 py-3 rounded-lg border text-sm font-medium transition-all duration-300"
              style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {showAllCerts ? t('skills_show_less') : t('skills_show_more', { n: otherCerts.length })}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
