import { Linkedin, Github } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Miguel",
      role: "Fundador - CTO",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent("Miguel"),
      description: "Miguel Ángel se especializa en diseñar y desarrollar soluciones tecnológicas eficientes y personalizadas. Su conocimiento en lenguajes de programación y arquitectura de software le permite crear aplicaciones innovadoras que optimizan procesos y mejoran la experiencia del usuario.",
      linkedin: "https://pe.linkedin.com/in/miguelangelrequenaramos",
      github: "https://github.com/MiguelRequenaR"
    },
    {
      name: "Brayan Joan",
      role: "Fundador - CEO",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent("Brayan"),
      description: "Brayan lidera nuestra agencia con una visión estratégica excepcional. Su experiencia en la toma de decisiones clave y su habilidad para identificar oportunidades han sido fundamentales para posicionar a la empresa como líder en el sector.",
      linkedin: "#",
      github: "https://github.com/kralion"
    },
    {
      name: "Luigi Christopher",
      role: "Diseñador UX/UI",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent("Luigi"),
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
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center text-center space-y-6 py-6 mt-20"
        data-aos="fade-up"
      >
        <span className="text-[#07e288] font-semibold">Nuestro Equipo</span>
        <h1 className="text-2xl max-w-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed">Las Mentes Brillantes Que Impulsan Nuestro Éxito</h1>
        <p className="max-w-2xl text-lg hidden md:block">
          Somos más que un simple proveedor de servicios; Somos un equipo de profesionales apasionados que están comprometidos a ayudarlo a desbloquear todo el potencial de su marca.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="card bg-base-100 p-6 shadow-xl border border-base-300 rounded-3xl flex md:items-center justify-center flex-col h-full"
          >

            {/* Avatar Placeholder */}
            <div className="w-24 h-24 mb-4 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-[#07e288] shadow-md">
              {/* Replace src with member.avatar when available */}
              <img
                src={member.avatar || "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent(member.name)}
                alt={`Avatar de ${member.name}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="card-title text-xl md:text-2xl font-bold mb-1 text-center">{member.name}</h3>
            <div className="badge bg-green-100 badge-lg text-black font-semibold mb-3">
              {member.role}
            </div>
            <p className="text-base-content/80 leading-relaxed mb-6  text-xs md:text-base">
              {member.description}
            </p>
            <div className="flex justify-center gap-3 mt-auto">
              <a
                href={member.linkedin}
                className="btn btn-circle bg-white border border-base-300 hover:bg-[#07e288] hover:text-white transition-all duration-300"
                aria-label={`LinkedIn de ${member.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={member.github}
                className="btn btn-circle bg-white border border-base-300 hover:bg-[#07e288] hover:text-white transition-all duration-300"
                aria-label={`GitHub de ${member.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

        ))}
      </div>
    </section>
  )
}
