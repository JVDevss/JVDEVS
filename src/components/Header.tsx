'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';
import { servicesData } from '@/src/data/services/servicesHome';
import { 
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineEnvelope,
  HiOutlineLanguage,
  HiBars3,
  HiXMark,
  HiChevronDown,
  HiArrowRight
} from 'react-icons/hi2';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [supportsHover, setSupportsHover] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    }

    const hoverQuery = window.matchMedia('(hover: hover)');
    setSupportsHover(hoverQuery.matches);

    const handleHoverChange = (e: MediaQueryListEvent) => setSupportsHover(e.matches);
    hoverQuery.addEventListener('change', handleHoverChange);

    return () => hoverQuery.removeEventListener('change', handleHoverChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (!supportsHover) {
        setIsHeaderVisible(true);
        return;
      }

      if (currentScrollY === 0) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
        setIsServicesOpen(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (supportsHover && e.clientY <= 50) {
        setIsHeaderVisible(true);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [supportsHover]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  const handleServiceClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(false);
  };

  return (
    <>
      <style jsx global>{`
        * {
          scrollbar-width: thin;
          scrollbar-color: #06b6d4 transparent;
        }

        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: var(--bg-primary, #090d16);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #0284c7 0%, #06b6d4 100%);
          border-radius: 9999px;
          border: 2px solid var(--bg-primary, #090d16);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #0369a1 0%, #22d3ee 100%);
        }
      `}</style>

      {supportsHover && (
        <div 
          className="fixed top-0 left-0 w-full h-12 z-50 pointer-events-auto" 
          onMouseEnter={() => setIsHeaderVisible(true)}
        />
      )}

      <header 
        onMouseEnter={() => supportsHover && setIsHeaderVisible(true)}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out selection:bg-[var(--badge-text)] selection:text-[var(--bg-primary)] ${
          isHeaderVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`w-full transition-all duration-300 relative border-b backdrop-blur-2xl ${
            scrolled 
              ? 'py-2 shadow-xl bg-[var(--mega-bg)]/90 border-[var(--glass-border)]' 
              : 'py-2.5 sm:py-3 bg-[var(--mega-bg)]/75 border-cyan-500/10'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
            
            <Link href="/" className="flex items-center group shrink-0" aria-label="JVDevs Home">
              <div className="relative h-[73px] sm:h-[71px] lg:h-[74px] w-[179px] sm:w-[202px] lg:w-[229px] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={isDarkMode ? '/images/logos/Logo_Oscuro.png' : '/images/logos/Logo_Claro.png'}
                  alt="JVDevs Logo"
                  fill
                  sizes="(max-width: 640px) 179px, (max-width: 1024px) 202px, 229px"
                  className="object-contain dark:blur-[0.2px] dark:brightness-95 transition-all duration-300"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide">
              <Link 
                href="/" 
                className="relative text-[var(--foreground)] hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                onMouseEnter={handleServiceClick}
              >
                {t('Inicio', 'Home')}
              </Link>

              <div
                ref={dropdownRef}
                className="relative py-1"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1.5 py-1 text-[var(--foreground)] hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {t('Servicios', 'Services')}
                  <HiChevronDown
                    className={`w-4 h-4 text-cyan-600 dark:text-cyan-400 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] lg:w-[720px] pt-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div 
                      className="w-full p-4 rounded-2xl border shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-3 backdrop-blur-2xl"
                      style={{
                        backgroundColor: 'var(--mega-bg)',
                        borderColor: 'var(--glass-border)'
                      }}
                    >
                      {servicesData.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          onClick={handleServiceClick}
                          className="mega-card flex items-center justify-between gap-3 p-3 rounded-xl group hover:bg-cyan-500/10 transition-colors"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div 
                              className="p-2 rounded-lg border group-hover:scale-105 transition-transform duration-300 shrink-0"
                              style={{
                                backgroundColor: 'var(--bg-primary)',
                                borderColor: 'var(--glass-border)'
                              }}
                            >
                              <service.Icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-[var(--text-heading)] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                                  {t(service.titleKey, service.titleEn)}
                                </span>
                                {service.badgeKey && service.badgeEn && (
                                  <span className="px-1.5 py-0.5 text-[8px] font-bold uppercase rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                                    {t(service.badgeKey, service.badgeEn)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <HiArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-600 dark:text-cyan-400 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="#about" 
                className="relative text-[var(--foreground)] hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                onMouseEnter={handleServiceClick}
              >
                {t('Nosotros', 'About Us')}
              </Link>

              <Link 
                href="#portfolio" 
                className="relative text-[var(--foreground)] hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                onMouseEnter={handleServiceClick}
              >
                {t('Portafolio', 'Portfolio')}
              </Link>
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-3">
              <button
                onClick={toggleLanguage}
                className="action-btn flex items-center gap-1 p-2 sm:px-3 sm:py-2 text-xs font-bold rounded-xl shadow-sm border border-[var(--glass-border)] bg-[var(--bg-primary)]/50 hover:bg-[var(--bg-primary)] transition-colors"
                aria-label="Change Language"
              >
                <HiOutlineLanguage className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400" />
                <span className="uppercase font-bold tracking-wider">{language}</span>
              </button>

              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="action-btn p-2 sm:p-2.5 rounded-xl shadow-sm border border-[var(--glass-border)] bg-[var(--bg-primary)]/50 hover:bg-[var(--bg-primary)] transition-colors"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? (
                  <HiOutlineSun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                ) : (
                  <HiOutlineMoon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                )}
              </button>

              <Link
                href="#contact"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded-xl bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-cyan-500/25 shrink-0"
                aria-label="Contact"
              >
                <span>{t('Contacto', 'Contact')}</span>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="action-btn lg:hidden p-2 sm:p-2.5 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/50 text-[var(--foreground)]"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <HiXMark className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                ) : (
                  <HiBars3 className="w-5 h-5 text-[var(--foreground)]" />
                )}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div 
              className="lg:hidden mt-2 mx-4 p-5 rounded-2xl border shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 backdrop-blur-2xl"
              style={{
                backgroundColor: 'var(--mega-bg)',
                borderColor: 'var(--glass-border)',
                color: 'var(--foreground)'
              }}
            >
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-semibold py-2 border-b hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                style={{ borderColor: 'var(--glass-border)' }}
              >
                {t('Inicio', 'Home')}
              </Link>

              <div className="space-y-2">
                <span className="block text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-extrabold pt-1">
                  {t('Servicios', 'Services')}
                </span>
                <div className="pl-3 space-y-2 border-l-2 border-cyan-500/30">
                  {servicesData.map((s) => (
                    <Link
                      key={s.id}
                      href={s.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-sm font-medium text-[var(--text-muted)] hover:text-cyan-600 dark:hover:text-cyan-400 py-1.5 transition-colors"
                    >
                      <s.Icon className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{t(s.titleKey, s.titleEn)}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-semibold py-2 border-b hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                style={{ borderColor: 'var(--glass-border)' }}
              >
                {t('Nosotros', 'About Us')}
              </Link>

              <Link
                href="#portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-semibold py-2 border-b hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                style={{ borderColor: 'var(--glass-border)' }}
              >
                {t('Portafolio', 'Portfolio')}
              </Link>

              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full mt-2 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded-xl bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-md"
              >
                <HiOutlineEnvelope className="w-4 h-4" />
                <span>{t('Contacto', 'Contact')}</span>
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}