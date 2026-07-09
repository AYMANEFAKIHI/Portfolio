'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projectsData';

const CERTIFICATIONS_COUNT = 27;
const YEARS_CODING = 3;

const useCountUp = (target, active) => {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current || target == null) return;
    started.current = true;

    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);

  return value;
};

const StatCard = ({ value, suffix = '', label, active }) => {
  const count = useCountUp(value, active);
  return (
    <div className="flex flex-col items-center gap-1 px-4 py-2">
      <span className="text-3xl md:text-4xl font-extrabold gradient-text tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-xs md:text-sm text-center" style={{ color: 'var(--text-muted)' }}>
        {label}
      </span>
    </div>
  );
};

const StatsBand = () => {
  const { t, lang } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [githubTotal, setGithubTotal] = useState(null);

  useEffect(() => {
    fetch('/api/github-contributions')
      .then((res) => res.json())
      .then((data) => { if (data.ok) setGithubTotal(data.total); })
      .catch(() => {});
  }, []);

  const stats = [
    { value: projectsData.length, label: lang === 'fr' ? 'Projets livrés' : 'Projects shipped' },
    { value: CERTIFICATIONS_COUNT, label: lang === 'fr' ? 'Certifications' : 'Certifications' },
    { value: YEARS_CODING, suffix: '+', label: lang === 'fr' ? "Ans de code pratique" : 'Years hands-on coding' },
    ...(githubTotal != null
      ? [{ value: githubTotal, label: lang === 'fr' ? 'Contributions GitHub (an)' : 'GitHub contributions (yr)' }]
      : []),
  ];

  return (
    <div ref={ref} className="border-y" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
      <div className="container-max py-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-4 md:gap-x-4">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center">
            {i > 0 && <span className="hidden sm:block w-px h-10 mr-2 md:mr-4" style={{ background: 'var(--border-color)' }} />}
            <StatCard value={s.value} suffix={s.suffix} label={s.label} active={inView} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBand;
