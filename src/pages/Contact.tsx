import { useEffect } from "react";
import { Calendar, Mail, Phone } from "lucide-react";

import SEOHead from "../components/SEOHead";

export default function Contact() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Grobles Studio",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+51-901-617-809",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English"],
        "areaServed": "Worldwide"
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary py-2">
      <SEOHead
        title="Contacto - Grobles Studio | Hablemos de tu Proyecto"
        description="¿Tienes una idea? Contacta con Grobles Studio. Soporte 24/7, consulta gratuita y presupuesto personalizado para tu proyecto de software."
        keywords="contacto, consulta gratuita, presupuesto software, desarrollo personalizado, soporte 24/7"
        canonical="https://grobles.netlify.app/contact"
        structuredData={structuredData}
      />
      <section className="max-w-7xl mx-auto px-4">
        <div
          className="flex flex-col items-center text-center gap-4 py-16 lg:mt-24 space-y-5"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Conecta con <span className="text-secondary italic">Nosotros</span>
          </h1>
          <p className="max-w-2xl md:text-lg text-secondary font-bold">
            ¿Listo para impulsar tu proyecto? Hablemos. Trabajamos con marcas y emprendedores que buscan resultados reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Email Card */}
          <a 
            href="mailto:grobles.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group card bg-base-100 shadow-xl hover:shadow-2xl transition-all rounded-3xl border border-base-200 hover:border-secondary focus:ring-2 focus:ring-secondary"
            data-aos="zoom-in"
            data-aos-delay="200"
            tabIndex={0}
          >
            <div className="card-body items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4 group-hover:bg-secondary/20 transition">
                <Mail className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="card-title text-xl font-bold text-white mb-1">Email</h2>
              <span className="text-white font-bold group-hover:text-secondary transition">
                grobles.dev@gmail.com
              </span>
            </div>
          </a>

          {/* Calendar Card */}
          <a
            href="https://cal.com/grobles/cotizacion"
            target="_blank"
            rel="noopener noreferrer"
            className="group card bg-base-100 shadow-xl hover:shadow-2xl transition-all rounded-3xl border border-base-200 hover:border-secondary focus:ring-2 focus:ring-secondary"
            data-aos="zoom-in"
            data-aos-delay="200"
            tabIndex={0}
          >
            <div className="card-body items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4 group-hover:bg-secondary/20 transition">
                <Calendar className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="card-title text-xl font-bold text-white mb-1">Agenda una cita</h2>
              <span className="text-white font-bold group-hover:text-secondary transition">
                Reserva una reunión con nuestro equipo.
              </span>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="https://wa.me/51901617809?text=Hola Grobles Studio, quiero ponerme en contacto con ustedes!"
            target="_blank"
            rel="noopener noreferrer"
            className="group card bg-base-100 shadow-xl hover:shadow-2xl transition-all rounded-3xl border border-base-200 hover:border-secondary focus:ring-2 focus:ring-secondary"
            data-aos="zoom-in"
            data-aos-delay="300"
            tabIndex={0}
          >
            <div className="card-body items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4 group-hover:bg-secondary/20 transition">
                <Phone className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="card-title text-xl font-bold text-white mb-1">Whatsapp</h2>
              <span className="text-white font-bold group-hover:text-secondary transition">
                +51 901 617 809
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
