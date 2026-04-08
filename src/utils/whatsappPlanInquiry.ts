const WHATSAPP_E164 = "51945689211";

export function openWhatsAppPlanInquiry(planName: string): void {
  const message = `Hola deseo adquirir el plan ${planName}, para mi negocio.`;
  const url = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
