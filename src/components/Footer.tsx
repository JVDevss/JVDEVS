'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';
import { servicesData } from '@/src/data/services/servicesHome';
import { 
  HiOutlinePhone, 
  HiOutlineClock, 
  HiOutlineEnvelope,
  HiOutlineArrowUpRight
} from 'react-icons/hi2';
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const { t } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const [isPhoneAvailable, setIsPhoneAvailable] = useState(false);
  const [isWhatsappAvailable, setIsWhatsappAvailable] = useState(false);

  const phone1 = process.env.NEXT_PUBLIC_CONTACT_PHONE_1 || '';
  const phone2 = process.env.NEXT_PUBLIC_CONTACT_PHONE_2 || '';
  const email1 = process.env.NEXT_PUBLIC_CONTACT_EMAIL_1 || '';
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '';

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
      
      const day = vzlaDate.getDay();
      const hours = vzlaDate.getHours();
      const minutes = vzlaDate.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const isWeekday = day >= 1 && day <= 5;

      const phoneStart = 8 * 60 + 30;
      const phoneEnd = 17 * 60;
      setIsPhoneAvailable(isWeekday && totalMinutes >= phoneStart && totalMinutes < phoneEnd);

      const waStart = 8 * 60 + 30;
      const waEnd = 18 * 60;
      setIsWhatsappAvailable(isWeekday && totalMinutes >= waStart && totalMinutes < waEnd);
    };

    checkSchedules();
    const interval = setInterval(checkSchedules, 60000);
    return () => clearInterval(interval);
  }, []);

  const cleanPhone = (phone: string) => phone.replace(/[^0-9]/g, '');

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
              <span>{t('Canales de Atención', 'Support Channels')}</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {/* LLAMADAS TELEFÓNICAS */}
              <div className="bg-bg-card text-text-heading p-4 rounded-2xl flex flex-col gap-3 shadow-sm border border-glass-border">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl border shrink-0 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20">
                      <HiOutlinePhone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-heading">
                        {t('Llamadas Telefónicas', 'Phone Calls')}
                      </p>
                      <p className="text-[11px] text-text-muted font-mono font-medium">
                        {t('Lun - Vie: 8:30 AM - 5:00 PM', 'Mon - Fri: 8:30 AM - 5:00 PM')}
                      </p>
                    </div>
                  </div>

                  {!isPhoneAvailable && (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider shrink-0 bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
                      {t('CERRADO', 'CLOSED')}
                    </span>
                  )}
                </div>

                {/* Aviso explícito de fuera de horario */}
                {!isPhoneAvailable && (
                  <p className="text-[11px] font-medium text-rose-600 dark:text-rose-400 flex items-center gap-1 -mt-1">
                    <span>⚠️</span> {t('Fuera de horario de atención', 'Outside of support hours')}
                  </p>
                )}

                <div className="flex items-center gap-2 pt-1">
                  {phone1 && (
                    <a
                      href={isPhoneAvailable ? `tel:${phone1}` : undefined}
                      aria-disabled={!isPhoneAvailable}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-[11px] font-mono font-bold uppercase tracking-wider transition-all ${
                        isPhoneAvailable
                          ? 'bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 shadow-sm'
                          : 'bg-rose-500/5 dark:bg-rose-500/10 text-rose-600/70 dark:text-rose-400/70 border border-rose-500/20 dark:border-rose-500/30 pointer-events-none opacity-75 cursor-not-allowed'
                      }`}
                    >
                      <HiOutlinePhone className="w-3.5 h-3.5" />
                      <span>{t('Llamar Principal', 'Call Main')}</span>
                    </a>
                  )}

                  {phone2 && (
                    <a
                      href={isPhoneAvailable ? `tel:${phone2}` : undefined}
                      aria-disabled={!isPhoneAvailable}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-[11px] font-mono font-bold uppercase tracking-wider transition-all ${
                        isPhoneAvailable
                          ? 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20'
                          : 'bg-rose-500/5 dark:bg-rose-500/10 text-rose-600/70 dark:text-rose-400/70 border border-rose-500/20 dark:border-rose-500/30 pointer-events-none opacity-75 cursor-not-allowed'
                      }`}
                    >
                      <HiOutlinePhone className="w-3.5 h-3.5" />
                      <span>{t('Llamar Secundario', 'Call Secondary')}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="bg-bg-card text-text-heading p-4 rounded-2xl flex flex-col gap-3 shadow-sm border border-glass-border">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl border shrink-0 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                      <FaWhatsapp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-heading">
                        WhatsApp
                      </p>
                      <p className="text-[11px] text-text-muted font-mono font-medium">
                        {t('Lun - Vie: 8:30 AM - 6:00 PM', 'Mon - Fri: 8:30 AM - 6:00 PM')}
                      </p>
                    </div>
                  </div>

                  {!isWhatsappAvailable && (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider shrink-0 bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
                      {t('CERRADO', 'CLOSED')}
                    </span>
                  )}
                </div>

                {/* Aviso explícito de fuera de horario */}
                {!isWhatsappAvailable && (
                  <p className="text-[11px] font-medium text-rose-600 dark:text-rose-400 flex items-center gap-1 -mt-1">
                    <span>⚠️</span> {t('Fuera de horario de atención', 'Outside of support hours')}
                  </p>
                )}

                <div className="flex items-center gap-2 pt-1">
                  {phone1 && (
                    <a
                      href={isWhatsappAvailable ? `https://wa.me/${cleanPhone(phone1)}` : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled={!isWhatsappAvailable}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-[11px] font-mono font-bold uppercase tracking-wider transition-all ${
                        isWhatsappAvailable
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 shadow-sm'
                          : 'bg-rose-500/5 dark:bg-rose-500/10 text-rose-600/70 dark:text-rose-400/70 border border-rose-500/20 dark:border-rose-500/30 pointer-events-none opacity-75 cursor-not-allowed'
                      }`}
                    >
                      <span>{t('Chat Principal', 'Main Chat')}</span>
                      <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {phone2 && (
                    <a
                      href={isWhatsappAvailable ? `https://wa.me/${cleanPhone(phone2)}` : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled={!isWhatsappAvailable}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-[11px] font-mono font-bold uppercase tracking-wider transition-all ${
                        isWhatsappAvailable
                          ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : 'bg-rose-500/5 dark:bg-rose-500/10 text-rose-600/70 dark:text-rose-400/70 border border-rose-500/20 dark:border-rose-500/30 pointer-events-none opacity-75 cursor-not-allowed'
                      }`}
                    >
                      <span>{t('Chat Secundario', 'Secondary Chat')}</span>
                      <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-bg-card text-text-heading rounded-2xl p-4 sm:p-5 border border-glass-border flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          {email1 && (
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="p-2.5 rounded-xl bg-badge-bg text-badge-text border border-badge-border">
                <HiOutlineEnvelope className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono font-bold text-text-muted uppercase tracking-wider">
                  {t('Contacto por Correo', 'Email Contact')}
                </span>
                <a 
                  href={`mailto:${email1}`} 
                  className="text-xs sm:text-sm font-mono font-bold text-text-heading hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {t('Enviar mensaje por correo', 'Send an email message')}
                </a>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2.5">
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 text-pink-600 dark:text-pink-400 hover:scale-110 transition-transform"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            )}
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