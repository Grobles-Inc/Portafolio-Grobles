
export default function HeroSectionAbout() {
  return (
    <main
      className="flex flex-col md:flex-row"
    >
      <div
        className="w-full md:w-[55%] px-4 md:px-20 py-10 md:py-30 text-secondary min-h-screen"
      >
        <div>
          <div
          data-aos="fade-up"
          data-aos-delay="100">
            <h1
              className="text-5xl text-center md:text-left md:text-[134px] font-bold uppercase leading-none pt-15 md:pt-0"
            >
              Sobre <br className="hidden md:block" />Nosotros
            </h1>
          </div>
          <div
            className="text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay="200">
            <p
              className="text-xl md:text-3xl pt-5 font-extralight"
            >
              Descubre nuestra misión, visión, valores y <br />el equipo detrás de nuestro éxito.
            </p>
          </div>
        </div>
        <div
          className="pt-10 text-center md:text-left">
          <span
            className="italic text-extralight text-lg text-gray-600">
            (Nuestra Historia)
          </span>
          <p
            className="text-lg md:text-xl py-10 text-gray-600 font-extralight"
            data-aos="fade-up"
            data-aos-delay="300">
            Grobles Studio nació en Perú como una startup de desarrollo de software creada con la visión de acercar la tecnología moderna a las PYMEs de Perú. Desde el inicio, combinó creatividad, disciplina y un enfoque práctico para resolver problemas reales. Aunque comenzó como un proyecto pequeño, nuestra propuesta de valor <span className="font-bold">soluciones web, aplicaciones móviles y sistemas a medida</span> rápidamente llamó la atención de clientes que buscaban innovación sin complicaciones.
            <br />
            <br />
            En Grobles Studio adoptamos un modelo de trabajo totalmente remoto, permitiendo colaborar con talento distribuido y atender clientes en distintas ciudades de Perú. Con cada proyecto, la startup consolidó su reputación por su responsabilidad, proactividad y orientación a resultados, convirtiéndose en un aliado tecnológico clave para negocios que desean dar el salto al mundo digital.
          </p>
        </div>
        <div
          className="pt-10 text-center md:text-left">
          <span
            className="italic text-extralight text-lg text-gray-600">
            (Nuestra Misión)
          </span>
          <p
            className="text-lg md:text-xl py-10 text-gray-600 font-extralight"
            data-aos="fade-up"
            data-aos-delay="300">
            Desarrollar soluciones de software innovadoras, accesibles y de alta calidad que impulsen el crecimiento digital de las PYMEs peruanas, ofreciendo tecnología confiable y adaptada a sus necesidades mediante un equipo comprometido y 100% remoto.
          </p>
        </div>
        <div
          className="pt-10 text-center md:text-left">
          <span
            className="italic text-extralight text-lg text-gray-600">
            (Nuestra Visión)
          </span>
          <p
            className="text-lg md:text-xl py-10 text-gray-600 font-extralight"
            data-aos="fade-up"
            data-aos-delay="300">
            Convertirnos en una empresa líder de desarrollo de software en Perú, reconocida por transformar ideas en productos tecnológicos eficientes y por generar un impacto positivo en los negocios que confían en nosotros.
          </p>
        </div>
        <div
          className="pt-10 text-center md:text-left">
          <span
            className="italic text-extralight text-lg text-gray-600">
            (Nuestros Valores)
          </span>
          <div
            className="text-lg md:text-xl py-10 text-gray-600 font-extralight"
            data-aos="fade-up"
            data-aos-delay="300">
            <ul className="list-disc list-inside">
              <li>Innovación: Buscamos constantemente nuevas formas de crear soluciones modernas y efectivas.</li>
              <li>Responsabilidad: Cumplimos con nuestros compromisos y trabajamos con integridad.</li>
              <li>Proactividad: Anticipamos necesidades y proponemos mejoras continuamente.</li>
              <li>Calidad: Cada proyecto refleja nuestro compromiso con estándares técnicos altos.</li>
              <li>Trabajo Colaborativo: Potenciamos resultados a través de un equipo remoto unido y orientado a objetivos.</li>
              <li>Orientación al Cliente: Diseñamos soluciones pensadas para necesidades reales y medibles.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[45%]">
        <div className="sticky top-0">
          <img
            src="https://images.unsplash.com/photo-1602306834394-6c8b7ea0ed9d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Section"
            className="w-full h-[50vh] md:h-screen object-cover"
          />
        </div>
      </div>
    </main>
  )
}
