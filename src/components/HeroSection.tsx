import { Link } from "react-router-dom"
import oooscillate from "../assets/oooscillate.svg"

export default function HeroSection() {
  return (
    <section className="relative bg-[#07e288] pt-20 overflow-hidden">
      <img
        src={oooscillate}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative">
        <div className="flex flex-col items-center text-center space-y-6 md:py-12 py-6 px-4"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-5xl leading-12 font-bold">Empresa Líder en <span className="text-white italic">Soluciones Digitales</span></h1>
          <p className="max-w-2xl md:text-lg">
            Trae tu idea, nosotros la transformamos en innovación que impulsa tu negocio.
          </p>
          <div className="flex gap-2">

            <Link
              to="/contact"
              className="btn md:btn-lg btn-neutral border text-white hover:opacity-70   transition-all duration-300 ease-in-out rounded-full "
              data-aos="flip-left"
              data-aos-delay="300"
            >
              Comenzar ahora
            </Link>
            <Link
              to="/projects"
              className="btn  md:btn-lg btn-outline btn-neutral rounded-full"
              data-aos="flip-right"
              data-aos-delay="500"
            >
              Ver proyectos
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center px-4 sm:px-6 md:px-8"
          data-aos="fade-up"
        >
          <img
            src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equipo de desarrolladores de software trabajando en proyectos innovadores con tecnología moderna"
            width={900}
            height={900}
            className="rounded-4xl"
            loading="lazy"
            data-aos="zoom-in"
            data-aos-delay="700"
            decoding="async"
          />
        </div>
        <div className="grid grid-cols-2 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-4 text-lg"
        >
          <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-4xl font-bold text-[#07e288] mb-2">20+</h3>
            <p className="text-gray-700 text-sm">Proyectos completados</p>
          </div>

          <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-4xl font-bold text-[#07e288] mb-2">6+</h3>
            <p className="text-gray-700 text-sm">Años de experiencia</p>
          </div>

          <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-4xl font-bold text-[#07e288] mb-2">95%</h3>
            <p className="text-gray-700 text-sm">Satisfacción del Cliente</p>
          </div>

          <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-4xl font-bold text-[#07e288] mb-2">24x7</h3>
            <p className="text-gray-700 text-sm">Soporte al cliente</p>
          </div>
        </div>
      </div>
    </section >
  )
}
