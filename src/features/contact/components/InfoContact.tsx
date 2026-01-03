import { MailIcon, PhoneIcon } from "lucide-react";

export default function InfoContact() {
  return (
    <main
    className="p-6 md:p-20">
      <span className="text-xl italic text-gray-700">(Información de contacto)</span>
      <div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5">
        <div
        className="flex flex-col text-secondary bg-[#f8f8f8] p-10 space-y-5 rounded-xl"
        data-aos="fade-up"
        data-aos-delay="100">
          <PhoneIcon className="w-10 h-10" />
          <h4
          className="text-2xl md:text-3xl">Llámanos:</h4>
          <a href="tel:+51945689211" className="text-secondary text-xl hover:text-[#07e288] transition-all duration-500">+51 945 689 211</a>
        </div>
        <div
        className="flex flex-col text-secondary bg-[#f8f8f8] p-10 space-y-5 rounded-xl"
        data-aos="fade-up"
        data-aos-delay="200">
          <MailIcon className="w-10 h-10" />
          <h4
          className="text-2xl md:text-3xl">Envíanos un correo:</h4>
          <a href="mailto:contacto@groblestudio.com" className="text-secondary text-xl hover:text-[#07e288] transition-all duration-500">contacto@groblestudio.com</a>
        </div>
      </div>
    </main>
  )
}
