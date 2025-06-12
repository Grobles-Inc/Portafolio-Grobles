import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { formatWhatsappContact } from "../utils/whatsappFormatter";
import SEOHead from "../components/SEOHead"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Generar el link de WhatsApp y abrir en nueva ventana
    const whatsappLink = formatWhatsappContact(formData);
    window.open(whatsappLink, '_blank');
    
    // Limpiar el formulario
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Grobles Solutions",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+51-937-760-953",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English"],
        "areaServed": "Worldwide"
      }
    }
  }

  return (
    <div>
      <SEOHead
        title="Contacto - Grobles Solutions | Hablemos de tu Proyecto"
        description="¿Tienes una idea? Contacta con Grobles Solutions. Soporte 24/7, consulta gratuita y presupuesto personalizado para tu proyecto de software."
        keywords="contacto, consulta gratuita, presupuesto software, desarrollo personalizado, soporte 24/7"
        canonical="https://groblesolutions.netlify.app/contact"
        structuredData={structuredData}
      />
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 py-12 lg:mt-20"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Conecta Con <span className="text-yellow-300 italic">Nosotros</span></h1>
          <p className="max-w-2xl text-lg">
            Tenemos un fuerte deseo de colaborar y damos la bienvenida a marcas estimadas y emprendedores entusiastas para que se unan a nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-20 mt-20">
          <div className="card bg-base-100 shadow-xl rounded-3xl"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="card-body items-center text-center">
              <Mail className="w-12 h-12 text-yellow-300 mb-4" />
              <h2 className="card-title text-xl font-bold">Nuestro Email</h2>
              <p className="text-base-content/80">grobles.dev@gmail.com</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl rounded-3xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="card-body items-center text-center">
              <MapPin className="w-12 h-12 text-yellow-300 mb-4" />
              <h2 className="card-title text-xl font-bold">Ubicados en</h2>
              <p className="text-base-content/80">Lima, Perú</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl rounded-3xl"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="card-body items-center text-center">
              <Phone className="w-12 h-12 text-yellow-300 mb-4" />
              <h2 className="card-title text-xl font-bold">Llámanos</h2>
              <p className="text-base-content/80">+51 937 760 953</p>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="px-4 mb-20">
          <div className="card rounded-3xl shadow-xl max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-yellow-300 mr-2" />
                Envíanos un Mensaje por WhatsApp
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold">Nombre Completo</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold">Correo Electrónico</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold">Número de Teléfono</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+51 999 999 999"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold">Mensaje</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    className="textarea textarea-bordered h-32 w-full"
                    required
                  />
                </div>

                <div className="form-control mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="btn rounded-full bg-yellow-300 hover:bg-yellow-400 text-black border-none text-lg font-bold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar por WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
