'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';
import { servicesData } from '@/src/data/services/servicesHome';
import { 
  HiOutlinePhone, 
  HiOutlineClock, 
  HiOutlineEnvelope
} from 'react-icons/hi2';
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const { t } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isExtendedOpen, setIsExtendedOpen] = useState(false);

  const phone1 = process.env.NEXT_PUBLIC_CONTACT_PHONE_1 || '+58 412-0000000';
  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+58 412-0000000';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contacto@jvdevs.com';
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com';

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    }

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkSchedules = () => {
      const now = new Date();
      const vzlaTimeString = now.toLocaleString('en-US', { timeZone: 'America/Caracas', hour12: false });
      const vzlaDate = new Date(vzlaTimeString);
      const hours = vzlaDate.getHours();
      const day = vzlaDate.getDay();

      const isWeekday = day >= 1 && day <= 5;
      setIsPhoneOpen(isWeekday && hours >= 8 && hours < 18);
      setIsExtendedOpen(hours >= 8 && hours < 21);
    };

    checkSchedules();
    const interval = setInterval(checkSchedules, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-container relative w-full pt-14 pb-8 overflow-hidden bg-bg-primary transition-colors duration-400 selection:bg-badge-text selection:text-bg-primary">
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

      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          <div className="lg:col-span-4 flex items-center justify-center w-full h-full min-h-[22rem]">
            <div className="relative w-full h-[22rem]">
              <Image
                src={isDarkMode ? '/images/logos/Footer_Oscuro.png' : '/images/logos/Footer_Claro.png'}
                alt="JVDevs Logo"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain object-center filter drop-shadow-[0_4px_12px_rgba(37,99,235,0.2)] transition-all duration-300"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4 pt-2">
            <h3 className="text-xs font-mono font-extrabold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              {t('Servicios & Soluciones', 'Services & Solutions')}
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {servicesData.map((service: any, index: number) => {
                const titleText = 
                  (service.titleKey ? t(service.titleKey, service.titleEn || '') : '') || 
                  service.title || 
                  service.name || 
                  `Servicio ${index + 1}`;

                return (
                  <li key={service.id || index}>
                    <Link
                      href={service.href || '#'}
                      className="group flex items-center gap-2.5 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="font-bold text-text-heading hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                        {titleText}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <HiOutlineClock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{t('Disponibilidad', 'Operational Hours')}</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="bg-bg-card text-text-heading p-4 rounded-2xl flex items-center justify-between gap-3 shadow-sm border border-glass-border">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                    <HiOutlinePhone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-heading">
                      {t('Llamadas telefónicas', 'Phone Support')}
                    </p>
                    <p className="text-xs font-mono font-bold text-text-muted select-all mt-0.5">
                      {phone1}
                    </p>
                    <p className="text-[11px] text-text-muted font-mono font-medium">
                      {t('Lun - Vie: 8:00 AM - 6:00 PM', 'Mon - Fri: 8:00 AM - 6:00 PM')}
                    </p>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider shrink-0 ${
                  isPhoneOpen 
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' 
                    : 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                }`}>
                  {isPhoneOpen ? t('EN LÍNEA', 'ONLINE') : t('CERRADO', 'CLOSED')}
                </span>
              </div>

              <div className="bg-bg-card text-text-heading p-4 rounded-2xl flex items-center justify-between gap-3 shadow-sm border border-glass-border">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1 shrink-0">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <FaWhatsapp className="w-3.5 h-3.5" />
                    </div>
                    <div className="p-2 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                      <FaInstagram className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-heading">
                      WhatsApp & Instagram
                    </p>
                    <p className="text-xs font-mono font-bold text-text-muted select-all mt-0.5">
                      {whatsappPhone}
                    </p>
                    <p className="text-[11px] text-text-muted font-mono font-medium">
                      {t('Lun - Dom: hasta 9:00 PM', 'Mon - Sun: until 9:00 PM')}
                    </p>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider shrink-0 ${
                  isExtendedOpen 
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' 
                    : 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                }`}>
                  {isExtendedOpen ? t('ACTIVO', 'ACTIVE') : t('CERRADO', 'CLOSED')}
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-bg-card text-text-heading rounded-2xl p-4 sm:p-5 border border-glass-border flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="p-2.5 rounded-xl bg-badge-bg text-badge-text border border-badge-border">
              <HiOutlineEnvelope className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-mono font-bold text-text-muted uppercase tracking-wider">
                {t('Correo de contacto', 'Contact Email')}
              </span>
              <a 
                href={`mailto:${contactEmail}`} 
                className="text-sm font-mono font-bold text-text-heading hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors select-all"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={`https://wa.me/${whatsappPhone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 text-emerald-600 dark:text-emerald-400 hover:scale-110 transition-transform"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 text-pink-600 dark:text-pink-400 hover:scale-110 transition-transform"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 text-text-heading hover:scale-110 transition-transform"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 text-cyan-600 dark:text-cyan-400 hover:scale-110 transition-transform"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center pt-2">
          <p className="text-xs sm:text-sm font-mono font-semibold text-text-muted">
            © 2026 {t('Desarrollado por', 'Developed by')}{' '}
            <span className="font-extrabold text-cyan-600 dark:text-cyan-400">JVDevs</span>
            . {t('Todos los derechos reservados.', 'All rights reserved.')}
          </p>
        </div>

      </div>
    </footer>
  );
}