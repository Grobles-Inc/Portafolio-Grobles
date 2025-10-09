import { Figma, HandHeart, Megaphone, Monitor, Paintbrush, Wrench } from "lucide-react"

const services = [
  {
    icon: <Monitor className="group-hover:scale-110 transition-transform duration-300" />,
    title: "Desarrollo de Software",
    description: "Sistemas web y apps a medida que impulsan tu negocio."
  },
  {
    icon: <Paintbrush className="group-hover:scale-110 transition-transform duration-300" />,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y atractivas que mejoran la experiencia de usuario."
  },
  {
    icon: <Megaphone className="group-hover:scale-110 transition-transform duration-300" />,
    title: "Publicidad Digital",
    description: "Publicidad digital y posicionamiento SEO para llegar a más clientes."
  },
  {
    icon: <Wrench className="group-hover:scale-110 transition-transform duration-300" />,
    title: "Consultoría",
    description: "Te ayudamos a tomar decisiones informadas sobre tu negocio."
  },
  {
    icon: <Figma className="group-hover:scale-110 transition-transform duration-300" />,
    title: "Branding",
    description: "Creamos identidades visuales sólidas y memorables para tu marca."
  },
  {
    icon: <HandHeart className="group-hover:scale-110 transition-transform duration-300" />,
    title: "Manejo de Redes",
    description: "Gestión profesional de redes sociales para potenciar tu presencia digital."
  },
]

export default function ServiceSection() {
  return (
    <section className="max-w-7xl mx-auto p-4 md:p-0">
      <div className="flex flex-col items-center text-center space-y-6 py-12 px-4"
        data-aos="fade-up"
      >
        <span className="text-secondary font-bold">Nuestros Servicios</span>
        <h1 className="text-3xl max-w-3xl md:text-4xl lg:text-5xl text-white font-bold">Servicios de Alto Impacto</h1>
        <p className="max-w-2xl text-lg text-secondary font-bold">
          Impulsa tu negocio con soluciones digitales hechas para convertir tu visión en resultados.
        </p>

      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        {services.map((service, i) => (
          <div
            key={i}
            className={`group relative p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500  border border-gray-100  ${[
              "bg-gradient-to-br from-lime-100 via-white to-gray-50",
              "bg-gradient-to-br from-green-100 via-white to-gray-50",
              "bg-gradient-to-br from-blue-100 via-white to-gray-50",
              "bg-gradient-to-br from-yellow-100 via-white to-gray-50",
              "bg-gradient-to-br from-pink-100 via-white to-gray-50",
              "bg-gradient-to-br from-cyan-100 via-white to-gray-50"
            ][i % 6]
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#07e288]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div
                  className={`
                    text-6xl text-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500
                    ${[
                      "bg-gradient-to-br from-lime-400 to-lime-600",
                      "bg-gradient-to-br from-green-400 to-green-600",
                      "bg-gradient-to-br from-blue-400 to-blue-600",
                      "bg-gradient-to-br from-yellow-400 to-yellow-600",
                      "bg-gradient-to-br from-pink-400 to-pink-600",
                      "bg-gradient-to-br from-cyan-400 to-cyan-600"
                    ][i % 6]}
                  `}
                >
                  {service.icon}
                </div>
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse ${[
                    "bg-lime-400",
                    "bg-green-400",
                    "bg-blue-400",
                    "bg-yellow-400",
                    "bg-pink-400",
                    "bg-cyan-400"
                  ][i % 6]
                    }`}
                ></div>
              </div>
              <div className="space-y-3">
                <h3 className="md:text-2xl text-xl font-bold">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed md:text-base text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
