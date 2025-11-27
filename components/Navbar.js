'use client';
import { useState, useEffect } from 'react';

// You will need icons for the mobile menu. You can use Heroicons or Lucide-React.
// For simplicity, we are using inline SVG icons here.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background change and stickiness
  useEffect(() => {
    const handleScroll = () => {
      // Set 'scrolled' to true if user scrolls past 50 pixels
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      // *** THE GLASSMORHISM STYLES ARE HERE ***
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/50 backdrop-blur-lg border-b border-gray-700/50 py-4' // Glass style when scrolled
          : 'bg-transparent py-6' // Transparent style at the top
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-widest">
          AYMANE<span className="text-[#14b8a6]">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-200 hover:text-[#14b8a6] transition-colors text-sm uppercase tracking-wider font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-black/95 backdrop-blur-sm md:hidden flex flex-col items-center py-6 space-y-4 border-t border-gray-800">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-lg text-white hover:text-[#14b8a6]"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
