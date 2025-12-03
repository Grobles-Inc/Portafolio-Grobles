import ordee from "@/assets/ordee.png"
import exaya from "@/assets/exaya.png"
import vitalight from "@/assets/vitalight.png"
import nidoPerulina from "@/assets/nidoperulina.png"
import holosEduca from "@/assets/holoseduca.png"
import mlStreaming from "@/assets/mlstreaming.png"
import tuTechoAhora from "@/assets/tutechoahora.png"
import wildHorseCarWash from "@/assets/wildhorse.png"
import andinaGroup from "@/assets/andinagroup.png"
import landingCp360 from "@/assets/landing360.png"

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveDemo?: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Ordee",
    description: "Aplicación móvil para la gestión de ordenes en restaurantes.",
    image: ordee,
    liveDemo: "https://ordee.framer.website/",
  },
  {
    id: "2",
    title: "Exaya",
    description: "Sistema Web ERP para la gestión de una empresa de transporte.",
    image: exaya,
    liveDemo: "https://exaya.vercel.app/",  
  },
  {
    id: "3",
    title: "VitaLight",
    description: "Página Web Ecommerce de venta de productos naturales.",
    image: vitalight,
    liveDemo: "https://vitalightienda.com/",
  },
  {
    id: "4",
    title: "Nido Perulina",
    description: "Plataforma educativa informativa para la gestión de centros de educación inicial.",
    image: nidoPerulina,
    liveDemo: "https://nidoperulina.edu.pe/",
  },
  {
    id: "5",
    title: "HolosEduca",
    description: "Página Web de presentación de la fundación HolosEduca, que muestra los servicios, proyectos y contacto de la fundación.",
    image: holosEduca,
    liveDemo: "https://holoseduca.netlify.app/",
  },
  {
    id: "6",
    title: "MLStreaming",
    description: "MLStreaming es un sistam web que permite gestionar y comercializar cuentas de plataformas de streaming.",
    image: mlStreaming,
    liveDemo: "https://mlstreaming.com/",
  },
  {
    id: "7",
    title: "Tu Techo Ahora",
    description: "Plataforma web para promocionar propiedades inmobiliarias con panel de administración integrado.",
    image: tuTechoAhora,
    liveDemo: "https://www.tutechoahora.com/",
  },
  {
    id: "8",
    title: "Wild Horse CarWash",
    description: "Landing Page para promocionar servicios de limpieza de autos y captar clientes .",
    image: wildHorseCarWash,
    liveDemo: "https://wildhorsecarwashmobile.com/",
  },
  {
    id: "9",
    title: "Andina Group E.I.R.L.",
    description: "Landing Page de promoción de servicios generales para el hogar y negocios.",
    image: andinaGroup,
    liveDemo: "https://www.andinagroup.org/",
  },
  {
    id: "10",
    title: "Sistema CP-360°",
    description: "Landing Page para promocionar el sistema CP-360°, muestra los servicios, características y beneficios del sistema.",
    image: landingCp360,
    liveDemo: "https://cp360-landing.abccostos.com/",
  },
] 

export const getProjectsData = (): Project[] => {
  return projectsData;
}