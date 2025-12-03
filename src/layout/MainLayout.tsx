import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import { useLenis } from '@/hooks/useLenis'
import ScrollToTop from '../components/ScrollToTop'

export default function MainLayout() {
  useLenis();
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 100,
    })
    return () => {
    }
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [location.pathname])

  return (
    <div data-theme="grobles">
      <ScrollToTop />
      <div>
        <NavBar />
        <main className="flex-1">
          <Outlet />
          <CallToAction />
          <Footer />
        </main>
      </div>
    </div>
  )
}
