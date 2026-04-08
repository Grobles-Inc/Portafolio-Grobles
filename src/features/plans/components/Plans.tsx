import { CheckCircle } from "lucide-react"
import { openWhatsAppPlanInquiry } from "@/utils/whatsappPlanInquiry"

const plans = [
  {
    id: 1,
    name: "Plan Emprendedor",
    badget: "Web Presencial",
    description: "Digitaliza tu negocio y genera confianza inmediata en tu negocio.",
    features: [
      "Landing Page o hasta 4 secciones (Inicio, Nosotros, Servicios, Contacto).",
      "Diseño Adaptable (Móvil/PC).",
      "Botón de WhatsApp Flotante.",
      "Hosting + Dominio GRATIS.",
      "Certificado SSL (Candado Verde).",
      "5 Correos Corporativos.",
      "Entrega Rápida (3 a 5 días hábiles)."
    ],
    price: 550.00,
    details: "Pago Único."
  },
  {
    id: 2,
    name: "Plan Negocio",
    badget: "Catálogo/Tienda Virtual",
    description: "Empieza a vender tus productos 24/7 sin comisiones en tu negocio.",
    features: [
      "Todo el PLAN EMPRENDEDOR.",
      "Catálogo de Productos.",
      "Carrito de Compras.",
      "Pedidos al WhatsApp.",
      "Panel de Administración (Dashboard).",
      "Buscador de Productos.",
      "Mapa de Ubicación Interactivo.",
    ],
    price: 850.00,
    details: "Pago Único.",
    recomendado: true
  },
  {
    id: 3,
    name: "Plan Empresarial",
    badget: "Sistema Web a Medida",
    description: "Soluciones Avanzadas para Gestionar y Automatizar tu Negocio.",
    features: [
      "Desarrollo de Software a Medida.",
      "Usuarios, Roles (Administradores, Usuarios, etc.).",
      "Panel de Control Dashboard (Gráficos y Estadísticas en tiempo real).",
      "Automatización (Cálculos automáticos, generación de PDF o reportes).",
      "Integraciones (Conexión con servicios externos o pasarelas de pago).",
      "Sistema Escalable y Seguro.",
    ],
    price: 1100.00,
    details: "Precio Negociable."
  }
]

export default function PlansComponent() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-20">
      <div className="text-center md:text-left space-y-5" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-4xl md:text-7xl font-bold uppercase leading-none text-center text-[#ffde59]">
          Explora Nuestros Planes
        </h2>
        <p className="text-lg md:text-3xl text-primary text-center">
          Ya sea que estés empezando, expandiendo tu negocio o gestionando un equipo completo, nuestros planes de precios están diseñados para apoyar a tu negocio en cada etapa.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 py-10" data-aos="fade-up" data-aos-delay="200">
        {plans.map((plan) => {
          const isRecommended = plan.recomendado;
          return (
            <div
              key={plan.id}
              className={`bg-primary text-secondary py-10 px-5 rounded-3xl flex flex-col space-y-6 h-full relative
                ${isRecommended ? "shadow-2xl z-10" : ""}
              `}
              style={{ minHeight: "100%" }}
            >
              {isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex items-center">
                  <span className="bg-[#ffde59] text-secondary font-bold px-6 py-1 rounded-full text-xs uppercase shadow-lg border-4 border-secondary">
                    Recomendado
                  </span>
                </div>
              )}

              <h3 className="uppercase text-center text-3xl font-bold">{plan.name}</h3>
              <p className="mx-auto text-center font-bold uppercase text-sm text-secondary bg-[#ffde59] rounded-full px-4 py-2 w-fit">{plan.badget}</p>
              <p className="text-center text-md md:text-lg uppercase">{plan.description}</p>
              <div className="space-y-2">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <p className="text-sm md:text-md">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`Consultar por ${plan.name} por WhatsApp`}
                  className={
                  `flex flex-col items-center justify-center border-2 rounded-4xl p-4 mt-4 shadow-lg space-y-1
                  ${isRecommended ? "bg-[#ffde59] border-[#ffde59] hover:bg-primary hover:border-secondary hover:text-secondary transition-all duration-500 cursor-pointer" : "border-secondary hover:bg-[#ffde59] hover:border-[#ffde59] hover:text-secondary transition-all duration-500 cursor-pointer"}`
                }
                  onClick={() => openWhatsAppPlanInquiry(plan.name)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      openWhatsAppPlanInquiry(plan.name)
                    }
                  }}
                >
                  <span className="uppercase font-semibold text-secondary text-xs tracking-wide mb-1">Desde...</span>
                  <span className="text-5xl font-bold mb-0.5"
                  >
                    S/.{plan.price.toLocaleString("es-PE", { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-secondary text-base font-normal mt-1">
                    {plan.details}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <p className="text-center text-md text-primary">
        *Todos nuestros planes incluyen un año de mantenimiento y soporte técnico por 3 meses.
      </p>
    </div>
  )
}
