import { Link } from "react-router-dom"
import oooscillate from "../assets/oooscillate.svg"

const stats = [
  { value: "20+", label: "Proyectos completados" },
  { value: "6+", label: "Años de experiencia" },
  { value: "95%", label: "Satisfacción del Cliente" },
  { value: "24x7", label: "Soporte al cliente" },
];
export default function HeroSection() {
  const marqueeStats = [...stats, ...stats];
  return (
    <section className="relative bg-primary md:pt-20 pt-10 overflow-hidden">
      <img
        src={oooscillate}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative">
        <div className="flex flex-col items-center text-center space-y-10 md:py-12 py-6 px-4"
          data-aos="fade-up"
        >
          <h1 className="text-2xl md:text-5xl text-secondary leading-8 font-bold">Transformamos <span className="text-white italic">ideas</span> en <span className="text-white italic">resultados digitales</span></h1>
          <p className="max-w-3xl  md:text-lg  text-white font-bold">
            Desarrollo, diseño, marketing y consultoría digital. Todo lo que necesitas para hacer crecer tu negocio.
          </p>
          <div className="flex flex-col md:flex-row gap-2">

            <Link
              to="/contact"
              className="bg-secondary flex items-center border border-transparent rounded-full px-4 py-3 font-bold hover:text-white hover:bg-primary hover:border-secondary"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              Construir mi proyecto
            </Link>
            <Link
              to="/projects"
              className="flex items-center text-white px-5 py-3 border border-secondary rounded-full hover:bg-secondary hover:text-primary font-bold"
              data-aos="flip-right"
              data-aos-delay="500"
            >
              Ver nuestro trabajo
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center px-4 sm:px-6 md:px-8"
          data-aos="fade-up"
        >
          <img
            src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equipo de desarrolladores de software trabajando en proyectos innovadores con tecnología moderna"
            width={900}
            height={900}
            className="rounded-4xl"
            loading="lazy"
            data-aos="zoom-in"
            data-aos-delay="700"
            decoding="async"
          />
        </div>
        {/* Desktop Marquee */}
        <div className="relative overflow-x-hidden py-24 hidden md:block">
          <div
            className="flex items-center animate-marquee whitespace-nowrap gap-20"
            style={{
              animation:
                'marquee 28s linear infinite',
            }}
          >
            {marqueeStats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2 items-center min-w-[220px] mx-2">
                <h3 className="md:text-6xl text-4xl font-bold text-secondary">{stat.value}</h3>
                <p className="text-secondary text-lg font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Static Stats */}
        <div className="relative py-12 md:hidden">
          <div className="grid grid-cols-2 gap-8 px-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 items-center animate-fade-in"
                style={{
                  animationDelay: `${i * 200}ms`
                }}
              >
                <h3 className="text-3xl font-bold text-white font-mono">{stat.value}</h3>
                <p className="text-white text-xs font-medium text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes fade-in {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in {
              animation: fade-in 0.6s ease-out forwards;
              opacity: 0;
            }
          `}
        </style>
      </div>
    </section >
  )
}
