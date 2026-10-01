export interface HeroSlideContent {
  badge: string;
  title: string;
  titleGradient: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface HeroSlide {
  id: number;
  bgImage: string;
  es: HeroSlideContent;
  en: HeroSlideContent;
}

export const heroHomeData: HeroSlide[] = [
  {
    id: 1,
    bgImage: '/images/hero/home/hero1.jpg',
    es: {
      badge: 'Desarrollo Web de Alta Calidad',
      title: 'Construimos experiencias web',
      titleGradient: 'modernas y escalables',
      description: 'En JVDevs transformamos ideas en plataformas digitales de alto rendimiento utilizando Next.js, Tailwind CSS y arquitecturas de vanguardia.',
      primaryCta: {
        label: 'Explorar Servicios',
        href: '#services',
      },
      secondaryCta: {
        label: 'Contactar Equipo',
        href: '#contact',
      },
    },
    en: {
      badge: 'High Quality Web Development',
      title: 'We build modern & scalable',
      titleGradient: 'web experiences',
      description: 'At JVDevs we transform ideas into high-performance digital platforms using Next.js, Tailwind CSS, and cutting-edge architectures.',
      primaryCta: {
        label: 'Explore Services',
        href: '#services',
      },
      secondaryCta: {
        label: 'Contact Team',
        href: '#contact',
      },
    },
  },
  {
    id: 2,
    bgImage: '/images/hero/home/hero2.jpg',
    es: {
      badge: 'Sistemas Corporativos & Automatización',
      title: 'Impulsamos tu negocio con',
      titleGradient: 'software y gestión a la medida',
      description: 'Desarrollamos aplicaciones móviles para iOS/Android, plataformas de gestión, automatización de procesos operativos, chatbots y soporte técnico integral.',
      primaryCta: {
        label: 'Ver Portafolio',
        href: '#portfolio',
      },
      secondaryCta: {
        label: 'Conocer Más',
        href: '#about',
      },
    },
    en: {
      badge: 'Enterprise Systems & Automation',
      title: 'We empower your business with',
      titleGradient: 'custom software & management',
      description: 'We develop mobile apps for iOS/Android, custom management platforms, process automation, chatbots, and comprehensive technical support.',
      primaryCta: {
        label: 'View Portfolio',
        href: '#portfolio',
      },
      secondaryCta: {
        label: 'Learn More',
        href: '#about',
      },
    },
  },
];