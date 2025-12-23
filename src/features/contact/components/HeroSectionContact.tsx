import FormContacto from "./FormContacto";
import InfoContact from "./InfoContact";

export default function HeroSectionContact() {
  return (
    <main
      className="flex flex-col md:flex-row">
      <div className="w-full md:w-[45%]">
        <div className="sticky top-0">
          <img src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contacto" className="w-full h-[50vh] md:h-screen object-cover" />
        </div>
      </div>
      <div className="w-full md:w-[55%]">
        <div className="px-4 md:px-20 text-center md:text-left">
          <h2 className="text-secondary text-5xl md:text-[120px] font-bold uppercase pt-30 pb-5"
          data-aos="fade-up"
          data-aos-delay="100">
            Contacto
          </h2>
          <p className="text-gray-700 text-xl md:text-[40px]  pb-10"
          data-aos="fade-up"
          data-aos-delay="200">
            Empecemos a crear algo increíble juntos.
          </p>
        </div>
        <FormContacto />
        <InfoContact />
      </div>
    </main>
  )
}
