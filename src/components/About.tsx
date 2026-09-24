'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';
import { aboutData } from '@/src/data/about/aboutHome';
import { HiOutlineArrowRight, HiOutlineCheckCircle } from 'react-icons/hi2';

export default function About() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  return (
    <section 
      id="about" 
      className="relative py-16 sm:py-24 md:py-32 2xl:py-40 4xl:py-52 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-400 selection:bg-[var(--badge-text)] selection:text-[var(--bg-primary)]"
    >
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 6s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute top-1/3 -right-32 w-80 h-80 sm:w-[500px] sm:h-[500px] 2xl:w-[700px] 2xl:h-[700px] bg-cyan-500/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 sm:w-[500px] sm:h-[500px] 2xl:w-[700px] 2xl:h-[700px] bg-blue-600/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(var(--glass-border)_1px,transparent_1px)] [background-size:24px_24px] 2xl:[background-size:36px_36px] pointer-events-none -z-10 opacity-30" />

      <div className="max-w-7xl 2xl:max-w-[1500px] 4xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 2xl:mb-24">
          <span className="px-3.5 py-1.5 text-xs sm:text-sm 2xl:text-base font-extrabold uppercase tracking-widest rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] mb-4 sm:mb-6 shadow-sm">
            {t(aboutData.badgeKey, aboutData.badgeEn)}
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl 4xl:text-8xl font-black tracking-tight text-[var(--text-heading)] max-w-4xl 2xl:max-w-6xl leading-[1.15]">
            {t(aboutData.titleKey, aboutData.titleEn)}{' '}
            <span className="text-cyan-500 dark:text-cyan-400">
              {t(aboutData.highlightKey, aboutData.highlightEn)}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-16 items-center mb-16 sm:mb-24 2xl:mb-32">
          
          <div className="lg:col-span-5 relative group">
            <div 
              className="relative rounded-3xl p-6 sm:p-8 2xl:p-10 border backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-[var(--glass-border-hover)]"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--glass-border)'
              }}
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--glass-border)]">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-[var(--badge-text)] uppercase">
                    {t('Desarrollos de Software', 'Software Development')}
                  </span>
                </div>
                <span className="text-xs font-medium text-[var(--text-muted)]">
                  {t('Desde 2021', 'Since 2021')}
                </span>
              </div>

              <div className="flex rounded-xl bg-[var(--btn-sec-bg)] p-1 border border-[var(--glass-border)] mb-6">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex-1 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 ${
                    activeTab === 'mission'
                      ? 'bg-[var(--badge-text)] text-[var(--bg-primary)] shadow-md'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
                  }`}
                >
                  {t('Nuestra Misión', 'Our Mission')}
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex-1 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 ${
                    activeTab === 'vision'
                      ? 'bg-[var(--badge-text)] text-[var(--bg-primary)] shadow-md'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
                  }`}
                >
                  {t('Nuestra Visión', 'Our Vision')}
                </button>
              </div>

              <div className="min-h-[140px] sm:min-h-[160px] flex items-center">
                {activeTab === 'mission' ? (
                  <p className="text-sm sm:text-base 2xl:text-lg text-[var(--foreground)] leading-relaxed font-normal animate-in fade-in duration-300">
                    {t(aboutData.missionVision.missionKey, aboutData.missionVision.missionEn)}
                  </p>
                ) : (
                  <p className="text-sm sm:text-base 2xl:text-lg text-[var(--foreground)] leading-relaxed font-normal animate-in fade-in duration-300">
                    {t(aboutData.missionVision.visionKey, aboutData.missionVision.visionEn)}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--glass-border)] space-y-2.5">
                {aboutData.missionVision.features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] font-medium">
                    <HiOutlineCheckCircle className="w-4 h-4 text-[var(--badge-text)] shrink-0" />
                    <span>{t(item.keyEs, item.keyEn)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <p className="text-base sm:text-lg 2xl:text-2xl text-[var(--foreground)] font-normal leading-relaxed">
                {t(aboutData.description1Key, aboutData.description1En)}
              </p>
              <p className="text-sm sm:text-base 2xl:text-xl text-[var(--text-muted)] font-normal leading-relaxed">
                {t(aboutData.description2Key, aboutData.description2En)}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4">
              {aboutData.stats.map((stat) => (
                <div 
                  key={stat.id}
                  className="p-4 sm:p-5 2xl:p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--glass-border)'
                  }}
                >
                  <span className="block text-2xl sm:text-3xl 2xl:text-4xl 4xl:text-5xl font-black text-cyan-500 dark:text-cyan-400 mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm 2xl:text-base font-semibold text-[var(--text-muted)] leading-tight block">
                    {t(stat.labelKey, stat.labelEn)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-sm 2xl:text-base font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                <span>{t('Iniciar un proyecto', 'Start a Project')}</span>
                <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="text-center mb-10 sm:mb-14">
            <h3 className="text-xl sm:text-3xl 2xl:text-4xl font-extrabold text-[var(--text-heading)]">
              {t('Principios que impulsan nuestro código', 'Principles powering our code')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
            {aboutData.values.map((val) => {
              const IconComponent = val.Icon;
              return (
                <div
                  key={val.id}
                  className="group relative p-6 sm:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--glass-border)'
                  }}
                >
                  <div>
                    <div className="w-12 h-12 2xl:w-14 2xl:h-14 rounded-xl bg-[var(--btn-sec-bg)] border border-[var(--btn-sec-border)] flex items-center justify-center mb-6 group-hover:border-[var(--glass-border-hover)] transition-colors duration-300">
                      <IconComponent className="w-6 h-6 2xl:w-8 2xl:h-8 text-[var(--badge-text)] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h4 className="text-lg sm:text-xl 2xl:text-2xl font-bold text-[var(--text-heading)] mb-3 group-hover:text-[var(--badge-text)] transition-colors duration-300">
                      {t(val.titleKey, val.titleEn)}
                    </h4>
                    <p className="text-xs sm:text-sm 2xl:text-base text-[var(--text-muted)] leading-relaxed font-normal">
                      {t(val.descriptionKey, val.descriptionEn)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}