'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/src/context/LanguageContext';
import { servicesData, servicesHeaderData as rawServicesHeaderData } from '@/src/data/services/servicesHome';
import { 
  HiArrowUpRight, 
  HiOutlineComputerDesktop, 
  HiOutlineDevicePhoneMobile, 
  HiOutlineSun, 
  HiOutlineMoon,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineChartBar,
  HiOutlinePlus
} from 'react-icons/hi2';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

interface ServicesHeader {
  titleKey: string;
  titleEn: string;
  subtitleKey: string;
  subtitleEn: string;
  highlightKey?: string;
  highlightEn?: string;
}

const servicesHeaderData = rawServicesHeaderData as ServicesHeader;

export default function Services() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [previewTheme, setPreviewTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [webActiveTab, setWebActiveTab] = useState<'inicio' | 'servicios' | 'contacto'>('inicio');

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: '¡Hola! 👋 ¿En qué podemos ayudarte hoy?' }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');

  const [cartCount, setCartCount] = useState<number>(0);
  const [appScreen, setAppScreen] = useState<'feed' | 'profile'>('feed');

  const activeService = servicesData[activeTab] || servicesData[0];
  const IconComponent = activeService.Icon;

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputMessage('');

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Gracias por consultar sobre "${userText}". ¡Podemos integrar un bot inteligente adaptado a tu negocio!`,
        },
      ]);
    }, 800);
  };

  const handleServiceClick = (index: number) => {
    setActiveTab(index);
    const targetElement = document.getElementById('service-detail-card');
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNextService = () => {
    setActiveTab((prev) => (prev + 1) % servicesData.length);
  };

  const handlePrevService = () => {
    setActiveTab((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const renderServicePreview = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className={`mx-auto transition-all duration-300 ${previewDevice === 'mobile' ? 'w-[300px]' : 'w-full'} rounded-2xl border border-glass-border p-5 shadow-2xl ${
            previewTheme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
          }`}>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/30">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <div className="ml-2 text-[10px] font-mono opacity-60 truncate">https://tu-proyecto.com</div>
              </div>
            </div>

            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/20 gap-2">
              <div className="text-xs font-bold tracking-wider text-cyan-500 shrink-0">
                MI_MARCA
              </div>

              {previewDevice === 'desktop' && (
                <div className="flex items-center bg-slate-800/60 p-1 rounded-full border border-slate-700/50 text-[11px] font-medium">
                  <button
                    type="button"
                    onClick={() => setWebActiveTab('inicio')}
                    className={`px-3 py-1 rounded-full transition-all duration-200 ${
                      webActiveTab === 'inicio' ? 'bg-slate-800 text-cyan-400 font-bold shadow-sm' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {t('Inicio', 'Home')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setWebActiveTab('servicios')}
                    className={`px-3 py-1 rounded-full transition-all duration-200 ${
                      webActiveTab === 'servicios' ? 'bg-slate-800 text-cyan-400 font-bold shadow-sm' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {t('Servicios', 'Services')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setWebActiveTab('contacto')}
                    className={`px-3 py-1 rounded-full transition-all duration-200 ${
                      webActiveTab === 'contacto' ? 'bg-slate-800 text-cyan-400 font-bold shadow-sm' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {t('Contacto', 'Contact')}
                  </button>
                </div>
              )}

              <div className="flex items-center gap-2 shrink-0">
                <HiOutlineMagnifyingGlass className="w-3.5 h-3.5 opacity-70 cursor-pointer hover:opacity-100" />
                <HiOutlineShoppingCart className="w-3.5 h-3.5 opacity-70 cursor-pointer hover:opacity-100" />
                {previewDevice === 'mobile' && (
                  <button 
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                    className="p-1 rounded bg-slate-800/40 text-xs"
                  >
                    {mobileMenuOpen ? <HiOutlineXMark className="w-4 h-4" /> : <HiOutlineBars3 className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>

            {previewDevice === 'mobile' && mobileMenuOpen && (
              <div className="mb-3 p-2 rounded-lg bg-slate-800/50 flex flex-col gap-1 text-[11px] font-medium animate-fadeIn">
                <button 
                  type="button"
                  onClick={() => { setWebActiveTab('inicio'); setMobileMenuOpen(false); }} 
                  className={`text-left p-1 rounded ${webActiveTab === 'inicio' ? 'text-cyan-400 font-bold' : 'opacity-80'}`}
                >
                  {t('Inicio', 'Home')}
                </button>
                <button 
                  type="button"
                  onClick={() => { setWebActiveTab('servicios'); setMobileMenuOpen(false); }} 
                  className={`text-left p-1 rounded ${webActiveTab === 'servicios' ? 'text-cyan-400 font-bold' : 'opacity-80'}`}
                >
                  {t('Servicios', 'Services')}
                </button>
                <button 
                  type="button"
                  onClick={() => { setWebActiveTab('contacto'); setMobileMenuOpen(false); }} 
                  className={`text-left p-1 rounded ${webActiveTab === 'contacto' ? 'text-cyan-400 font-bold' : 'opacity-80'}`}
                >
                  {t('Contacto', 'Contact')}
                </button>
              </div>
            )}

            <div className="space-y-3 min-h-[140px] flex flex-col justify-center">
              {webActiveTab === 'inicio' && (
                <div className="space-y-2">
                  <div className="text-sm font-bold text-cyan-400">
                    {t('Potencia tu negocio', 'Boost your business')}
                  </div>
                  <p className="text-[11px] opacity-80 leading-relaxed">
                    {t('Desarrollamos soluciones digitales a medida con tecnología moderna.', 'We develop custom digital solutions with modern technology.')}
                  </p>
                  <div className="pt-1 flex gap-2">
                    <button type="button" className="h-6 px-3 bg-cyan-600 text-white text-[10px] font-bold rounded flex items-center justify-center hover:bg-cyan-500 transition-colors">
                      {t('Empezar', 'Get Started')}
                    </button>
                  </div>
                </div>
              )}

              {webActiveTab === 'servicios' && (
                <div className="space-y-2">
                  <div className="text-xs font-bold border-b border-slate-700/30 pb-1">
                    {t('Nuestros Servicios', 'Our Services')}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                    <div className="p-1.5 rounded bg-slate-800/30 border border-slate-700/30">Web Design</div>
                    <div className="p-1.5 rounded bg-slate-800/30 border border-slate-700/30">E-Commerce</div>
                    <div className="p-1.5 rounded bg-slate-800/30 border border-slate-700/30">SEO Marketing</div>
                    <div className="p-1.5 rounded bg-slate-800/30 border border-slate-700/30">App Dev</div>
                  </div>
                </div>
              )}

              {webActiveTab === 'contacto' && (
                <div className="space-y-1.5 text-[10px]">
                  <div className="text-xs font-bold text-cyan-400">{t('Escríbenos', 'Contact Us')}</div>
                  <input type="text" placeholder={t('Nombre', 'Name')} className="w-full p-1 rounded bg-slate-800/40 border border-slate-700/40 text-[10px]" disabled />
                  <input type="email" placeholder={t('Correo', 'Email')} className="w-full p-1 rounded bg-slate-800/40 border border-slate-700/40 text-[10px]" disabled />
                  <button type="button" className="w-full py-1 bg-cyan-600 text-white font-bold rounded text-[9px]">
                    {t('Enviar', 'Send')}
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="w-full max-w-md mx-auto flex flex-col h-[320px] rounded-2xl border border-glass-border bg-slate-950 text-white overflow-hidden shadow-2xl">
            <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-slate-200">
                Chatbot IA
              </span>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-none'
                      : 'bg-slate-800 text-slate-200 border border-slate-700/50 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-2.5 bg-slate-900 border-t border-slate-800 flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={t('Escribe un mensaje de prueba...', 'Type a test message...')}
                className="flex-1 bg-slate-950 text-xs px-3.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500 text-white"
              />
              <button 
                type="submit" 
                aria-label="Send message"
                className="p-2.5 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition-colors"
              >
                <HiOutlinePaperAirplane className="w-4 h-4" />
              </button>
            </form>
          </div>
        );

      case 2:
        return (
          <div className="w-full max-w-md mx-auto p-4 rounded-2xl border border-glass-border bg-slate-900 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <span className="text-xs font-bold tracking-wider text-cyan-400">E-COMMERCE STORE</span>
              <div className="relative">
                <HiOutlineShoppingCart className="w-5 h-5 text-slate-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-cyan-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 1, name: 'Producto Pro', price: '$49.99' },
                { id: 2, name: 'Servicio VIP', price: '$99.99' }
              ].map((prod) => (
                <div key={prod.id} className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/50 flex flex-col justify-between">
                  <div>
                    <div className="w-full h-16 bg-slate-700/40 rounded-lg mb-2 flex items-center justify-center text-slate-500 text-xs font-mono">
                      IMG DEMO
                    </div>
                    <div className="text-xs font-bold text-slate-200">{prod.name}</div>
                    <div className="text-[11px] text-cyan-400 font-semibold">{prod.price}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCartCount((prev) => prev + 1)}
                    className="mt-3 py-1.5 px-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 transition-colors"
                  >
                    <HiOutlinePlus className="w-3 h-3" />
                    <span>{t('Añadir', 'Add')}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="w-full max-w-md mx-auto p-4 rounded-2xl border border-glass-border bg-slate-900 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <HiOutlineChartBar className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-slate-200">SEO & Marketing Performance</span>
              </div>
              <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-mono">+142%</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-400">Tráfico Orgánico</span>
                  <span className="font-bold text-cyan-400">12,450 visitas</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[78%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-400">Indexación Google</span>
                  <span className="font-bold text-green-400">100% Optimizado</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[100%]" />
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="w-[240px] mx-auto p-3 rounded-[30px] border-4 border-slate-800 bg-slate-950 text-white shadow-2xl">
            <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-3" />
            <div className="bg-slate-900 rounded-2xl p-3 min-h-[180px] flex flex-col justify-between">
              {appScreen === 'feed' ? (
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-cyan-400">App Feed</div>
                  <div className="p-2 bg-slate-800 rounded-lg text-[9px] text-slate-300">Notificación Push recibida 🚀</div>
                  <div className="p-2 bg-slate-800 rounded-lg text-[9px] text-slate-300">Nuevas funciones disponibles</div>
                </div>
              ) : (
                <div className="text-center space-y-2 py-4">
                  <div className="w-8 h-8 bg-cyan-500/20 text-cyan-400 rounded-full mx-auto flex items-center justify-center font-bold text-xs">US</div>
                  <div className="text-[10px] font-bold">Perfil de Usuario</div>
                  <div className="text-[8px] text-slate-400">Suscripción Activa</div>
                </div>
              )}
              <div className="flex justify-around pt-2 border-t border-slate-800 text-[9px]">
                <button type="button" onClick={() => setAppScreen('feed')} className={appScreen === 'feed' ? 'text-cyan-400 font-bold' : 'text-slate-500'}>Feed</button>
                <button type="button" onClick={() => setAppScreen('profile')} className={appScreen === 'profile' ? 'text-cyan-400 font-bold' : 'text-slate-500'}>Perfil</button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeService.highlightsKey.map((featureKey, i) => (
              <div key={i} className="flex items-center gap-3.5 p-4 rounded-2xl border border-glass-border bg-btn-sec-bg shadow-sm backdrop-blur-md">
                <HiOutlineCheckCircle className="w-5 h-5 text-badge-text shrink-0" />
                <span className="text-sm font-bold text-text-heading">
                  {t(featureKey, activeService.highlightsEn[i] || featureKey)}
                </span>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <section 
      id="services" 
      className="relative py-16 sm:py-24 md:py-32 2xl:py-40 overflow-hidden bg-bg-primary transition-colors duration-400 selection:bg-badge-text selection:text-bg-primary"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/bg/bg.png"
          alt="Services Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20 dark:opacity-25"
        />
        <div className="absolute inset-0 bg-bg-primary/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />
      </div>

      <div className="absolute top-1/4 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />

      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="px-3.5 py-1.5 text-xs sm:text-sm 2xl:text-base font-extrabold uppercase tracking-widest rounded-full bg-badge-bg text-badge-text border border-badge-border mb-4 shadow-sm">
            {t('Servicios', 'Services')}
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-black tracking-tight text-text-heading max-w-4xl leading-[1.15] mb-4">
            {t(servicesHeaderData.titleKey, servicesHeaderData.titleEn)}{' '}
            {servicesHeaderData.highlightKey && servicesHeaderData.highlightEn && (
              <span className="text-[#00d8ff] dark:text-[#00d8ff] text-cyan-600">
                {t(servicesHeaderData.highlightKey, servicesHeaderData.highlightEn)}
              </span>
            )}
          </h2>

          <p className="text-sm sm:text-base 2xl:text-xl text-text-muted max-w-xl font-normal leading-relaxed">
            {t(servicesHeaderData.subtitleKey, servicesHeaderData.subtitleEn)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3.5 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
            {servicesData.map((service, index) => {
              const isActive = activeTab === index;
              const ServiceIcon = service.Icon;

              return (
                <button
                  key={service.id || index}
                  type="button"
                  onClick={() => handleServiceClick(index)}
                  className={`group relative flex items-start text-left p-5 rounded-2xl transition-all duration-300 border backdrop-blur-xl ${
                    isActive
                      ? 'shadow-xl scale-[1.01] bg-bg-card border-glass-border-hover'
                      : 'border-glass-border hover:bg-item-hover-bg opacity-80 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 ${
                      isActive ? 'bg-badge-text' : 'bg-transparent group-hover:bg-glass-border'
                    }`}
                  />

                  <div className={`p-3 rounded-xl border mr-4 transition-all duration-300 shrink-0 ${
                    isActive 
                      ? 'bg-btn-sec-bg border-glass-border-hover text-badge-text shadow-sm'
                      : 'bg-transparent border-glass-border text-text-muted'
                  }`}>
                    <ServiceIcon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className={`text-base sm:text-lg font-bold tracking-tight truncate ${
                        isActive ? 'text-text-heading' : 'text-text-muted'
                      }`}>
                        {t(service.titleKey, service.titleEn)}
                      </h3>

                      {service.badgeKey && service.badgeEn && (
                        <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-badge-bg text-badge-text border border-badge-border shrink-0">
                          {t(service.badgeKey, service.badgeEn)}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-text-muted line-clamp-2 leading-relaxed font-normal opacity-90">
                      {t(service.descriptionKey, service.descriptionEn)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex lg:hidden flex-col gap-4 w-full">
            <div className="flex items-center justify-between bg-bg-card p-3 rounded-2xl border border-glass-border">
              <button
                type="button"
                onClick={handlePrevService}
                className="p-2 rounded-xl bg-btn-sec-bg border border-glass-border text-text-heading hover:bg-item-hover-bg transition-colors"
                aria-label="Previous service"
              >
                <HiChevronLeft className="w-5 h-5" />
              </button>

              <div className="text-center px-2">
                <span className="text-xs font-semibold text-badge-text block">
                  {activeTab + 1} / {servicesData.length}
                </span>
                <span className="text-sm font-bold text-text-heading truncate max-w-[180px] block">
                  {t(activeService.titleKey, activeService.titleEn)}
                </span>
              </div>

              <button
                type="button"
                onClick={handleNextService}
                className="p-2 rounded-xl bg-btn-sec-bg border border-glass-border text-text-heading hover:bg-item-hover-bg transition-colors"
                aria-label="Next service"
              >
                <HiChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center gap-1.5 mb-2">
              {servicesData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTab === idx ? 'w-6 bg-badge-text' : 'w-2 bg-glass-border'
                  }`}
                  aria-label={`Go to service ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div 
            id="service-detail-card" 
            className="lg:col-span-7 lg:sticky lg:top-24 flex flex-col justify-between rounded-3xl border bg-bg-card border-glass-border p-6 sm:p-8 md:p-10 backdrop-blur-xl min-h-[540px] relative overflow-hidden shadow-2xl transition-all duration-300 w-full"
          >
            {activeService.image && (
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl">
                <Image
                  src={activeService.image}
                  alt={t(activeService.titleKey, activeService.titleEn)}
                  fill
                  className="object-cover opacity-15 transition-opacity duration-700 ease-in-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/80 to-transparent" />
              </div>
            )}

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-glass-border relative z-10">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-btn-sec-bg border border-btn-sec-border text-badge-text shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-text-heading tracking-tight">
                        {t(activeService.titleKey, activeService.titleEn)}
                      </h3>
                    </div>
                  </div>

                  {activeTab === 0 && (
                    <div className="flex items-center gap-2 bg-btn-sec-bg p-1.5 rounded-2xl border border-btn-sec-border">
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewDevice('desktop');
                          setMobileMenuOpen(false);
                        }}
                        aria-label="Desktop view"
                        className={`p-2 rounded-xl transition-colors ${previewDevice === 'desktop' ? 'bg-bg-card text-badge-text shadow-sm' : 'text-text-muted'}`}
                      >
                        <HiOutlineComputerDesktop className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreviewDevice('mobile')}
                        aria-label="Mobile view"
                        className={`p-2 rounded-xl transition-colors ${previewDevice === 'mobile' ? 'bg-bg-card text-badge-text shadow-sm' : 'text-text-muted'}`}
                      >
                        <HiOutlineDevicePhoneMobile className="w-4 h-4" />
                      </button>
                      <div className="w-px h-4 bg-glass-border mx-0.5" />
                      <button
                        type="button"
                        onClick={() => setPreviewTheme(previewTheme === 'dark' ? 'light' : 'dark')}
                        aria-label="Toggle preview theme"
                        className="p-2 rounded-xl text-text-muted hover:text-badge-text transition-colors"
                      >
                        {previewTheme === 'dark' ? <HiOutlineSun className="w-4 h-4" /> : <HiOutlineMoon className="w-4 h-4" />}
                      </button>
                    </div>
                  )}
                </div>

                <div className="my-8 relative z-10">
                  {renderServicePreview()}

                  {activeService.longDescriptionKey && activeService.longDescriptionKey.length > 0 && (
                    <div className="mt-8 space-y-4 pt-6 border-t border-glass-border text-base sm:text-lg text-foreground font-normal leading-relaxed opacity-90">
                      {activeService.longDescriptionKey.map((paragraph, pIdx) => (
                        <p key={pIdx}>
                          {t(paragraph, activeService.longDescriptionEn?.[pIdx] || paragraph)}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-glass-border flex flex-wrap items-center justify-between gap-4 relative z-10 mt-auto">
                <span className="text-sm font-medium text-text-muted">
                  {t('¿Interesado en este servicio?', 'Interested in this service?')}
                </span>
                <Link
                  href={activeService.href || '/contact'}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
                >
                  <span>{t('Explorar Servicio', 'Explore Service')}</span>
                  <HiArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}