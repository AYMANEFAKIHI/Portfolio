import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const ProjectModal = ({ project, onClose }) => {
  const { t, lang } = useLanguage();

  const fullDescription = typeof project.fullDescription === 'object'
    ? project.fullDescription[lang]
    : project.fullDescription;

  const renderedHTML = fullDescription
    ? fullDescription.replace(/\n\n/g, '<br/><br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    : '';

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center p-4 backdrop-blur-sm"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <div
        className="rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300"
        style={{ background: 'var(--bg-card)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 p-6 border-b flex justify-between items-center backdrop-blur-md"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <h2 className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>{project.title}</h2>
          <button
            onClick={onClose}
            className="text-3xl font-light transition-colors"
            style={{ color: 'var(--text-muted)' }}
            aria-label={t('modal_close')}
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <Image
            src={project.image}
            alt={project.title}
            width={project.imageWidth}
            height={project.imageHeight}
            sizes="(max-width: 896px) 100vw, 896px"
            className="w-full h-auto rounded-lg mb-6 shadow-xl"
          />

          <p
            className="leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
            dangerouslySetInnerHTML={{ __html: renderedHTML }}
          />

          <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {t('modal_tech_used')}
          </h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech, i) => (
              <span key={i}
                className="px-3 py-1 text-sm rounded-full font-medium"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank"
                className="px-6 py-3 rounded-lg font-medium transition-colors"
                style={{ background: 'var(--accent)', color: '#000' }}>
                {t('modal_visit_site')}
              </Link>
            )}
            {!project.isPrivate && project.githubUrl && (
              <Link href={project.githubUrl} target="_blank"
                className="px-6 py-3 rounded-lg font-medium transition-colors border"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
                {t('modal_source_code')}
              </Link>
            )}
            {project.isPrivate && (
              <Link
                href={`mailto:faymane12@gmail.com?subject=${t('modal_access_subject')}: ${project.title}`}
                className="px-6 py-3 rounded-lg font-medium transition-colors border"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>
                {t('modal_request_access')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
