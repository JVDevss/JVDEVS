import { IconType } from 'react-icons';
import { 
  HiOutlineGlobeAlt, 
  HiOutlineChatBubbleLeftRight, 
  HiOutlineDeviceTablet, 
  HiOutlinePaintBrush, 
  HiOutlineWrenchScrewdriver, 
  HiOutlineChartBar, 
  HiOutlineCpuChip, 
  HiOutlineSquare3Stack3D 
} from 'react-icons/hi2';

export interface ServiceItem {
  id: string;
  titleKey: string;
  titleEn: string;
  descriptionKey: string;
  descriptionEn: string;
  Icon: IconType;
  href: string;
  accent: string;
  badgeKey?: string;
  badgeEn?: string;
}

export interface ServicesHeaderData {
  titleKey: string;
  titleEn: string;
  subtitleKey: string;
  subtitleEn: string;
}

export const servicesHeaderData: ServicesHeaderData = {
  titleKey: 'Soluciones digitales y tecnológicas integrales',
  titleEn: 'Comprehensive digital and technological solutions',
  subtitleKey: 'Impulsamos tu negocio con software moderno, automatización, diseño inteligente y soporte técnico especializado.',
  subtitleEn: 'We boost your business with modern software, automation, smart design, and specialized technical support.',
};

export const servicesData: ServiceItem[] = [
  {
    id: '01',
    titleKey: 'Desarrollo Web',
    titleEn: 'Web Development',
    descriptionKey: 'Páginas web informativas, ejecutivas, empresariales y tiendas en línea (e-commerce) diseñadas para proyectar una imagen profesional.',
    descriptionEn: 'Informational, executive, corporate websites, and online stores (e-commerce) designed to project a professional image.',
    Icon: HiOutlineGlobeAlt,
    href: '/servicios/desarrollo-web',
    accent: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    badgeKey: 'Popular',
    badgeEn: 'Popular',
  },
  {
    id: '02',
    titleKey: 'Chatbots e Integraciones',
    titleEn: 'Chatbots & Integrations',
    descriptionKey: 'Creación de asistentes virtuales e integración con redes sociales y plataformas para automatizar la atención a tus clientes.',
    descriptionEn: 'Virtual assistants creation and social media platform integrations to automate customer service.',
    Icon: HiOutlineChatBubbleLeftRight,
    href: '/servicios/chatbots-integraciones',
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    badgeKey: 'Nuevo',
    badgeEn: 'New',
  },
  {
    id: '03',
    titleKey: 'Aplicaciones Web',
    titleEn: 'Web Applications',
    descriptionKey: 'Herramientas y plataformas accesibles desde cualquier navegador, adaptadas a las necesidades específicas de tu proyecto.',
    descriptionEn: 'Accessible tools and platforms from any browser, tailored to your project’s specific needs.',
    Icon: HiOutlineDeviceTablet,
    href: '/servicios/aplicaciones-web',
    accent: 'from-indigo-500/20 via-sky-500/10 to-transparent',
  },
  {
    id: '04',
    titleKey: 'Diseño UI/UX',
    titleEn: 'UI/UX Design',
    descriptionKey: 'Diseño de interfaces atractivas, modernas e intuitivas que garantizan una experiencia cómoda y fluida para tus usuarios.',
    descriptionEn: 'Attractive, modern, and intuitive interface design ensuring a smooth and comfortable user experience.',
    Icon: HiOutlinePaintBrush,
    href: '/servicios/diseno-ui-ux',
    accent: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
  {
    id: '05',
    titleKey: 'Sistemas Full-Stack',
    titleEn: 'Full-Stack Systems',
    descriptionKey: 'Desarrollo de sistemas a la medida como plataformas de ventas, gestión de inventarios, facturación y control operativo.',
    descriptionEn: 'Custom software development including sales platforms, inventory management, billing, and operational control.',
    Icon: HiOutlineSquare3Stack3D,
    href: '/servicios/sistemas-fullstack',
    accent: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    badgeKey: 'Destacado',
    badgeEn: 'Featured',
  },
  {
    id: '06',
    titleKey: 'Automatización de Procesos',
    titleEn: 'Process Automation',
    descriptionKey: 'Optimización y digitalización de tareas repetitivas para ahorrar tiempo, reducir errores y aumentar la productividad.',
    descriptionEn: 'Optimization and digitization of repetitive tasks to save time, reduce errors, and increase productivity.',
    Icon: HiOutlineCpuChip,
    href: '/servicios/automatizacion-procesos',
    accent: 'from-fuchsia-500/20 via-rose-500/10 to-transparent',
  },
  {
    id: '07',
    titleKey: 'Optimización SEO',
    titleEn: 'SEO Optimization',
    descriptionKey: 'Mejora de la visibilidad y velocidad de tu sitio web para posicionarte en los primeros resultados de los motores de búsqueda.',
    descriptionEn: 'Improvement of website visibility and speed to rank higher in search engine results.',
    Icon: HiOutlineChartBar,
    href: '/servicios/optimizacion-seo',
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: '08',
    titleKey: 'Soporte Técnico y Mantenimiento',
    titleEn: 'Technical Support & Maintenance',
    descriptionKey: 'Mantenimiento preventivo y correctivo de equipos de computación, diagnóstico de fallas y soporte técnico continuo.',
    descriptionEn: 'Preventive and corrective hardware maintenance, troubleshooting, and continuous technical support.',
    Icon: HiOutlineWrenchScrewdriver,
    href: '/servicios/soporte-mantenimiento',
    accent: 'from-slate-500/20 via-cyan-500/10 to-transparent',
  },
];