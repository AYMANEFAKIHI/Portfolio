'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SuccessModal from './SuccessModal';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = t('contact_err_name');
    if (!formData.email) e.email = t('contact_err_email_required');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = t('contact_err_email_invalid');
    if (!formData.message.trim()) e.message = t('contact_err_message');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (res.ok) { setIsSuccess(true); setFormData({ name: '', email: '', subject: '', message: '' }); }
      else { const d = await res.json(); alert(d.message || 'Failed to send.'); }
    } catch { alert('An error occurred. Please try again.'); }
    finally { setIsSubmitting(false); }
  };

  const inputStyle = (field) => ({
    background: 'var(--bg-card)',
    borderColor: errors[field] ? '#ef4444' : 'var(--border-color)',
    color: 'var(--text-primary)',
  });

  const contactInfo = [
    { label: 'Email', value: 'faymane12@gmail.com', href: 'mailto:faymane12@gmail.com',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
    { label: 'LinkedIn', value: 'aymane-fakihi', href: 'https://www.linkedin.com/in/aymane-fakihi-9a3435335/',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { label: 'GitHub', value: 'AYMANEFAKIHI', href: 'https://github.com/AYMANEFAKIHI',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
  ];

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)' }} aria-label="Contact">
      <div className="container-max">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          {t('contact_title')}
        </motion.h2>
        <motion.p className="text-center mb-16 text-lg" style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
          {t('contact_subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <div className="p-6 rounded-2xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#14b8a6] animate-pulse" />
                <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>{t('contact_available')}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t('contact_cta_title')}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{t('contact_cta_body')}</p>
            </div>
            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <motion.a key={i} href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                  whileHover={{ x: 4, borderColor: 'var(--border-hover)' }}
                  aria-label={`${info.label}: ${info.value}`}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: 'rgba(20,184,166,0.1)', color: 'var(--accent)', border: '1px solid rgba(20,184,166,0.2)' }}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{info.label}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="c-name" className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>{t('contact_name')}</label>
                  <input id="c-name" type="text" name="name" placeholder={t('contact_placeholder_name')}
                    value={formData.name} onChange={handleChange} style={inputStyle('name')}
                    className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all" autoComplete="name" />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5" role="alert">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>{t('contact_email')}</label>
                  <input id="c-email" type="email" name="email" placeholder={t('contact_placeholder_email')}
                    value={formData.email} onChange={handleChange} style={inputStyle('email')}
                    className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all" autoComplete="email" />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5" role="alert">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="c-subject" className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>{t('contact_subject')}</label>
                <input id="c-subject" type="text" name="subject" placeholder={t('contact_placeholder_subject')}
                  value={formData.subject} onChange={handleChange} style={inputStyle('subject')}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all" />
              </div>
              <div>
                <label htmlFor="c-message" className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>{t('contact_message')}</label>
                <textarea id="c-message" name="message" rows="6" placeholder={t('contact_placeholder_message')}
                  value={formData.message} onChange={handleChange} style={inputStyle('message')}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all" />
                {errors.message && <p className="text-red-400 text-xs mt-1.5" role="alert">{errors.message}</p>}
              </div>
              <motion.button type="submit" disabled={isSubmitting}
                className="w-full px-6 py-4 font-semibold rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                style={{ background: 'var(--accent)', color: '#000' }}
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                {isSubmitting ? (
                  <><svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>{t('contact_sending')}</>
                ) : (
                  <>{t('contact_send')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      {isSuccess && <SuccessModal onClose={() => setIsSuccess(false)} />}
    </section>
  );
};

export default Contact;
