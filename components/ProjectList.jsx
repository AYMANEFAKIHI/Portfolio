'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/projectsData';

const ProjectList = () => {
  const { t, lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24" style={{ background: 'var(--bg-primary)' }} aria-label="Projects">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {lang === 'fr' ? 'Mes ' : 'My '}
          <span className="bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] bg-clip-text text-transparent">
            {lang === 'fr' ? 'Projets' : 'Projects'}
          </span>
        </motion.h2>
        <motion.p
          className="text-center mb-20 text-lg"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('projects_subtitle')}
        </motion.p>

        <div className="space-y-28">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            const category = typeof project.category === 'object' ? project.category[lang] : project.category;
            const summary = typeof project.summary === 'object' ? project.summary[lang] : project.summary;

            return (
              <motion.article
                key={project.id}
                id={`project-${project.id}`}
                className="flex flex-col md:flex-row items-center gap-12"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Image */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative overflow-hidden rounded-2xl border group" style={{ borderColor: 'var(--border-color)' }}>
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3">
                        {project.liveUrl && !project.isPrivate && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="px-4 py-2 bg-[#14b8a6] text-black text-sm font-medium rounded-lg hover:bg-[#0d9488] transition-colors"
                            onClick={(e) => e.stopPropagation()}>
                            {t('projects_live_demo')} →
                          </a>
                        )}
                        {project.githubUrl && !project.isPrivate && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium rounded-lg transition-colors" style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}
                            onClick={(e) => e.stopPropagation()}>
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-[#14b8a6] text-xs font-medium rounded-full border border-[#14b8a6]/30">
                        {category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:order-2 md:text-left' : 'md:order-1 md:text-right'}`}>
                  <p className={`text-xs font-medium uppercase tracking-widest mb-3 ${isEven ? 'text-left' : 'text-right'}`}
                    style={{ color: 'var(--accent)' }}>
                    0{index + 1}
                  </p>
                  <h3 className={`text-3xl font-bold mb-4 ${isEven ? 'text-left' : 'text-right'}`}
                    style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${isEven ? 'text-left' : 'text-right'}`}
                    style={{ color: 'var(--text-muted)' }}>
                    {summary}
                  </p>

                  <div className={`flex flex-wrap gap-2 mb-8 ${isEven ? 'justify-start' : 'justify-end'}`}>
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-lg border font-mono"
                        style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`flex flex-wrap gap-3 ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-2.5 text-sm font-medium rounded-xl bg-transparent border transition-all duration-200"
                      style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                      whileHover={{ scale: 1.03, backgroundColor: 'var(--accent)', color: '#000' }}
                      whileTap={{ scale: 0.97 }}
                      aria-label={`View details for ${project.title}`}
                    >
                      {t('projects_case')}
                    </motion.button>

                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="px-5 py-2.5 text-sm font-medium rounded-xl flex items-center gap-1.5 transition-all duration-200"
                        style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {t('projects_live')}
                      </motion.a>
                    )}
                  </div>

                  {project.isPrivate && (
                    <p className={`text-xs mt-3 flex items-center gap-1 ${isEven ? 'justify-start' : 'justify-end'}`}
                      style={{ color: 'var(--text-muted)' }}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      {t('projects_private')}
                    </p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default ProjectList;
