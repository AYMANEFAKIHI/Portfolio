import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
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
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
            <div className="w-80 h-80 md:w-96 md:h-96 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1abc9c]">
              <Image
                src="/images/aymanefakihi.JPG"
                alt="Profile"
                width={384}
                height={384}
                className="object-cover"
                sizes="(max-width: 768px) 320px, 384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1abc9c]/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#3498db] rounded-full flex items-center justify-center shadow-lg animate-glow">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
