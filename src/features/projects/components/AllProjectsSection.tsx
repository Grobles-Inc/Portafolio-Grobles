import { projectsData } from "../data/projectsData";

export default function AllProjectsSection() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projectsData.map((project) => (
          <div key={project.id} className="pb-12 md:sticky top-0 z-0 bg-[#f8f8f8]">
            <div className="relative overflow-hidden group cursor-pointer">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[350px] md:h-[650px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <h3 className="text-primary text-center text-4xl md:text-5xl font-bold mb-2">{project.title}</h3>
                </div>
              </a>
            </div>
            <div className="flex justify-between items-center pt-8 mx-10 relative z-10">
              <h3 className="text-secondary text-3xl font-bold">{project.title}</h3>
              <span className="text-gray-700 text-[20px] ">({project.date})</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
