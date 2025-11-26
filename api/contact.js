import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido' });
  }

  const { name, email, phone, subject, message } = req.body;

  // Validación básica
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Todos los campos obligatorios deben estar completos' 
    });
  }

  try {
    // Configurar transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email para el administrador con los datos del contacto
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `Nuevo contacto: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #10B981; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .field strong { color: #10B981; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📨 Nuevo mensaje de contacto</h2>
            </div>
            <div class="content">
              <div class="field">
                <strong>Nombre:</strong> ${name}
              </div>
              <div class="field">
                <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
              </div>
              <div class="field">
                <strong>Teléfono:</strong> ${phone || 'No proporcionado'}
              </div>
              <div class="field">
                <strong>Asunto:</strong> ${subject}
              </div>
              <div class="field">
                <strong>Mensaje:</strong>
                <p style="background: white; padding: 15px; border-left: 3px solid #10B981; margin-top: 10px;">
                  ${message}
                </p>
              </div>
            </div>
            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de Grobles Studio</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email de respuesta automática para el usuario
    const userMailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: '✅ Mensaje recibido - Grobles Studio',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #10B981; color: white; padding: 30px; text-align: center; border-radius: 5px 5px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .message-box { background: white; padding: 20px; border-left: 4px solid #10B981; margin: 20px 0; }
            .footer { background: #1a1a1a; color: white; padding: 20px; text-align: center; border-radius: 0 0 5px 5px; }
            .cta-button { display: inline-block; background: #10B981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .social-links { margin-top: 15px; }
            .social-links a { color: #10B981; text-decoration: none; margin: 0 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>¡Gracias por contactarnos!</h1>
            </div>
            <div class="content">
              <p>Hola <strong>${name}</strong>,</p>
              <p>Hemos recibido tu mensaje correctamente y queremos agradecerte por ponerte en contacto con <strong>Grobles Studio</strong>.</p>
              
              <div class="message-box">
                <p><strong>📋 Resumen de tu mensaje:</strong></p>
                <p><strong>Asunto:</strong> ${subject}</p>
                <p><strong>Mensaje:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
              </div>

              <p>Nuestro equipo revisará tu solicitud y te responderemos lo antes posible, generalmente en un plazo de <strong>24 a 48 horas hábiles</strong>.</p>

              <p>Mientras tanto, te invitamos a:</p>
              <ul>
                <li>Conocer más sobre nuestros <a href="https://www.groblestudio.com/services" style="color: #10B981;">servicios</a></li>
                <li>Ver nuestro <a href="https://www.groblestudio.com/projects" style="color: #10B981;">portafolio de proyectos</a></li>
                <li>Agendar una reunión directamente en <a href="https://cal.com/grobles/cotizacion" style="color: #10B981;">nuestro calendario</a></li>
              </ul>

              <p>Si tu consulta es urgente, puedes contactarnos por WhatsApp:</p>
              <a href="https://wa.me/51901617809" class="cta-button">📱 WhatsApp: +51 901 617 809</a>
            </div>
            <div class="footer">
              <p><strong>Grobles Studio</strong></p>
              <p>Transformamos ideas en soluciones digitales</p>
              <div class="social-links">
                <a href="mailto:contacto@grupohcsolutions.com">✉️ Email</a> | 
                <a href="https://www.groblestudio.com">🌐 Website</a>
              </div>
              <p style="font-size: 11px; margin-top: 15px; color: #999;">
                Este es un mensaje automático, por favor no responder a este correo.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Enviar ambos emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado exitosamente' 
    });

  } catch (error) {
    console.error('Error al enviar email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.' 
    });
  }
}
