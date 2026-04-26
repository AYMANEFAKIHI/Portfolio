import { useState } from 'react'
import { motion } from 'framer-motion'
import CertificationsGrid from './CertificationsGrid'

const skillCategories = {
  'Frontend': [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'HTML5', icon: '🌐' },
  ],
  'Backend': [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'GraphQL', icon: '◈' },
  ],
  'DevOps & Cloud': [
    { name: 'Git', icon: '📦' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Vercel', icon: '△' },
    { name: 'Linux', icon: '🐧' },
  ],
  'Testing & Tools': [
    { name: 'Jest', icon: '🃏' },
    { name: 'Cypress', icon: '🌲' },
    { name: 'Figma', icon: '🎭' },
    { name: 'Adobe XD', icon: '🎨' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Socket.io', icon: '🔌' },
  ],
}

const certifications = [
  {
    name: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    date: "April 2026",
    logo: "/harvard.png",
    file: "https://cs50.harvard.edu/certificates/a4e1a9b0-9489-415e-a8a2-ffddafc35320",
    isExternal: true,
    tier: "featured",
  },
  {
    name: "Introduction to Software Development",
    issuer: "Coursera — Amazon",
    date: "April 2026",
    logo: "/coursera.png",
    file: "https://coursera.org/verify/QLYP7R491K8T",
    isExternal: true,
    tier: "featured",
  },
  {
    name: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    date: "March 2026",
    logo: "/udacity.png",
    file: "https://www.udacity.com/certificate/e/6e465114-2c35-11f1-b9ee",
    isExternal: true,
    tier: "featured",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations",
    issuer: "Oracle University",
    date: "Mar. 2026",
    logo: "/oracle.png",
    file: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.pdf",
    tier: "featured",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations",
    issuer: "Oracle University",
    date: "Mar. 2026",
    logo: "/oracle.png",
    file: "ORACLE.pdf",
    tier: "featured",
  },
  {
    name: "Oracle Data Platform 2025 Certified Foundations",
    issuer: "Oracle University",
    date: "Mar. 2026",
    logo: "/oracle.png",
    file: "Oracle Data Platform 2025 Certified Foundations Associate.pdf",
    tier: "featured",
  },
  {
    name: "Data Science Essentials with Python",
    issuer: "Cisco Networking Academy",
    date: "Mar. 2026",
    logo: "/cisco_logo.png",
    file: "Data Science Essentials with Python.pdf",
    tier: "featured",
  },
  {
    name: "Software Engineering: Design and Project Management",
    issuer: "HKUST",
    date: "Mar. 2026",
    logo: "/conception.png",
    file: "Software Engineering Software Design and Project.pdf",
    tier: "featured",
  },
  // Secondary certs (shown when expanded)
  { name: "Using Python to Access Web Data", issuer: "University of Michigan", date: "Mar. 2026", logo: "/university_of_michigan_logo.webp", file: "Using Python to Access Web Data.pdf", tier: "other" },
  { name: "Intro à la programmation orientée objet (C++)", issuer: "EPFL", date: "Nov. 2025", logo: "/EPFL.jpg", file: "Coursera C++.pdf", tier: "other" },
  { name: "JavaScript, jQuery et JSON", issuer: "University of Michigan", date: "Nov. 2025", logo: "/university_of_michigan_logo.webp", file: "Coursera JavaScript, jQuery, and JSON.pdf", tier: "other" },
  { name: "Introduction to Career Skills in Data Analytics", issuer: "LinkedIn", date: "Jul. 2025", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", file: "Introduction to Career Skills in Data Analytics.pdf", tier: "other" },
  { name: "Career Preparation Workshop", issuer: "Cisco", date: "Apr. 2025", logo: "/Cisco.jpg", file: "Career Preparation Workshop.pdf", tier: "other" },
  { name: "English for IT 2", issuer: "Cisco", date: "Apr. 2025", logo: "/Cisco.jpg", file: "English for IT 2.pdf", tier: "other" },
  { name: "CSS Essentials", issuer: "Cisco", date: "Mar. 2025", logo: "/Cisco.jpg", file: "CSS Essentials.pdf", tier: "other" },
  { name: "English for IT 1", issuer: "Cisco", date: "Mar. 2025", logo: "/Cisco.jpg", file: "English for IT 1.pdf", tier: "other" },
  { name: "Ethical Hacker", issuer: "Cisco", date: "Mar. 2025", logo: "/Cisco.jpg", file: "Ethical Hacker.pdf", tier: "other" },
  { name: "HTML Essentials", issuer: "Cisco", date: "Mar. 2025", logo: "/Cisco.jpg", file: "HTML Essentials.pdf", tier: "other" },
  { name: "JavaScript Essentials 1", issuer: "Cisco", date: "Mar. 2025", logo: "/Cisco.jpg", file: "JavaScript Essentials 1.pdf", tier: "other" },
  { name: "JavaScript Essentials 2", issuer: "Cisco", date: "Mar. 2025", logo: "/Cisco.jpg", file: "JavaScript Essentials 2.pdf", tier: "other" },
  { name: "Networking Basics", issuer: "Cisco", date: "Mar. 2025", logo: "/Cisco.jpg", file: "Networking Basics.pdf", tier: "other" },
  { name: "Python Essentials 1", issuer: "Cisco", date: "Mar. 2025", logo: "/Cisco.jpg", file: "Python 1.pdf", tier: "other" },
  { name: "Python Essentials 2", issuer: "Cisco", date: "Mar. 2025", logo: "/Cisco.jpg", file: "Python 2.pdf", tier: "other" },
  { name: "Introduction to Modern AI", issuer: "Cisco", date: "Feb. 2025", logo: "/Cisco.jpg", file: "Introduction to Modern AI.pdf", tier: "other" },
  { name: "Developing Your Emotional Intelligence", issuer: "LinkedIn", date: "", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", file: "Developing Your Emotional Intelligence.pdf", tier: "other" },
  { name: "What Is Generative AI?", issuer: "LinkedIn", date: "", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", file: "What Is Generative AI.pdf", tier: "other" },
]

const Skills = () => {
  const [showAllCerts, setShowAllCerts] = useState(false)

  const featuredCerts = certifications.filter(c => c.tier === 'featured')
  const otherCerts = certifications.filter(c => c.tier === 'other')
  const displayedCerts = showAllCerts ? certifications : featuredCerts

  return (
    <section className="section-padding bg-[#0a0a0a]" id="skills" aria-label="Skills and technologies">
      <div className="container-max">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills &amp; Technologies
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tools and technologies I work with daily
        </motion.p>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#14b8a6]/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-[#14b8a6] mb-5 uppercase tracking-wider text-sm">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-[#1e293b] text-gray-200 border border-gray-700
                               hover:border-[#14b8a6] hover:text-[#14b8a6] transition-all duration-200 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (categoryIndex * 0.1) + (index * 0.04), duration: 0.4 }}
                    viewport={{ once: true }}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-white">
              Certifications
              <span className="ml-3 text-sm font-normal text-gray-500">({certifications.length} total)</span>
            </h3>
          </div>

          <CertificationsGrid certifications={displayedCerts} />

          {/* Show more / less toggle */}
          <div className="text-center mt-8">
            <motion.button
              onClick={() => setShowAllCerts(prev => !prev)}
              className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-[#14b8a6] hover:text-[#14b8a6] transition-all duration-300 text-sm font-medium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {showAllCerts
                ? `▲ Show featured only`
                : `▼ Show all ${otherCerts.length} more certifications`}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
