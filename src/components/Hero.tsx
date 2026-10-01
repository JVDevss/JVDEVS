'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroHomeData } from '@/src/data/hero/heroHome';
import { useLanguage } from '@/src/context/LanguageContext';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroHomeData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroHomeData[currentSlide];
  const content = slide[language] || slide['es'];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-4 sm:px-6 lg:px-12 bg-bg-primary transition-colors duration-400">
      <div className="absolute inset-0 z-0">
        {heroHomeData.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <Image
              src={item.bgImage}
              alt={content.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center opacity-60 dark:opacity-70 transition-opacity duration-700"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-bg-primary/50 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto">
        <div
          className={`p-6 sm:p-10 lg:p-14 rounded-3xl bg-bg-card/90 border border-glass-border shadow-2xl backdrop-blur-md transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <div
              className={`inline-flex items-center px-4 py-1.5 text-xs sm:text-sm font-semibold font-mono rounded-full border border-badge-border bg-badge-bg text-badge-text mb-6 transition-all duration-700 delay-200 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              {content.badge}
            </div>

            <h1
              className={`max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-text-heading transition-all duration-700 delay-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {content.title} <br className="hidden sm:inline" />
              <span className="text-cyan-600 dark:text-cyan-400">
                {content.titleGradient}
              </span>
            </h1>

            <p
              className={`max-w-2xl text-base sm:text-lg text-justify text-text-muted mb-8 sm:mb-10 leading-relaxed transition-all duration-700 delay-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {content.description}
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition-all duration-700 delay-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link
                href={content.primaryCta.href}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 transition-all duration-300 text-center hover:-translate-y-0.5 shadow-md"
              >
                {content.primaryCta.label}
              </Link>
              <Link
                href={content.secondaryCta.href}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold border border-glass-border bg-bg-card text-text-heading hover:border-cyan-600/50 dark:hover:border-cyan-400/50 transition-all duration-300 text-center hover:-translate-y-0.5"
              >
                {content.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`flex justify-center items-center gap-3 mt-8 transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {heroHomeData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'w-8 bg-cyan-600 dark:bg-cyan-400'
                  : 'w-2.5 bg-slate-400/40 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}