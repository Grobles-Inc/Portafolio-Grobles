const HIGHLIGHT_WORDS = [
  "Landing Page",
  "Móvil/PC",
  "WhatsApp Flotante",
  "GRATIS",
  "Certificado SSL",
  "5 Correos Corporativos",
  "3 a 5 días hábiles",
  "PLAN EMPRENDEDOR",
  "Catálogo de Productos",
  "Carrito",
  "Dashboard",
  "Buscador",
  "Software a Medida",
  "Roles",
  "Dashboard",
  "Integraciones con IA",
  "1 año",
  "Escalable"
]

export default function highlightFeaturesText(text: string) {
  const regex = new RegExp(`\\b(${HIGHLIGHT_WORDS.join("|")})\\b`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isHighlight = HIGHLIGHT_WORDS.some(
      (word) => word.toLowerCase() === part.toLowerCase()
    )

    return isHighlight ? (
      <span key={`${part}-${index}`} className="bg-[#ffde59] text-secondary px-2 py-1 rounded-lg italic">
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>
        {part}
      </span>
    )
  })
}
