import { useState } from "react";
import { Send } from "lucide-react";

export default function FormContacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Usar ruta relativa en producción, localhost en desarrollo
      const apiUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? "http://localhost:3001/api/contact"
        : "/api/contact";
      
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: "¡Mensaje enviado con éxito! Revisa tu correo, te hemos enviado una confirmación.",
        });

        // Limpiar formulario
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      setSubmitStatus({
        type: "error",
        message: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 pb-24">
      <div
        className="bg-base-100 rounded-3xl shadow-2xl p-8 md:p-12 border border-base-200"
        data-aos="fade-up"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Envíanos un <span className="text-secondary italic">Mensaje</span>
          </h2>
          <p className="text-secondary font-extralight">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text text-white font-light">Nombre completo *</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered bg-primary border-base-300 text-white focus:border-secondary focus:outline-none w-full"
              placeholder="Tu nombre"
            />
          </div>

          {/* Email y Teléfono en grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text text-white font-light">Email *</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input input-bordered bg-primary border-base-300 text-white focus:border-secondary focus:outline-none w-full"
                placeholder="ga@ga.com"
              />
            </div>

            <div className="form-control">
              <label htmlFor="phone" className="label">
                <span className="label-text text-white font-light">Teléfono</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered bg-primary border-base-300 text-white focus:border-secondary focus:outline-none w-full"
                placeholder="99999999"
              />
            </div>
          </div>

          {/* Asunto */}
          <div className="form-control">
            <label htmlFor="subject" className="label">
              <span className="label-text text-white font-light">Asunto *</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="select select-bordered bg-primary border-base-300 text-white focus:border-secondary focus:outline-none w-full"
            >
              <option value="" disabled>
                Selecciona un asunto
              </option>
              <option value="desarrollo-web">Desarrollo Web</option>
              <option value="desarrollo-movil">Desarrollo Móvil</option>
              <option value="diseno-ui-ux">Diseño UI/UX</option>
              <option value="consultoria">Consultoría</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          {/* Mensaje */}
          <div className="form-control">
            <label htmlFor="message" className="label">
              <span className="label-text text-white font-light">Mensaje *</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="textarea textarea-bordered bg-primary border-base-300 text-white focus:border-secondary focus:outline-none w-full resize-none"
              placeholder="Cuéntanos sobre tu proyecto..."
            />
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`alert ${
                submitStatus.type === "success" ? "alert-success" : "alert-error"
              }`}
            >
              <span className="text-sm">{submitStatus.message}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-secondary text-primary font-bold px-8 hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
