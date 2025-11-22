import { motion } from 'framer-motion'

const Process = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding client needs, analyzing requirements, and planning the project scope.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Creating wireframes, mockups, and user experience designs that align with project goals.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building robust, scalable solutions using modern technologies and best practices.'
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'Testing, optimizing, and launching the project with continuous monitoring and support.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900" id="process">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-[#1abc9c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-black">{item.step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-600 transform -translate-x-8"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
