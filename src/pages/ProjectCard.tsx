import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projectsData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const { image, liveDemo, title, description, duration } = project;
  return (
    <div className="relative group bg-white rounded-3xl shadow-md flex flex-col w-full max-w-[400px] mx-auto min-h-[400px]  overflow-hidden">
      {/* Header background image area */}
      <div className="relative h-44 w-full flex items-start justify-between bg-gray-100 group-hover:scale-105 transition-all duration-300" style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>

      </div>
      {/* Title and tag */}
      <div className=" flex flex-col mt-10 gap-4 items-start px-6">
        <div className="flex items-center w-full mb-2">
          <h3 className="md:text-xl text-lg font-bold text-gray-900 leading-tight flex-1 uppercase">{title}</h3>
          <span className="bg-secondary text-primary text-xs px-3 py-1 rounded-full font-medium ml-2 whitespace-nowrap">{duration}</span>
        </div>
        {/* Description */}
        <p className=" md:text-sm text-xs line-clamp-3">
          {description}
        </p>
        {/* Button and stats */}
        <div className="flex items-center justify-end gap-2 w-full ">
          <Link
            className="bg-primary text-secondary rounded-full border border-transparent px-3 py-2 gap-3 flex items-center font-bold hover:bg-transparent hover:border-primary hover:text-primary transition duration-500 ease-in-out"
            to={liveDemo || ''}
            target="_blank"
          >
            Ver Demo
            <ExternalLink size={14} />
          </Link>


        </div>
      </div>
    </div>
  );
} 