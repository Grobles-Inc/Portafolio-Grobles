import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="flex flex-col items-center text-center space-y-6" data-aos="fade-up">
        <span className="text-yellow-300 font-semibold">Proyectos</span>
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
                hover:bg-yellow-300 duration-200 ease-in-out text-black`}
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
  );
}
