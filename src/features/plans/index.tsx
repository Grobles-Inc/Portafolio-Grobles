import PlansComponent from "./components/Plans"
import SEOHead from "@/components/SEOHead"

export default function Plans() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Planes de Desarrollo - Grobles Studio",
    "description": "Planes de desarrollo de software: emprendedor, negocio y empresarial. Precio único o negociable según el proyecto.",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": "3",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Plan Emprendedor",
          "description": "Digitaliza tu negocio y genera confianza inmediata en tu negocio.",
          "price": "550.00",
          "priceCurrency": "PEN",
          "validFrom": "2023-01-01",
          "validThrough": "2023-12-31",
          "availability": "InStock"
        },
        {
          "@type": "Offer",
          "name": "Plan Negocio",
          "description": "Empieza a vender tus productos 24/7 sin comisiones en tu negocio.",
          "price": "850.00",
          "priceCurrency": "PEN",
          "validFrom": "2023-01-01",
          "validThrough": "2023-12-31",
          "availability": "InStock"
        },
        {
          "@type": "Offer",
          "name": "Plan Empresarial",
          "description": "Soluciones Avanzadas para Gestionar y Automatizar tu Negocio.",
          "price": "1100.00",
          "priceCurrency": "PEN",
          "validFrom": "2023-01-01",
          "validThrough": "2023-12-31",
          "availability": "InStock"
        }
      ]
    }
  }
  return (
    <main className="pt-30 md:pt-40 bg-[#1d232a]">
      <SEOHead
        title="Planes de Desarrollo - Grobles Studio"
        description="Planes de desarrollo de software: emprendedor, negocio y empresarial. Precio único o negociable según el proyecto."
        keywords="planes de desarrollo, emprendedor, negocio, empresarial, precio único, negociable"
        canonical="https://www.groblestudio.com/plans"
        structuredData={structuredData}
      />
      <PlansComponent />
    </main>
  )
}
