import { ArrowRight } from "lucide-react"

interface ButtonProps {
  children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="relative overflow-hidden px-5 py-2 text-xl text-gray-700 rounded-full cursor-pointer border border-gray-600 group transition-colors duration-500 hover:text-white"
    >
      <span
        className="
                absolute inset-0 
                bg-secondary
                translate-y-full
                group-hover:translate-y-0
                transition-transform duration-500 ease-in-out pointer-events-none
              "
      />
      <span
        className="relative z-10 transition-colors duration-500 flex items-center"
      >
        {children}
        <ArrowRight className="w-4 h-4 ml-2" />
      </span>
    </button>
  )
}
