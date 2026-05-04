'use client';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const educationData = [
  {
    institution: "EMSI RABAT",
    program: {
      en: "Engineering Student in Software Informatics",
      fr: "Étudiant Ingénieur en Informatique Logicielle"
    },
    duration: {
      en: "2024 – Present (Expected Graduation: 2027)",
      fr: "2024 – Présent (Diplôme prévu : 2027)"
    },
    side: "left",
  },
  {
    institution: "First Preparatory Classes of High Schools",
    program: {
      en: "MP (Mathematics-Physics)",
      fr: "MP (Mathématiques-Physique)"
    },
    duration: { en: "2023 – 2024", fr: "2023 – 2024" },
    side: "right",
  },
  {
    institution: "First Preparatory Classes of High Schools",
    program: {
      en: "MPSI (Mathematics-Physics-Engineering Sciences)",
      fr: "MPSI (Mathématiques-Physique-Sciences de l'Ingénieur)"
    },
    duration: { en: "2022 – 2023", fr: "2022 – 2023" },
    side: "left",
  },
  {
    institution: "ALMANSOUR EDAHBI High School",
    program: {
      en: "High School Diploma (Mathematics Science)",
      fr: "Baccalauréat (Sciences Mathématiques)"
    },
    duration: { en: "2021 – 2022", fr: "2021 – 2022" },
    side: "right",
  },
];

const TimelineItem = ({ data, isLast, index, lang }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const baseClasses = "transition-all duration-700 ease-out";
  const animClasses = inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  const program = typeof data.program === 'object' ? data.program[lang] : data.program;
  const duration = typeof data.duration === 'object' ? data.duration[lang] : data.duration;

  return (
    <div
      ref={ref}
      className={`relative ${isLast ? 'pb-0' : 'pb-10'} ${baseClasses} ${animClasses}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {!isLast && (
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full ${baseClasses} ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: 'var(--border-color)' }}
        />
      )}

      <div className={`absolute left-1/2 transform -translate-x-1/2 -top-1 ${baseClasses} ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <div className="w-4 h-4 rounded-full bg-[#14b8a6] border-2 shadow-xl" style={{ borderColor: 'var(--bg-primary)' }} />
      </div>

      <div className={`flex items-center w-full ${data.side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="w-1/2" />
        <div className={`w-1/2 px-4 ${data.side === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
          <div
            className="p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
          >
            <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>{duration}</p>
            <h3 className="text-lg font-semibold mt-1" style={{ color: 'var(--text-primary)' }}>{data.institution}</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{program}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationTimeline = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="py-16" id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>
          {t('edu_title')}
        </h2>
        <div className="relative">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              data={item}
              isLast={index === educationData.length - 1}
              index={index}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
