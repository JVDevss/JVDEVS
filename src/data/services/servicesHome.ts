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
  longDescriptionKey: string[];
  longDescriptionEn: string[];
  Icon: IconType;
  href: string;
  accent: string;
  previewImage: string;
  image?: string;
  highlightsKey: string[];
  highlightsEn: string[];
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
    longDescriptionKey: [
      'Creación de sitios web a medida diseñados para destacar tu presencia digital con elegancia y rendimiento. Desarrollamos desde páginas informativas y portafolios ejecutivos hasta complejas plataformas corporativas y tiendas en línea (e-commerce) adaptadas completamente al flujo operativo de tu negocio.',
      'Garantizamos un diseño 100% responsivo que se adapta perfectamente a cualquier pantalla (teléfonos, tabletas y computadoras de escritorio). Nos enfocamos en estructuras intuitivas, carga ultra rápida y optimización técnica para convertir a los visitantes en clientes recurrentes.'
    ],
    longDescriptionEn: [
      'Tailor-made website creation designed to elevate your digital presence with elegance and high performance. We develop everything from informational sites and executive portfolios to complex corporate platforms and online stores (e-commerce) fully aligned with your business workflow.',
      'We guarantee a 100% responsive design that seamlessly adapts to any screen size (smartphones, tablets, and desktop computers). Our focus relies on intuitive navigation structures, ultra-fast loading speeds, and technical optimization to turn visitors into recurring customers.'
    ],
    Icon: HiOutlineGlobeAlt,
    href: '/servicios/desarrollo-web',
    accent: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    badgeKey: 'Popular',
    badgeEn: 'Popular',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    highlightsKey: ['Diseño 100% Responsivo', 'Integración de Pagos', 'Carga Ultra Rápida', 'SEO Básico Incluido'],
    highlightsEn: ['100% Responsive Design', 'Payment Gateway Integration', 'Ultra Fast Loading', 'Basic SEO Included'],
  },
  {
    id: '02',
    titleKey: 'Chatbots e Integraciones',
    titleEn: 'Chatbots & Integrations',
    descriptionKey: 'Creación de asistentes virtuales e integración con redes sociales y plataformas para automatizar la atención a tus clientes.',
    descriptionEn: 'Virtual assistants creation and social media platform integrations to automate customer service.',
    longDescriptionKey: [
      'Diseño e implementación de asistentes virtuales inteligentes programados para responder preguntas frecuentes, calificar leads y agendar citas de forma automática. Estos bots operan las 24 horas del día, garantizando que tu empresa nunca pierda una oportunidad de venta ni deje a un cliente sin atención.',
      'Integramos directamente estas soluciones con tu página web, redes sociales y canales de mensajería como WhatsApp y Telegram. De esta manera, centralizas la comunicación de tu negocio, optimizas los tiempos de respuesta y liberas a tu equipo para tareas estratégicas.'
    ],
    longDescriptionEn: [
      'Design and deployment of intelligent virtual assistants crafted to answer FAQs, qualify leads, and schedule appointments automatically. These bots operate 24/7, ensuring your business never misses a sales opportunity or leaves a customer unattended.',
      'We seamlessly integrate these solutions with your website, social media channels, and messaging platforms like WhatsApp and Telegram. This centralizes your business communication, drastically cuts response times, and frees your team for high-value tasks.'
    ],
    Icon: HiOutlineChatBubbleLeftRight,
    href: '/servicios/chatbots-integraciones',
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    badgeKey: 'Nuevo',
    badgeEn: 'New',
    previewImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop',
    highlightsKey: ['Atención 24/7 Automatizada', 'WhatsApp & Telegram API', 'Respuestas con IA', 'Captura de Leads'],
    highlightsEn: ['24/7 Automated Support', 'WhatsApp & Telegram API', 'AI Powered Responses', 'Lead Generation'],
  },
  {
    id: '03',
    titleKey: 'Aplicaciones Web',
    titleEn: 'Web Applications',
    descriptionKey: 'Herramientas y plataformas accesibles desde cualquier navegador, adaptadas a las necesidades específicas de tu proyecto.',
    descriptionEn: 'Accessible tools and platforms from any browser, tailored to your project’s specific needs.',
    longDescriptionKey: [
      'Desarrollo de aplicaciones web personalizadas que transforman ideas y procesos complejos en software accesible directamente desde el navegador. Construimos plataformas tipo SaaS, paneles de administración intuitivos y herramientas interactiva para optimizar el rendimiento operativo de tu empresa.',
      'Priorizamos la seguridad, la flexibilidad de módulos interconectados y la accesibilidad multiusuario. Esto permite a tu equipo o a tus clientes interactuar con la plataforma de forma remota, fluida y con los niveles de autorización requeridos.'
    ],
    longDescriptionEn: [
      'Custom web application development that transforms complex ideas and operational workflows into accessible web software. We build SaaS platforms, intuitive administration dashboards, and interactive tools designed to boost your operational productivity.',
      'We prioritize enterprise-grade security, flexible modular architectures, and multi-user access control. This empowers your team or customers to interact with the platform remotely and smoothly, with clear role-based authorization levels.'
    ],
    Icon: HiOutlineDeviceTablet,
    href: '/servicios/aplicaciones-web',
    accent: 'from-indigo-500/20 via-sky-500/10 to-transparent',
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',  highlightsKey: ['SaaS a Medida', 'Paneles de Administración', 'Multi-usuario y Roles', 'Acceso Remoto Seguro'],
    highlightsEn: ['Custom SaaS', 'Admin Dashboards', 'Multi-user & Roles', 'Secure Remote Access'],
  },
  {
    id: '04',
    titleKey: 'Diseño UI/UX',
    titleEn: 'UI/UX Design',
    descriptionKey: 'Diseño de interfaces atractivas, modernas e intuitivas que garantizan una experiencia cómoda y fluida para tus usuarios.',
    descriptionEn: 'Attractive, modern, and intuitive interface design ensuring a smooth and comfortable user experience.',
    longDescriptionKey: [
      'Diseño visual centrado en el usuario utilizando herramientas de estándar industrial como Figma. Creamos estructuras de navegación claras, wireframes interactivos y prototipos navegables antes de escribir una sola línea de código, garantizando la satisfacción del usuario final.',
      'Transformamos prototipos estéticos en soluciones web completamente funcionales, aplicando sistemas de diseño escalables (Design Systems). Esto asegura la coherencia visual, mejora la retención de usuarios y facilita la evolución del software en el tiempo.'
    ],
    longDescriptionEn: [
      'User-centered visual design built using industry-standard tools like Figma. We craft clear navigation structures, interactive wireframes, and clickable prototypes before writing a single line of code, ensuring total user satisfaction.',
      'We turn aesthetic prototypes into fully functional web experiences by building scalable Design Systems. This approach guarantees visual consistency, enhances user retention, and streamlines future software evolution.'
    ],
    Icon: HiOutlinePaintBrush,
    href: '/servicios/diseno-ui-ux',
    accent: 'from-purple-500/20 via-pink-500/10 to-transparent',
    previewImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop',
    highlightsKey: ['Prototipeado en Figma', 'Wireframes e Investigaciones', 'Design Systems', 'Enfoque User-Centric'],
    highlightsEn: ['Figma Prototyping', 'Wireframing & Research', 'Design Systems', 'User-Centric Focus'],
  },
  {
    id: '05',
    titleKey: 'Sistemas Full-Stack',
    titleEn: 'Full-Stack Systems',
    descriptionKey: 'Desarrollo de sistemas a la medida como plataformas de ventas, gestión de inventarios, facturación y control operativo.',
    descriptionEn: 'Custom software development including sales platforms, inventory management, billing, and operational control.',
    longDescriptionKey: [
      'Construcción integral de sistemas de software robustos para entornos web y de escritorio, abarcando desde la gestión de bases de datos hasta la interfaz final. Diseñamos plataformas corporativas para inventarios, facturación, control operativo y gestión documental.',
      'Integramos arquitecturas modernas de backend y frontend que permiten un flujo de información centralizado, reportes automatizados y métricas en tiempo real. Soluciones creadas específicamente para respaldar la toma de decisiones estratégicas en medianas y grandes empresas.'
    ],
    longDescriptionEn: [
      'End-to-end development of robust software systems for web and desktop environments, covering everything from database architecture to the user interface. We build enterprise systems for inventory tracking, billing, operations, and document management.',
      'We integrate modern backend and frontend architecture to establish a centralized data flow, automated reports, and real-time metrics. Solutions built specifically to empower strategic decision-making in growing businesses.'
    ],
    Icon: HiOutlineSquare3Stack3D,
    href: '/servicios/sistemas-fullstack',
    accent: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    badgeKey: 'Destacado',
    badgeEn: 'Featured',
    previewImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',  highlightsKey: ['Bases de Datos Relacionales', 'APIs RESTful / GraphQL', 'Arquitectura Robusta', 'Reportes y Métricas'],
    highlightsEn: ['Relational Databases', 'RESTful / GraphQL APIs', 'Robust Architecture', 'Reports & Analytics'],
  },
  {
    id: '06',
    titleKey: 'Automatización de Procesos',
    titleEn: 'Process Automation',
    descriptionKey: 'Optimización y digitalización de tareas repetitivas para ahorrar tiempo, reducir errores y aumentar la productividad.',
    descriptionEn: 'Optimization and digitization of repetitive tasks to save time, reduce errors, and increase productivity.',
    longDescriptionKey: [
      'Implementación de flujos de trabajo automatizados conectando plataformas clave mediante herramientas de vanguardia como Make y Zapier. Digitalizamos tareas repetitivas de oficina para eliminar la carga operativa manual y optimizar los tiempos de ejecución.',
      'Automatizamos el traspaso de leads, la sincronización de bases de datos, el envío de notificaciones y la extracción de métricas. Con ello se reducen drásticamente los errores humanos y se ahorran cientos de horas de trabajo al mes.'
    ],
    longDescriptionEn: [
      'Implementation of automated workflows connecting key business platforms using modern integration tools such as Make and Zapier. We digitize repetitive office tasks to eliminate manual operational workload and boost execution efficiency.',
      'We automate lead transfers, database syncing, transactional notification dispatches, and metrics collection. This dramatically reduces human error while saving your company hundreds of working hours every month.'
    ],
    Icon: HiOutlineCpuChip,
    href: '/servicios/automatizacion-procesos',
    accent: 'from-fuchsia-500/20 via-rose-500/10 to-transparent',
    previewImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    highlightsKey: ['Flujos de Trabajo (Zapier/Make)', 'Extracción de Datos', 'Ahorro de Tiempo', 'Reducción de Errores'],
    highlightsEn: ['Workflows (Zapier/Make)', 'Data Extraction', 'Time Saving', 'Error Reduction'],
  },
  {
    id: '07',
    titleKey: 'Optimización SEO',
    titleEn: 'SEO Optimization',
    descriptionKey: 'Mejora de la visibilidad y velocidad de tu sitio web para posicionarte en los primeros resultados de los motores de búsqueda.',
    descriptionEn: 'Improvement of website visibility and speed to rank higher in search engine results.',
    longDescriptionKey: [
      'Auditoría y ajuste técnico de páginas web existentes para alinearlas con las mejores prácticas de motores de búsqueda como Google. Optimizamos la velocidad de carga, la estructura del código y los metadatos para escalar posiciones orgánicas.',
      'Establecemos estrategias de palabras clave orientadas a atraer tráfico cualificado a tu negocio. Corregimos errores de indexación y mejoramos las métricas web esenciales (Core Web Vitals) para que tu sitio sea competitivo y fácil de encontrar.'
    ],
    longDescriptionEn: [
      'Comprehensive auditing and technical tuning of existing websites to align them with search engine best practices like Google. We optimize loading speeds, code structure, and metadata to climb organic ranking positions.',
      'We develop keyword strategies designed to attract highly targeted traffic to your business. We resolve indexing issues and enhance Core Web Vitals to keep your website competitive and effortless to locate.'
    ],
    Icon: HiOutlineChartBar,
    href: '/servicios/optimizacion-seo',
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    previewImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop',
    highlightsKey: ['Auditoría On-Page / Off-Page', 'Optimización Core Web Vitals', 'Estrategia de Palabras Clave', 'Informes Semanales'],
    highlightsEn: ['On-Page / Off-Page Audit', 'Core Web Vitals Optimization', 'Keyword Strategy', 'Weekly Reports'],
  },
  {
    id: '08',
    titleKey: 'Soporte Técnico y Mantenimiento',
    titleEn: 'Technical Support & Maintenance',
    descriptionKey: 'Mantenimiento preventivo y correctivo de equipos de computación, diagnóstico de fallas y soporte técnico continuo.',
    descriptionEn: 'Preventive and corrective hardware maintenance, troubleshooting, and continuous technical support.',
    longDescriptionKey: [
      'Servicio integral de mantenimiento preventivo y correctivo para mantener la infraestructura tecnológica de tu empresa activa y segura. Realizamos diagnósticos, limpieza de hardware, respaldos de seguridad e instalación de nuevos equipos e infraestructuras.',
      'Garantizamos la máxima estabilidad de tus herramientas de trabajo minimizando tiempos de inactividad por fallas inesperadas. Brindamos soporte remoto y presencial continuo para resolver incidencias informáticas con rapidez y precisión.'
    ],
    longDescriptionEn: [
      'Comprehensive preventive and corrective maintenance services designed to keep your business technology infrastructure running safely. We handle diagnostics, hardware cleaning, backup creation, and deployment of new equipment.',
      'We ensure maximum uptime for your daily work tools by minimizing unexpected operational downtime. We provide continuous remote and on-site technical support to resolve IT incidents with speed and precision.'
    ],
    Icon: HiOutlineWrenchScrewdriver,
    href: '/servicios/soporte-mantenimiento',
    accent: 'from-slate-500/20 via-cyan-500/10 to-transparent',
    previewImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    highlightsKey: ['Monitoreo Continuo', 'Respaldo de Información', 'Soporte Remoto e In-Situ', 'Mantenimiento Preventivo'],
    highlightsEn: ['Continuous Monitoring', 'Data Backups', 'Remote & On-Site Support', 'Preventive Maintenance'],
  },
];