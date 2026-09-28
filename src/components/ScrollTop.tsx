'use client';

import { useState, useEffect } from 'react';
import { HiOutlineArrowUp } from 'react-icons/hi2';

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Cálculo del scroll acumulado
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }

      // Mostrar u ocultar el botón
      setIsVisible(currentScroll > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Valores para el círculo de progreso SVG
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-lg hover:shadow-cyan-500/25 border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Círculo SVG de progreso */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
          {/* Pista del círculo */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="text-slate-200 dark:text-slate-800"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="transparent"
          />
          {/* Borde reactivo con gradiente al hacer scroll */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="text-cyan-500 dark:text-cyan-400 transition-all duration-150 ease-out"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        {/* Icono de la flecha con animación */}
        <HiOutlineArrowUp className="w-5 h-5 text-slate-700 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:-translate-y-0.5 transition-all duration-300 relative z-10" />
      </button>
    </div>
  );
}