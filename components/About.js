
import { motion } from 'framer-motion'
import LocationGreeting from './LocationGreeting'
import { About3D } from './About3D'

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/aymane_fakihi.pdf'
    link.download = 'aymane_fakihi.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="section-padding bg-gray-900" id="about">
      <div className="container-max">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am a Full-Stack Developer specializing in building scalable web ecosystems. My focus is on the intersection of performance and design—creating applications that not only look modern but handle complex data efficiently.
            </p>
            <p className="text-lg leading-relaxed">
              Currently, I am focused on the Javascript stack (Next.js, Node.js) and cloud architecture. I have a track record of delivering academic and administrative platforms that serve thousands of users, as seen in my work with the EMSI network.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, I'm likely exploring new DevOps tools or contributing to open-source discussions.
            </p>
            <LocationGreeting />
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
              >
                Download Resume
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
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
