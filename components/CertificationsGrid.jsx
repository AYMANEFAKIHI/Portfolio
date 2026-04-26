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
          className="text-left p-5 bg-[#1e293b] rounded-xl border border-gray-700/60 hover:border-[#14b8a6] transition-all duration-300 cursor-pointer group w-full focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: Math.min(index * 0.06, 0.5), duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleCertificateClick(cert)}
          aria-label={`View ${cert.name} certificate from ${cert.issuer}`}
        >
          <div className="flex items-start gap-3">
            {/* Badge icon */}
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#14b8a6]/10 border border-[#14b8a6]/20 flex items-center justify-center group-hover:bg-[#14b8a6]/20 transition-colors">
              <svg className="w-4 h-4 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 9.043A11.954 11.954 0 0012 21c3.81 0 7.412-1.295 10.382-3.607a11.955 11.955 0 01-5.764-11.453z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-[#14b8a6] transition-colors duration-200">
                {cert.name}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{cert.issuer}</p>
              {cert.date && (
                <p className="text-xs text-gray-600 mt-0.5">{cert.date}</p>
              )}
            </div>
            {/* External link indicator */}
            <svg
              className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#14b8a6] flex-shrink-0 mt-0.5 transition-colors"
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
