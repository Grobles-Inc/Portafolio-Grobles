import { Link } from "react-router-dom";
import { Monitor, Smartphone, Server, Paintbrush, ChartLine, Wrench } from "lucide-react";
import SEOHead from "../components/SEOHead"

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Grobles Solutions"
    },
    "serviceType": "Desarrollo de Software",
    "offers": [
      {
        "@type": "Offer",
        "name": "Desarrollo Web",
        "description": "Aplicaciones web modernas y escalables"
      },
      {
        "@type": "Offer", 
        "name": "Desarrollo Móvil",
        "description": "Apps nativas y multiplataforma"
      },
      {
        "@type": "Offer",
        "name": "Consultoría IT",
        "description": "Asesoramiento tecnológico especializado"
      }
    ]
  }

  return (
    <div>
      <SEOHead
        title="Servicios de Desarrollo - Grobles Solutions | Web, Móvil, Consultoría"
        description="Servicios de desarrollo de software: aplicaciones web, móviles, consultoría IT. Tecnologías modernas, soluciones escalables y soporte 24/7."
        keywords="servicios desarrollo, aplicaciones web, desarrollo móvil, consultoría IT, React, Node.js, tecnología"
        canonical="https://groblesolutions.netlify.app/services"
        structuredData={structuredData}
      />
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 px-4"
          data-aos="fade-up"
        >
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">Descubre Nuestros <span className="text-[#dcd500] italic">Servicios Exclusivos</span></h1>
            <p className="text-lg">
              Estamos aquí para brindarle la más alta calidad de servicio. Con nuestra dedicación a la satisfacción del cliente, puede estar seguro de que tendrá una gran experiencia. Destaca hoy.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="https://framerusercontent.com/images/SmKpJArNfpH0J4YgHNcqsyxuyEA.jpg?scale-down-to=1024" 
              alt="Servicios" 
              className="rounded-4xl w-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-4 text-lg"
          data-aos="fade-up"
        >
          <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center cursor-pointer">
            <h3 className="text-4xl font-bold text-[#dcd500] mb-2">15+</h3>
            <p className="text-gray-700">Proyectos completados</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center cursor-pointer">
            <h3 className="text-4xl font-bold text-[#dcd500] mb-2">10+</h3>
            <p className="text-gray-700">Años de experiencia</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center cursor-pointer">
            <h3 className="text-4xl font-bold text-[#dcd500] mb-2">95%</h3>
            <p className="text-gray-700">Satisfacción del Cliente</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center cursor-pointer">
            <h3 className="text-4xl font-bold text-[#dcd500] mb-2">24x7</h3>
            <p className="text-gray-700">Soporte al cliente</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center space-y-6 py-12"
          data-aos="fade-up"
        >
          <span className="text-[#dcd500] font-semibold">Nuestros Servicios</span>
          <h1 className="text-3xl max-w-3xl md:text-4xl lg:text-5xl font-bold">Servicios De Diseño y Desarrollo de Alto Impacto</h1>
          <p className="max-w-2xl text-lg">
            Nos asociamos con usted para crear un modelo de negocio exitoso que refleje auténticamente su visión única mientras logra sus objetivos de conversión deseados.
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
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
                <Monitor />
              </div>
              <h3 className="text-2xl font-bold">Desarrollo Web</h3>
              <p className="text-gray-600">
                Creamos sitios web modernos y responsivos que impulsan tu presencia digital y generan resultados tangibles.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                Comenzar ahora
              </Link>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
                <Smartphone />
              </div>
              <h3 className="text-2xl font-bold">Desarrollo Móvil</h3>
              <p className="text-gray-600">
                Desarrollamos aplicaciones móviles nativas y multiplataforma que ofrecen experiencias excepcionales.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                Comenzar ahora
              </Link>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
                <Server />
              </div>
              <h3 className="text-2xl font-bold">Desarrollo Backend</h3>
              <p className="text-gray-600">
                Construimos APIs robustas y escalables que potencian tus aplicaciones con la mejor tecnología.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                Comenzar ahora
              </Link>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
                <Paintbrush />
              </div>
              <h3 className="text-2xl font-bold">Diseño UI/UX</h3>
              <p className="text-gray-600">
                Creamos interfaces intuitivas y atractivas que mejoran la experiencia de usuario y aumentan la conversión.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                Comenzar ahora
              </Link>
            </div>
          </div>
          {/* Tarjeta 5 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
                <ChartLine />
              </div>
              <h3 className="text-2xl font-bold">Marketing Digital</h3>
              <p className="text-gray-600">
                Impulsa tu negocio con estrategias de marketing digital, publicidad en redes sociales y posicionamiento SEO para llegar a más clientes.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                Comenzar ahora
              </Link>
            </div>
          </div>

          {/* Tarjeta 6 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
                <Wrench />
              </div>
              <h3 className="text-2xl font-bold">Soporte y Mantenimiento</h3>
              <p className="text-gray-600">
                Ofrecemos soporte técnico y mantenimiento continuo para asegurar que tus sistemas funcionen de manera óptima y segura en todo momento.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                Comenzar ahora
              </Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
