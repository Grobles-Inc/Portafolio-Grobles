import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/logoGrobles.png'
import { Home, Users, FolderKanban, Settings } from 'lucide-react'

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
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY <= 10) {
        setIsVisible(true)
      } else {
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
      label: 'Inicio',
      icon: Home,
    },
    {
      to: '/about',
      label: 'Nosotros',
      icon: Users,
    },
    {
      to: '/services',
      label: 'Servicios',
      icon: Settings
    },
    {
      to: '/projects',
      label: 'Proyectos',
      icon: FolderKanban
    },
  ]

  return (
    <header className={`bg-primary backdrop-blur-md top-0 z-50 fixed w-full transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} >
      <div className="container mx-auto p-2" data-aos="fade-down">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" onClick={closeMenu}>
              <img src={Logo} alt="Logo" className="md:h-20 h-16 w-auto" />
            </Link>
          </div>

          <nav className="hidden lg:flex">
            <ul className="flex space-x-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `relative text-secondary border-transparent transition-all duration-300 ease-in-out text-[16px] px-4 py-2 font-extralight rounded-full flex items-center gap-2 group overflow-hidden ${isActive 
                        ? 'text-black' 
                        : 'text-white hover:text-secondary'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <link.icon className="h-6 w-6" />
                        {link.label}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ease-in-out ${
                          isActive 
                            ? 'w-full' 
                            : 'w-0 group-hover:w-full'
                        }`}></span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="bg-secondary border border-transparent text-primary hover:opacity-70 transition-all duration-300 ease-in-out rounded-4xl px-6 py-2 font-extralight hover:bg-transparent hover:text-white hover:border-secondary"
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

        <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div
            className={`fixed top-0 left-0 right-0 bg-primary shadow-lg z-50 transition-transform duration-300 ease-in-out rounded-b-3xl
              ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
            `}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-secondary">
              <Link to="/" onClick={closeMenu}>
                <img src={Logo} alt="Logo" className="h-14 w-auto" />
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                aria-label="Cerrar menú"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="px-4 py-6">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-secondary text-primary shadow-md'
                            : 'text-white hover:bg-secondary/20'
                        }`
                      }
                    >
                      <link.icon className="h-6 w-6" />
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-8">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="bg-secondary border border-transparent text-primary hover:opacity-80 transition-all duration-300 ease-in-out rounded-4xl px-8 py-3 font-bold hover:bg-transparent hover:text-white hover:border-secondary"
                >
                  Contáctanos
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
