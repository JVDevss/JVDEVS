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
      badge: 'Arquitectura Cloud & Performance',
      title: 'Optimizamos tu presencia con',
      titleGradient: 'tecnología de ultra velocidad',
      description: 'Diseñamos soluciones optimizadas para motores de búsqueda con tasas de conversión superiores y tiempos de carga instantáneos.',
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
      badge: 'Cloud Architecture & Performance',
      title: 'We optimize your presence with',
      titleGradient: 'ultra-speed technology',
      description: 'We design search engine-optimized solutions with superior conversion rates and lightning-fast loading speeds.',
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