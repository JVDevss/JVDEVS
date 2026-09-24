'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';
import { servicesData, servicesHeaderData } from '@/src/data/services/servicesHome';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function Services() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      id="services" 
      className="relative py-16 sm:py-24 md:py-32 2xl:py-40 4xl:py-52 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-400 selection:bg-[var(--badge-text)] selection:text-[var(--bg-primary)]"
    >
      <style jsx>{`
        @keyframes orb-float {
          0%, 100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(25px, -35px);
          }
        }
        .animate-orb-1 {
          animation: orb-float 12s ease-in-out infinite;
        }
        .animate-orb-2 {
          animation: orb-float 16s ease-in-out infinite reverse;
        }
      `}</style>

      {/* Orbes de iluminación ambiental con tamaños dinámicos para pantallas 2K/4K */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 sm:w-96 sm:h-96 2xl:w-[500px] 2xl:h-[500px] 4xl:w-[700px] 4xl:h-[700px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px] 2xl:blur-[180px] pointer-events-none -z-10 animate-orb-1" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 sm:w-96 sm:h-96 2xl:w-[500px] 2xl:h-[500px] 4xl:w-[700px] 4xl:h-[700px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px] 2xl:blur-[180px] pointer-events-none -z-10 animate-orb-2" />
      <div className="absolute inset-0 bg-[radial-gradient(var(--glass-border)_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px] 2xl:[background-size:32px_32px] pointer-events-none -z-10 opacity-40" />

      <div className="max-w-7xl 2xl:max-w-[1500px] 4xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Encabezado Principal */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20 2xl:mb-28">
          <h2 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl 4xl:text-7xl font-extrabold tracking-tight text-[var(--badge-text)] max-w-3xl 2xl:max-w-5xl leading-tight">
            {t(servicesHeaderData.titleKey, servicesHeaderData.titleEn)}
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg 2xl:text-xl 4xl:text-2xl text-[var(--foreground)] max-w-2xl 2xl:max-w-4xl font-medium leading-relaxed">
            {t(servicesHeaderData.subtitleKey, servicesHeaderData.subtitleEn)}
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 2xl:gap-10">
          {servicesData.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const IconComponent = service.Icon;

            return (
              <Link
                key={service.id}
                href={service.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex flex-col justify-between p-6 sm:p-8 2xl:p-10 rounded-2xl transition-all duration-300 ease-out border backdrop-blur-xl overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: isHovered ? 'var(--glass-border-hover)' : 'var(--glass-border)',
                  transform: isHovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0px) scale(1)',
                  boxShadow: isHovered 
                    ? '0 20px 40px -15px rgba(6, 182, 212, 0.15), 0 0 0 1px var(--glass-border-hover)' 
                    : '0 4px 20px -5px rgba(0, 0, 0, 0.03)',
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--badge-text)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6 sm:mb-8 2xl:mb-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 rounded-xl flex items-center justify-center border bg-[var(--btn-sec-bg)] border-[var(--btn-sec-border)] text-[var(--badge-text)] group-hover:border-[var(--glass-border-hover)] group-hover:bg-[var(--item-hover-bg)] group-hover:shadow-md transition-all duration-300">
                      <IconComponent className="w-6 h-6 2xl:w-8 2xl:h-8 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {service.badgeKey && service.badgeEn && (
                      <span className="px-2.5 py-1 text-[9px] sm:text-[10px] 2xl:text-xs font-bold uppercase tracking-wider rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                        {t(service.badgeKey, service.badgeEn)}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl 2xl:text-2xl 4xl:text-3xl font-bold text-[var(--text-heading)] mb-2.5 sm:mb-3 group-hover:text-[var(--badge-text)] transition-colors duration-300 tracking-tight">
                    {t(service.titleKey, service.titleEn)}
                  </h3>

                  <p className="text-xs sm:text-sm 2xl:text-base 4xl:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
                    {t(service.descriptionKey, service.descriptionEn)}
                  </p>
                </div>

                <div className="relative z-10 mt-6 sm:mt-8 2xl:mt-10 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs 2xl:text-sm font-semibold text-[var(--text-muted)] group-hover:text-[var(--badge-text)] transition-colors duration-300">
                    {t('Explorar servicio', 'Explore service')}
                  </span>
                  
                  <div className="w-7 h-7 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 rounded-lg flex items-center justify-center bg-[var(--btn-sec-bg)] border border-[var(--btn-sec-border)] text-[var(--text-muted)] group-hover:text-[var(--badge-text)] group-hover:border-[var(--glass-border-hover)] group-hover:translate-x-1 transition-all duration-300">
                    <HiArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}