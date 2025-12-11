'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MatrixBackground from './MatrixBackground';

// NOTE: This component handles the full-screen intro animation and transition.

const Hero = ({ onAnimationComplete }) => {
  const [stage, setStage] = useState(0); // 0: Matrix Only, 1: Text, 2: Buttons, 3: Transitioned

  useEffect(() => {
    // Check if animation has already played in this session
    const hasPlayed = sessionStorage.getItem('introPlayed');
    
    if (hasPlayed) {
      setStage(3);
      document.body.classList.add('animation-finished');
      if (onAnimationComplete) onAnimationComplete();
      // Dispatch event immediately for Navbar
      window.dispatchEvent(new Event('hero-animation-complete'));
      return;
    }

    // Stage 1: Text Appears (2.0s)
    const timer1 = setTimeout(() => {
      setStage(1);
    }, 3000); 

    // Stage 2: Buttons Appears (4.0s)
    const timer2 = setTimeout(() => {
      setStage(2);
    }, 4000);

    // Stage 3: Full Screen Transition (7.0s)
    const timer3 = setTimeout(() => {
      setStage(3);
      // Optional: Add a class to the <body> or main layout for overall scroll control
      document.body.classList.add('animation-finished');
      sessionStorage.setItem('introPlayed', 'true');
      window.dispatchEvent(new Event('hero-animation-complete'));
      if (onAnimationComplete) onAnimationComplete();
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onAnimationComplete]);

  // --- CSS Classes for the Transition ---

  // When stage 3 is active, the Hero section must transition from full-screen to top-left.
  const heroTransitionClasses = stage === 3 
    ? 'h-20 py-0 opacity-0 md:opacity-100' // Target: Header height, hidden on small screens
    : 'h-screen py-40 opacity-100'; // Full-screen initial state
  
  // This class controls the content of the header (which replaces the original Navbar)
  const headerContentClasses = stage === 3 
    ? 'translate-y-0 opacity-100' 
    : 'translate-y-10 opacity-0'; 

  return (
    // 1. Full Screen Hero Container (Matrix Background is set here or in a wrapper)
    <section 
      id="hero"
      className={`relative flex items-center justify-center text-center text-white 
                  transition-all duration-1000 ease-in-out z-40 overflow-hidden
                  ${heroTransitionClasses}`}
    >
        {/* Matrix Background */}
        <div className="absolute inset-0 z-0">
            <MatrixBackground />
        </div>

        {/* 2. Main Center Content (Visible before Stage 3) */}
        {stage < 3 && (
            <div className="relative z-10 flex flex-col items-center transition-opacity duration-1000 ease-out">
                {/* Name */}
                <h1 className={`text-6xl font-extrabold tracking-tight md:text-8xl 
                                ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                                transition-all duration-700 delay-500`}
                >
                    Hi, I'm AYMANE FAKIHI
                </h1>
                <p className={`text-lg mt-4 text-[#14b8a6] 
                              ${stage >= 1 ? 'opacity-100' : 'opacity-0'} 
                              transition-opacity duration-700 delay-1000`}
                >
                    Full Stack Developer | Designer
                </p>
            </div>
        )}
        
        {/* 3. Top-Left Content (Appears at Stage 3, replacing the Navbar) */}
        {/* NOTE: We are now showing the main Navbar after animation, so we don't need this duplicate header text.
            The Hero container itself shrinks to become the background for the Navbar. */}
        {stage === 3 && (
            <div className={`absolute top-0 left-0 p-6 transition-all duration-700 z-50 ${headerContentClasses} opacity-0 pointer-events-none`}>
                {/* Hidden to avoid conflict with main Navbar */}
            </div>
        )}
    </section>
  );
};

export default Hero;
