import { motion } from 'framer-motion'

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
    name: "Introduction à la programmation orientée objet (en C++)",
    issuer: "École polytechnique fédérale de Lausanne, EPFL",
    date: "Nov. 2025",
    logo: "/EPFL.jpg",
  },
  {
    name: "JavaScript, jQuery et JSON",
    issuer: "University of Michigan",
    date: "Nov. 2025",
    logo: "/university_of_michigan_logo.webp",
  },
  {
    name: "Introduction to Career Skills in Data Analytics",
    issuer: "LinkedIn",
    date: "Jul. 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    name: "Career Preparation Workshop",
    issuer: "Cisco",
    date: "Apr. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "English for IT 2",
    issuer: "Cisco",
    date: "Apr. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "CSS Essentials",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "English for IT 1",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "Ethical Hacker",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "HTML Essentials",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "JavaScript Essentials 1",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "JavaScript Essentials 2",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "Python Essentials 2",
    issuer: "Cisco",
    date: "Mar. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "Introduction to Modern AI",
    issuer: "Cisco",
    date: "Feb. 2025",
    logo: "/Cisco.jpg",
  },
  {
    name: "Developing Your Emotional Intelligence",
    issuer: "LinkedIn",
    date: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    name: "What Is Generative AI?",
    issuer: "LinkedIn",
    date: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
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
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-[#1abc9c] hover:text-black transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.05), duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
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
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, backgroundColor: '#1abc9c', color: 'white' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section Update as Grid Cards */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map(({ name, issuer, date, logo }) => (
              <motion.div
                key={name}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-4"
                whileHover={{ scale: 1.03 }}
              >
                <img src={logo} alt={`${issuer} logo`} className="w-12 h-12 object-contain rounded" />
                <div>
                  <h4 className="font-bold text-white mb-2">{name}</h4>
                  <p className="text-gray-400 mb-1">{issuer}</p>
                  <p className="text-gray-500 text-sm">{date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
