import { Link } from "react-router-dom"
import Button from "@/components/Button"

export default function HeroSection() {
  return (
    <main
      className="flex flex-col md:flex-row"
    >
      <div className="w-full md:w-[45%]">
        <div className="sticky top-0">
          <img
            src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Section"
            className="w-full h-[50vh] md:h-screen object-cover"
          />
        </div>
      </div>
      <div
        className="w-full md:w-[55%] px-4 md:px-20 py-10 md:py-30 text-secondary min-h-screen"
      >
        <div>
          <div>
            <h1
              className="text-5xl text-center md:text-left md:text-[134px] font-bold uppercase leading-none"
            >
              Grobles <br className="hidden md:block" />Studio ©
            </h1>
          </div>
          <div
            className="pt-10 md:pt-70 text-center md:text-left">
            <span
              className="italic text-extralight text-lg text-gray-600"
            >
              (Con base en Perú)
            </span>
            <p
              className="text-xl md:text-3xl pt-5 font-extralight"
            >
              Desarrollamos software y sitios web <br className="hidden md:block" /> impactantes que impulsen el <br className="hidden md:block" />crecimiento y el éxito de tu negocio.
            </p>
          </div>
        </div>
        <div
          className="pt-30 md:pt-50 text-center md:text-left">
          <span
            className="italic text-extralight text-lg text-gray-600">
            (Sobre nosotros)
          </span>
          <h1
            className="text-5xl md:text-[120px] uppercase leading-none pt-10">
            Software <br className="hidden md:block"/>
            Potente; <br className="hidden md:block"/>
            Sitios Web <br className="hidden md:block"/>
            Poderosos
          </h1>
          <p
            className="text-lg md:text-xl py-15 text-gray-600 font-extralight">
            Nos apaciona crear software significativas y sitios web dinámicos que destaquen en el competitivo mercado digital. Nuestro equipo combina pensamiento estratégico con diseño creativo para crear soluciones personalizadas que se alineen con los objetivos de tu negocio. Desde desarrollar sitios web optimizados hasta crear softwares potentes y eficientes, nos centramos en ofrecer experiencias que involucren y conviertan.
            <br />
            <br />
            Con cada proyecto, nos aseguramos de que el resultado no solo cumpla con los estándares técnicos, sino que también sea una herramienta que impulse el crecimiento de tu negocio.
          </p>
          <Link to='/about'
          >
            <Button>
              Más sobre nosotros
            </Button>
          </Link>

        </div>
        <div
        className="pt-30 text-center md:text-left">
          <span
          className="italic text-extralight text-lg text-gray-600">
            (Socios de Nuestra Marca )
          </span>
          <h2
          className="text-2xl md:text-4xl font-bold uppercase pt-10 pb-5">
            Grobles - Store
          </h2>
          <div
          className="bg-secondary rounded-3xl w-full md:w-[30%] flex justify-center md:justify-start">
            <a href="https://grobles-store.vercel.app" target="_blank">
              <img src="/src/assets/logoGrobles.png" alt="Logo Grobles"
                className="w-fit h-20 object-cover" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}