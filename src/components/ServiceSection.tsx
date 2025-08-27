import { ChartLine, Monitor, Paintbrush, Wrench } from "lucide-react"
import { Link } from "react-router-dom"

export default function ServiceSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-6 py-12 px-4"
        data-aos="fade-up"
      >
        <span className="text-[#07e288] font-semibold">Nuestros Servicios</span>
        <h1 className="text-3xl max-w-3xl md:text-4xl lg:text-5xl font-bold">Servicios de Alto Impacto</h1>
        <p className="max-w-2xl text-lg ">
          Impulsa tu negocio con soluciones digitales hechas para convertir tu visión en resultados.
        </p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        {/* Tarjeta 1 */}
        <div className="group relative bg-gradient-to-br from-white via-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-[#07e288]/20 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-[#07e288]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <div className="text-5xl text-white bg-gradient-to-br from-[#07e288] to-[#06c67a] rounded-2xl p-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                <Monitor className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#07e288] rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#07e288] transition-colors duration-300">Desarrollo de Software</h3>
              <p className="text-gray-600 leading-relaxed">
                Sistemas web y apps a medida que impulsan tu negocio.
              </p>
            </div>
            <Link
              to="/contact"
              className="group/btn relative overflow-hidden bg-gradient-to-r from-[#07e288] to-[#06c67a] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="relative z-10">Comenzar ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>




        {/* Tarjeta 4 */}
        <div className="group relative bg-gradient-to-br from-white via-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-[#07e288]/20 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-[#07e288]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <div className="text-5xl text-white bg-gradient-to-br from-[#07e288] to-[#06c67a] rounded-2xl p-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                <Paintbrush className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#07e288] rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#07e288] transition-colors duration-300">Diseño UI/UX</h3>
              <p className="text-gray-600 leading-relaxed">
                Interfaces intuitivas y atractivas que mejoran la experiencia de usuario.
              </p>
            </div>
            <Link
              to="/contact"
              className="group/btn relative overflow-hidden bg-gradient-to-r from-[#07e288] to-[#06c67a] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="relative z-10">Comenzar ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Tarjeta 5 */}
        <div className="group relative bg-gradient-to-br from-white via-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-[#07e288]/20 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-[#07e288]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <div className="text-5xl text-white bg-gradient-to-br from-[#07e288] to-[#06c67a] rounded-2xl p-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                <ChartLine className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#07e288] rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#07e288] transition-colors duration-300">Marketing Digital</h3>
              <p className="text-gray-600 leading-relaxed">
                Marketing digital y posicionamiento SEO para llegar a más clientes.
              </p>
            </div>
            <Link
              to="/contact"
              className="group/btn relative overflow-hidden bg-gradient-to-r from-[#07e288] to-[#06c67a] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="relative z-10">Comenzar ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Tarjeta 6 */}
        <div className="group relative bg-gradient-to-br from-white via-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-[#07e288]/20 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-[#07e288]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <div className="text-5xl text-white bg-gradient-to-br from-[#07e288] to-[#06c67a] rounded-2xl p-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                <Wrench className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#07e288] rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#07e288] transition-colors duration-300">Consultoría</h3>
              <p className="text-gray-600 leading-relaxed">
                Te ayudamos a tomar decisiones informadas sobre tu negocio.
              </p>
            </div>
            <Link
              to="/contact"
              className="group/btn relative overflow-hidden bg-gradient-to-r from-[#07e288] to-[#06c67a] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="relative z-10">Comenzar ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
