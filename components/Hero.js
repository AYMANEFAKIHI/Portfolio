'use client';
import { useState, useEffect } from 'react';
import MatrixBackground from './MatrixBackground';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ onAnimationComplete }) => {
  const [stage, setStage] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const finish = () => {
      document.body.classList.add('animation-finished');
      sessionStorage.setItem('introPlayed', 'true');
      window.dispatchEvent(new Event('hero-animation-complete'));
      if (onAnimationComplete) onAnimationComplete();
    };

    const hasPlayed = sessionStorage.getItem('introPlayed');
    if (hasPlayed) {
      setShowOverlay(false);
      document.body.classList.add('animation-finished');
      if (onAnimationComplete) onAnimationComplete();
      window.dispatchEvent(new Event('hero-animation-complete'));
      return;
    }

    const t1 = setTimeout(() => setStage(1), 150);
    const t2 = setTimeout(() => setStage(2), 450);
    const t3 = setTimeout(() => { setStage(3); finish(); }, 1100);
    const t4 = setTimeout(() => setShowOverlay(false), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Persistent hero bar — constant size from first paint, never resizes (no CLS) */}
      <section id="hero" aria-label="Hero introduction" className="relative h-20 overflow-hidden text-white">
        {!showOverlay && <MatrixBackground />}
      </section>

      {/* Intro overlay — fixed/out-of-flow, purely decorative, cannot shift page layout */}
      {showOverlay && (
        <div
          aria-hidden="true"
          className={`fixed inset-0 z-[100] flex items-center justify-center text-center text-white bg-black
                      transition-opacity duration-700 ease-in-out
                      ${stage === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <div className="absolute inset-0 z-0">
            <MatrixBackground />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h1
              className={`text-5xl font-extrabold tracking-tight md:text-8xl
                          ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                          transition-all duration-500 ease-out`}
            >
              {t('hero_title')}{' '}
              <span
                className="bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] bg-clip-text"
                style={{ color: '#14b8a6', WebkitTextFillColor: 'transparent' }}
              >
                AYMANE FAKIHI
              </span>
            </h1>
            <p
              className={`text-lg mt-6 tracking-widest uppercase
                          ${stage >= 1 ? 'opacity-100' : 'opacity-0'}
                          transition-opacity duration-500 delay-150`}
              style={{ color: 'var(--accent)' }}
            >
              {t('hero_subtitle')}
            </p>
            <div
              className={`mt-6 flex items-center gap-2 px-4 py-2 rounded-full border
                          ${stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                          transition-all duration-500`}
              style={{ borderColor: 'rgba(20,184,166,0.4)', background: 'rgba(20,184,166,0.1)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
              <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                {t('hero_available')}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
