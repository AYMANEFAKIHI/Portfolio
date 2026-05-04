import { motion } from 'framer-motion'

const CertificationsGrid = ({ certifications }) => {
  const handleCertificateClick = (cert) => {
    if (cert.isExternal) {
      window.open(cert.file, '_blank', 'noopener,noreferrer');
    } else {
      window.open(`/certificates/${cert.file}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, index) => (
        <motion.button
          key={index}
          type="button"
          className="text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer group w-full focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: Math.min(index * 0.06, 0.5), duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleCertificateClick(cert)}
          aria-label={`View ${cert.name} certificate from ${cert.issuer}`}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
        >
          <div className="flex items-start gap-3">
            {/* Badge icon */}
            <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{ background: 'rgba(20,184,166,0.12)', border: '1px solid rgba(20,184,166,0.25)' }}>
              <svg className="w-4 h-4" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 9.043A11.954 11.954 0 0012 21c3.81 0 7.412-1.295 10.382-3.607a11.955 11.955 0 01-5.764-11.453z" />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              {/* ✅ FIX: was text-white (invisible in light mode) → now uses CSS var */}
              <h3 className="text-sm font-semibold leading-snug transition-colors duration-200"
                style={{ color: 'var(--text-primary)' }}>
                {cert.name}
              </h3>
              {/* ✅ FIX: was text-gray-400 (barely visible in light mode) → now uses CSS var */}
              <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                {cert.issuer}
              </p>
              {/* ✅ FIX: was text-gray-600 → now uses CSS var */}
              {cert.date && (
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {cert.date}
                </p>
              )}
            </div>

            {/* External link arrow — also theme-aware */}
            <svg
              className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 transition-colors"
              style={{ color: 'var(--text-muted)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default CertificationsGrid;
