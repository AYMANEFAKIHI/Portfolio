import { motion } from 'framer-motion'

const CertificationsGrid = ({ certifications }) => {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          className="p-6 bg-[#1e293b] rounded-xl shadow-lg border border-gray-700 hover:border-[#14b8a6] transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start">
            <svg className="w-6 h-6 text-[#14b8a6] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 9.043A11.954 11.954 0 0012 21c3.81 0 7.412-1.295 10.382-3.607a11.955 11.955 0 01-5.764-11.453z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
              {cert.date && <p className="text-xs text-gray-500 mt-1">{cert.date}</p>}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CertificationsGrid
