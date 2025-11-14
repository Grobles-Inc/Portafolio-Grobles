import SEOHead from "../components/SEOHead";
import TeamSection from "../components/TeamSection";

const values = [
  {
    id: 1,
    title: "Cliente",
    description: "Nos enfocamos en las necesidades del cliente y adaptamos cada solución.",
    icon: "https://img.icons8.com/?size=200&id=Fng18fG6GFC0&format=png&color=000000",
  },
  {
    id: 2,
    title: "Comunicación",
    description: "Fomentamos alianzas sólidas y comunicación continua con nuestros clientes.",
    icon: "https://img.icons8.com/?size=100&id=4cjwkaJ1Zo0u&format=png&color=000000",
  },
  {
    id: 3,
    title: "Innovación",
    description: "Nos mantenemos a la vanguardia de las últimas tendencias tecnológicas.",
    icon: "https://img.icons8.com/?size=100&id=Fq7ecL0SYXZl&format=png&color=000000",
  },
  {
    id: 4,
    title: "Eficiencia",
    description: "Nos enfocamos en los resultados que nuestros proyectos generan para nuestros clientes.",
    icon: "https://img.icons8.com/?size=100&id=36hKsBf6lD0k&format=png&color=000000",
  }
];

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Grobles Studio",
      "description": "Equipo de desarrollo de software especializado en tecnologías modernas",
      "foundingDate": "2023",
      "mission": "Convertir ideas innovadoras en soluciones tecnológicas escalables"
    }
  }

  return (
    <div className="bg-primary">
      <SEOHead
        title="Sobre Nosotros - Grobles Studio | Equipo de Desarrollo"
        description="Conoce al equipo de Grobles Studio. Desarrolladores expertos con 10+ años de experiencia creando soluciones tecnológicas innovadoras y escalables."
        keywords="equipo desarrollo, sobre nosotros, desarrolladores expertos, tecnología, innovación, software"
        canonical="https://grobles.netlify.app/about"
        structuredData={structuredData}
      />
      <section className="max-w-7xl mx-auto">
        <TeamSection />

        {/* Values section */}
        <div className="py-20 px-4">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left side - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Modern office space with team collaboration"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white">
                  Nuestros Valores
                </h2>
                <p className="text-secondary leading-relaxed font-extralight">
                  Siempre priorizamos la fidelidad y la confianza con nuestros clientes, y nos esforzamos por ser un referente en el mercado.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {values.map((value) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={value.id} className="space-y-3">

                      <img src={IconComponent} alt={value.title} className="size-12 text-white" />

                      <h3 className="text-xl font-semibold text-white uppercase">
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-secondary font-extralight">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Nuestros Valores
              </h2>
              <p className="text-secondary font-extralight leading-relaxed max-w-2xl mx-auto">
                Siempre priorizamos la fidelidad y la confianza con nuestros clientes, y nos esforzamos por ser un referente en el mercado.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <div key={value.id} className="text-center space-y-4">

                    <div className="flex justify-center">
                      <img src={IconComponent} alt={value.title} className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold uppercase text-white">
                      {value.title}
                    </h3>
                    <p className="text-sm text-secondary font-extralight leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
