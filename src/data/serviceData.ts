import webPage from "@/assets/pagina-web.webp"
import software from "@/assets/software.webp"
import uiUx from "@/assets/diseño-ux-ui.webp"
import marketing from "@/assets/marketing-digital.webp"
import branding from "@/assets/branding-marca.webp"
import consulting from "@/assets/consultoria.webp"

export interface Service {
  key: string;
  image: string;
  imgSide: "left" | "right";
  title: string;
  description: string;
  subtitle: string;
  features: string[];
}

export const services: Service[] = [
  {
    key: "web",
    image: webPage,
    imgSide: "left",
    title: "Páginas Web",
    description:
      "Servicio de desarrollo de páginas web, digitaliza tu negocio, genera confianza y ten presencia en la Web.",
    subtitle: "(Servicios de Página Web)",
    features: [
      "Landing Page con 4 secciones: Inicio, Acerca de, Servicios y Contacto.",
      "Diseño Responsivo para dispositivos móviles y desktop.",
      "Dominio y Hosting Gratis por 1 año.",
      "5 correos corporativos.",
    ],
  },
  {
    key: "software",
    image: software,
    imgSide: "right",
    title: "Software",
    description:
      "Servicio de desarrollo de software, soluciones avanzadas para gestionar y automatizar tu negocio.",
    subtitle: "(Servicios de Software)",
    features: [
      "Desarrollo de Software a medida.",
      "Usuarios, Roles y Panel de Control (Dashboard).",
      "Gestión de Bases de Datos y Automatizaciones.",
      "Integración de Servicios Externos, y Sistema Escalable.",
    ],
  },
  {
    key: "ui/ux",
    image: uiUx,
    imgSide: "left",
    title: "Diseño UI/UX",
    description:
      "Creamos interfaces intuitivas y atractivas que mejoran la experiencia de usuario.",
    subtitle: "(Servicios de Diseño UI/UX)",
    features: [
      "Diseño de interfaces intuitivas y atractivas.",
      "Diseño de interfaces responsivas para dispositivos móviles y desktop.",
      "Diseño de interfaces de usuario para aplicaciones móviles y desktop.",
      "Diseño de interfaces de usuario para aplicaciones web.",
    ],
  },
  {
    key: "marketing",
    image: marketing,
    imgSide: "right",
    title: "Marketing Digital",
    description:
      "Impulsamos tu negocio en línea con estrategias de marketing digital, gestión de redes sociales y campañas de publicidad.",
    subtitle: "(Servicios de Marketing)",
    features: [
      "Gestión de redes sociales (Facebook & Instagram).",
      "Campañas de anuncios (Google Ads, Meta Ads).",
      "Creación de contenido y diseño gráfico.",
      "Estrategia SEO y posicionamiento web.",
    ],
  },
  {
    key: "branding",
    image: branding,
    imgSide: "left",
    title: "Branding & Marca",
    description:
      "Creamos marcas sólidas y coherentes a través de identidad visual distintiva y materiales de branding profesionales.",
    subtitle: "(Servicios de Branding)",
    features: [
      "Diseño de logotipo profesional.",
      "Manual de marca e identidad visual.",
      "Tarjetas de presentación y papelería corporativa.",
      "Asesoría en comunicación visual y tono de marca.",
    ],
  },
  {
    key: "consulting",
    image: consulting,
    imgSide: "right",
    title: "Consultoría",
    description:
      "Te ayudamos a tomar decisiones informadas sobre tu negocio.",
    subtitle: "(Servicios de Consultoría)",
    features: [
      "Análisis de mercado y tendencias.",
      "Análisis de competencia.",
      "Análisis de estrategias de marketing.",
      "Análisis de estrategias de ventas.",
    ],
  },
];

export const getServices = (): Service[] => {
  return services;
}