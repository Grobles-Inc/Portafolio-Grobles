import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <main 
      className="max-w-7xl mx-auto bg-primary"
      data-aos="zoom-in"
      data-aos-delay="100">
      <div 
        className="border border-secondary border-dashed px-4 py-10 md:p-20  flex flex-col items-center justify-center rounded-3xl mx-4 md:mx-0">
        <h2
          className="text-white text-3xl md:text-5xl text-center">
          Presentamos {""}
          <a
            href="https://grobles-store.vercel.app"
            target="_blank"
            className="text-secondary">
            Grobles - Store
          </a>
        </h2>
        <p
          className="text-white pt-10 text-center text-sm md:text-lg font-extralight">
          <a
            href="https://grobles-store.vercel.app"
            target="_blank"
            className="text-secondary font-bold">
            Grobles - Store {""}
          </a>
          es una rama de Grobles Studio encargada del diseño de plantillas para sitios web, con diseños modernos y de alta calidad, optimizados con SEO, velocidad de carga y accesibilidad, personalizadas para tu negocio.
        </p>
        <a 
          href="https://grobles-store.vercel.app"
          target="_blank"
          className="
            flex items-center mt-10 px-4 py-2 
            bg-white text-primary text-sm md:text-lg rounded-xl border border-transparent
            transition-all duration-500 ease-in-out
            hover:bg-transparent hover:text-white hover:border-secondary">
            Conocer más sobre Grobles-Store
            <ArrowRight className="h-4 w-4 ml-2" />
        </a>
      </div>
    </main>
  )
}
