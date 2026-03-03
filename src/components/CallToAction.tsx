import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <main
      className="h-screen flex items-center justify-center md:sticky top-0 z-0 bg-[#1d232a]"
      data-aos="zoom-in"
      data-aos-delay="100">
      <div
        className="max-w-7xl mx-auto px-4 py-10 md:p-20 flex flex-col items-center justify-center">
        <h4
          className="text-white text-5xl md:text-[100px] text-center leading-none">
          Presentamos <br />
          <span className="text-[#dcd500]">
            Grupo HC Studio
          </span>
        </h4>
        <p
          className="text-white pt-10 text-center text-lg md:text-xl">
          
          Somos la división tecnológica de <a
            href="https://www.grupohcsolutions.com/"
            target="_blank"
            className="text-[#dcd500] font-bold">
            Grupo HC Solutions {""}
          </a>
          nacidos de la fusión con <span className="font-bold">Grobles Studio</span>, combinamos el desarrollo de software de vanguardia con el respaldo corporativo de un grupo logístico líder, creando soluciones digitales que impulsan el crecimiento.
        </p>
        <a
          href="https://www.grupohcsolutions.com/"
          target="_blank"
          className="
            flex items-center mt-10 px-4 py-2 
            bg-white text-secondary text-sm md:text-lg rounded-xl border border-transparent
            transition-all duration-500 ease-in-out
            hover:bg-transparent hover:text-white hover:border-[#dcd500] uppercase">
          Conocer más sobre Grupo HC Solutions
          <ArrowRight className="h-4 w-4 ml-2" />
        </a>
      </div>
    </main>
  )
}
