import ordee from "@/assets/ordee.webp"
import exaya from "@/assets/exaya.webp"
import vitalight from "@/assets/vitalight.webp"
import nidoPerulina from "@/assets/nidoperulina.webp"
import holosEduca from "@/assets/holoseduca.webp"
import mlStreaming from "@/assets/mlstreaming.webp"
import tuTechoAhora from "@/assets/tutechoahora.webp"
import wildHorseCarWash from "@/assets/wildhorse.webp"
import andinaGroup from "@/assets/andinagroup.webp"
import landingCp360 from "@/assets/landing360.webp"
import industriaRlc from "@/assets/industriarlc.webp"
import rlcAcademy from "@/assets/rlcacademy.webp"
import rlcAcademyAula from "@/assets/rlcacademyaula.webp"

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
    liveDemo: "https://cp-360.vercel.app/",
  },
  {
    id: "11",
    title: "Industria RLC",
    description: "Landing Page para promocionar servicios y productos de la empresa Industria RLC.",
    image: industriaRlc,
    liveDemo: "https://www.industriarlc.com/",
  },
  {
    id: "12",
    title: "RLC Academy 360",
    description: "Landing Page para promocionar cursos y capacitaciones de la empresa Industria RLC.",
    image: rlcAcademy,
    liveDemo: "https://academia.industriarlc.com/",
  },
  {
    id: "13",
    title: "RLC Academy Aula Virtual",
    description: "Sistema Web para la gestión y dictado de cursos y capacitaciones de la empresa Industria RLC.",
    image: rlcAcademyAula,
    liveDemo: "https://aula.industriarlc.com/login",
  }
] 

export const getProjectsData = (): Project[] => {
  return projectsData;
}