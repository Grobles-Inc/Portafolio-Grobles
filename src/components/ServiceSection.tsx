import { getServices } from "@/data/serviceData";

export default function ServiceSection() {
  const services = getServices();
  return (
    <main>
      <div className="px-4 md:px-20 text-center md:text-left">
        <span className="italic text-lg text-gray-700">
          (Lo que hacemos)
        </span>
        <h2 className="text-secondary text-5xl md:text-[120px] font-bold uppercase pt-10 pb-5"
        data-aos="fade-up"
        data-aos-delay="100">
          Servicios
        </h2>
        <p className="text-gray-700 text-xl md:text-[40px] pb-5"
        data-aos="fade-up"
        data-aos-delay="200">
          Descubre nuestros servicios personalizados diseñados para <br /> mejorar e impulsar tu negocio.
        </p>
      </div>
      {services.map((s, i) => (
        <div
          key={s.key}
          className={`
            flex flex-col md:flex-row 
            ${i === 0 ? "h-auto md:h-[100vh]" : "h-auto md:h-screen"} 
            md:sticky md:top-0
          `}
          style={{ zIndex: i + 1 }}
        >
          <div 
            className={`
              w-full md:w-1/3 h-60 md:h-full
              order-1 ${s.imgSide === "left" ? "md:order-1" : "md:order-3"}
            `}
          >
            <img
              src={s.image}
              alt={typeof s.title === "string" ? s.title : "Imagen del servicio"}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-2/3 px-4 md:px-20 py-10 md:py-30 text-secondary bg-[#f8f8f8] flex flex-col justify-center h-full order-2">
            <div>
              <div>
                <h2 className="text-4xl md:text-[110px] font-bold uppercase leading-none text-center md:text-left"
                data-aos="fade-up"
                data-aos-delay="100">
                  {s.title}
                </h2>
                <p className="text-gray-700 text-xl md:text-3xl pt-6 md:pt-10 text-center md:text-left"
                data-aos="fade-up"
                data-aos-delay="200">
                  {s.description}
                </p>
              </div>
              <div className="pt-10 md:pt-40">
                <span className="italic text-lg text-gray-700">
                  {s.subtitle}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-14 pt-6 md:pt-10"
                data-aos="fade-up">
                  {s.features.map((f, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <span className="text-base md:text-xl text-gray-800">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
