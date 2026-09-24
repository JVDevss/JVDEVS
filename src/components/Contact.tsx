'use client';

import { useState, useEffect } from 'react';
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

  // Variables de entorno con fallbacks
  const phone1 = process.env.NEXT_PUBLIC_CONTACT_PHONE_1 || '+584120000000';
  const phone2 = process.env.NEXT_PUBLIC_CONTACT_PHONE_2 || '';
  const email1 = process.env.NEXT_PUBLIC_CONTACT_EMAIL_1 || 'contacto@tuempresa.com';
  const email2 = process.env.NEXT_PUBLIC_CONTACT_EMAIL_2 || '';
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com';
  const instagramHandle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || '@tuempresa';

  // Lógica de horario telefónico (8:00 AM - 6:00 PM Venezuela)
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
      className="relative py-16 sm:py-24 bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden"
    >
      {/* Resplandor ambiental minimalista */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/5 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANNER ENCABEZADO ANIMADO */}
        <div className="text-center mb-10 sm:mb-14 relative">
          <div className="inline-block relative">
            {/* Aura brillante posterior */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 opacity-30 blur-lg animate-pulse" />
            
            <div 
              className="relative px-6 py-3 rounded-2xl border backdrop-blur-xl transition-all"
              style={{
                backgroundColor: 'var(--bg-glass)',
                borderColor: 'var(--glass-border)'
              }}
            >
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-500 via-indigo-400 to-emerald-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {t('¿Cómo contactarnos?', 'How to contact us?')}
              </h2>
            </div>
          </div>
          
          <p className="mt-4 text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto">
            {t('Selecciona el canal de tu preferencia para recibir asistencia directa.', 'Select your preferred channel to receive direct assistance.')}
          </p>
        </div>

        {/* BANNER PRINCIPAL LIQUID GLASS */}
        <div 
          className="relative rounded-3xl p-6 sm:p-8 md:p-10 border shadow-2xl backdrop-blur-2xl transition-all duration-300"
          style={{
            backgroundColor: 'var(--bg-glass)',
            borderColor: 'var(--glass-border)'
          }}
        >
          
          {/* GRID COMPACTO Y EQUILIBRADO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

            {/* TARJETA 1: WHATSAPP */}
            <a
              href={`https://wa.me/${phone1.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--item-bg)',
                borderColor: 'var(--item-border)'
              }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full blur-xl group-hover:bg-emerald-500/20 transition-all" />
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <HiOutlineArrowUpRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-lg font-bold text-[var(--text-heading)] mb-1">
                  WhatsApp
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-normal leading-relaxed mb-6">
                  {t('Atención rápida para cotizaciones y consultas.', 'Fast attention for quotes and inquiries.')}
                </p>
              </div>

              <div className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide text-white bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 shadow-md shadow-emerald-600/20 transition-all">
                <span>{t('Iniciar Chat', 'Start Chat')}</span>
              </div>
            </a>

            {/* TARJETA 2: LLAMADA TELEFÓNICA */}
            <div
              className="p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--item-bg)',
                borderColor: 'var(--item-border)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl border ${
                    isCallingAvailable 
                      ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' 
                      : 'bg-neutral-500/10 text-[var(--text-muted)] border-transparent'
                  }`}>
                    <HiOutlinePhone className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-heading)] mb-1">
                  {t('Llamada Telefónica', 'Phone Call')}
                </h3>
                <p className="font-mono text-xs text-[var(--text-muted)] mb-6">
                  {phone1}
                </p>
              </div>

              {isCallingAvailable ? (
                <a
                  href={`tel:${phone1}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide text-white bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 shadow-md shadow-cyan-600/20 transition-all"
                >
                  <HiOutlinePhone className="w-4 h-4" />
                  <span>{t('Llamar Ahora', 'Call Now')}</span>
                </a>
              ) : (
                <div className="py-2.5 px-3 rounded-xl border border-dashed border-[var(--glass-border)] text-center">
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {t('Línea Fuera de Horario', 'Line Off Hours')}
                  </span>
                </div>
              )}
            </div>

            {/* TARJETA 3: INSTAGRAM */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--item-bg)',
                borderColor: 'var(--item-border)'
              }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-bl-full blur-xl group-hover:bg-pink-500/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-pink-500/15 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                    <FaInstagram className="w-6 h-6" />
                  </div>
                  <HiOutlineArrowUpRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-pink-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-lg font-bold text-[var(--text-heading)] mb-1">
                  Instagram
                </h3>
                <p className="font-mono text-xs text-pink-500 font-semibold mb-6">
                  {instagramHandle}
                </p>
              </div>

              <div className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95 shadow-md transition-all">
                <span>{t('Ver Perfil', 'View Profile')}</span>
              </div>
            </a>

          </div>

          {/* CÁPSULA INFERIOR: CORREO ELECTRÓNICO */}
          <div 
            className="mt-6 p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 transition-all"
            style={{
              backgroundColor: 'var(--item-bg)',
              borderColor: 'var(--item-border)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--btn-sec-bg)] text-[var(--badge-text)] border border-[var(--glass-border)]">
                <HiOutlineEnvelope className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                {t('Contacto formal por correo electrónico:', 'Formal contact via email:')}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${email1}`}
                className="action-btn px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium"
              >
                {email1}
              </a>
              {email2 && (
                <a
                  href={`mailto:${email2}`}
                  className="action-btn px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium"
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