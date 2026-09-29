'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/src/context/LanguageContext';
import { portfolioData, PortfolioProject } from '@/src/data/Portfolio/portfolioHome';
import { 
  HiOutlineArrowUpRight, 
  HiOutlineCodeBracket,
  HiOutlineXMark,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlinePhoto,
  HiOutlineVideoCamera,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineMagnifyingGlassPlus,
  HiOutlineMagnifyingGlassMinus,
  HiOutlineArrowPath,
  HiOutlineClock,
  HiOutlineStar
} from 'react-icons/hi2';

export default function PortfolioInverted() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<PortfolioProject>(portfolioData.projects[0]);
  const [mediaTab, setMediaTab] = useState<'images' | 'video'>('images');
  const [selectedMainImage, setSelectedMainImage] = useState<string>('');

  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter((p: PortfolioProject) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Cambiar automáticamente al primer proyecto de la lista cuando cambia la categoría seleccionada
  useEffect(() => {
    if (filteredProjects.length > 0) {
      setActiveProject(filteredProjects[0]);
      setMediaTab('images');
    }
  }, [filteredProjects]);

  const allProjectImages: string[] = useMemo(() => {
    return [
      ...(activeProject?.mainImage ? [activeProject.mainImage] : []),
      ...(activeProject?.galleryImages || [])
    ];
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) return;
    const storageKey = `portfolio_selected_img_${activeProject.id}`;
    const savedImage = localStorage.getItem(storageKey);
    
    if (savedImage && allProjectImages.includes(savedImage)) {
      setSelectedMainImage(savedImage);
    } else {
      setSelectedMainImage(allProjectImages[0] || activeProject.mainImage || '');
    }
  }, [activeProject, allProjectImages]);

  const handleSelectProject = useCallback((project: PortfolioProject) => {
    setActiveProject(project);
    setMediaTab('images');
  }, []);

  const handleSelectThumbnail = useCallback((imgUrl: string) => {
    if (!activeProject) return;
    setSelectedMainImage(imgUrl);
    localStorage.setItem(`portfolio_selected_img_${activeProject.id}`, imgUrl);
  }, [activeProject]);

  const handleZoomIn = useCallback(() => setZoomLevel((prev) => Math.min(prev + 0.5, 3.5)), []);
  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => {
      const nextZoom = Math.max(prev - 0.5, 1);
      if (nextZoom === 1) setPanOffset({ x: 0, y: 0 });
      return nextZoom;
    });
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  const openLightbox = useCallback((index: number) => {
    setActiveImageIndex(index);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  const nextImage = useCallback(() => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setActiveImageIndex((prev) => (prev + 1) % allProjectImages.length);
  }, [allProjectImages.length]);

  const prevImage = useCallback(() => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setActiveImageIndex((prev) => (prev - 1 + allProjectImages.length) % allProjectImages.length);
  }, [allProjectImages.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPanOffset({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  useEffect(() => {
    if (lightboxOpen) {
      document.body.classList.add('lightbox-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('lightbox-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('lightbox-open');
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  return (
    <section 
      id="portfolio" 
      className="relative py-16 sm:py-24 md:py-32 2xl:py-40 overflow-hidden bg-bg-primary transition-colors duration-400 selection:bg-badge-text selection:text-bg-primary"
    >
      <style jsx global>{`
        body.lightbox-open header,
        body.lightbox-open nav,
        body.lightbox-open [class*="header"],
        body.lightbox-open [class*="navbar"] {
          display: none !important;
        }
      `}</style>

      {/* Imagen de Fondo y Capas de Resplandor */}
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

      <div className="max-w-7xl 2xl:max-w-[1500px] 4xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Header de la sección */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <span className="px-3.5 py-1.5 text-xs sm:text-sm 2xl:text-base font-extrabold uppercase tracking-widest rounded-full bg-badge-bg text-badge-text border border-badge-border mb-4 shadow-sm">
            {t(portfolioData.badgeKey, portfolioData.badgeEn)}
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-black tracking-tight text-text-heading max-w-4xl leading-[1.15] mb-4">
            {t(portfolioData.titleKey, portfolioData.titleEn)}{' '}
            <span className="text-cyan-600 dark:text-cyan-400">
              {t(portfolioData.highlightKey, portfolioData.highlightEn)}
            </span>
          </h2>

          <p className="text-sm sm:text-base 2xl:text-xl text-text-muted max-w-2xl font-normal leading-relaxed">
            {t(portfolioData.descriptionKey, portfolioData.descriptionEn)}
          </p>
        </div>

        {/* Filtros de Categoría */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {portfolioData.categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 border ${
                selectedCategory === cat.key
                  ? 'bg-badge-text text-bg-primary border-transparent shadow-md'
                  : 'bg-bg-card text-text-muted border-glass-border hover:text-text-heading'
              }`}
            >
              {t(cat.labelEs, cat.labelEn)}
            </button>
          ))}
        </div>

        {/* Layout Invertido: Columna principal a la izquierda, lista a la derecha en pantallas lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* DETALLE DEL PROYECTO */}
          <div className="lg:col-span-8 lg:order-1 order-2">
            {activeProject && (
              <div 
                className="p-6 sm:p-8 2xl:p-10 rounded-3xl border bg-bg-card border-glass-border backdrop-blur-2xl shadow-2xl transition-all"
              >
                {/* Selector Media */}
                {activeProject.videoUrl && allProjectImages.length > 0 && (
                  <div className="flex items-center gap-2 mb-6 p-1 rounded-xl bg-btn-sec-bg border border-glass-border w-fit ml-auto">
                    <button
                      onClick={() => setMediaTab('images')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        mediaTab === 'images'
                          ? 'bg-badge-text text-bg-primary shadow-sm'
                          : 'text-text-muted hover:text-text-heading'
                      }`}
                    >
                      <HiOutlinePhoto className="w-4 h-4" />
                      <span>{t('Imágenes', 'Images')} ({allProjectImages.length})</span>
                    </button>

                    <button
                      onClick={() => setMediaTab('video')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        mediaTab === 'video'
                          ? 'bg-badge-text text-bg-primary shadow-sm'
                          : 'text-text-muted hover:text-text-heading'
                      }`}
                    >
                      <HiOutlineVideoCamera className="w-4 h-4" />
                      <span>{t('Video Demo', 'Video Demo')}</span>
                    </button>
                  </div>
                )}

                {/* Área del Visualizador de Medios */}
                <div className="mb-8">
                  {mediaTab === 'images' ? (
                    <div className="space-y-3">
                      <div 
                        onClick={() => {
                          const currentIndex = allProjectImages.indexOf(selectedMainImage);
                          openLightbox(currentIndex !== -1 ? currentIndex : 0);
                        }}
                        className="relative w-full h-64 sm:h-96 2xl:h-[400px] rounded-2xl overflow-hidden border border-glass-border group cursor-pointer bg-neutral-900"
                      >
                        {selectedMainImage ? (
                          <Image
                            src={selectedMainImage}
                            alt={activeProject.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 800px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-text-muted font-mono text-sm">
                            [ Placeholder Image ]
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-4 py-2 rounded-xl bg-black/70 text-white text-xs font-mono font-bold backdrop-blur-md border border-white/20">
                            {t('Hacer clic para ampliar', 'Click to enlarge')}
                          </span>
                        </div>
                      </div>

                      {allProjectImages.length > 0 && (
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                          {allProjectImages.map((img: string, idx: number) => {
                            const isCurrent = selectedMainImage === img;
                            return (
                              <div
                                key={idx}
                                onClick={() => handleSelectThumbnail(img)}
                                className={`relative h-20 sm:h-24 rounded-xl overflow-hidden border cursor-pointer group bg-neutral-900 transition-all ${
                                  isCurrent 
                                    ? 'border-cyan-500 ring-2 ring-cyan-500/50 scale-[0.98]' 
                                    : 'border-glass-border hover:border-cyan-500 opacity-70 hover:opacity-100'
                                }`}
                              >
                                <Image
                                  src={img}
                                  alt={`${activeProject.title} thumb ${idx + 1}`}
                                  fill
                                  priority
                                  sizes="200px"
                                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 transition-colors ${isCurrent ? 'bg-transparent' : 'bg-black/20 group-hover:bg-transparent'}`} />
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-glass-border bg-black">
                      {activeProject.videoUrl && (
                        <iframe
                          src={activeProject.videoUrl}
                          title={activeProject.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* Cabecera del Proyecto */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-glass-border sm:flex-row-reverse">
                  <div className="flex items-center gap-3">
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 transition-all shadow-md"
                      >
                        <span>{t('Ver Proyecto', 'Live Demo')}</span>
                        <HiOutlineArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-btn-sec-bg border border-btn-sec-border text-text-heading hover:text-cyan-500 transition-colors"
                        title="GitHub Repository"
                      >
                        <HiOutlineCodeBracket className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <div className="text-left sm:text-right">
                    <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-black text-text-heading mb-2">
                      {activeProject.title}
                    </h3>
                    <div className="flex items-center sm:justify-end gap-4 text-xs sm:text-sm text-text-muted font-medium">
                      <span className="flex items-center gap-1.5">
                        <HiOutlineUser className="w-4 h-4 text-badge-text" />
                        {activeProject.client}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <HiOutlineCalendar className="w-4 h-4 text-badge-text" />
                        {activeProject.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <p className="text-sm sm:text-base 2xl:text-lg text-text-heading leading-relaxed mb-8 font-medium">
                  {t(activeProject.descriptionKey, activeProject.descriptionEn)}
                </p>

                {/* Destacados (Tiempo / Métrica) */}
                {(activeProject.deliveryTimeKey || activeProject.keyHighlightValue) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {activeProject.keyHighlightValue && activeProject.keyHighlightKey && (
                      <div className="p-4 rounded-xl bg-btn-sec-bg border border-glass-border flex items-center justify-between gap-3">
                        <div>
                          <span className="block text-xs text-text-muted font-mono font-bold uppercase">
                            {t(activeProject.keyHighlightKey, activeProject.keyHighlightEn || activeProject.keyHighlightKey)}
                          </span>
                          <span className="text-xl font-black text-cyan-600 dark:text-cyan-400">
                            {activeProject.keyHighlightValue}
                          </span>
                        </div>
                        <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                          <HiOutlineStar className="w-6 h-6" />
                        </div>
                      </div>
                    )}

                    {activeProject.deliveryTimeKey && (
                      <div className="p-4 rounded-xl bg-btn-sec-bg border border-glass-border flex items-center justify-between gap-3">
                        <div>
                          <span className="block text-xs text-text-muted font-mono font-bold uppercase">
                            {t('Tiempo de Entrega', 'Delivery Time')}
                          </span>
                          <span className="text-lg font-black text-text-heading">
                            {t(activeProject.deliveryTimeKey, activeProject.deliveryTimeEn || activeProject.deliveryTimeKey)}
                          </span>
                        </div>
                        <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                          <HiOutlineClock className="w-6 h-6" />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Tecnologías */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider mb-3">
                    {t('Tecnologías & Herramientas', 'Technologies & Stack')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-btn-sec-bg text-badge-text border border-glass-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* LISTA DE PROYECTOS */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:order-2 order-1">
            <span className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider px-1">
              {t('Selecciona un proyecto', 'Select a project')} ({filteredProjects.length})
            </span>

            {filteredProjects.map((project: PortfolioProject) => {
              const isSelected = activeProject?.id === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-bg-card border-cyan-500 shadow-lg'
                      : 'bg-bg-card border-glass-border opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono font-bold text-badge-text uppercase">
                      {project.client}
                    </span>
                    <span className="text-[11px] font-mono text-text-muted">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-text-heading mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech: string, idx: number) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-btn-sec-bg text-text-muted border border-btn-sec-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-text-muted">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Lightbox / Modal de Imágenes Completo */}
      {lightboxOpen && allProjectImages.length > 0 && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md select-none">
          <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
            <span className="text-xs font-mono text-white/80 pointer-events-auto">
              {activeProject?.title} — {activeImageIndex + 1} / {allProjectImages.length}
            </span>
          </div>

          {allProjectImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 z-20 p-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-colors"
              title="Anterior"
            >
              <HiOutlineChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div 
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className={`relative w-full h-full p-12 sm:p-20 flex items-center justify-center overflow-hidden ${
              zoomLevel > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
            }`}
          >
            <div 
              className="relative max-w-full max-h-full transition-transform duration-100 ease-out flex items-center justify-center"
              style={{ 
                transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)` 
              }}
            >
              <Image
                src={allProjectImages[activeImageIndex]}
                alt={`${activeProject?.title} view ${activeImageIndex + 1}`}
                width={1600}
                height={1000}
                priority
                className="object-contain max-h-[80vh] w-auto rounded-lg shadow-2xl pointer-events-none"
              />
            </div>
          </div>

          {allProjectImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 z-20 p-3 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-colors"
              title="Siguiente"
            >
              <HiOutlineChevronRight className="w-6 h-6" />
            </button>
          )}

          <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2 p-2 rounded-2xl bg-black/70 border border-white/20 backdrop-blur-md shadow-2xl">
            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all"
              title={t('Cerrar', 'Close')}
            >
              <HiOutlineXMark className="w-6 h-6" />
            </button>

            <div className="w-px h-6 bg-white/20 mx-0.5" />

            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition-all"
              title={t('Alejar', 'Zoom Out')}
            >
              <HiOutlineMagnifyingGlassMinus className="w-5 h-5" />
            </button>

            <button
              onClick={handleResetZoom}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all"
              title={t('Restablecer', 'Reset Zoom')}
            >
              <HiOutlineArrowPath className="w-5 h-5" />
            </button>

            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3.5}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition-all"
              title={t('Acercar', 'Zoom In')}
            >
              <HiOutlineMagnifyingGlassPlus className="w-5 h-5" />
            </button>
          </div>

          {allProjectImages.length > 1 && (
            <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-20 px-4 pointer-events-none">
              <div className="flex gap-2 max-w-md overflow-x-auto p-2 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 pointer-events-auto">
                {allProjectImages.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIndex === idx ? 'border-cyan-400 scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="thumb" fill priority sizes="48px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}