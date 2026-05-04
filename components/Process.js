import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const processSteps = {
  en: [
    { step: '01', title: 'Discovery', description: 'Understanding your goals, audience, and technical requirements through in-depth consultation.' },
    { step: '02', title: 'Design', description: 'Creating wireframes and prototypes that align with your brand and user experience goals.' },
    { step: '03', title: 'Development', description: 'Building with clean, scalable code using modern frameworks and best practices.' },
    { step: '04', title: 'Delivery', description: 'Thorough testing, deployment, and post-launch support to ensure everything runs perfectly.' },
  ],
  fr: [
    { step: '01', title: 'Découverte', description: 'Comprendre vos objectifs, votre audience et vos besoins techniques par une consultation approfondie.' },
    { step: '02', title: 'Design', description: 'Création de maquettes et prototypes alignés avec votre identité et vos objectifs d\'expérience utilisateur.' },
    { step: '03', title: 'Développement', description: 'Construction avec un code propre et évolutif en utilisant des frameworks modernes et les meilleures pratiques.' },
    { step: '04', title: 'Livraison', description: 'Tests rigoureux, déploiement et support post-lancement pour s\'assurer que tout fonctionne parfaitement.' },
  ],
}

const Process = () => {
  const { lang } = useLanguage()
  const steps = processSteps[lang] || processSteps.en
  const title = lang === 'fr' ? 'Mon Processus de Travail' : 'My Work Process'

  return (
    <section className="py-20 px-4" id="process" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="relative text-center lg:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-0.5 transform -translate-x-8"
                  style={{ background: 'var(--border-color)' }}
                />
              )}
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-xl font-bold mb-4 border"
                style={{ background: 'rgba(20,184,166,0.1)', color: 'var(--accent)', borderColor: 'rgba(20,184,166,0.25)' }}
              >
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
