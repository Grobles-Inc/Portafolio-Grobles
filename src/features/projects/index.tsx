import SEOHead from "@/components/SEOHead";
import HeroSectionProjects from "./components/HeroSectionProjects";
import AllProjectsSection from "./components/AllProjectsSection";

export default function Projects() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio de Proyectos - Grobles Studio",
    "description": "Proyectos de desarrollo de software completados por Grobles Studio",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": "15",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Aplicaciones Web",
          "applicationCategory": "WebApplication"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Aplicaciones Móviles",
          "applicationCategory": "MobileApplication"
        }
      ]
    }
  }

  return (
    <div className="bg-primary">
      <SEOHead
        title="Portfolio de Proyectos - Grobles Studio | 15+ Proyectos Completados"
        description="Explora nuestro portfolio de proyectos de desarrollo de software. 15+ proyectos completados en aplicaciones web, móviles y soluciones personalizadas."
        keywords="portfolio, proyectos software, aplicaciones web, desarrollo móvil, casos de éxito, React, TypeScript"
        canonical="https://www.groblestudio.com/projects"
        structuredData={structuredData}
      />
      <HeroSectionProjects />
      <AllProjectsSection />
    </div>
  );
}
