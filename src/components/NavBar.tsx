import logo from '/logoGroblesBlack.png'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import { useState, useEffect } from 'react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <main className="flex justify-between items-center max-w-6xl mx-auto bg-primary m-3 p-2 lg:p-2 rounded-full shadow-xl">
        <a href="/">
          <div className="flex items-center gap-2 pl-3">
            <img src={logo} alt="Logo" className="w-27 h-10 md:w-fit md:h-12" />
          </div>
        </a>

        <div className="hidden lg:flex">
          <ul className="flex gap-10 text-secondary">
            {[
              { to: "/", label: "Inicio" },
              { to: "/about", label: "Nosotros" },
              { to: "/services", label: "Servicios" },
              { to: "/projects", label: "Proyectos" },
            ].map(({ to, label }) => (
              <li key={to} className="uppercase text-gray-700 relative group cursor-pointer">
                <Link to={to} className="relative z-10 transition-colors duration-300">
                  {label}
                </Link>
                <span
                  className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-secondary
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{
                    display: 'block',
                    borderRadius: '2px'
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button>
              Contacto
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-secondary p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </main>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="bg-primary mx-3 mt-2 rounded-3xl shadow-xl overflow-hidden">
          <ul className="flex flex-col text-secondary">
            <li className="border-b border-secondary/10 uppercase  text-xl">
              <Link
                to="/"
                className="block px-6 py-4 hover:bg-secondary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li className="border-b border-secondary/10 uppercase  text-xl">
              <Link
                to="/about"
                className="block px-6 py-4 hover:bg-secondary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li className="border-b border-secondary/10 uppercase  text-xl">
              <Link
                to="/services"
                className="block px-6 py-4 hover:bg-secondary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li className="border-b border-secondary/10 uppercase text-xl ">
              <Link
                to="/projects"
                className="block px-6 py-4 hover:bg-secondary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
            </li>
            <li
            className=' text-xl'>
              <Link
                to="/contact"
                className="block px-6 py-4 hover:bg-secondary/10 transition-color"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-full">
                  <Button>
                    Contacto
                  </Button>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
