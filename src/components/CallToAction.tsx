import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <main 
      className="h-screen flex items-center justify-center md:sticky top-0 z-0 bg-[#1d232a]"
      data-aos="zoom-in"
      data-aos-delay="100">
      <div 
        className="max-w-7xl mx-auto px-4 py-10 md:p-20 flex flex-col items-center justify-center">
        <h2
          className="text-white text-5xl md:text-[100px] text-center leading-none">
          Presentamos <br />
          <a
            href="https://grobles-store.vercel.app"
            target="_blank"
            className="text-[#16ea9e]">
            Grobles - Store
          </a>
        </h2>
        <p
          className="text-white pt-10 text-center text-lg md:text-xl font-extralight">
          <a
            href="https://grobles-store.vercel.app"
            target="_blank"
            className="text-[#16ea9e] font-bold">
            Grobles - Store {""}
          </a>
          es una rama de Grobles Studio encargada del diseño de plantillas para sitios web, con diseños modernos y de alta calidad, optimizados con SEO, velocidad de carga y accesibilidad, personalizadas para tu negocio.
        </p>
        <a 
          href="https://grobles-store.vercel.app"
          target="_blank"
          className="
            flex items-center mt-10 px-4 py-2 
            bg-white text-secondary text-sm md:text-lg rounded-xl border border-transparent
            transition-all duration-500 ease-in-out
            hover:bg-transparent hover:text-white hover:border-[#16ea9e] uppercase">
            Conocer más sobre Grobles-Store
            <ArrowRight className="h-4 w-4 ml-2" />
        </a>
      </div>
    </main>
  )
}
