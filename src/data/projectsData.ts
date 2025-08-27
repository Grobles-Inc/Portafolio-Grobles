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
  description: string;
  image: string;
  liveDemo?: string;
  github?: string;
  category: string;
  duration: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Ordee",
    description: "Aplicación móvil para la gestión de ordenes en restaurantes.",
    image: project1,
    liveDemo: "https://ordee.framer.website/",
    github: "https://github.com/Grobles-Inc/ordee",
    category: "App",
    duration: "1 mes",
  },
  {
    id: "2", 
    title: "Monedo",
    description: "Aplicación móvil para la gestión de finanzas personales.",
    image: project2,
    liveDemo: "https://monedo.framer.website/",
    github: "https://github.com/kralion/monedo",
    category: "App",
    duration: "1 mes",
  },
  {
    id: "3",
    title: "Exaya", 
    description: "Sistema Web ERP para la gestión de una empresa de transporte.",
    image: project3,
    liveDemo: "https://exaya.vercel.app/",
    github: "https://github.com/kralion/exaya",
    category: "Sistema Web",
      duration: "2 meses",
  },
  {
    id: "4",
    title: "Blue Motors",
    description: "Página Web Ecommerce de venta de Motocicletas.",
    image: project4,
    liveDemo: "https://blue-motors.netlify.app/",
    github: "https://github.com/MiguelRequenaR/Blue-Motors",
    category: "Ecommerce",
    duration: "15 días",
  },
  {
    id: "5",
    title: "VitaLight",
    description: "Página Web Ecommerce de venta de productos naturales.",
    image: project5,
    liveDemo: "https://vitalightienda.com/",
    github: "https://github.com/Grobles-Inc/vitalight",
    category: "Ecommerce",
    duration: "10 días",
  },
  {
    id: "6",
    title: "Hotel Conquistador",
    description: "Landing Page que muestra contenido de hoteles y sus servicios.",
    image: project6,
    liveDemo: "https://hotelconquistadorhuanta.com/",
    github: "#",
    category: "Landing Page",
      duration: "15 días",
  },
  {
    id: "7",
    title: "Nido Perulina",
    description: "Plataforma educativa informativa para la gestión de centros de educación inicial.",
    image: project7,
    liveDemo: "https://nidoperulina.edu.pe/",
    github: "https://github.com/Grobles-Inc/nido", 
    category: "Landing Page",
    duration: "19 días",
  },
  {
    id: "8",
    title: "HolosEduca",
    description: "Página Web de presentación de la fundación HolosEduca, que muestra los servicios, proyectos y contacto de la fundación.",
    image: project8,
    liveDemo: "https://holoseduca.netlify.app/",
    github: "https://github.com/Grobles-Inc/holoseduca",
    category: "Landing Page",
    duration: "10 días",
  },
  {
    id: "9",
    title: "MLStreaming",
    description: "MLStreaming es un sistam web que permite gestionar y comercializar cuentas de plataformas de streaming.",
    image: project9,
    liveDemo: "https://mlstreaming.com/",
    github: "https://github.com/Grobles-Inc/streaming",
    category: "Sistema Web",
      duration: "31 días",
  },
  {
    id: "10",
    title: "Tu Techo Ahora",
    description: "Plataforma web para promocionar propiedades inmobiliarias con panel de administración integrado.",
    image: project10,
    liveDemo: "https://www.tutechoahora.com/",
    github: "https://github.com/Grobles-Inc/tutechoahora",
    category: "Sistema Web",
    duration: "14 días",
  },
  {
    id: "11",
    title: "Wild Horse CarWash Mobile",
    description: "Landing Page para promocionar servicios de limpieza de autos y captar clientes .",
    image: project11,
    liveDemo: "https://wildhorsecarwashmobile.com/",
    github: "https://github.com/Grobles-Inc/mustang",
    category: "Landing Page",
    duration: "10 días",
  },
  {
    id: "12",
    title: "Andina Group E.I.R.L.",
    description: "Landing Page de promoción de servicios generales para el hogar y negocios.",
    image: project12,
    liveDemo: "https://www.andinagroup.org/",
    github: "https://github.com/kralion/andina",
    category: "Landing Page",
    duration: "8 días",
  }
];


export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'Todos') {
    return projectsData;
  }
  return projectsData.filter(project => project.category === category);
}; 