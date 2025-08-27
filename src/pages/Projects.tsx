import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import SEOHead from "../components/SEOHead"

export default function Projects() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio de Proyectos - Grobles Solutions",
    "description": "Proyectos de desarrollo de software completados por Grobles Solutions",
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
    <div>
      <SEOHead
        title="Portfolio de Proyectos - Grobles Solutions | 15+ Proyectos Completados"
        description="Explora nuestro portfolio de proyectos de desarrollo de software. 15+ proyectos completados en aplicaciones web, móviles y soluciones personalizadas."
        keywords="portfolio, proyectos software, aplicaciones web, desarrollo móvil, casos de éxito, React, TypeScript"
        canonical="https://grobles.netlify.app/projects"
        structuredData={structuredData}
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="flex flex-col items-center text-center space-y-6" data-aos="fade-up">
          <span className="text-[#07e288] font-semibold">Proyectos</span>
          <h1 className="text-2xl max-w-xl md:text-3xl lg:text-4xl font-bold">
            Nuestra Experiencia
          </h1>
          <p className="max-w-2xl text-lg px-4">
            Explora nuestros proyectos agrupados por categorías.
          </p>
        </div>

        <div className="p-4 md:p-8" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                to={category.slug === 'todos' ? '/projects/todos' : `/projects/category/${category.slug}`}
                key={category.name}
                className={`card shadow-lg cursor-pointer group transition-all  rounded-2xl  hover:scale-105
                  hover:bg-[#07e288] duration-200 ease-in-out text-black`}
              >
                <div className="card-body p-6">
                  <div
                    className={`p-3 w-16 h-16 flex items-center justify-center rounded-xl mb-4 transition-all duration-300 ${category.name === "Todos" ? "bg-yellow-100" : `bg-${category.iconColor}-100`}`}
                  >
                    {category.icon}
                  </div>
                  <h2 className="card-title font-bold text-xl">{category.name}</h2>
                  <p className="text-sm mt-1 flex-grow hidden md:block">{category.description}</p>
                  <div className="card-actions justify-end mt-4">
                    <ArrowRight className="text-3xl transition-transform duration-300 group-hover:translate-x-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
