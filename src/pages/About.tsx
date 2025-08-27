import { BadgeCheck, Cpu, Rocket, User } from "lucide-react";
import SEOHead from "../components/SEOHead";
import TeamSection from "../components/TeamSection";

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
        canonical="https://grobles.netlify.app/about"
        structuredData={structuredData}
      />
      <section className="max-w-7xl mx-auto">
        {/* Vision section */}
        <div className="flex flex-col items-center text-center space-y-6 py-12 px-4 "
          data-aos="fade-up"
        >
          <h1 className="text-3xl max-w-3xl md:text-4xl lg:text-5xl font-bold">Nuestros Valores</h1>
          <p className="max-w-2xl md:text-lg">
            Siempre priorizamos la fidelidad y la confianza con nuestros clientes, y nos esforzamos por ser un referente en el mercado de desarrollo de software, ofreciendo soluciones innovadoras y de alta calidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12 max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          {/* Tarjeta 1 */}
          <div className="card card-compact bg-base-100 shadow-xl p-8 rounded-2xl"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#07e288] rounded-full p-4">
                <User />
              </div>
              <h3 className="text-2xl font-bold">Cliente</h3>
              <p className="text-gray-600">
                Nos enfocamos en las necesidades del cliente y adaptamos cada solución.
              </p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="card card-compact bg-base-100 shadow-xl p-8 rounded-2xl"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#07e288] rounded-full p-4">
                <BadgeCheck />
              </div>
              <h3 className="text-2xl font-bold">Comunicación</h3>
              <p className="text-gray-600">
                Fomentamos alianzas sólidas y comunicación continua con nuestros clientes.
              </p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="card card-compact bg-base-100 shadow-xl p-8 rounded-2xl"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#07e288] rounded-full p-4">
                <Cpu />
              </div>
              <h3 className="text-2xl font-bold">Innovación</h3>
              <p className="text-gray-600">
                Nos mantenemos a la vanguardia de las últimas tendencias tecnológicas.
              </p>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="card card-compact bg-base-100 shadow-xl p-8 rounded-2xl"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#07e288] rounded-full p-4">
                <Rocket />
              </div>
              <h3 className="text-2xl font-bold">Eficiencia</h3>
              <p className="text-gray-600">
                Nos enfocamos en los resultados que nuestros proyectos generan para nuestros clientes.
              </p>
            </div>
          </div>
        </div>

        <TeamSection />
      </section>
    </div>
  )
}
