interface WhatsappContactParams {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function formatWhatsappContact({ name, email, phone, message }: WhatsappContactParams): string {
  const phoneNumber = "51972557287";
  
  const formattedMessage =
    `¡Hola Grobles, quiero ponerme en contacto con ustedes!%0A%0A` +
    `*DATOS DE CONTACTO:*%0A` +
    `*Nombre:* ${name}%0A` +
    `*Email:* ${email}%0A` +
    `*Teléfono:* ${phone}%0A%0A` +
    `*MENSAJE:*%0A${message.replace(/\n/g, '%0A')}%0A%0A` +
    `Espero su respuesta. ¡Gracias!`;
    
  return `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
} 