import { Link } from "react-router-dom"
import { Monitor, Smartphone, Server, Paintbrush } from "lucide-react"

export default function ServiceSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-6 py-12"
        data-aos="fade-up"
      >
        <span className="text-[#dcd500] font-semibold">Nuestros Servicios</span>
        <h1 className="text-3xl max-w-3xl md:text-4xl lg:text-5xl font-bold">Servicios De Diseño y Desarrollo de Alto Impacto</h1>
        <p className="max-w-2xl text-lg">
          Nos asociamos con usted para crear un modelo de negocio exitoso que refleje auténticamente su visión única mientras logra sus objetivos de conversión deseados.
        </p>
        <Link 
          to="/contact" 
          className="btn btn-lg bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          Comenzar ahora
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {/* Tarjeta 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
              <Monitor />
            </div>
            <h3 className="text-2xl font-bold">Desarrollo Web</h3>
            <p className="text-gray-600">
              Creamos sitios web modernos y responsivos que impulsan tu presencia digital y generan resultados tangibles.
            </p>
            <Link 
              to="/contact" 
              className="btn bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Comenzar ahora
            </Link>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
              <Smartphone />
            </div>
            <h3 className="text-2xl font-bold">Desarrollo Móvil</h3>
            <p className="text-gray-600">
              Desarrollamos aplicaciones móviles nativas y multiplataforma que ofrecen experiencias excepcionales.
            </p>
            <Link 
              to="/contact" 
              className="btn bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Comenzar ahora
            </Link>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
              <Server />
            </div>
            <h3 className="text-2xl font-bold">Desarrollo Backend</h3>
            <p className="text-gray-600">
              Construimos APIs robustas y escalables que potencian tus aplicaciones con la mejor tecnología.
            </p>
            <Link 
              to="/contact" 
              className="btn bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Comenzar ahora
            </Link>
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="text-4xl text-white bg-[#dcd500] rounded-full p-4">
              <Paintbrush />
            </div>
            <h3 className="text-2xl font-bold">Diseño UI/UX</h3>
            <p className="text-gray-600">
              Creamos interfaces intuitivas y atractivas que mejoran la experiencia de usuario y aumentan la conversión.
            </p>
            <Link 
              to="/contact" 
              className="btn bg-[#dcd500] hover:bg-white text-gray-800 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Comenzar ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
