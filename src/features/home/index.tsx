import SEOHead from "@/components/SEOHead"
import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"
import ServiceSection from "@/components/ServiceSection"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grobles Studio",
    "description": "Startup líder en desarrollo de software",
    "url": "https://www.groblestudio.com",
    "logo": "https://www.groblestudio.com/src/assets/logoGrobles.png",
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
      "telephone": "+51-901-617-809",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    }
  }

  return (
    <div className="bg-primary">
      <SEOHead
        title="Grobles™ - Startup Tecnológica"
        description="Startup líder en desarrollo de software. 15+ proyectos completados, 10+ años de experiencia. Convertimos tus ideas en soluciones innovadoras con tecnología de punta."
        keywords="desarrollo software, startup, tecnología, aplicaciones web, programación, soluciones digitales, desarrollo móvil, consultoria IT, React, TypeScript"
        canonical="https://www.groblestudio.com"
        structuredData={structuredData}
      />
      <HeroSection />
      <ProjectSection />
      <ServiceSection />
    </div>
  )
}
