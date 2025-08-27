import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/logoGrobles.png'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg top-0 z-50 fixed w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/" onClick={closeMenu}>
              <img src={Logo} alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition-colors duration-200 hover:bg-[#07e288] rounded-full px-4 py-2 ${isActive ? 'font-semibold bg-[#07e288]' : 'text-gray-700'
                    }`
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `transition-colors duration-200 hover:bg-[#07e288] rounded-full px-4 py-2 ${isActive ? 'font-semibold bg-[#07e288]' : 'text-gray-700'
                    }`
                  }
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `transition-colors duration-200 hover:bg-[#07e288] rounded-full px-4 py-2 ${isActive ? 'font-semibold bg-[#07e288]' : 'text-gray-700'
                    }`
                  }
                >
                  Servicios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `transition-colors duration-200 hover:bg-[#07e288] rounded-full px-4 py-2 ${isActive ? 'font-semibold bg-[#07e288]' : 'text-gray-700'
                    }`
                  }
                >
                  Proyectos
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="btn btn-lg border text-gray-800 hover:opacity-70 bg-[#07e288]  transition-all hover:bg-white hover:border-gray-800 hover:text-black duration-300 ease-in-out rounded-4xl px-6 py-2 font-bold"
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40 transition-all duration-300 ease-in-out transform ${isMenuOpen
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 -translate-y-4 invisible'
          }`}>
          <nav className="px-4 py-4">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block transition-colors duration-200 hover:bg-[#07e288] rounded-lg px-4 py-3 ${isActive ? 'font-semibold bg-[#07e288]' : 'text-gray-700'
                    }`
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block transition-colors duration-200 hover:bg-[#07e288] rounded-lg px-4 py-3 ${isActive ? 'font-semibold bg-[#07e288]' : 'text-gray-700'
                    }`
                  }
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block transition-colors duration-200 hover:bg-[#07e288] rounded-lg px-4 py-3 ${isActive ? 'font-semibold bg-[#07e288]' : 'text-gray-700'
                    }`
                  }
                >
                  Servicios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block transition-colors duration-200 hover:bg-[#07e288] rounded-lg px-4 py-3 ${isActive ? 'font-semibold bg-[#07e288]' : 'text-gray-700'
                    }`
                  }
                >
                  Proyectos
                </NavLink>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block text-center bg-[#07e288] text-gray-800 hover:bg-yellow-400 transition-all duration-300 ease-in-out rounded-lg px-4 py-3 font-semibold"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
