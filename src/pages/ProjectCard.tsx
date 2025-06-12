import { Link } from "react-router-dom";

interface ProjectCardProps {
  image: string;
  demoUrl: string;
  title: string;
  description: string;
  featuresLength: number;
  category: string;
  onButtonClick?: () => void;
}

export default function ProjectCard({
  image,
  demoUrl,
  title,
  description,
  featuresLength,
  onButtonClick,
}: ProjectCardProps) {

  return (
    <div className="relative group bg-white rounded-3xl shadow-md flex flex-col w-full max-w-[400px] mx-auto min-h-[400px] border border-gray-300 overflow-hidden">
      {/* Header background image area */}
      <div className="relative h-44 w-full flex items-start justify-between bg-gray-100 group-hover:scale-105 transition-all duration-300" style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>

      </div>
      {/* Title and tag */}
      <div className=" flex flex-col mt-10 gap-4 items-start px-6">
        <div className="flex items-center w-full mb-2">
          <h3 className="md:text-xl text-lg font-bold text-gray-900 leading-tight flex-1">{title}</h3>
          <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full font-medium ml-2 whitespace-nowrap">{featuresLength} features</span>
        </div>
        {/* Description */}
        <p className="text-gray-500  md:text-sm text-xs ">
          {description}...
        </p>
        {/* Button and stats */}
        <div className="flex items-center gap-2 w-full ">
          <Link
            className="btn btn-neutral pt-1 rounded-full"
            to={demoUrl}
            target="_blank"
          >
            Ver Demo
          </Link>
          <button
            className="btn btn-outline pt-1 rounded-full"
            onClick={onButtonClick}
          >
            Ver Detalles
          </button>

        </div>
      </div>
    </div>
  );
} 