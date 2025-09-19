import { Linkedin, Github } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Miguel Requena",
      role: "Full Stack Developer",
      avatar: "https://scontent.fayp1-1.fna.fbcdn.net/v/t39.30808-1/418864142_4398843287006652_4443117054819886401_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_ohc=20mFYvxfTY8Q7kNvwHENKFO&_nc_oc=Adm_auW_ZYeGLFp94bZlCdMPh70r8HZIpUJR1bV-91kNoYvnEzmeSKNsnqyln5fMNrjkwpAEDi2JqKlPhmEOesvC&_nc_zt=24&_nc_ht=scontent.fayp1-1.fna&_nc_gid=79-At5twrXjlfEpD7Gpy_g&oh=00_AfZJTdq_7x_rlPzZrbET9szZsDUaMSmtPdGEAqK27EzcUQ&oe=68D323DC",
      description: "Especialista en desarrollo y arquitectura de software.",
      linkedin: "https://www.linkedin.com/in/miguelangelrequenaramos/",
      github: "https://github.com/MiguelRequenaR"
    },
    {
      name: "Brayan Paucar",
      role: "Product Manager",
      avatar: "https://avatars.githubusercontent.com/u/66649036?v=4",
      description: "Lidera la estrategia y visión de la empresa, impulsando el crecimiento y la excelencia diaria.",
      linkedin: "https://www.linkedin.com/in/brayanpaucar/",
      github: "https://github.com/kralion"
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
      description: "Experto en seguridad informática y protección de datos, garantizando entornos digitales confiables.",
      linkedin: "https://www.linkedin.com/in/jheison-percy-huaynate-cori%C3%B1aupa-392654208/",
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
          Somos un equipo de profesionales apasionados que están comprometidos a ayudarlo a desbloquear todo el potencial de su marca.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-xs mx-auto"
          >
            <div className="md:size-64 size-44 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-0 mb-6">
              <img
                src={member.avatar || "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent(member.name)}
                alt={`Avatar de ${member.name}`}
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg md:text-xl text-black mb-1">{member.name}</h3>
              <div className="text-gray-500 text-sm mb-2">{member.role}</div>
              <div className="flex justify-center gap-2">
                <a
                  href={member.linkedin}
                  className="btn btn-circle"
                  aria-label={`LinkedIn de ${member.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.github}
                  className="btn btn-circle"
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
