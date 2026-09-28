'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/src/context/LanguageContext';
import { 
  HiOutlinePhone, 
  HiOutlineEnvelope, 
  HiOutlineArrowUpRight 
} from 'react-icons/hi2';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const { t } = useLanguage();
  const [isCallingAvailable, setIsCallingAvailable] = useState<boolean>(false);

  const phone1 = process.env.NEXT_PUBLIC_CONTACT_PHONE_1 || '+584120000000';
  const phone2 = process.env.NEXT_PUBLIC_CONTACT_PHONE_2 || '';
  const email1 = process.env.NEXT_PUBLIC_CONTACT_EMAIL_1 || 'contacto@tuempresa.com';
  const email2 = process.env.NEXT_PUBLIC_CONTACT_EMAIL_2 || '';
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com';
  const instagramHandle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || '@tuempresa';

  useEffect(() => {
    const checkVenezuelaTime = () => {
      const now = new Date();
      const vzlaTimeString = now.toLocaleString('en-US', { timeZone: 'America/Caracas', hour12: false });
      const vzlaDate = new Date(vzlaTimeString);
      const hours = vzlaDate.getHours();

      setIsCallingAvailable(hours >= 8 && hours < 18);
    };

    checkVenezuelaTime();
    const interval = setInterval(checkVenezuelaTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="contact" 
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

      <div className="absolute top-1/3 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />

      <div className="max-w-6xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="px-3.5 py-1.5 text-xs sm:text-sm 2xl:text-base font-extrabold uppercase tracking-widest rounded-full bg-badge-bg text-badge-text border border-badge-border mb-4 shadow-sm">
            {t('Contacto', 'Contact')}
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-black tracking-tight text-text-heading max-w-3xl leading-[1.15] mb-4">
            {t('¿Cómo ', 'How to ')}
            <span className="text-cyan-600 dark:text-cyan-400">
              {t('contactarnos?', 'contact us?')}
            </span>
          </h2>

          <p className="text-sm sm:text-base 2xl:text-xl text-text-muted max-w-xl font-normal leading-relaxed">
            {t('Selecciona el canal de tu preferencia para recibir asistencia directa e inmediata.', 'Select your preferred channel to receive direct and immediate assistance.')}
          </p>
        </div>

        <div className="p-6 sm:p-10 2xl:p-12 rounded-3xl border bg-bg-card border-glass-border backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <a
              href={`https://wa.me/${phone1.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 sm:p-8 rounded-2xl border border-glass-border bg-btn-sec-bg hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 shadow-sm"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full blur-xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <HiOutlineArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-text-heading mb-2">
                  WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-8">
                  {t('Atención rápida para cotizaciones, soporte y consultas directas.', 'Fast attention for quotes, support, and direct inquiries.')}
                </p>
              </div>

              <div className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 transition-all shadow-md">
                <span>{t('Iniciar Chat', 'Start Chat')}</span>
              </div>
            </a>

            <div className="p-6 sm:p-8 rounded-2xl border border-glass-border bg-btn-sec-bg flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-xl border ${
                    isCallingAvailable 
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' 
                      : 'bg-neutral-500/10 text-text-muted border-transparent'
                  }`}>
                    <HiOutlinePhone className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-heading mb-2">
                  {t('Llamada Telefónica', 'Phone Call')}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-text-muted mb-8">
                  {phone1}
                </p>
              </div>

              {isCallingAvailable ? (
                <a
                  href={`tel:${phone1}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 transition-all shadow-md"
                >
                  <HiOutlinePhone className="w-4 h-4" />
                  <span>{t('Llamar Ahora', 'Call Now')}</span>
                </a>
              ) : (
                <div className="py-3 px-4 rounded-xl border border-dashed border-glass-border text-center">
                  <span className="text-xs font-mono text-text-muted">
                    {t('Línea Fuera de Horario', 'Line Off Hours')}
                  </span>
                </div>
              )}
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 sm:p-8 rounded-2xl border border-glass-border bg-btn-sec-bg hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 shadow-sm"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-bl-full blur-xl group-hover:bg-pink-500/20 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                    <FaInstagram className="w-6 h-6" />
                  </div>
                  <HiOutlineArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-pink-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-text-heading mb-2">
                  Instagram
                </h3>
                <p className="font-mono text-xs sm:text-sm text-pink-600 dark:text-pink-400 font-semibold mb-8">
                  {instagramHandle}
                </p>
              </div>

              <div className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-pink-600 hover:bg-pink-500 dark:bg-pink-500 dark:hover:bg-pink-400 transition-all shadow-md">
                <span>{t('Ver Perfil', 'View Profile')}</span>
              </div>
            </a>

          </div>

          <div className="mt-6 p-4 sm:p-6 rounded-2xl border border-glass-border bg-btn-sec-bg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-badge-bg text-badge-text border border-badge-border">
                <HiOutlineEnvelope className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-text-muted">
                {t('Contacto formal por correo electrónico:', 'Formal contact via email:')}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email1}`}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-text-heading bg-bg-card border border-glass-border hover:border-cyan-500 transition-all"
              >
                {email1}
              </a>
              {email2 && (
                <a
                  href={`mailto:${email2}`}
                  className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-text-heading bg-bg-card border border-glass-border hover:border-cyan-500 transition-all"
                >
                  {email2}
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}