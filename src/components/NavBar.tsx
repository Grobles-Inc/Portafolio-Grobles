import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/logoGrobles.png'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY <= 10) {
        setIsVisible(true)
      } else {
        // Hide header when scrolling down
        setIsVisible(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    {
      to: '/',
      label: 'Inicio'
    },

    {
      to: '/about',
      label: 'Nosotros'
    },

    {
      to: '/services',
      label: 'Servicios'
    },
    {
      to: '/projects',
      label: 'Proyectos'
    },

  ]

  return (
    <header className={`bg-[#07e288] backdrop-blur-md top-0 z-50 fixed w-full transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} >
      <div className="container mx-auto p-2" data-aos="fade-down">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/" onClick={closeMenu}>
              <img src={Logo} alt="Logo" className="md:h-20 h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `btn bg-transparent border-transparent text-black text-[16px] font-bold rounded-full hover:bg-white ${isActive ? ' bg-white text-black' : 'text-black'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="btn btn-lg btn-neutral border text-white hover:opacity-70   transition-all duration-300 ease-in-out rounded-4xl px-6 py-2 font-bold hover:bg-transparent hover:text-black"
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
        <div className={`lg:hidden absolute h-[100vh] top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40 transition-all duration-300 ease-in-out transform ${isMenuOpen
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 -translate-y-4 invisible'
          }`}>
          <nav className="px-4 py-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `btn w-full  justify-start rounded-full px-4 py-3 ${isActive ? 'btn-outline' : 'btn-ghost'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-8 ">
              <Link
                to="/contact"
                className="btn btn-lg border w-full text-white hover:opacity-70 bg-[#07e288]  transition-all hover:bg-white hover:border-gray-800 hover:text-black duration-300 ease-in-out rounded-4xl px-6 py-2 font-bold"
              >
                Contáctanos
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
