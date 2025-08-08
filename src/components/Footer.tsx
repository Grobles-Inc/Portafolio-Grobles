import { Link } from "react-router-dom"
import { Facebook, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <section
      className="bg-[#dcd500] flex flex-col items-center justify-center mt-20 h-[800px] rounded-3xl md:m-8"
    >
      <div className="max-w-4xl mx-auto text-center px-6 py-20">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-tight mb-8">
          Eleve Su<br />
          Marca <span className="italic">Digital</span>
        </h1>

        <p className="text-xl md:text-2xl text-black mb-12 max-w-2xl mx-auto">
          Ponte en contacto con nosotros para hablar sobre tu próximo sitio web.
        </p>

        <div className="flex flex-col items-center space-y-6">
          <Link
            to="/contact"
            className="bg-black text-white font-semibold px-12 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
          >
            Empezar ahora
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-10 mt-10 space-y-4 md:space-y-0">
        <div className="text-center md:text-start">
          <p>¿Tienes alguna duda, o quieres contactarnos?<br />
            <span className="font-bold">grobles.dev@gmail.com</span>
          </p>
          <div className="flex flex-col justify-center md:justify-start space-x-4 mt-4">
            <p className="text-sm">Síguenos en nuestras redes sociales</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=61573124294121" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 hover:text-white hover:scale-125 transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/grobl_esdev/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 hover:text-white hover:scale-125 transition-all duration-300" />
              </a>
              <a href="https://github.com/Grobles-Inc" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 hover:text-white hover:scale-125 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center md:text-end">
          <p>Copyright © 2025 Grobles Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  )
}
