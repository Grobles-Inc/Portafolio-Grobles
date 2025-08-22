import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import project10 from "../assets/project10.png";
import project11 from "../assets/project11.png";
import project12 from "../assets/project12.png";

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  category: string;
  client: string;
  duration: string;
  features: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Ordee",
    slug: "ordee",
    description: "Aplicación móvil para la gestión de ordenes en restaurantes.",
    fullDescription: "Ordee es una aplicación móvil para la gestión de ordenes en restaurantes, que permite llevar un control de las ordenes, en tiempo real, y que se pueden ver en un panel de administración.",
    image: project1,
    technologies: ["ReactNative", "TypeScript", "NativeWind", "Supabase", "Tailwind CSS"],
    liveDemo: "https://ordee.framer.website/",
    github: "https://github.com/Grobles-Inc/ordee",
    category: "Aplicacion Movil",
    client: "Ordee Inc.",
    duration: "3 meses",
    features: [
      "Sistema de gestión de ordenes",
      "Reportes de ganancias",
      "Sistema de gestión de usuarios",
      "Generación de recibos o vouchers",
      "Notificaciones en tiempo real",
    ]
  },
  {
    id: "2", 
    title: "Monedo",
    slug: "monedo",
    description: "Aplicación móvil para la gestión de finanzas personales.",
    fullDescription: "Monedo es una aplicación móvil para la gestión de gastos e ingresos personales, que permite llevar un control de los gastos e ingresos, y que se pueden ver en un panel de administración.",
    image: project2,
    technologies: ["React Native", "TypeScript", "NativeWind", "Supabase", "Tailwind CSS"],
    liveDemo: "https://monedo.framer.website/",
    github: "https://github.com/kralion/monedo",
    category: "Aplicacion Movil",
    client: "Monedo Inc.",
    duration: "6 meses",
    features: [
      "Categorías Personalizadas",
      "Generación de Reportes Detallados",
      "Análisis de Patrones de Gastos",
      "Notificaciones inteligentes",
      "Alertas y Recordatorios"
    ]
  },
  {
    id: "3",
    title: "Exaya", 
    slug: "exaya",
    description: "Sistema Web ERP para la gestión de una empresa de transporte.",
    fullDescription: "Exaya es una plataforma web para la gestión de empresas de transportes, que permite llevar un control de los clientes, vehículos, conductores, y que se pueden ver en un panel de administración.",
    image: project3,
    technologies: ["React", "NextJS", "TailwindCSS", "NextAuth.js", "AOS"],
    liveDemo: "https://exaya.vercel.app/",
    github: "https://github.com/kralion/exaya",
    category: "Sistema Web",
    client: "Expreso Ayacucho",
    duration: "10 meses",
    features: [
      "Gestión de flotas",
      "Planificación de rutas y programación de viajes",
      "Gestión de clientes y pedidos",
      "Análisis de datos y reportes",
      "Gestión de personal"
    ]
  },
  {
    id: "4",
    title: "Blue Motors",
    slug: "blue-motors", 
    description: "Página Web Ecommerce de venta de Motocicletas.",
    fullDescription: "Blue Motors es una página web de venta de motocicletas, que permite la gestión completa del inventario de vehículos, reservas online, financiamiento y seguimiento de ventas. La página muestra contenido con WordPress como CMS.",
    image: project4,
    technologies: ["React", "React Router", "TailwindCSS", "WordPress"],
    liveDemo: "https://blue-motors.netlify.app/",
    github: "https://github.com/MiguelRequenaR/Blue-Motors",
    category: "Ecommerce",
    client: "Blue Motors - Ecuador",
    duration: "3 meses",
    features: [
      "Catálogo digital de productos",
      "Sistema de reservas online",
      "Detalles de los productos",
      "Comparador de productos"
    ]
  },
  {
    id: "5",
    title: "VitaLight",
    slug: "vitalight",
    description: "Página Web Ecommerce de venta de productos naturales.",
    fullDescription: "VitaLight es una página web de venta de productos naturales, que permite la gestión completa de la carga de productos, y la venta de los mismos, además de la gestión de enviós con integración de whastapp para el contacto con el cliente.",
    image: project5,
    technologies: ["React", "Supabase", "TailwindCSS", "AOS", "PostgreSQL"],
    liveDemo: "https://vitalightienda.com/",
    github: "https://github.com/Grobles-Inc/vitalight",
    category: "Ecommerce",
    client: "VitaLight",
    duration: "10 días",
    features: [
      "Sección de productos",
      "Sección de ventas",
      "Sección de envíos",
      "Sección de clientes"
    ]
  },
  {
    id: "6",
    title: "Hotel Conquistador",
    slug: "hotel-conquistador",
    description: "Landing Page que muestra contenido de hoteles y sus servicios.",
    fullDescription: "Landing Page que muestra contenido, servicios e información del hotel Conquistador Huanta.",
    image: project6,
    technologies: ["Astro", "TailwindCSS"],
    liveDemo: "https://hotelconquistadorhuanta.com/",
    github: "#",
    category: "Landing Page",
    client: "Hotel Conquistador - Huanta",
    duration: "15 días",
    features: [
      "Sección de reservas",
      "Sección de servicios",
      "Sección de contacto",
      "Sección de información"
    ]
  },
  {
    id: "7",
    title: "Nido Perulina",
    slug: "nido-perulina",
    description: "Plataforma educativa informativa para la gestión de centros de educación inicial.",
    fullDescription: "Nido Perulina es una plataforma educativa especializada en la gestión integral de centros de educación inicial. Facilita la comunicación entre padres y maestros, el seguimiento del desarrollo infantil, la gestión académica y administrativa del centro educativo.",
    image: project7,
    technologies: ["Astro", "GSAP", "TailwindCSS", "AOS", "Open Graph", "Google Analytics"],
    liveDemo: "https://nidoperulina.edu.pe/",
    github: "https://github.com/Grobles-Inc/nido", 
    category: "Landing Page",
    client: "Nido Perulina",
    duration: "19 días",
    features: [
      "Sección de inicio",
      "Sección de nosotros",
      "Sección de servicios",
      "Sección de contacto",
      "Sección de noticias"
    ]
  },
  {
    id: "8",
    title: "Fundación HolosEduca",
    slug: "fundacion-holoseduca",
    description: "Página Web de presentación de la fundación HolosEduca, que muestra los servicios, proyectos y contacto de la fundación.",
    fullDescription: "Fundacion HolosEduca, es una organización sin fines de lucro dedicada a la educación y el desarrollo social. La página web presenta sus programas, proyectos y formas de contacto, con un diseño atractivo y funcional.",
    image: project8,
    technologies: ["Astro", "TailwindCSS", "AOS", "Netlify"],
    liveDemo: "https://holoseduca.netlify.app/",
    github: "https://github.com/Grobles-Inc/holoseduca",
    category: "Landing Page",
    client: "Fundación HolosEduca",
    duration: "10 días",
    features: [
      "Sección de inicio",
      "Sección de nosotros",
      "Sección de programas",
      "Sección de proyectos",
      "Sección de contacto"
    ]
  },
  {
    id: "9",
    title: "MLStreaming",
    slug: "ml-streaming",
    description: "MLStreaming es un sistam web que permite gestionar y comercializar cuentas de plataformas de streaming.",
    fullDescription: "MLStreaming es una solución web integral diseñada para facilitar la gestión y comercialización de cuentas de servicios de streaming. Diseñada para emprendedores, revendedores digitales o negocios que ofrecen suscripciones compartidas, la plataforma centraliza todas las operaciones en un entorno seguro, intuitivo y eficiente.",
    image: project9,
    technologies: ["React", "TailwindCSS", "Shadcn", "Supabase", "TypeScript"],
    liveDemo: "https://mlstreaming.com/",
    github: "https://github.com/Grobles-Inc/streaming",
    category: "Sistema Web",
    client: "MLStreaming",
    duration: "31 días",
    features: [
      "Gestión de cuentas de streaming",
      "Gestión de usuarios por roles",
      "Gestión de venta de productos y cuentas",
      "Gestión de billeteras entre usuarios",
      "Gestión de pedidos de productos y cuentas",
      "Gestión de administradores con control total de la plataforma",
    ]
  },
  {
    id: "10",
    title: "Tu Techo Ahora",
    slug: "tu-techo-ahora",
    description: "Plataforma web para promocionar propiedades inmobiliarias con panel de administración integrado.",
    fullDescription: "Sistema web diseñado para mostrar y gestionar sus propiedades de forma profesional. Incluye un panel de administración intuitivo para agregar, editar y organizar propiedades, ofreciendo a los clientes una experiencia de navegación clara y atractiva, optimizada para aumentar la visibilidad y generar oportunidades de venta o alquiler.",
    image: project10,
    technologies: ["React", "TailwindCSS", "TanStack", "DaisyUI", "Zod"],
    liveDemo: "https://www.tutechoahora.com/",
    github: "https://github.com/Grobles-Inc/tutechoahora",
    category: "Sistema Web",
    client: "Tu Techo Ahora",
    duration: "14 días",
    features: [
      "Gestión de propiedades en venta y alquiler",
      "Gestión de usuarios con roles y permisos",
      "Gestión de solicitudes y contactos de interesados",
      "Gestión de imágenes por propiedades",
      "Gestión de pedidos de productos y cuentas",
      "Gestión de administradores con control total de la plataforma",
    ]
  },
  {
    id: "11",
    title: "Wild Horse CarWash Mobile",
    slug: "wild-horse-carwash-mobile",
    description: "Landing Page para promocionar servicios de limpieza de autos y captar clientes .",
    fullDescription: "Landing Page para promocionar servicios de limpieza de autos y captar clientes. La página web es una experiencia de navegación atractiva y fácil de usar, diseñada para atraer a los clientes potenciales y convertirlos en clientes activos.",
    image: project11,
    technologies: ["Astro", "TailwindCSS", "AOS", "DaisyUI"],
    liveDemo: "https://wildhorsecarwashmobile.com/",
    github: "https://github.com/Grobles-Inc/mustang",
    category: "Landing Page",
    client: "Wild Horse CarWash",
    duration: "10 días",
    features: [
      "Sección de inicio",
      "Sección Sobre Nosotros",
      "Sección de servicios",
      "Sección de contacto",
    ]
  },
  {
    id: "12",
    title: "Andina Group E.I.R.L.",
    slug: "andina-group",
    description: "Landing Page de promoción de servicios generales para el hogar y negocios.",
    fullDescription: "Landing Page para promocionar servicios generales de construcción de hogares y negocios. La página web es una experiencia de navegación atractiva y fácil de usar, diseñada para atraer a los clientes potenciales y convertirlos en clientes activos.",
    image: project12,
    technologies: ["Astro", "TailwindCSS", "AOS", "Shadcn", "Vercel"],
    liveDemo: "https://www.andinagroup.org/",
    github: "https://github.com/kralion/andina",
    category: "Landing Page",
    client: "Andina Group",
    duration: "8 días",
    features: [
      "Sección de inicio",
      "Sección Sobre Nosotros",
      "Sección de servicios",
      "Sección de contacto",
      "Integración de contacto por mensaje con Whatsapp",
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projectsData.filter(project => project.category === category);
}; 