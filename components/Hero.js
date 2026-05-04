'use client';
import { useState, useEffect } from 'react';
import MatrixBackground from './MatrixBackground';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ onAnimationComplete }) => {
  const [stage, setStage] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('introPlayed');
    if (hasPlayed) {
      setStage(3);
      document.body.classList.add('animation-finished');
      if (onAnimationComplete) onAnimationComplete();
      window.dispatchEvent(new Event('hero-animation-complete'));
      return;
    }
    const t1 = setTimeout(() => setStage(1), 800);
    const t2 = setTimeout(() => setStage(2), 1800);
    const t3 = setTimeout(() => {
      setStage(3);
      document.body.classList.add('animation-finished');
      sessionStorage.setItem('introPlayed', 'true');
      window.dispatchEvent(new Event('hero-animation-complete'));
      if (onAnimationComplete) onAnimationComplete();
    }, 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onAnimationComplete]);

  const heroClasses = stage === 3
    ? 'h-20 py-0 opacity-100'
    : 'h-screen py-40 opacity-100';

  return (
    <section
      id="hero"
      aria-label="Hero introduction"
      className={`relative flex items-center justify-center text-center text-white
                  transition-all duration-1000 ease-in-out z-40 overflow-hidden
                  ${heroClasses}`}
    >
      <div className="absolute inset-0 z-0">
        <MatrixBackground />
      </div>

      {stage < 3 && (
        <div className="relative z-10 flex flex-col items-center transition-opacity duration-1000 ease-out">
          <h1
            className={`text-5xl font-extrabold tracking-tight md:text-8xl
                        ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        transition-all duration-700 delay-300`}
          >
            {t('hero_title')}{' '}
            <span className="bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] bg-clip-text text-transparent">
              AYMANE FAKIHI
            </span>
          </h1>
          <p
            className={`text-lg mt-6 tracking-widest uppercase
                        ${stage >= 1 ? 'opacity-100' : 'opacity-0'}
                        transition-opacity duration-700 delay-700`}
            style={{ color: 'var(--accent)' }}
          >
            {t('hero_subtitle')}
          </p>
          <div
            className={`mt-6 flex items-center gap-2 px-4 py-2 rounded-full border
                        ${stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        transition-all duration-700`}
            style={{ borderColor: 'rgba(20,184,166,0.4)', background: 'rgba(20,184,166,0.1)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
            <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
              {t('hero_available')}
            </span>
          </div>
        </div>
      )}

      {stage === 3 && <div className="opacity-0 pointer-events-none absolute" />}
    </section>
  );
};

export default Hero;
