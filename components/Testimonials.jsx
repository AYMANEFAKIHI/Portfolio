'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Prof. Karim Benali",
    role: "Academic Supervisor, EMSI Rabat",
    avatar: "KB",
    color: "#14b8a6",
    text: "Aymane consistently delivers beyond expectations. His EMSI Central Portal project demonstrated exceptional technical maturity — architecting a scalable Next.js platform that now serves thousands of students daily. A rare blend of engineering rigor and design sensibility.",
  },
  {
    name: "Sarah Alaoui",
    role: "Product Lead, EMSI Connect",
    avatar: "SA",
    color: "#3b82f6",
    text: "Working with Aymane on the EMSI Connect platform was a seamless experience. He implemented real-time messaging with Socket.io and delivered the feature ahead of schedule with clean, well-documented code. His communication and ownership of the project were outstanding.",
  },
  {
    name: "Youssef Idrissi",
    role: "Fellow Engineering Student, EMSI",
    avatar: "YI",
    color: "#8b5cf6",
    text: "Aymane built the ExamBuilder tool we use in our study group. The AI-powered exam generation and PDF export work flawlessly. He has a talent for turning complex requirements into intuitive, polished interfaces — and he ships fast.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-900" id="testimonials" aria-label="Testimonials">
      <div className="container-max">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What People Say
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Feedback from collaborators and mentors
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-2xl bg-[#0a0a0a] border border-gray-800 hover:border-[#14b8a6]/40 transition-colors duration-300 flex flex-col"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Quote mark */}
              <span
                className="absolute top-4 right-6 text-6xl font-serif leading-none select-none"
                style={{ color: t.color, opacity: 0.2 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p className="text-gray-300 leading-relaxed text-sm flex-1 mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-auto border-t border-gray-800 pt-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: t.color + '22', color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.linkedin.com/in/aymane-fakihi-9a3435335/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#14b8a6] transition-colors duration-300 border border-gray-700 hover:border-[#14b8a6]/50 px-5 py-2.5 rounded-lg"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View LinkedIn profile for more recommendations
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
