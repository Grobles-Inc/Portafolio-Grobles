import tuTechoAhora from "@/assets/tutechoahora.webp"
import wildHorseCarWash from "@/assets/wildhorse.webp"
import andinaGroup from "@/assets/andinagroup.webp"
import landingCp360 from "@/assets/landing360.webp"

const projects = [
  {
    id: 1,
    title: "Tu Techo Ahora",
    image: tuTechoAhora,
    liveDemo: "https://www.tutechoahora.com/",
  },
  {
    id: 2,
    title: "Wild Horse CarWash",
    image: wildHorseCarWash,
    liveDemo: "https://wildhorsecarwashmobile.com/",
  },
  {
    id: 3,
    title: "Andina Group E.I.R.L.",
    image: andinaGroup,
    liveDemo: "https://www.andinagroup.org/",
  },
  {
    id: 4,
    title: "Sistema CP-360°",
    image: landingCp360,
    liveDemo: "https://cp360-landing.abccostos.com/",
  },
]


export default function ProjectSection() {
  return (
    <main className="py-20">
      <div
        className="px-4 md:px-20 text-center md:text-left">
        <span className="italic text-extralight text-lg text-gray-600">
          (Últimos Proyectos)
        </span>
        <h1 className="text-secondary text-5xl md:text-[120px] font-bold uppercase pt-10 pb-5"
        data-aos="fade-up"
        data-aos-delay="100">
          Últimos Proyectos
        </h1>
        <p className="text-gray-600 text-xl md:text-[40px] font-extralight"
        data-aos="fade-up"
        data-aos-delay="200">
          Descubre nuestros últimos proyectos, que muestran innovación <br /> y soluciones digitales de alta calidad.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10">
        {projects.map((project) => (
          <div key={project.id} className="pb-12 md:sticky top-0 z-0 bg-[#f8f8f8]">
            <div className="relative overflow-hidden group cursor-pointer">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[350px] md:h-[650px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <h3 className="text-primary text-5xl font-bold mb-2">{project.title}</h3>
                </div>
              </a>
            </div>
            <div className="flex justify-between items-center pt-8 mx-10 relative z-10">
              <h3 className="text-secondary text-3xl font-bold">{project.title}</h3>
              <span className="text-gray-600 text-[20px] font-extralight">(2025)</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
