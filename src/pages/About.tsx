import { Link } from "react-router-dom";
import { User, BadgeCheck, Cpu, Moon } from "lucide-react";
import TeamSection from "../components/TeamSection";
import SEOHead from "../components/SEOHead"

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Grobles Solutions",
      "description": "Equipo de desarrollo de software especializado en tecnologías modernas",
      "foundingDate": "2023",
      "mission": "Convertir ideas innovadoras en soluciones tecnológicas escalables"
    }
  }

  return (
    <div>
      <SEOHead
        title="Sobre Nosotros - Grobles Solutions | Equipo de Desarrollo"
        description="Conoce al equipo de Grobles Solutions. Desarrolladores expertos con 10+ años de experiencia creando soluciones tecnológicas innovadoras y escalables."
        keywords="equipo desarrollo, sobre nosotros, desarrolladores expertos, tecnología, innovación, software"
        canonical="https://groblesolutions.netlify.app/about"
        structuredData={structuredData}
      />
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 py-12"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Creando Tu <span className="text-[#dcd500] italic">Éxito Digital</span></h1>
          <p className="max-w-2xl text-lg">
            Somos un equipo dinámico impulsado por la pasión y la creatividad comprometidos a transformar sus ideas en realidad.
          </p>
          <span className="text-xl">Construyamos el futuro juntos. 🚀</span>
          <Link
            to="/contact"
            className="btn btn-lg bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Comenzar ahora
          </Link>
        </div>
        <div className="flex justify-center items-center px-4 sm:px-6 md:px-8"
          data-aos="fade-up"
        >
          <img
            src="https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Personas programando reunidas"
            width={900}
            height={900}
            className="rounded-4xl"
            loading="lazy"
          />
        </div>
        {/* Vision section */}
        <div className="flex flex-col items-center text-center space-y-6 py-12 mt-20"
          data-aos="fade-up"
        >
          <span className="text-[#dcd500] font-semibold">Nuestra Visión</span>
          <h1 className="text-3xl max-w-3xl md:text-4xl lg:text-5xl font-bold">Nuestros Valores</h1>
          <p className="max-w-2xl text-lg">
            Nuestra visión es ser un referente en el mercado de desarrollo de software, ofreciendo soluciones innovadoras y de alta calidad.
          </p>
          <Link
            to="/contact"
            className="btn btn-lg bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Comenzar ahora
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12 max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          {/* Tarjeta 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
                <User />
              </div>
              <h3 className="text-2xl font-bold">Centrado en el Cliente</h3>
              <p className="text-gray-600">
                Nuestro enfoque principal está en las necesidades de nuestros clientes. Hacemos hincapié en identificar sus obstáculos y objetivos específicos, modificando nuestras estrategias para ofrecer un servicio personalizado.
              </p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
                <BadgeCheck />
              </div>
              <h3 className="text-2xl font-bold">Precisión y Eficiencia</h3>
              <p className="text-gray-600">
                Estamos comprometidos a fomentar alianzas sólidas. A través de una estrecha colaboración con nuestros clientes, establecemos conexiones cooperativas basadas en una comunicación transparente y la estima mutua.
              </p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
                <Cpu />
              </div>
              <h3 className="text-2xl font-bold">Innovación y Tecnología</h3>
              <p className="text-gray-600">
                Las demandas y preferencias de los clientes siempre están evolucionando, lo que requiere un enfoque creativo para proporcionar valor y satisfacer sus necesidades.
              </p>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
                <Moon />
              </div>
              <h3 className="text-2xl font-bold">Manteniendo la simplicidad</h3>
              <p className="text-gray-600">
                Priorizamos los estándares éticos, la transparencia y la autenticidad en todas las interacciones. Nuestras operaciones se basan en la integridad.
              </p>
            </div>
          </div>
        </div>
        {/* Mision section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-4 md:px-8"
          data-aos="fade-up"
        >
          <div className="space-y-6">
            <span className="text-[#dcd500] font-semibold">Nuestra Misión</span>
            <h2 className="text-3xl max-w-3xl md:text-4xl lg:text-5xl font-bold mt-5">Reducir La Brecha De Habilidades Digitales</h2>
            <p className="text-lg text-gray-600">
              En Grobles Solutions, nuestra misión es transformar ideas en soluciones digitales innovadoras que impulsen el crecimiento de nuestros clientes. Nos comprometemos a:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-[#dcd500] text-xl">•</span>
                <span className="text-gray-600">Proporcionar soluciones tecnológicas de alta calidad que superen las expectativas.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#dcd500] text-xl">•</span>
                <span className="text-gray-600">Mantenernos a la vanguardia de las últimas tendencias tecnológicas.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#dcd500] text-xl">•</span>
                <span className="text-gray-600">Construir relaciones duraderas basadas en la confianza y el éxito mutuo.</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img 
              src="https://framerusercontent.com/images/GshzYw0x9SZcdDbvMofdpn78Cs.jpg?scale-down-to=1024" 
              alt="Nuestra Misión" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <TeamSection />
      </section>
    </div>
  )
}
