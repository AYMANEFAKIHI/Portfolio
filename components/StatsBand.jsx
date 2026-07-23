'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projectsData';

const CERTIFICATIONS_COUNT = 27;
const YEARS_CODING = 3;

const useCountUpAll = (targets, active) => {
  const [values, setValues] = useState(() => targets.map(() => 0));
  const started = useRef(false);
  const valuesRef = useRef(values);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setValues(targets.map((t) => t ?? 0));
      return;
    }

    const duration = 1200;
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = targets.map((t) => Math.round(eased * (t ?? 0)));
      valuesRef.current = next;
      setValues(next);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [active, targets]);

  return values;
};

const StatCard = ({ count, suffix = '', label, loading }) => {
  return (
    <div className="flex flex-col items-center gap-1 px-4 py-2">
      <span className="text-3xl md:text-4xl font-extrabold gradient-text tabular-nums">
        {loading ? '–' : `${count}${suffix}`}
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
    { value: githubTotal ?? 0, loading: githubTotal == null, label: lang === 'fr' ? 'Contributions GitHub (an)' : 'GitHub contributions (yr)' },
  ];

  const counts = useCountUpAll(stats.map((s) => s.value), inView);

  return (
    <div ref={ref} className="border-y" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
      <div className="container-max py-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-4 md:gap-x-4">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center">
            {i > 0 && <span className="hidden sm:block w-px h-10 mr-2 md:mr-4" style={{ background: 'var(--border-color)' }} />}
            <StatCard count={counts[i]} suffix={s.suffix} label={s.label} loading={s.loading} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBand;
