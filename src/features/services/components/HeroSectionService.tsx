
export default function HeroSectionService() {
  return (
    <main
      className="py-20">
      <div className="px-4 md:px-20 text-center md:text-left">
        <h1 className="text-secondary text-5xl md:text-[120px] font-bold uppercase pt-10 pb-5"
        data-aos="fade-up"
        data-aos-delay="100">
          Nuestros Servicios
        </h1>
        <p className="text-gray-600 text-xl md:text-[40px] font-extralight"
        data-aos="fade-up"
        data-aos-delay="200">
          Descubre nuestros servicios personalizados<br /> y diseñados para elevar tu marca.
        </p>
      </div>
      <section
        className="
          w-full flex flex-wrap justify-center gap-6 px-4 py-50 relative 
          bg-center bg-cover my-10
          md:bg-fixed
        "
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
      </section>
    </main>
  )
}
