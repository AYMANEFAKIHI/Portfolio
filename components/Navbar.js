'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'projects', 'skills', 'testimonials', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Visibility based on hero animation
  useEffect(() => {
    const isHomePage = router.pathname === '/';
    if (isHomePage) {
      const hasPlayed = typeof window !== 'undefined' && sessionStorage.getItem('introPlayed');
      if (!hasPlayed) {
        setIsVisible(false);
        const handleAnimationComplete = () => setIsVisible(true);
        window.addEventListener('hero-animation-complete', handleAnimationComplete);
        return () => window.removeEventListener('hero-animation-complete', handleAnimationComplete);
      } else {
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
  }, [router.pathname]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-gray-800/60 py-3'
          : 'bg-transparent py-5'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('#hero')}
          className="text-xl font-bold text-white tracking-widest hover:text-[#14b8a6] transition-colors duration-300"
          aria-label="Go to top"
        >
          AF<span className="text-[#14b8a6]">.</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 text-sm uppercase tracking-wider font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-[#14b8a6] bg-[#14b8a6]/10'
                    : 'text-gray-300 hover:text-[#14b8a6] hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            );
          })}
          {/* CTA button */}
          <a
            href="/aymane_fakihi.pdf"
            download
            className="ml-4 px-4 py-2 text-sm font-medium bg-[#14b8a6] text-black rounded-lg hover:bg-[#0d9488] transition-colors duration-300 flex items-center gap-1.5"
            aria-label="Download resume PDF"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#14b8a6] rounded-lg p-1"
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

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md md:hidden flex flex-col items-center py-6 space-y-1 border-t border-gray-800">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="w-full text-center px-4 py-3 text-base text-gray-200 hover:text-[#14b8a6] hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </button>
            ))}
            <a
              href="/aymane_fakihi.pdf"
              download
              className="mt-2 px-6 py-2.5 text-sm font-medium bg-[#14b8a6] text-black rounded-lg hover:bg-[#0d9488] transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
