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
    image:
      "https://images.unsplash.com/photo-1604074131228-9d48b811bd80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://plus.unsplash.com/premium_photo-1661774953651-d4f658a7e34d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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