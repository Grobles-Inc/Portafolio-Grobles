import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import type { Project } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import { ArrowLeft } from "lucide-react";

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export default function CategoryProjects() {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const categoryName = projectsData.find(
    (p) => slugify(p.category) === categorySlug
  )?.category;

  const filteredProjects = projectsData.filter(
    (p) => slugify(p.category) === categorySlug
  );

  if (!categoryName) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold">Categoría no encontrada</h1>
        <Link to="/projects" className="text-indigo-600 hover:underline">
          Volver a todas las categorías
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2  transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver a Categorías
      </Link>
      <div className="max-w-7xl mx-auto md:mt-12 " data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              demoUrl={project.liveDemo || ""}
              title={project.title}
              description={project.description || "No description available."}
              category={project.category}
              featuresLength={project.features.length}
              onButtonClick={() => window.location.href = `/projects/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 