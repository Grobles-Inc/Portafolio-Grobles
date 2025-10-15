import { useState } from "react";
import SEOHead from "../components/SEOHead";
import { categories } from "../data/categories";
import { getProjectsByCategory } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const filteredProjects = getProjectsByCategory(selectedCategory);
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
        canonical="https://grobles.netlify.app/projects"
        structuredData={structuredData}
      />
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col items-center text-center space-y-6" data-aos="fade-up">
          <span className="text-secondary font-semibold">Proyectos</span>
          <h1 className="text-2xl max-w-xl text-white md:text-3xl lg:text-4xl font-bold">
            Nuestra Experiencia
          </h1>
          <p className="max-w-2xl md:text-lg px-4 text-secondary">
            Soluciones reales, resultados reales. Mira cómo ayudamos a nuestros clientes a crecer.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center py-8" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`badge cursor-pointer badge-lg rounded-full ${selectedCategory === category.name ? 'badge-secondary' : 'bg-primary text-secondary border-secondary'}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8" data-aos="fade-up">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
