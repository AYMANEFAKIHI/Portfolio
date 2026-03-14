import { motion } from 'framer-motion'
import CertificationsGrid from './CertificationsGrid'

const skillCategories = {
  'Frontend': ['JavaScript', 'React', 'Next.js', 'TypeScript', 'CSS/Tailwind', 'HTML'],
  'Backend': ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  'DevOps & Tools': ['Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Cypress'],
  'Design': ['Figma', 'Adobe XD']
}

const skills = [
  { name: 'JavaScript', level: 90, color: '#1abc9c' },
  { name: 'React', level: 85, color: '#3498db' },
  { name: 'Node.js', level: 80, color: '#8e44ad' },
  { name: 'Python', level: 75, color: '#e74c3c' },
  { name: 'CSS/Tailwind', level: 95, color: '#1abc9c' },
  { name: 'Next.js', level: 85, color: '#34495e' },
  { name: 'TypeScript', level: 80, color: '#3498db' },
  { name: 'MongoDB', level: 75, color: '#2ecc71' }
]

const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    date: "Mar. 2026",
    logo: "/oracle.png",
    file: "ORACLE.pdf"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "Mar. 2026",
    logo: "/oracle.png",
    file: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.pdf"
  },
  {
    name: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    date: "Mar. 2026",
    logo: "/oracle.png",
    file: "Oracle Data Platform 2025 Certified Foundations Associate.pdf"
  },
  {
    name: "Software Engineering: Software Design and Project Management", 
    issuer: "The Hong Kong University of Science and Technology",
    date: "Mar. 2026", 
    logo: "/conception.png",
    file: "Software Engineering Software Design and Project.pdf"
  },
  {
    name: "Using Python to Access Web Data", 
    issuer: "University of Michigan",
    date: "Mar. 2026 ", 
    logo: "/university_of_michigan_logo.webp",
    file: "Using Python to Access Web Data.pdf"
  },
  {
    name: "Introduction à la programmation orientée objet (en C++)",
    issuer: "École polytechnique fédérale de Lausanne, EPFL",
    date: "Nov. 2025",
    logo: "/EPFL.jpg",
    file: "Coursera C++.pdf"
  },
  {
    name: "JavaScript, jQuery et JSON",
    issuer: "University of Michigan",
    date: "Nov. 2025",
    logo: "/university_of_michigan_logo.webp",
    file: "Coursera JavaScript, jQuery, and JSON.pdf"
  },
  {
    name: "Introduction to Career Skills in Data Analytics",
    issuer: "LinkedIn",
    date: "Jul. 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    file: "Introduction to Career Skills in Data Analytics.pdf"
  },
  {
    name: "Career Preparation Workshop",
    issuer: "Cisco",
    date: "Apr. 2025",
    logo: "/Cisco.jpg",
    file: "Career Preparation Workshop.pdf"
  },
  {
    name: "English for IT 2",
    issuer: "Cisco",
    date: "Apr. 2025",
    logo: "/Cisco.jpg",
    file: "English for IT 2.pdf"
  },
  {
    name: "CSS Essentials",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
    file: "CSS Essentials.pdf"
  },
  {
    name: "English for IT 1",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
    file: "English for IT 1.pdf"
  },
  {
    name: "Ethical Hacker",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
    file: "Ethical Hacker.pdf"
  },
  {
    name: "HTML Essentials",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
    file: "HTML Essentials.pdf"
  },
  {
    name: "JavaScript Essentials 1",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
    file: "JavaScript Essentials 1.pdf"
  },
  {
    name: "JavaScript Essentials 2",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
    file: "JavaScript Essentials 2.pdf"
  },
  {
    name: "Networking Basics",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
    file: "Networking Basics.pdf"
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
    file: "Python 1.pdf"
  },
  {
    name: "Python Essentials 2",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
    file: "Python 2.pdf"
  },
  {
    name: "Introduction to Modern AI",
    issuer: "Cisco",
    date: "Feb. 2025",
    logo: "/Cisco.jpg",
    file: "Introduction to Modern AI.pdf"
  },
  {
    name: "Developing Your Emotional Intelligence",
    issuer: "LinkedIn",
    date: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    file: "Developing Your Emotional Intelligence.pdf"
  },
  {
    name: "What Is Generative AI?",
    issuer: "LinkedIn",
    date: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    file: "What Is Generative AI.pdf"
  },
]

const Skills = () => {
  return (
    <section className="section-padding bg-[#0a0a0a]" id="skills">
      <div className="container-max">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">{category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-[#1e293b] text-gray-200 border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:bg-[#14b8a6] hover:text-black hover:shadow-lg hover:shadow-[#14b8a6]/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.05), duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills grid */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Docker', 'AWS', 'Firebase', 'GraphQL', 'REST APIs',
              'Figma', 'Adobe XD', 'PostgreSQL', 'Redis', 'Jest', 'Cypress'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 text-sm rounded-full bg-[#1e293b] text-gray-200 border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:bg-[#14b8a6] hover:text-black hover:shadow-lg hover:shadow-[#14b8a6]/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Certifications</h3>
          <CertificationsGrid certifications={certifications} />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
