import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-6 py-12"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Somos Grobles Startup Líder en <span className="text-[#07e288] italic">Desarrollo de Software</span></h1>
        <p className="max-w-2xl text-lg">
          Trabajamos contigo para convertir tus ideas en soluciones innovadoras, utilizando tecnología de punta para desarrollar productos de software escalable.
        </p>
        <span className="text-xl">Construyamos el futuro juntos. 🚀</span>
        <Link
          to="/contact"
          className="btn btn-lg bg-[#07e288] hover:bg-white text-gray-800 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          Comenzar ahora
        </Link>
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
          decoding="async"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-4 text-lg"
        data-aos="fade-up"
      >
        <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center">
          <h3 className="text-4xl font-bold text-[#07e288] mb-2">15+</h3>
          <p className="text-gray-700">Proyectos completados</p>
        </div>

        <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center">
          <h3 className="text-4xl font-bold text-[#07e288] mb-2">10+</h3>
          <p className="text-gray-700">Años de experiencia</p>
        </div>

        <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center">
          <h3 className="text-4xl font-bold text-[#07e288] mb-2">95%</h3>
          <p className="text-gray-700">Satisfacción del Cliente</p>
        </div>

        <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center">
          <h3 className="text-4xl font-bold text-[#07e288] mb-2">24x7</h3>
          <p className="text-gray-700">Soporte al cliente</p>
        </div>
      </div>
    </section>
  )
}
