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
  description1Key: 'Desde 2026, JVDevs nace como una respuesta directa al estado actual de la tecnología en Venezuela. Ante la escasez de sistemas, aplicaciones y presencia digital sólida en el país, identificamos la oportunidad de unir la experiencia del Desarrollador Fullstack Senior Víctor Carrillo y la energía del Desarrollador Junior Jesús Boyer. Nuestro objetivo es ofrecer soluciones tecnológicas accesibles y de alto nivel para negocios, emprendimientos y empresas, impulsando al mismo tiempo el desarrollo digital nacional.',
  description1En: 'Since 2026, JVDevs was born as a direct response to the current state of technology in Venezuela. Driven by the need for reliable systems, applications, and digital presence across the country, Senior Fullstack Developer Víctor Carrillo and Junior Developer Jesús Boyer joined forces. We provide high-quality digital solutions for local businesses, startups, and companies, while taking a step forward in national technological growth.',
  description2Key: 'Brindamos un acompañamiento integral: desde páginas web y aplicaciones a medida hasta plataformas de gestión, automatización de procesos, chatbots y soporte técnico especializado para garantizar que cada proyecto funcione de forma continua y eficiente.',
  description2En: 'We offer comprehensive support: from custom websites and tailored applications to management platforms, process automation, chatbots, and specialized technical support to ensure every project operates smoothly and efficiently.',
  image: '/images/bg/bg.png',
  missionVision: {
    missionKey: 'Impulsar la transformación digital de negocios y empresas mediante herramientas tecnológicas fiables, accesibles y hechas a la medida, ayudando a modernizar la operativa local con un acompañamiento cercano y transparente.',
    missionEn: 'Drive the digital transformation of local businesses and enterprises through reliable, accessible, and custom-built technology tools, helping modernize everyday operations with close and transparent support.',
    visionKey: 'Convertirnos en un referente de desarrollo y software que demuestre el potencial del talento tecnológico nacional, creando productos duraderos que fortalezcan el tejido empresarial dentro y fuera del país.',
    visionEn: 'Become a leading benchmark in software development that showcases national tech talent, creating long-lasting digital products that strengthen business operations locally and globally.',
    features: [
      {
        keyEs: 'Desarrollo web a medida, SaaS y sistemas corporativos',
        keyEn: 'Custom Web Development, SaaS & Enterprise Systems',
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