'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'projects', 'skills', 'testimonials', 'contact'];
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (router.pathname !== '/') { setIsVisible(true); return; }
    const hasPlayed = typeof window !== 'undefined' && sessionStorage.getItem('introPlayed');
    if (!hasPlayed) {
      setIsVisible(false);
      const handler = () => setIsVisible(true);
      window.addEventListener('hero-animation-complete', handler);
      return () => window.removeEventListener('hero-animation-complete', handler);
    } else {
      setIsVisible(true);
    }
  }, [router.pathname]);

  const navLinks = [
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_projects'), href: '#projects' },
    { name: t('nav_skills'), href: '#skills' },
    { name: t('nav_testimonials'), href: '#testimonials' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const isLight = theme === 'light';

  const navBg = scrolled
    ? isLight
      ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm'
      : 'bg-black/60 backdrop-blur-xl border-b border-gray-800/60'
    : 'bg-transparent';

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed w-full z-50 transition-all duration-700 py-3 ${navBg}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('#hero')}
          className="text-xl font-bold tracking-widest transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
          aria-label="Go to top"
        >
          AF<span style={{ color: 'var(--accent)' }}>.</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 text-sm uppercase tracking-wider font-medium rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-[color:var(--accent)]/10' : 'hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                style={{ color: isActive ? 'var(--accent)' : 'var(--text-secondary)' }}
              >
                {link.name}
              </button>
            );
          })}

          {/* Divider */}
          <div className="w-px h-5 mx-2" style={{ background: 'var(--border-color)' }} />

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            title={lang === 'en' ? 'Passer en français' : 'Switch to English'}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)',
              background: 'transparent',
            }}
            aria-label="Toggle language"
          >
            {lang === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
            className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 border"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)',
              background: 'transparent',
            }}
            aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {isLight ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Resume CTA */}
          <a
            href="/aymane_fakihi.pdf"
            download
            className="ml-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 flex items-center gap-1.5"
            style={{ background: 'var(--accent)', color: '#000' }}
            aria-label="Download resume PDF"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t('nav_resume')}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="text-xs font-bold px-2 py-1 rounded border transition-all"
            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded border transition-all"
            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
          >
            {isLight ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            className="focus:outline-none focus:ring-2 focus:ring-[#14b8a6] rounded-lg p-1"
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div
            className="absolute top-full left-0 w-full md:hidden flex flex-col items-center py-6 space-y-1 border-t"
            style={{ background: isLight ? 'rgba(255,255,255,0.97)' : 'rgba(0,0,0,0.97)', borderColor: 'var(--border-color)' }}
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="w-full text-center px-4 py-3 text-base transition-all duration-200"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.name}
              </button>
            ))}
            <a
              href="/aymane_fakihi.pdf"
              download
              className="mt-2 px-6 py-2.5 text-sm font-medium rounded-lg transition-colors duration-300"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              {t('nav_resume')}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
