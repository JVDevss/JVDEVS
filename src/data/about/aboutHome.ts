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
  description1Key: 'JVDevs es un equipo de desarrollo de software nacida en 2026 para acelerar la evolución digital en Venezuela. Combinando la experiencia en arquitectura de software fullstack y el desarrollo web de Víctor Carrillo y Jesús Boyer para diseñar soluciones tecnológicas a la medida, fiables y de alto impacto. Impulsamos a emprendimientos y empresas a modernizar sus procesos, conectar con sus clientes y liderar en el entorno digital.',
  description1En: 'JVDevs is a software development team founded in 2026 to accelerate digital evolution in Venezuela. Combining the full-stack software architecture and web development expertise of Víctor Carrillo and Jesús Boyer, we design tailored, reliable, and high-impact tech solutions. We empower startups and businesses to modernize operations, engage customers, and lead in the digital era.',
  description2Key: 'Brindamos un acompañamiento integral: desde páginas web y aplicaciones a medida hasta plataformas de gestión, automatización de procesos, chatbots y soporte técnico especializado para garantizar que cada proyecto funcione de forma continua y eficiente.',
  description2En: 'We offer comprehensive support: from custom websites and tailored applications to management platforms, process automation, chatbots, and specialized technical support to ensure every project operates smoothly and efficiently.',
  image: '/images/bg/bg.png',
  missionVision: {
    missionKey: 'Impulsar la transformación digital de empresas y emprendimientos mediante software accesible, confiable y hecho a la medida, modernizando sus procesos operativos a través de un acompañamiento técnico cercano, ético y transparente.',
    missionEn: 'Drive the digital transformation of companies and enterprises through accessible, reliable, and custom-built software, modernizing operational processes with close, ethical, and transparent technical support.',
    visionKey: 'Ser un referente en desarrollo de software y soluciones digitales que evidencie el alcance del talento venezolano, creando productos tecnológicos duraderos que impulsen el tejido empresarial tanto a nivel nacional como internacional.',
    visionEn: 'Be a leading benchmark in software development and digital solutions that showcases the reach of Venezuelan talent, creating long-lasting tech products that drive business growth both locally and internationally.',
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