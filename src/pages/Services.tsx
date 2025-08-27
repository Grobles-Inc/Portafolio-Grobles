import SEOHead from "../components/SEOHead"
import ServicesSection from "../components/ServiceSection"

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
        canonical="https://grobles.netlify.app/services"
        structuredData={structuredData}
      />
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 px-4"
          data-aos="fade-up"
        >
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">Descubre Nuestros <span className="text-[#07e288] italic">Servicios Exclusivos</span></h1>
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
            <h3 className="text-4xl font-bold text-[#07e288] mb-2">15+</h3>
            <p className="text-gray-700">Proyectos completados</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center cursor-pointer">
            <h3 className="text-4xl font-bold text-[#07e288] mb-2">10+</h3>
            <p className="text-gray-700">Años de experiencia</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center cursor-pointer">
            <h3 className="text-4xl font-bold text-[#07e288] mb-2">95%</h3>
            <p className="text-gray-700">Satisfacción del Cliente</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center cursor-pointer">
            <h3 className="text-4xl font-bold text-[#07e288] mb-2">24x7</h3>
            <p className="text-gray-700">Soporte al cliente</p>
          </div>
        </div>
        <ServicesSection />
      </section>
    </div>
  )
}
