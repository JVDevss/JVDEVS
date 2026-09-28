export interface ProjectCategory {
  key: string;
  labelEs: string;
  labelEn: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  category: 'web' | 'mobile' | 'automation' | 'fullstack';
  title: string;
  client: string;
  year: string;
  descriptionKey: string;
  descriptionEn: string;
  technologies: string[];
  mainImage: string;
  galleryImages?: string[];
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  // Campos de valor comercial
  deliveryTimeKey?: string;
  deliveryTimeEn?: string;
  keyHighlightValue?: string;
  keyHighlightKey?: string;
  keyHighlightEn?: string;
  featured: boolean;
}

export interface PortfolioData {
  badgeKey: string;
  badgeEn: string;
  titleKey: string;
  titleEn: string;
  highlightKey: string;
  highlightEn: string;
  descriptionKey: string;
  descriptionEn: string;
  categories: ProjectCategory[];
  projects: PortfolioProject[];
}

export const portfolioData: PortfolioData = {
  badgeKey: 'Portafolio',
  badgeEn: 'Portfolio',
  titleKey: 'Desarrollo y Soluciones Tecnológicas',
  titleEn: 'Development and Technological Solutions',
  highlightKey: 'de Nuestra Autoría',
  highlightEn: 'Built by Us',
  descriptionKey: 'Explora nuestra selección de proyectos donde la arquitectura moderna, el rendimiento ultra rápido y el diseño funcional se unen.',
  descriptionEn: 'Explore our curated projects where modern architecture, ultra-fast performance, and functional design converge.',
  categories: [
    { key: 'all', labelEs: 'Todos', labelEn: 'All' },
    { key: 'web', labelEs: 'Web Apps', labelEn: 'Web Apps' },
    { key: 'mobile', labelEs: 'Mobile', labelEn: 'Mobile' },
    { key: 'automation', labelEs: 'Automatización', labelEn: 'Automation' },
    { key: 'fullstack', labelEs: 'Full Stack', labelEn: 'Full Stack' },
  ],
  projects: [
    {
      id: 'proj-01',
      slug: 'proservices-rrhh',
      category: 'web',
      title: 'ProServices RRHH',
      client: 'ProServices',
      year: '2026',
      descriptionKey: 'Página web informativa e institucional para empresa corporativa, optimizada para rendimiento ultra rápido, SEO avanzado e interfaz moderna.',
      descriptionEn: 'Informational and institutional website for corporate business, optimized for ultra-fast performance, advanced SEO, and modern UI.',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React'],
      mainImage: '/images/portfolio/proservices/proservices1.png',
      galleryImages: [
        '/images/portfolio/proservices/proservices2.png',
        '/images/portfolio/proservices/proservices3.png',
        '/images/portfolio/proservices/proservices4.png',
        '/images/portfolio/proservices/proservices5.png',
        '/images/portfolio/proservices/proservices6.png',
      ],
      liveUrl: 'https://www.proservicesrrhh.com/',
      featured: true,
      deliveryTimeKey: '2 semanas',
      deliveryTimeEn: '2 weeks',
      keyHighlightValue: 'ProServices',
      keyHighlightKey: 'Cliente',
      keyHighlightEn: 'Client',
    },
    {
      id: 'proj-02',
      slug: 'insai-sentme',
      category: 'fullstack',
      title: 'SENTME - INSAI Central',
      client: 'INSAI Central',
      year: '2026',
      descriptionKey: 'Sistema de Envío Tecnológico de Memorandums. Plataforma de red interna empresarial con múltiples niveles de seguridad, división por departamentos y creación/edición de memos personalizados acordes a la dependencia correspondiente.',
      descriptionEn: 'Technological Memorandum Delivery System. Internal network enterprise platform with security roles, departmental division, and customized memo creation/editing tailored to each department.',
      technologies: ['TypeScript', 'Vue.js', 'Node.js', 'Nest.js', 'MariaDB', 'Tailwind CSS'],
      mainImage: '/images/portfolio/insai/sentme1.png',
      galleryImages: [
        '/images/portfolio/insai/sentme2.png',
        '/images/portfolio/insai/sentme3.png',
        '/images/portfolio/insai/sentme4.png',
        '/images/portfolio/insai/sentme5.png',
        '/images/portfolio/insai/sentme6.png',
        '/images/portfolio/insai/sentme7.png',
        '/images/portfolio/insai/sentme8.png',
      ],
      featured: true,
      deliveryTimeKey: '2 meses',
      deliveryTimeEn: '2 months',
      keyHighlightValue: 'INSAI Central',
      keyHighlightKey: 'Cliente',
      keyHighlightEn: 'Client',
    },
    {
      id: 'proj-03',
      slug: 'suministros-mariu-3000',
      category: 'fullstack',
      title: 'Sistema de Gestión Administrativa',
      client: 'Suministros Mariu 3000 C.A',
      year: '2026',
      descriptionKey: 'Sistema de red interno completo para la gestión administrativa: control de inventarios, compras, ventas, configuración de precios, cálculo automatizado de ganancias, generación de reportes detallados y sistema integrado de respaldo de datos.',
      descriptionEn: 'Comprehensive internal network administrative management system: inventory control, purchasing, sales, price setting, automated profit calculations, detailed report generation, and integrated system backups.',
      technologies: ['Nest.js', 'TypeScript', 'Node.js', 'MariaDB', 'CSS'],
      mainImage: '/images/portfolio/mariu/mariu1.png',
      galleryImages: [
        '/images/portfolio/mariu/mariu2.png',
        '/images/portfolio/mariu/mariu3.png',
        '/images/portfolio/mariu/mariu4.png',
        '/images/portfolio/mariu/mariu5.png',
        '/images/portfolio/mariu/mariu6.png',
        '/images/portfolio/mariu/mariu7.png',
        '/images/portfolio/mariu/mariu8.png',
      ],
      featured: true,
      deliveryTimeKey: '2 meses',
      deliveryTimeEn: '2 months',
      keyHighlightValue: 'Suministros Mariu 3000 C.A',
      keyHighlightKey: 'Cliente',
      keyHighlightEn: 'Client',
    },
  ],
};