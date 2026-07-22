'use client'; // Needed for Next.js app router since we use useEffect/refs

import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    let width = parent.offsetWidth;
    let height = parent.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const binary = '10';
    const characters = binary.split('');

    const fontSize = 16;
    let columns = Math.floor(width / fontSize);

    let drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    let interval = null;
    const start = () => {
      if (interval) return;
      interval = setInterval(draw, 33);
    };
    const stop = () => {
      if (!interval) return;
      clearInterval(interval);
      interval = null;
    };

    // Only animate while the canvas is actually visible on screen and the
    // tab is in the foreground — this was previously running continuously
    // (every 33ms, forever) even when scrolled far off-screen or backgrounded.
    let isOnScreen = false;
    const syncAnimation = () => {
      if (isOnScreen && !document.hidden) start();
      else stop();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isOnScreen = entry.isIntersecting;
        syncAnimation();
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    document.addEventListener('visibilitychange', syncAnimation);

    const handleResize = () => {
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () => 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncAnimation);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default MatrixBackground;
