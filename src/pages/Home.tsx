import HeroSection from "../components/HeroSection"
import ServiceSection from "../components/ServiceSection"
import SEOHead from "../components/SEOHead"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grobles Solutions",
    "description": "Startup líder en desarrollo de software",
    "url": "https://groblesolutions.netlify.app",
    "logo": "https://grobles.netlify.app/src/assets/logoGrobles.png",
    "foundingDate": "2023",
    "numberOfEmployees": "10-50",
    "slogan": "Construyamos el futuro juntos",
    "services": [
      "Desarrollo de Software",
      "Aplicaciones Web",
      "Aplicaciones Móviles",
      "Consultoría IT"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+51-937-760-953",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    }
  }

  return (
    <div >
      <SEOHead
        title="Grobles™ - Startup Tecnológica"
        description="Startup líder en desarrollo de software. 15+ proyectos completados, 10+ años de experiencia. Convertimos tus ideas en soluciones innovadoras con tecnología de punta."
        keywords="desarrollo software, startup, tecnología, aplicaciones web, programación, soluciones digitales, desarrollo móvil, consultoria IT, React, TypeScript"
        canonical="https://grobles.netlify.app"
        structuredData={structuredData}
      />
      <HeroSection />
      <ServiceSection />
    </div>
  )
}
