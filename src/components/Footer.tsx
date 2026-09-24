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
  HiOutlineArrowRight
} from 'react-icons/hi2';
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const { t } = useLanguage();
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isExtendedOpen, setIsExtendedOpen] = useState(false);

  const phone1 = process.env.NEXT_PUBLIC_CONTACT_PHONE_1 || '+58 412-0000000';
  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+58 412-0000000';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contacto@jvdevs.com';
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com';

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
    <footer className="footer-container relative w-full pt-14 pb-8 overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

        {/* Banner CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-blue-700 p-8 sm:p-12 text-white shadow-2xl border border-blue-600">
          <div className="relative z-10 max-w-2xl space-y-5">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-white/15 backdrop-blur-md border border-white/30 text-white uppercase tracking-widest">
              {t('Impulsa tu negocio', 'Scale your business')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-mono text-white drop-shadow-md">
              {t('¿Listo para transformar tu visión digital?', 'Ready to transform your digital vision?')}
            </h2>
            <p className="text-base sm:text-lg text-blue-50 font-medium leading-relaxed">
              {t(
                'Desarrollamos soluciones web de alto impacto y arquitectura de software a la medida para potenciar tu negocio.',
                'We build high-impact web solutions and custom software architecture to elevate your business.'
              )}
            </p>
            <div className="pt-3">
              <a
                href={`https://wa.me/${whatsappPhone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 font-mono font-bold text-base px-7 py-4 rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl"
              >
                <span>{t('Iniciar Proyecto', 'Start a Project')}</span>
                <HiOutlineArrowRight className="w-5 h-5 text-blue-700" />
              </a>
            </div>
          </div>

          <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute right-1/3 -top-20 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Logo dinámico en función del tema mediante Tailwind */}
          <div className="lg:col-span-4 flex items-center justify-center w-full h-full min-h-[22rem]">
            <div className="relative w-full h-[22rem]">
              <Image
                src="/images/logos/Footer_Claro.png"
                alt="JVDevs Logo"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain object-center filter drop-shadow-[0_4px_12px_rgba(37,99,235,0.2)] dark:hidden"
                priority
              />
              <Image
                src="/images/logos/Footer_Oscuro.png"
                alt="JVDevs Logo"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain object-center filter drop-shadow-[0_4px_12px_rgba(37,99,235,0.2)] hidden dark:block"
                priority
              />
            </div>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-4 space-y-3 pt-2">
            <h3 className="text-xs font-mono font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {t('Servicios & Soluciones', 'Services & Solutions')}
            </h3>
            <ul className="space-y-2.5 text-sm font-bold">
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
                      className="group flex items-center gap-2 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 shrink-0 group-hover:scale-125 transition-transform" />
                      <span 
                        style={{ color: 'var(--foreground)' }} 
                        className="font-bold hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        {titleText}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Horarios */}
          <div className="lg:col-span-4 space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <HiOutlineClock className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>{t('Disponibilidad', 'Operational Hours')}</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="bg-blue-800 text-white p-4 rounded-2xl flex items-center justify-between gap-3 shadow-lg border border-blue-700">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/20 shrink-0">
                    <HiOutlinePhone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      {t('Llamadas telefónicas', 'Phone Support')}
                    </p>
                    <p className="text-xs font-mono font-bold text-blue-100 select-all mt-0.5">
                      {phone1}
                    </p>
                    <p className="text-[11px] text-blue-200 font-mono font-medium">
                      {t('Lun - Vie: 8:00 AM - 6:00 PM', 'Mon - Fri: 8:00 AM - 6:00 PM')}
                    </p>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider shrink-0 ${
                  isPhoneOpen 
                    ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/40' 
                    : 'bg-red-600 text-white font-extrabold border border-red-400 shadow-md animate-pulse'
                }`}>
                  {isPhoneOpen ? t('EN LÍNEA', 'ONLINE') : t('CERRADO', 'CLOSED')}
                </span>
              </div>

              <div className="bg-blue-800 text-white p-4 rounded-2xl flex items-center justify-between gap-3 shadow-lg border border-blue-700">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1 shrink-0">
                    <div className="p-2 rounded-xl bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                      <FaWhatsapp className="w-3.5 h-3.5" />
                    </div>
                    <div className="p-2 rounded-xl bg-pink-400/20 text-pink-300 border border-pink-400/30">
                      <FaInstagram className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      WhatsApp & Instagram
                    </p>
                    <p className="text-xs font-mono font-bold text-blue-100 select-all mt-0.5">
                      {whatsappPhone}
                    </p>
                    <p className="text-[11px] text-blue-200 font-mono font-medium">
                      {t('Lun - Dom: hasta 9:00 PM', 'Mon - Sun: until 9:00 PM')}
                    </p>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider shrink-0 ${
                  isExtendedOpen 
                    ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/40' 
                    : 'bg-red-600 text-white font-extrabold border border-red-400 shadow-md animate-pulse'
                }`}>
                  {isExtendedOpen ? t('ACTIVO', 'ACTIVE') : t('CERRADO', 'CLOSED')}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Contacto y Redes */}
        <div className="bg-blue-800 text-white rounded-2xl p-4 sm:p-5 border border-blue-700 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/20">
              <HiOutlineEnvelope className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-mono font-bold text-blue-200 uppercase tracking-wider">
                {t('Correo de contacto', 'Contact Email')}
              </span>
              <a 
                href={`mailto:${contactEmail}`} 
                className="text-sm font-mono font-bold text-white hover:text-blue-200 transition-colors select-all"
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
              className="p-3 text-emerald-300 hover:scale-110 transition-transform"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 text-pink-300 hover:scale-110 transition-transform"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 text-white hover:scale-110 transition-transform"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 text-cyan-300 hover:scale-110 transition-transform"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-2">
          <p style={{ color: 'var(--text-muted)' }} className="text-xs sm:text-sm font-mono font-semibold">
            © 2026 {t('Desarrollado por', 'Developed by')}{' '}
            <span className="font-extrabold text-blue-600 dark:text-blue-400">JVDevs</span>
            . {t('Todos los derechos reservados.', 'All rights reserved.')}
          </p>
        </div>

      </div>
    </footer>
  );
}