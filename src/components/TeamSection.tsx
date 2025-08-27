import { Linkedin, Github } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Miguel Angel",
      role: "Fundador - Desarrollador",
      description: "Miguel Ángel se especializa en diseñar y desarrollar soluciones tecnológicas eficientes y personalizadas. Su conocimiento en lenguajes de programación y arquitectura de software le permite crear aplicaciones innovadoras que optimizan procesos y mejoran la experiencia del usuario.",
      linkedin: "https://pe.linkedin.com/in/miguelangelrequenaramos",
      github: "https://github.com/MiguelRequenaR"
    },
    {
      name: "Brayan Joan",
      role: "Fundador - Arquitecto",
      description: "Brayan lidera nuestra agencia con una visión estratégica excepcional. Su experiencia en la toma de decisiones clave y su habilidad para identificar oportunidades han sido fundamentales para posicionar a la empresa como líder en el sector. Como CEO, guía al equipo hacia el logro de objetivos.",
      linkedin: "#",
      github: "https://github.com/kralion"
    },
    {
      name: "Luigi Christopher",
      role: "Diseñador UX/UI",
      description: "Luigi es experto en diseño de experiencias digitales centradas en el usuario. Su enfoque combina creatividad y análisis para diseñar interfaces intuitivas y atractivas que garantizan una interacción fluida. Es responsable de transformar la visión del cliente en diseños.",
      linkedin: "#",
      github: "https://github.com/Yuriine"
    },
    {
      name: "Jheison Huaynate",
      role: "Ciberseguridad",
      description: "Jheison es un experto en seguridad informática y criptografía. Con su experiencia en la implementación de sistemas seguros y la gestión de identidades digitales, ha demostrado ser un experto en el tema. Su enfoque en la seguridad y la privacidad es fundamental para garantizar la integridad de los datos.",
      linkedin: "#",
      github: "https://github.com/jheisonHPC"
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col items-center text-center space-y-6 py-12 mt-20"
        data-aos="fade-up"
      >
        <span className="text-[#07e288] font-semibold">Nuestro Equipo</span>
        <h1 className="text-3xl max-w-3xl md:text-4xl lg:text-5xl font-bold">Las Mentes Brillantes Que Impulsan Nuestro Éxito</h1>
        <p className="max-w-2xl text-lg">
          Somos más que un simple proveedor de servicios; Somos un equipo de profesionales apasionados que están comprometidos a ayudarlo a desbloquear todo el potencial de su marca.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-16 pb-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="card bg-base-100 shadow-xl border border-base-300 rounded-3xl"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="card-body p-8">
              {/* Member Info */}
              <div className="text-center">
                <h2 className="card-title text-2xl font-bold mb-2 justify-center">{member.name}</h2>
                <div className="badge bg-green-100 badge-lg text-black font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-base-content/80 leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    className="btn btn-circle bg-[#07e288] transition-all duration-300 hover:bg-white hover:text-[#07e288] hover:border-[#07e288]"
                    aria-label={`LinkedIn de ${member.name}`}
                    target="_blank"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    className="btn btn-circle bg-[#07e288] transition-all duration-300 hover:bg-white hover:text-[#07e288] hover:border-[#07e288]"
                    aria-label={`GitHub de ${member.name}`}
                    target="_blank"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
