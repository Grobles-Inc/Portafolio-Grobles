import { Link } from "react-router-dom"
import { Facebook, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <section
      className="bg-[#07e288] flex flex-col items-center justify-center mt-20 pb-10 rounded-3xl md:m-8"
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

          <div className="flex justify-center md:justify-start  mt-2">
            <a href="https://www.facebook.com/profile.php?id=61573124294121" target="_blank" className="btn btn-ghost btn-circle" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 " />
            </a>
            <a href="https://www.instagram.com/grobl_esdev/" target="_blank" className="btn btn-ghost btn-circle" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://github.com/Grobles-Inc" target="_blank" className="btn btn-ghost btn-circle" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-end">
          <p>Copyright © 2025 Grobles Solutions.</p>
        </div>
      </div>
    </section>
  )
}
