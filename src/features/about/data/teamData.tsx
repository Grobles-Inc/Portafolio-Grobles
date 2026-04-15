export interface Team {
  key: string;
  image: string;
  role: string;
  name: string;
  description: string;
}

export const teamData: Team[] = [
  {
    key: "miguel-angel",
    image: "https://avatars.githubusercontent.com/u/130678320?v=4",
    role: "CEO & Software Engineer",
    name: "Miguel Angel",
    description: "Miguel es el fundador y CEO de Grobles Studio, especializado en desarrollo de software moderno. Con una sólida formación en tecnologías innovadoras y liderazgo, impulsa el crecimiento del equipo y la calidad de las soluciones tecnológicas.",
  },
  {
    key: "jheison-huaynate",
    image: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "CEO & Cybersecurity Engineer",
    name: "Jheison Huaynate",
    description: "Jheison es el Cofundador y Cybersecurity Engineer de la empresa, con más de 5 años de experiencia. Su pasión por la tecnología y el emprendimiento lo ha llevado a crear Grupo HC Solutions, una empresa que se ha convertido en una referencia en el mercado.",
  },
  {
    key: "luigi-santana",
    image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "UI/UX Designer",
    name: "Luigi Santana",
    description: "Luigi es el UI/UX Designer de la empresa, con más de 5 años de experiencia en el diseño de interfaces intuitivas y atractivas. Su enfoque creativo y atención al detalle garantizan experiencias digitales memorables para nuestros clientes.",
  },
]

export const getTeamData = (): Team[] => {
  return teamData;
}