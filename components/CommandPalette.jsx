'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useCommandPalette } from '../context/CommandPaletteContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
  </svg>
);

const CommandPalette = () => {
  const { isOpen, close } = useCommandPalette();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/aymane_fakihi.pdf';
    link.download = 'aymane_fakihi.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const commands = useMemo(() => [
    { id: 'about', group: 'Navigate', label: t('nav_about'), keywords: 'about me profile', action: () => scrollTo('about') },
    { id: 'experience', group: 'Navigate', label: t('nav_experience'), keywords: 'work job internship brief&nous tipe', action: () => scrollTo('experience') },
    { id: 'projects', group: 'Navigate', label: t('nav_projects'), keywords: 'projects portfolio work case study', action: () => scrollTo('projects') },
    { id: 'skills', group: 'Navigate', label: t('nav_skills'), keywords: 'skills technologies stack certifications', action: () => scrollTo('skills') },
    { id: 'github', group: 'Navigate', label: lang === 'fr' ? 'Activité GitHub' : 'GitHub Activity', keywords: 'github contributions activity heatmap commits', action: () => scrollTo('github-activity') },
    { id: 'contact', group: 'Navigate', label: t('nav_contact'), keywords: 'contact email message form', action: () => scrollTo('contact') },
    { id: 'theme', group: 'Action', label: theme === 'dark' ? (lang === 'fr' ? 'Passer en mode clair' : 'Switch to light mode') : (lang === 'fr' ? 'Passer en mode sombre' : 'Switch to dark mode'), keywords: 'theme dark light mode appearance', action: toggleTheme },
    { id: 'lang', group: 'Action', label: lang === 'en' ? 'Passer en français' : 'Switch to English', keywords: 'language lang francais english fr en translate', action: toggleLang },
    { id: 'resume', group: 'Action', label: t('nav_resume'), keywords: 'resume cv download pdf', action: downloadResume },
    { id: 'github-profile', group: 'Link', label: 'GitHub — github.com/AYMANEFAKIHI', keywords: 'github profile repo code source', action: () => window.open('https://github.com/AYMANEFAKIHI', '_blank', 'noopener,noreferrer') },
    { id: 'linkedin', group: 'Link', label: 'LinkedIn — aymane-fakihi', keywords: 'linkedin profile social network', action: () => window.open('https://www.linkedin.com/in/aymane-fakihi-9a3435335/', '_blank', 'noopener,noreferrer') },
    { id: 'email', group: 'Link', label: 'Email — faymane12@gmail.com', keywords: 'email mail contact message send', action: () => { window.location.href = 'mailto:faymane12@gmail.com'; } },
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [lang, theme, t]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((c) =>
      c.label.toLowerCase().includes(q) ||
      c.group.toLowerCase().includes(q) ||
      c.keywords?.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => { setActiveIndex(0); }, [query, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      const t = setTimeout(() => inputRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const runCommand = (cmd) => {
    if (!cmd) return;
    close();
    cmd.action();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runCommand(filtered[activeIndex]);
    }
  };

  if (!isOpen) return null;

  let lastGroup = null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 px-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-lg rounded-xl border shadow-2xl overflow-hidden"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <span style={{ color: 'var(--text-muted)' }}><SearchIcon /></span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={lang === 'fr' ? 'Rechercher une action ou une page...' : 'Search for a page or action...'}
            className="flex-1 h-12 bg-transparent outline-none text-sm"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Command search"
          />
          <kbd className="text-[10px] px-1.5 py-0.5 rounded border font-mono" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>ESC</kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-3 py-4 text-sm" style={{ color: 'var(--text-muted)' }}>
              {lang === 'fr' ? 'Aucun résultat.' : 'No results found.'}
            </p>
          )}
          {filtered.map((cmd, i) => {
            const showGroup = cmd.group !== lastGroup;
            lastGroup = cmd.group;
            return (
              <div key={cmd.id}>
                {showGroup && (
                  <p className="px-3 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {cmd.group}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => runCommand(cmd)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors"
                  style={{
                    background: i === activeIndex ? 'rgba(20,184,166,0.12)' : 'transparent',
                    color: i === activeIndex ? 'var(--accent)' : 'var(--text-secondary)',
                  }}
                >
                  {cmd.label}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
