import { teamData } from "../data/teamData";

export default function TeamSectionAbout() {
  return (
    <main className="py-20 bg-[#f8f8f8]">
      <div className="px-4 md:px-20 text-center md:text-left">
        <span className="italic text-extralight text-lg text-gray-600">
          (Nuestro Equipo)
        </span>
        <h1 className="text-secondary text-5xl md:text-[120px] font-bold uppercase pt-10 pb-5"
        data-aos="fade-up"
        data-aos-delay="100">
          Nuestro Equipo
        </h1>
        <p className="text-gray-600 text-xl md:text-[40px] font-extralight"
        data-aos="fade-up"
        data-aos-delay="200">
          Descubre las mentes brillantes que impulsan <br /> nuestro éxito.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 py-10 ">
        {teamData.map((team) => (
          <div 
            key={team.key}
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-full object-cover"
            />
            <div className="p-10 space-y-5">
              <span className="italic text-extralight text-lg text-gray-600">
                ({team.role})
              </span>
              <h2 className="text-6xl font-bold text-secondary pt-5"
              data-aos="fade-up"
              data-aos-delay="100">
                {team.name}
              </h2>
              <p className="text-gray-600 text-lg font-extralight"
              data-aos="fade-up"
              data-aos-delay="200">
                {team.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
