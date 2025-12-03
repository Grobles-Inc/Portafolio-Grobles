import { Link } from "react-router-dom"
import { Facebook, Instagram, Github, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <section
      className="bg-secondary min-h-screen p-5 md:p-20 relative z-20"
    >
      <h1
        className="text-white text-5xl md:text-[100px] font-bold text-center md:text-left"
        data-aos="fade-up"
      >
        Grobles Studio ©
      </h1>
      <div
      className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 md:pt-40"
      data-aos="fade-up">
        <div
        className="flex flex-col items-center md:items-start">
          <span className="text-gray-600 text-lg italic">
            (Páginas)
          </span>
          <ul className="text-xl pt-10 font-extralight flex flex-col cursor-pointer items-center md:items-start text-white">
            {[
              { to: "/", label: "Inicio" },
              { to: "/about", label: "Nosotros" },
              { to: "/services", label: "Servicios" },
              { to: "/projects", label: "Proyectos" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="group relative inline-block"
                >
                  <span className="relative z-10">
                    {label}
                  </span>
                  <span
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-white
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
                    "
                    style={{
                      display: 'block',
                      borderRadius: '2px'
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
        className="flex flex-col items-center md:items-start">
          <span
            className="text-gray-600 text-lg italic"
          >
            (Servicios)
          </span>
          <ul className="text-xl pt-10 font-extralight flex flex-col cursor-pointer items-center md:items-start text-white">
            {[
              "Desarrollo de Software",
              "Diseño UI/UX",
              "Publicidad Digital",
              "Consultoría",
              "Branding",
              "Manejo de Redes",
            ].map((servicio, idx) => (
              <li key={idx} className="relative group w-fit">
                <span className="relative z-10">
                  {servicio}
                </span>
                <span
                  className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-white
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
                  "
                  style={{
                    display: 'block',
                    borderRadius: '2px'
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div
        className="flex flex-col items-center md:items-start">
          <span
          className="text-gray-600 text-lg italic"
          >
            (Contacto)
          </span>
          <ul className="text-xl pt-10 font-extralight flex flex-col cursor-pointer items-center md:items-start text-white">
            {[
              {
                icon: <Phone />,
                label: "(+51) 901 617 809",
                href: "tel:+51901617809"
              },
              {
                icon: <Mail />,
                label: "contacto@groblestudio.com",
                href: "mailto:contacto@groblestudio.com"
              },
              {
                icon: <MapPin />,
                label: "Lima, Perú",
                href: "https://maps.google.com/?q=Lima,Peru"
              },
            ].map(({ icon, label, href }, idx) => (
              <li key={idx}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block align-middle"
                  aria-label={label}
                >
                  <span className="relative z-10 flex items-center gap-5">
                    {icon}
                    {label}
                  </span>
                  <span
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-white
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
                    "
                    style={{
                      display: 'block',
                      borderRadius: '2px'
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
        className="flex flex-col items-center md:items-start">
          <span
          className="text-gray-600 text-lg italic"
          >
            (Redes Sociales)
          </span>
          <ul className="space-y-2 text-xl pt-10 font-extralight flex flex-col cursor-pointer items-center md:items-start text-white">
            {[
              {
                label: "Facebook",
                icon: <Facebook />,
                to: "https://www.facebook.com/GrobleStudio/"
              },
              {
                label: "Instagram",
                icon: <Instagram />,
                to: "https://instagram.com/groblestudio"
              },
              {
                label: "Github",
                icon: <Github />,
                to: "https://github.com/Grobles-Inc"
              },
            ].map(({ label, icon, to }, idx) => (
              <li key={idx}>
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block align-middle"
                  aria-label={label}
                >
                  <span className="relative z-10 flex items-center gap-5">
                    {icon}
                    {label}
                  </span>
                  <span
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-white
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
                    "
                    style={{
                      display: 'block',
                      borderRadius: '2px'
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
      className="text-center pt-10 md:pt-30 text-white">
        Desarrollado por <a href="https://www.groblestudio.com" target="_blank" rel="noopener noreferrer">Grobles Studio</a> <br />
        Todos los derechos reservados &copy; {new Date().getFullYear()}
      </div>
    </section>
  )
}
