'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    { name: "Prof. Karim Benali", role: t('t1_role'), avatar: "KB", color: "#14b8a6", text: t('t1_text') },
    { name: "Sarah Alaoui",       role: t('t2_role'), avatar: "SA", color: "#3b82f6", text: t('t2_text') },
    { name: "Youssef Idrissi",    role: t('t3_role'), avatar: "YI", color: "#8b5cf6", text: t('t3_text') },
  ];

  return (
    <section className="section-padding" id="testimonials" style={{ background: 'var(--bg-secondary)' }} aria-label="Testimonials">
      <div className="container-max">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          {t('testimonials_title')}
        </motion.h2>
        <motion.p className="text-center mb-16 text-lg" style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
          {t('testimonials_subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t_item, index) => (
            <motion.div key={index}
              className="relative p-6 rounded-2xl border flex flex-col transition-all duration-300"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }} viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: 'var(--border-hover)' }}
            >
              <span className="absolute top-4 right-6 text-6xl font-serif leading-none select-none"
                style={{ color: t_item.color, opacity: 0.15 }} aria-hidden="true">&ldquo;</span>
              <p className="leading-relaxed text-sm flex-1 mb-6 relative z-10" style={{ color: 'var(--text-secondary)' }}>
                &ldquo;{t_item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: t_item.color + '22', color: t_item.color }}>
                  {t_item.avatar}
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>{t_item.name}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t_item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-12"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
          <a href="https://www.linkedin.com/in/aymane-fakihi-9a3435335/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border px-5 py-2.5 rounded-lg transition-colors duration-300"
            style={{ color: 'var(--text-muted)', borderColor: 'var(--border-color)' }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            {t('testimonials_linkedin')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
