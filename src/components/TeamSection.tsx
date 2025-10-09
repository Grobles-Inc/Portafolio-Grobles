import { Linkedin, Github } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Miguel Requena",
      role: "Full Stack Developer",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent("Miguel"),
      description: "Especialista en desarrollo y arquitectura de software.",
      linkedin: "https://www.linkedin.com/in/miguelangelrequenaramos/",
      github: "https://github.com/MiguelRequenaR"
    },
    {
      name: "Luigi Santana",
      role: "UI/UX Designer",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent("Luigi"),
      description: "Diseña interfaces intuitivas y experiencias centradas en el usuario, cuidando cada detalle visual.",
      linkedin: "https://www.linkedin.com/in/luigi-santana-esteban-b4b69731a/",
      github: "https://github.com/Yuriine"
    },
    {
      name: "Jheison Huaynate",
      role: "Cybersecurity Engineer",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent("Jheison"),
      description: "Experto en seguridad informática y protección de datos, garantizando entornos digitales confiables.",
      linkedin: "https://www.linkedin.com/in/jheison-percy-huaynate-cori%C3%B1aupa-392654208/",
      github: "https://github.com/jheisonHPC"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-6 py-6 pt-20"
        data-aos="fade-up"
      >
        <span className="text-secondary font-bold">Nuestro Equipo</span>
        <h1 className="text-2xl max-w-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed text-white">Las Mentes Brillantes Que Impulsan Nuestro Éxito</h1>
        <p className="max-w-2xl text-lg hidden md:block text-secondary">
          Somos un equipo de profesionales apasionados que están comprometidos a ayudarlo a desbloquear todo el potencial de su marca.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-xs mx-auto"
          >
            <div className="md:size-64 size-36 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-0 mb-6">
              <img
                src={member.avatar || "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent(member.name)}
                alt={`Avatar de ${member.name}`}
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-base md:text-xl text-secondary mb-1">{member.name}</h3>
              <div className="text-white text-sm mb-2 font-bold">{member.role}</div>
              <div className="flex justify-center gap-2">
                <a
                  href={member.linkedin}
                  className="text-primary py-2 px-2 border border-transparent bg-white rounded-full hover:bg-primary hover:border-secondary hover:text-secondary transition duration-500 ease-in-out"
                  aria-label={`LinkedIn de ${member.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.github}
                  className="text-primary py-2 px-2 border border-transparent bg-white rounded-full hover:bg-primary hover:border-secondary hover:text-secondary transition duration-500 ease-in-out"
                  aria-label={`GitHub de ${member.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
