
const clients = [
  {
    id: 1,
    image: "https://framerusercontent.com/images/lXQ6y74Whe5BlPqr8BVggvJ4ODs.png?scale-down-to=512",
    name: "Ordee"
  },
  {
    id: 2,
    image: "https://nidoperulina.edu.pe/_astro/logoPrincipal.DobEbkDH.png",
    name: "Nido Perulina"
  },
  {
    id: 3,
    image: "https://mlstreaming.com/assets/logo-qPh3pkJJ.png",
    name: "ML Streaming"
  },
  {
    id: 4,
    image: "https://www.tutechoahora.com/logoPrincipal.jpg",
    name: "Inmobiliaria Tu Techo Ahora"
  },
  {
    id: 5,
    image: "https://wildhorsecarwashmobile.com/logoWithBG.png",
    name: "Carwash WildHorse"
  },
  {
    id: 6,
    image: "https://www.andinagroup.org/logoSecundario.png",
    name: "Andina Group"
  },
  {
    id: 7,
    image: "https://cp-360.vercel.app/logo.png",
    name: "Sistema CP°-360"
  },
  {
    id: 8,
    image: "https://www.industriarlc.com/_next/image?url=%2Findustriarlc512.png&w=96&q=75",
    name: "Industria RLC"
  }
]

export default function ClientsSection() {
  return (
    <section>
      <style>{`
        @keyframes clients-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .clients-marquee-track {
          display: flex;
          width: max-content;
          gap: 2.5rem;
          animation: clients-marquee 50s linear infinite;
        }
        .clients-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .clients-marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            max-width: 80rem;
            margin-inline: auto;
          }
        }
      `}</style>
      <div
        className="relative mt-10 overflow-hidden py-4"
        data-aos="fade-up"
        data-aos-delay="100"
        aria-label="Logos de clientes"
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
          aria-hidden
        />
        <div className="clients-marquee-track">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex h-24 w-36 shrink-0 items-center justify-center md:h-28 md:w-44"
            >
              <img
                src={client.image}
                alt={client.name}
                title={client.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
          {clients.map((client) => (
            <div
              key={`dup-${client.id}`}
              className="flex h-24 w-36 shrink-0 items-center justify-center md:h-28 md:w-44"
              aria-hidden
            >
              <img
                src={client.image}
                alt=""
                title={client.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
