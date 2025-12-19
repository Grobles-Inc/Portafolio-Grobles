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
    <section
    className="md:mx-10">
      <div
        className="p-6 md:p-12"
        data-aos="fade-up"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text text-secondary font-light text-xl pb-2">Nombre completo *</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered bg-[#f8f8f8] text-secondary focus:border-secondary focus:outline-none w-full text-xl py-5"
              placeholder="Tu nombre"
            />
          </div>

          {/* Email y Teléfono en grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text text-secondary font-light text-xl pb-2">Email *</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input input-bordered bg-[#f8f8f8] text-secondary focus:border-secondary focus:outline-none w-full text-xl py-5"
                placeholder="grobles.dev@gmail.com"
              />
            </div>

            <div className="form-control">
              <label htmlFor="phone" className="label">
                <span className="label-text text-secondary font-light text-xl pb-2">Teléfono</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered bg-[#f8f8f8] text-secondary focus:border-secondary focus:outline-none w-full text-xl py-5"
                placeholder="945689211"
              />
            </div>
          </div>

          {/* Asunto */}
          <div className="form-control">
            <label htmlFor="subject" className="label">
              <span className="label-text text-secondary font-light text-xl pb-2">Asunto *</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="select select-bordered bg-[#f8f8f8] text-secondary focus:border-secondary focus:outline-none w-full text-xl py-5"
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
              <span className="label-text text-secondary font-light text-xl pb-2">Mensaje *</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="textarea textarea-bordered bg-[#f8f8f8] text-secondary focus:border-secondary focus:outline-none w-full resize-none text-xl py-5"
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
              className="flex items-center gap-2 border text-secondary border-secondary px-5 py-3 rounded-full cursor-pointer uppercase hover:bg-secondary hover:text-white hover:px-10 transition-all duration-700 text-xl"
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
