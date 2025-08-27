import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';
import { getProjectBySlug } from '../data/projectsData';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <p className="text-gray-600 mb-8">El proyecto que buscas no existe o ha sido movido.</p>
          <Link
            to="/projects"
            className="btn bg-[#07e288] text-black rounded-4xl hover:bg-yellow-400 hover:border-transparent transition-all duration-300 ease-in-out"
          >
            Volver a Proyectos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-[#07e288] hover:text-yellow-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver a Proyectos
      </Link>

      {/* Project Header */}
      <div className="mb-12"
        data-aos="fade-up"
      >
        <div className="badge badge-yellow-300 text-black font-semibold mb-4">
          {project.category}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {project.title}
        </h1>
        <p className="text-xl max-w-3xl leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Project Image */}
      <div className="mb-12"
        data-aos="fade-up"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-3xl shadow-2xl"
        />
      </div>

      {/* Project Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12"
        data-aos="fade-up"
      >
        {/* Project Details */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Descripción del Proyecto</h2>
          <p className="text-lg leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Features */}
          <h3 className="text-2xl font-bold mb-6">Características Principales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#07e288] rounded-full mt-3 flex-shrink-0"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <h3 className="text-2xl font-bold mb-6">Tecnologías Utilizadas</h3>
          <div className="flex flex-wrap gap-3 mb-8 ">
            {project.technologies.map((tech, index) => (
              <div key={index} className="badge badge-outline badge-lg bg-yellow-100 text-black">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Project Meta */}
        <div className="space-y-8">
          {/* Project Info Card */}
          <div className="card shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Información del Proyecto</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#07e288]" />
                  <div>
                    <p className="text-sm text-gray-400">Cliente</p>
                    <p className="font-semibold">{project.client}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#07e288]" />
                  <div>
                    <p className="text-sm text-gray-400">Duración</p>
                    <p className="font-semibold">{project.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-[#07e288]" />
                  <div>
                    <p className="text-sm text-gray-400">Categoría</p>
                    <p className="font-semibold">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#07e288] text-black rounded-4xl w-full gap-2 hover:bg-white transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                Ver Demo en Vivo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-black text-white rounded-4xl hover:bg-white hover:border hover:text-black w-full gap-2 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                Ver Código
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-[#07e288] rounded-3xl p-12 mt-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-4">¿Te Interesa un Proyecto Similar?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Trabajemos juntos para crear algo increíble. Contactanos para discutir tu próximo proyecto.
        </p>
        <Link to="/contact" className="btn btn-lg bg-black border-transparent text-white hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 ease-in-out rounded-4xl px-6 py-2">
          Contactar Ahora
        </Link>
      </div>
    </div>
  );
} 