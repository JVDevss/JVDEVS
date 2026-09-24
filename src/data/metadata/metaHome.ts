import type { Metadata } from "next";

export const metaHome: Metadata = {
  title: {
    default: "JVDevs | Desarrollo Web & Soluciones Digitales",
    template: "%s | JVDevs",
  },
  description:
    "Estudio de desarrollo web, optimización SEO y diseño UI/UX. Creamos sitios web modernos, rápidos y adaptados a tus necesidades.",
  keywords: [
    "Desarrollo Web",
    "Agencia Digital",
    "Diseño UI/UX",
    "SEO",
    "React",
    "Next.js",
    "Fullstack",
    "JVDevs",
  ],
  authors: [{ name: "JVDevs" }],
  creator: "JVDevs",
  metadataBase: new URL("https://jvdevs.com"), // Cambia por tu dominio real
  openGraph: {
    title: "JVDevs | Desarrollo Web & Soluciones Digitales",
    description:
      "Diseño UI/UX, desarrollo a medida y SEO para potenciar tu presencia en línea.",
    url: "https://jvdevs.com",
    siteName: "JVDevs",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JVDevs | Desarrollo Web & Soluciones Digitales",
    description:
      "Diseño UI/UX, desarrollo a medida y SEO para potenciar tu presencia en línea.",
  },
  robots: {
    index: true,
    follow: true,
  },
};