import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'



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
    <div className="min-h-screen" data-theme="grobles">
      <NavBar />
      <div>
        <div className="min-h-screen flex flex-col">
          <main className="md:pt-36 pt-20 flex-1 ">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
