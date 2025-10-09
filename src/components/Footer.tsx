import { Link } from "react-router-dom"
import { Facebook, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <section
      className="bg-primary flex flex-col items-center justify-center pb-10"
    >
      <div className="max-w-4xl mx-auto text-center px-6 py-20">
        <h1 className="lg:text-6xl text-4xl   font-bold text-white leading-tight mb-8">
          Transforma tu idea en realidad digital
        </h1>

        <p className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto">
          Desarrollamos soluciones tecnológicas personalizadas que impulsan el crecimiento de tu negocio.
        </p>

        <div className="flex flex-col items-center space-y-6">
          <Link
            to="/contact"
            className="bg-secondary text-primary font-bold uppercase px-12 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
          >
            Empezar ahora
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-10 mt-10 space-y-4 md:space-y-0">
        <div className="text-center md:text-start">

          <div className="flex justify-center md:justify-start mt-2 text-secondary space-x-2">
            <a href="https://www.facebook.com/profile.php?id=61573124294121" target="_blank" className="flex items-center hover:text-white rounded-full px-2 py-2 transition duration-500 ease-in-out" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 " />
            </a>
            <a href="https://www.instagram.com/grobl_esdev/" target="_blank" className="flex items-center hover:text-white rounded-full px-2 py-2 transition duration-500 ease-in-out" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://github.com/Grobles-Inc" target="_blank" className="flex items-center hover:text-white rounded-full px-2 py-2 transition duration-500 ease-in-out" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-end text-white font-bold">
          <p>Copyright © 2025 Grobles Solutions.</p>
        </div>
      </div>
    </section>
  )
}
