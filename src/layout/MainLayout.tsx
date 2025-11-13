import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'



export default function MainLayout() {
  const location = useLocation()

  useEffect(() => {


    AOS.init({
      duration: 1000,
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
      <NavBar />
      <div>
        <main className="flex-1 pt-20">
          <Outlet />
          <CallToAction />
          <Footer />
        </main>
      </div>
    </div>
  )
}
