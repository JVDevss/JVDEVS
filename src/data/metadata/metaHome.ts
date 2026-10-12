import type { Metadata } from "next";

export const metaHome: Metadata = {
  metadataBase: new URL("https://www.jvdevs.com/"),
  title: {
    default: "JVDevs | Desarrollo Web, Apps a Medida & Soluciones Digitales",
    template: "%s | JVDevs",
  },
  description:
    "Estudio especializado en desarrollo web full-stack, optimización SEO avanzada y diseño UI/UX de alto rendimiento. Creamos plataformas modernas, escalables y adaptadas a tus objetivos de negocio.",
  keywords: [
    "Desarrollo Web",
    "Agencia Digital",
    "Diseño UI/UX",
    "SEO",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Fullstack Developer",
    "JVDevs",
  ],
  authors: [{ name: "JVDevs", url: "https://www.jvdevs.com/" }],
  creator: "JVDevs",
  publisher: "JVDevs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JVDevs | Desarrollo Web & Soluciones Digitales",
    description:
      "Diseño UI/UX, desarrollo web a medida y estrategias SEO orientadas a potenciar tu presencia y conversión en línea.",
    url: "https://www.jvdevs.com/",
    siteName: "JVDevs",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JVDevs - Desarrollo Web y Soluciones Digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JVDevs | Desarrollo Web & Soluciones Digitales",
    description:
      "Transformamos ideas en productos digitales rápidos, modernos y escalables. ¡Conoce nuestros servicios!",
    creator: "@jvdevs",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};