import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Button from "@/components/Button"
import logoGrobles from '/logoIconBlack4x4.png'
import brandingMarca from '@/assets/branding-marca.webp'
import software from '@/assets/software.webp'
import uiUx from '@/assets/diseño-ux-ui.webp'
import marketing from '@/assets/marketing-digital.webp'
import paginaWeb from '@/assets/pagina-web.webp'

const heroImages = [
  { src: brandingMarca, alt: "Branding Marca" },
  { src: software, alt: "Software" },
  { src: uiUx, alt: "UI/UX" },
  { src: marketing, alt: "Marketing" },
  { src: paginaWeb, alt: "Página Web" },
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, []);

  const goToPrev = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }
  return (
    <main
      className="flex flex-col md:flex-row"
    >
      <div className="w-full md:w-[45%]">
        <div className="sticky top-0 h-[50vh] md:h-screen overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {heroImages.map((img) => (
              <div
                key={img.alt}
                className="min-w-full w-full h-full flex-shrink-0"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-10"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-10"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
      <div
        className="w-full md:w-[55%] px-4 md:px-20 py-10 md:py-30 text-secondary min-h-screen"
      >
        <div>
          <div>
            <h1
              className="text-5xl text-center md:text-left md:text-[134px] font-bold uppercase leading-none"
              data-aos="fade-up"
            >
              Grobles <br className="hidden md:block" />Studio ©
            </h1>
          </div>
          <div
            className="pt-10 md:pt-70 text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay="200">
            <span
              className="italic text-lg text-gray-700"
            >
              (Con base en Perú)
            </span>
            <p
              className="text-xl md:text-3xl pt-5 text-gray-700"
            >
              Desarrollamos software y sitios web <br className="hidden md:block" /> impactantes que impulsen el <br className="hidden md:block" />crecimiento y el éxito de tu negocio.
            </p>
          </div>
        </div>
        <div
          className="pt-30 md:pt-50 text-center md:text-left">
          <span
            className="italic text-lg text-gray-700">
            (Sobre nosotros)
          </span>
          <h1
            className="text-5xl md:text-[120px] uppercase leading-none pt-10"
            data-aos="fade-up"
            data-aos-delay="300">
            Software <br className="hidden md:block"/>
            Potente; <br className="hidden md:block"/>
            Sitios Web <br className="hidden md:block"/>
            Poderosos
          </h1>
          <p
            className="text-lg md:text-xl py-15 text-gray-700"
            data-aos="fade-up"
            data-aos-delay="400">
            Grobles Studio es una startup tecnológica peruana especializada en desarrollo de software personalizado, diseño de sitios web modernos y aplicaciones móviles <span className="font-bold">escalables</span>. Transformamos ideas en productos digitales de alto impacto que impulsan el crecimiento empresarial.
            <br />
            <br />
            Nos apaciona crear software significativo y sitios web dinámicos que destaquen en el competitivo mercado digital. Nuestro equipo combina pensamiento estratégico con diseño creativo para crear soluciones personalizadas que se alineen con los objetivos de tu negocio.
          </p>
          <Link to='/about'
          >
            <Button>
              Más sobre nosotros
            </Button>
          </Link>

        </div>
        <div
        className="pt-30 text-center md:text-left"
        data-aos="fade-up"
        data-aos-delay="400"
        >
          <span
          className="italic text-lg text-gray-700">
            (Ecosistema Grobles)
          </span>
          <h2
          className="text-2xl md:text-4xl font-bold uppercase pt-10 pb-5">
            Nuestra Marca
          </h2>
          <p
          className="text-lg md:text-xl text-gray-700 mb-4">
            Además de nuestros servicios principales, hemos creado Grobles Store, una plataforma especializada en plantillas web premium.
          </p>
          <div
          className="rounded-3xl w-full md:w-[30%] flex justify-center md:justify-start">
            <a href="https://grobles-store.vercel.app" target="_blank" className="flex items-center gap-2">
              <img src={logoGrobles} alt="Logo Grobles"
                className="md:w-fit h-12 object-cover" />
              <h2 className="text-secondary text-3xl font-bold">Grobles Store</h2>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}