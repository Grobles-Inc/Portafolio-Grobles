import { Link } from "react-router-dom"
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import project7 from "../assets/project7.png"


export default function ProjectSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-6 py-12"
        data-aos="fade-up"
      >
        <span className="text-yellow-300 font-semibold">Nuestros Trabajos</span>
        <h1 className="text-3xl max-w-3xl md:text-4xl lg:text-5xl font-bold">Dejemos Que Nuestro Trabajo Hable Por Sí Mismo</h1>
        <p className="max-w-2xl text-lg">
          Tu visión, nuestra experiencia. Colaboramos para crear soluciones innovadoras impactantes dentro de su plazo y presupuesto, impulsando sus ambiciones comerciales hacia adelante.
        </p>
        <Link
          to="/projects"
          className="btn btn-lg bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          Todos los Proyectos
        </Link>
      </div>
      {/* All Projects */}
      <div className="max-w-7xl mx-auto px-4"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 italic underline">
              Ordee
            </h3>
            <Link to="/projects/ordee" className="flex flex-col items-center space-y-4">
              <img
                src={project1}
                width={900}
                height={900}
                className="rounded-4xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 italic underline">
              Monedo
            </h3>
            <Link to="/projects/monedo" className="flex flex-col items-center space-y-4">
              <img
                src={project2}
                width={900}
                height={900}
                className="rounded-4xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 italic underline">
              Exaya
            </h3>
            <Link to="/projects/exaya" className="flex flex-col items-center space-y-4">
              <img
                src={project3}
                width={900}
                height={900}
                className="rounded-4xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Project 4 */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 italic underline">
              Blue-Motors
            </h3>
            <Link to="/projects/blue-motors" className="flex flex-col items-center space-y-4">
              <img
                src={project4}
                width={900}
                height={900}
                className="rounded-4xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Project 5 */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 italic underline">
              VitaLight
            </h3>
            <Link to="/projects/vitalight" className="flex flex-col items-center space-y-4">
              <img
                src={project5}
                width={900}
                height={900}
                className="rounded-4xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Project 6 */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 italic underline">
              Hotel Conquistador Huanta
            </h3>
            <Link to="/projects/hotel-conquistador" className="flex flex-col items-center space-y-4">
              <img
                src={project6}
                width={900}
                height={900}
                className="rounded-4xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Project 7 */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 italic underline">
              Nido Perulina
            </h3>
            <Link to="/projects/nido-perulina" className="flex flex-col items-center space-y-4">
              <img
                src={project7}
                width={900}
                height={900}
                className="rounded-4xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
