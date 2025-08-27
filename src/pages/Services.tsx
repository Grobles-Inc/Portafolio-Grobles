import SEOHead from "../components/SEOHead";
import ServiceSection from "../components/ServiceSection";

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

      <ServiceSection />


    </div>
  )
}
