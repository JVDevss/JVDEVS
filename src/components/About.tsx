'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/src/context/LanguageContext';
import { aboutData } from '@/src/data/about/aboutHome';
import { 
  HiOutlineArrowRight, 
  HiOutlineCheckCircle, 
  HiOutlineUserGroup, 
  HiOutlineCodeBracketSquare,
  HiOutlineRocketLaunch,
  HiOutlineEye,
  HiChevronLeft,
  HiChevronRight
} from 'react-icons/hi2';

export default function About() {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const totalSlides = 4;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section 
      id="about" 
      className="relative py-16 sm:py-24 md:py-32 2xl:py-40 overflow-hidden bg-bg-primary transition-colors duration-400 selection:bg-badge-text selection:text-bg-primary"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/bg/bg.png"
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20 dark:opacity-25"
        />
        <div className="absolute inset-0 bg-bg-primary/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />
      </div>

      <div className="absolute top-1/4 -right-32 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />

      <div className="max-w-6xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <span className="px-3.5 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-full bg-badge-bg text-badge-text border border-badge-border mb-4 shadow-sm">
            {t(aboutData.badgeKey, aboutData.badgeEn)}
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-heading max-w-4xl leading-[1.15]">
            {t(aboutData.titleKey, aboutData.titleEn)}{' '}
            <span className="text-cyan-600 dark:text-cyan-400">
              {t(aboutData.highlightKey, aboutData.highlightEn)}
            </span>
          </h2>
        </div>

        <div className="relative rounded-3xl border bg-bg-card border-glass-border backdrop-blur-2xl shadow-2xl overflow-hidden p-8 sm:p-12 md:p-16 min-h-[460px] flex flex-col justify-between">
          
          <div className="relative w-full">
            
            {activeSlide === 0 && (
              <div className="animate-fadeIn space-y-6">
                <div className="flex items-center gap-4 border-b border-glass-border pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <HiOutlineUserGroup className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-text-heading">
                      {t('Quiénes Somos', 'Who We Are')}
                    </h3>
                    <span className="text-xs sm:text-sm font-bold text-text-muted opacity-80">
                      {t('Desde 2026', 'Since 2026')}
                    </span>
                  </div>
                </div>
                <p className="text-lg sm:text-2xl text-text-muted leading-relaxed font-medium pt-2 text-justify">
                  {t(aboutData.description1Key, aboutData.description1En)}
                </p>
              </div>
            )}

            {activeSlide === 1 && (
              <div className="animate-fadeIn space-y-6">
                <div className="flex items-center gap-4 border-b border-glass-border pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <HiOutlineCodeBracketSquare className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-text-heading">
                      {t('Qué Hacemos', 'What We Do')}
                    </h3>
                    <span className="text-xs sm:text-sm font-bold text-text-muted opacity-80">
                      {t('Ingeniería de Software & Soluciones Tecnológicas', 'Software Engineering & Tech Solutions')}
                    </span>
                  </div>
                </div>
                <p className="text-lg sm:text-xl text-text-muted leading-relaxed font-medium text-justify">
                  {t(aboutData.description2Key, aboutData.description2En)}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {aboutData.missionVision.features.map((item) => (
                    <div key={item.keyEs} className="flex items-center gap-3 text-base text-text-heading font-semibold">
                      <HiOutlineCheckCircle className="w-6 h-6 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{t(item.keyEs, item.keyEn)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSlide === 2 && (
              <div className="animate-fadeIn space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                        <HiOutlineRocketLaunch className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-3xl font-extrabold text-text-heading">
                        {t('Nuestra Misión', 'Our Mission')}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-text-muted leading-relaxed font-medium text-justify">
                      {t(aboutData.missionVision.missionKey, aboutData.missionVision.missionEn)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                        <HiOutlineEye className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl sm:text-3xl font-extrabold text-text-heading">
                        {t('Nuestra Visión', 'Our Vision')}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-text-muted leading-relaxed font-medium text-justify">
                      {t(aboutData.missionVision.visionKey, aboutData.missionVision.visionEn)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSlide === 3 && (
              <div className="animate-fadeIn space-y-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-heading border-b border-glass-border pb-4">
                  {t('Principios que nos representan', 'Principles that represent us')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  {aboutData.values.map((val) => {
                    const IconComponent = val.Icon;
                    return (
                      <div key={val.id} className="flex flex-col items-start text-left space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-text-heading">
                          {t(val.titleKey, val.titleEn)}
                        </h4>
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium text-justify">
                          {t(val.descriptionKey, val.descriptionEn)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          <div className="flex items-center justify-between pt-8 mt-8 border-t border-glass-border">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === index 
                      ? 'w-8 bg-cyan-600 dark:bg-cyan-400' 
                      : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }`}
                  aria-label={`Ir a diapositiva ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-glass-border bg-bg-primary/50 hover:bg-cyan-500/10 text-text-heading flex items-center justify-center transition-colors duration-200"
                aria-label="Anterior"
              >
                <HiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-glass-border bg-bg-primary/50 hover:bg-cyan-500/10 text-text-heading flex items-center justify-center transition-colors duration-200"
                aria-label="Siguiente"
              >
                <HiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

        </div>

        <div className="flex justify-center mt-12 sm:mt-16">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            <span>{t('Iniciar un proyecto', 'Start a Project')}</span>
            <HiOutlineArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}