'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const experienceData = [
  {
    role: { en: 'Web Developer', fr: 'Développeur Web' },
    company: 'Brief&Nous',
    location: 'Rabat, Maroc',
    duration: { en: 'Summer 2025 · Internship', fr: 'Été 2025 · Stage' },
    bullets: {
      en: [
        'Developed and maintained modern web interfaces using React, Next.js, and TailwindCSS.',
        'Designed and optimized backend services with Node.js and PostgreSQL.',
        'Improved page performance and SEO across production pages.',
      ],
      fr: [
        'Développement et maintenance d’interfaces web modernes avec React, Next.js et TailwindCSS.',
        'Conception et optimisation de services backend avec Node.js et PostgreSQL.',
        'Amélioration des performances et du référencement SEO sur les pages en production.',
      ],
    },
  },
  {
    role: { en: 'Founder & Project Lead', fr: 'Fondateur & Chef de Projet' },
    company: 'TIPE — Independent Technical Project',
    location: 'Meknès / Rabat, Maroc',
    duration: { en: '2022 – Present', fr: '2022 – Présent' },
    bullets: {
      en: [
        'Designed and built a complete technical project spanning data processing, embedded systems, and software architecture.',
        'Led prototype development, technical documentation, and performance analysis from concept to working system.',
        'Increased project efficiency by 30% through optimized processes.',
      ],
      fr: [
        'Conception et réalisation d’un projet technique complet couvrant le traitement de données, les systèmes embarqués et l’architecture logicielle.',
        'Pilotage du développement de prototypes, de la documentation technique et de l’analyse de performance, du concept au système fonctionnel.',
        'Augmentation de l’efficacité du projet de 30% grâce à l’optimisation des processus.',
      ],
    },
  },
];

const Experience = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="section-padding" id="experience" style={{ background: 'var(--bg-primary)' }} aria-label="Professional experience">
      <div className="container-max">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('exp_title')}
        </motion.h2>
        <motion.p
          className="text-center mb-16 text-lg"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('exp_subtitle')}
        </motion.p>

        <div className="max-w-3xl mx-auto space-y-6">
          {experienceData.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="p-6 md:p-8 rounded-2xl border"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: 'var(--border-hover)' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {exp.role[lang]}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-sm whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
                  {exp.duration[lang]}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.bullets[lang].map((bullet, j) => (
                  <li key={j} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent)' }} aria-hidden="true">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
