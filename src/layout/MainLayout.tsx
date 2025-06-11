import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function MainLayout() {
  const location = useLocation()

  useEffect(() => {
    AOS.refresh()
  }, [location.pathname])

  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
