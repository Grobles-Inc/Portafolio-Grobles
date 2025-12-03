import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import HeroSectionContact from "@/features/contact/components/HeroSectionContact";

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
    <div className="bg-primary">
      <SEOHead
        title="Contacto - Grobles Studio | Hablemos de tu Proyecto"
        description="¿Tienes una idea? Contacta con Grobles Studio. Soporte 24/7, consulta gratuita y presupuesto personalizado para tu proyecto de software."
        keywords="contacto, consulta gratuita, presupuesto software, desarrollo personalizado, soporte 24/7"
        canonical="https://www.groblestudio.com/contact"
        structuredData={structuredData}
      />
        <HeroSectionContact />
    </div>
  )
}
