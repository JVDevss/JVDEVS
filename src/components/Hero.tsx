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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 px-4 sm:px-6 lg:px-12 transition-colors duration-500">
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
              className="object-cover object-center transition-all duration-700 opacity-25 dark:opacity-60"
            />
          </div>
        ))}

        <div 
          className="absolute inset-0 transition-colors duration-500"
          style={{ backgroundColor: 'var(--hero-overlay)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto">
        <div
          className={`p-6 sm:p-10 lg:p-14 rounded-3xl backdrop-blur-xl border shadow-2xl transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--glass-border)',
          }}
        >
          <div className="flex flex-col items-center text-center">
            <div
              className={`inline-flex items-center px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full border mb-6 transition-all duration-700 delay-200 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{
                backgroundColor: 'var(--badge-bg)',
                borderColor: 'var(--badge-border)',
                color: 'var(--badge-text)',
              }}
            >
              {content.badge}
            </div>

            <h1
              className={`max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight transition-all duration-700 delay-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ color: 'var(--text-heading)' }}
            >
              {content.title} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 bg-clip-text text-transparent">
                {content.titleGradient}
              </span>
            </h1>

            <p
              className={`max-w-2xl text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed transition-all duration-700 delay-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ color: 'var(--text-muted)' }}
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
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 text-center hover:-translate-y-0.5"
              >
                {content.primaryCta.label}
              </Link>
              <Link
                href={content.secondaryCta.href}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold border backdrop-blur-md transition-all duration-300 text-center hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--btn-sec-bg)',
                  borderColor: 'var(--btn-sec-border)',
                  color: 'var(--btn-sec-text)',
                }}
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
                  ? 'w-8 bg-cyan-500 dark:bg-cyan-400'
                  : 'w-2.5 bg-slate-400/50 hover:bg-slate-400 dark:bg-white/30 dark:hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}