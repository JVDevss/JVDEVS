import { IconType } from 'react-icons';
import { 
  HiOutlineUserGroup, 
  HiOutlineShieldCheck, 
  HiOutlineClock,
  HiOutlineChatBubbleLeftRight,
  HiOutlineHeart
} from 'react-icons/hi2';

export interface AboutValue {
  id: string;
  titleKey: string;
  titleEn: string;
  descriptionKey: string;
  descriptionEn: string;
  Icon: IconType;
}

export interface AboutFeature {
  keyEs: string;
  keyEn: string;
}

export interface MissionVisionContent {
  missionKey: string;
  missionEn: string;
  visionKey: string;
  visionEn: string;
  features: AboutFeature[];
}

export interface AboutData {
  badgeKey: string;
  badgeEn: string;
  titleKey: string;
  titleEn: string;
  highlightKey: string;
  highlightEn: string;
  description1Key: string;
  description1En: string;
  description2Key: string;
  description2En: string;
  image?: string;
  missionVision: MissionVisionContent;
  values: AboutValue[];
}

export const aboutData: AboutData = {
  badgeKey: 'Sobre Nosotros',
  badgeEn: 'About Us',
  titleKey: 'Soluciones digitales para la',
  titleEn: 'Digital solutions for the',
  highlightKey: 'evolución de tu negocio',
  highlightEn: 'evolution of your business',
  description1Key: 'En JVDevs somos un equipo de jóvenes desarrolladores dedicados a crear soluciones tecnológicas innovadoras y software a medida para impulsar tu negocio.',
  description1En: 'At JVDevs we are a team of young developers dedicated to creating innovative tech solutions and custom software to boost your business.',
  description2Key: 'Brindamos un acompañamiento integral: desde páginas web y aplicaciones a medida hasta plataformas de gestión, automatización de procesos, chatbots y soporte técnico especializado para garantizar que cada proyecto funcione de forma continua y eficiente.',
  description2En: 'We offer comprehensive support: from custom websites and tailored applications to management platforms, process automation, chatbots, and specialized technical support to ensure every project operates smoothly and efficiently.',
  image: '/images/bg/bg.png',
  missionVision: {
    missionKey: 'Reinventar la creación digital combinando estética futurista con código de ultra rendimiento, impulsando a las empresas a liderar en un entorno digital ultra competitivo.',
    missionEn: 'Reinvent digital creation combining futuristic aesthetics with ultra-performance code, empowering companies to lead in an ultra-competitive digital environment.',
    visionKey: 'Ser el estudio de ingeniería web y experiencia digital de referencia global, marcando los estándares en desarrollo fluido, aplicaciones IA y diseño de vanguardia.',
    visionEn: 'To be the globally referenced web engineering and digital experience studio, setting standards in fluid development, AI applications, and cutting-edge design.',
    features: [
      {
        keyEs: 'Desarrollo web a medida y sistemas corporativos',
        keyEn: 'Custom Web Development & Enterprise Systems',
      },
      {
        keyEs: 'Aplicaciones móviles para iOS, Android y publicación en App Store / Play Store',
        keyEn: 'Mobile Apps for iOS, Android & App Store / Play Store Publishing',
      },
      {
        keyEs: 'Automatización de procesos y desarrollo de chatbots',
        keyEn: 'Process Automation & Chatbot Development',
      },
      {
        keyEs: 'Soporte técnico, mantenimiento de software y equipos',
        keyEn: 'Technical Support, Software & Hardware Maintenance',
      },
    ],
  },
  values: [
    {
      id: 'v1',
      titleKey: 'Buena Atención & Flexibilidad',
      titleEn: 'Great Service & Flexibility',
      descriptionKey: 'Nos adaptamos a las necesidades y dinámicas de cada negocio, ofreciendo un trato cercano, claro y enfocado en solucionar problemas reales.',
      descriptionEn: 'We adapt to the unique needs and dynamics of every business, offering a friendly, clear, and practical approach to solving real problems.',
      Icon: HiOutlineHeart,
    },
    {
      id: 'v2',
      titleKey: 'Comunicación Fluida & Respeto',
      titleEn: 'Fluid Communication & Respect',
      descriptionKey: 'Mantenemos un diálogo honesto y constante durante todo el proceso para asegurar que el resultado coincida exactamente con lo acordado.',
      descriptionEn: 'We maintain honest and constant communication throughout the process to ensure results align with expectations.',
      Icon: HiOutlineChatBubbleLeftRight,
    },
    {
      id: 'v3',
      titleKey: 'Puntualidad & Compromiso',
      titleEn: 'Punctuality & Commitment',
      descriptionKey: 'Respetamos los tiempos de entrega acordados mediante una planificación organizada y trabajo constante.',
      descriptionEn: 'We strictly respect agreed delivery timelines through organized planning and focused execution.',
      Icon: HiOutlineClock,
    },
    {
      id: 'v4',
      titleKey: 'Seguridad & Protección',
      titleEn: 'Security & Protection',
      descriptionKey: 'Desarrollamos con buenas prácticas para garantizar que la información y la estructura digital de tu negocio estén siempre protegidas.',
      descriptionEn: 'We build using best practices to ensure your business data and digital infrastructure remain safe and protected.',
      Icon: HiOutlineShieldCheck,
    },
    {
      id: 'v5',
      titleKey: 'Atención Personalizada (Online o Presencial)',
      titleEn: 'Tailored Support (Online or On-site)',
      descriptionKey: 'Atendemos a nuestros clientes de forma directa, adaptándonos a reuniones virtuales o visitas presenciales según sea necesario.',
      descriptionEn: 'We work directly with our clients, offering both virtual meetings and on-site support based on project requirements.',
      Icon: HiOutlineUserGroup,
    },
  ],
};