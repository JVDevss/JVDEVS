import { IconType } from 'react-icons';
import { 
  HiOutlineCube, 
  HiOutlineCpuChip, 
  HiOutlineShieldCheck, 
  HiOutlineRocketLaunch 
} from 'react-icons/hi2';

export interface AboutStat {
  id: string;
  value: string;
  labelKey: string;
  labelEn: string;
}

export interface AboutValue {
  id: string;
  titleKey: string;
  titleEn: string;
  descriptionKey: string;
  descriptionEn: string;
  Icon: IconType;
}

export interface TechPartner {
  name: string;
  logo: string;
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
  missionVision: MissionVisionContent;
  stats: AboutStat[];
  values: AboutValue[];
  techPartners: TechPartner[];
}

export const aboutData: AboutData = {
  badgeKey: 'Sobre Nosotros',
  badgeEn: 'About Us',
  titleKey: 'Ingeniería digital para la',
  titleEn: 'Digital engineering for the',
  highlightKey: 'próxima era de la web',
  highlightEn: 'next era of the web',
  description1Key: 'En JVDevs combinamos arquitectura de software de vanguardia, estética minimalista futurista e inteligencia artificial para crear productos digitales que destacan y escalan sin límites.',
  description1En: 'At JVDevs, we combine cutting-edge software architecture, futuristic minimalist aesthetics, and artificial intelligence to create digital products that stand out and scale endlessly.',
  description2Key: 'No solo construimos sitios web; creamos ecosistemas digitales optimizados para alta velocidad, conversión y experiencias de usuario memorables en cualquier dispositivo.',
  description2En: 'We don’t just build websites; we engineer digital ecosystems optimized for high speed, conversion, and memorable user experiences across all devices.',
  missionVision: {
    missionKey: 'Reinventar la creación digital combinando estética futurista con código de ultra rendimiento, impulsando a las empresas a liderar en un entorno digital ultra competitivo.',
    missionEn: 'Reinvent digital creation by combining futuristic aesthetics with ultra-performance code, empowering businesses to lead in an ultra-competitive digital environment.',
    visionKey: 'Ser el estudio de ingeniería web y experiencia digital de referencia global, marcando los estándares en desarrollo fluido, aplicaciones IA y diseño de vanguardia.',
    visionEn: 'Be the globally recognized web engineering and digital experience studio, setting the benchmark for smooth development, AI apps, and cutting-edge design.',
    features: [
      {
        keyEs: 'Desarrollo optimizado para Next.js 15+',
        keyEn: 'Next.js 15+ Optimized Development',
      },
      {
        keyEs: 'Paginas web perzolizadas y modernas',
        keyEn: 'Customized & Modern Websites',
      },
      {
        keyEs: 'Sistemas de procesos y automatizaciones inteligentes',
        keyEn: 'Intelligent Process Systems & Automations',
      },
    ],
  },
  stats: [
    { id: '01', value: '100%', labelKey: 'Uptime & Disponibilidad', labelEn: 'Uptime & Availability' },
    { id: '02', value: '+15', labelKey: 'Proyectos Completados', labelEn: 'Projects Completed' },
    { id: '03', value: '<100ms', labelKey: 'Latencia Promedio', labelEn: 'Average Latency' },
    { id: '04', value: '24/7', labelKey: 'Monitoreo Proactivo', labelEn: 'Proactive Monitoring' },
  ],
  values: [
    {
      id: 'v1',
      titleKey: 'Diseño Holográfico & Glass',
      titleEn: 'Holographic & Glass Design',
      descriptionKey: 'Interfaces interactivas con estética moderna, micro-interacciones sutiles y efectos visuales de alta precisión.',
      descriptionEn: 'Interactive interfaces with modern aesthetics, subtle micro-interactions, and high-precision visual effects.',
      Icon: HiOutlineCube,
    },
    {
      id: 'v2',
      titleKey: 'Arquitectura AI-Driven',
      titleEn: 'AI-Driven Architecture',
      descriptionKey: 'Integración fluida de modelos de inteligencia artificial y automatización para optimizar la eficiencia operativa.',
      descriptionEn: 'Seamless integration of AI models and automation to optimize operational efficiency.',
      Icon: HiOutlineCpuChip,
    },
    {
      id: 'v3',
      titleKey: 'Seguridad & Rendimiento Max',
      titleEn: 'Max Security & Performance',
      descriptionKey: 'Código limpio, estándar Core Web Vitals al máximo y protección robusta en cada capa de la aplicación.',
      descriptionEn: 'Clean code, maximum Core Web Vitals performance, and robust protection at every application layer.',
      Icon: HiOutlineShieldCheck,
    },
    {
      id: 'v4',
      titleKey: 'Escalabilidad Ultra Rápida',
      titleEn: 'Ultra-Fast Scalability',
      descriptionKey: 'Sistemas preparados para soportar picos de tráfico masivo sin perder fluidez ni tiempo de respuesta.',
      descriptionEn: 'Systems ready to handle massive traffic spikes without losing fluidity or response speed.',
      Icon: HiOutlineRocketLaunch,
    },
  ],
  techPartners: [
    { name: 'Next.js', logo: '/tech/nextjs.svg' },
    { name: 'React', logo: '/tech/react.svg' },
    { name: 'Tailwind CSS', logo: '/tech/tailwindcss.svg' },
    { name: 'TypeScript', logo: '/tech/typescript.svg' },
    { name: 'Node.js', logo: '/tech/nodejs.svg' },
  ],
};