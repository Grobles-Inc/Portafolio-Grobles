import SEOHead from "../../components/SEOHead";
import HeroSectionAbout from "./components/HeroSectionAbout";
import TeamSectionAbout from "./components/TeamSectionAbout";

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Grobles Studio",
      "description": "Equipo de desarrollo de software especializado en tecnologías modernas",
      "foundingDate": "2023",
      "mission": "Convertir ideas innovadoras en soluciones tecnológicas escalables"
    }
  }

  return (
    <div className="bg-primary">
      <SEOHead
        title="Sobre Nosotros - Grobles Studio | Equipo de Desarrollo"
        description="Conoce al equipo de Grobles Studio. Desarrolladores expertos con 10+ años de experiencia creando soluciones tecnológicas innovadoras y escalables."
        keywords="equipo desarrollo, sobre nosotros, desarrolladores expertos, tecnología, innovación, software"
        canonical="https://www.groblestudio.com/about"
        structuredData={structuredData}
      />
      <HeroSectionAbout />
      <TeamSectionAbout />
    </div>
  )
}
