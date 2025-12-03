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
    description: "Miguel es el fundador y CEO de la empresa, con más de 10 años de experiencia en el desarrollo de software. Su pasión por la tecnología y el emprendimiento lo ha llevado a crear una empresa que se ha convertido en una referencia en el mercado.",
  },
  {
    key: "brayan-paucar",
    image: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Product Manager",
    name: "Brayan Paucar",
    description: "Brayan es el Product Manager de la empresa, con más de 5 años de experiencia en la gestión de productos. Su pasión por la tecnología y el emprendimiento lo ha llevado a crear una empresa que se ha convertido en una referencia en el mercado.",
  },
  {
    key: "luigi-santana",
    image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "UI/UX Designer",
    name: "Luigi Santana",
    description: "Luigi es el UI/UX Designer de la empresa, con más de 5 años de experiencia en el diseño de interfaces. Su pasión por la tecnología y el emprendimiento lo ha llevado a crear una empresa que se ha convertido en una referencia en el mercado.",
  },
  {
    key: "jheison-huaynate",
    image: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Cybersecurity Engineer",
    name: "Jheison Huaynate",
    description: "Jheison es el Cybersecurity Engineer de la empresa, con más de 5 años de experiencia en la seguridad informática. Su pasión por la tecnología y el emprendimiento lo ha llevado a crear una empresa que se ha convertido en una referencia en el mercado.",
  },
  {
    key: "alvaro-mateo",
    image: "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Software Engineer",
    name: "Alvaro Mateo",
    description: "Alvaro es el Software Engineer de la empresa, con más de 5 años de experiencia en el desarrollo de software. Su pasión por la tecnología y el emprendimiento lo ha llevado a crear una empresa que se ha convertido en una referencia en el mercado.",
  },
  {
    key: "fernando-perez",
    image: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "QA Engineer",
    name: "Fernando Perez",
    description: "Fernando es el QA Engineer de la empresa, con más de 5 años de experiencia en la verificación de calidad. Su pasión por la tecnología y el emprendimiento lo ha llevado a crear una empresa que se ha convertido en una referencia en el mercado.",
  },
]

export const getTeamData = (): Team[] => {
  return teamData;
}