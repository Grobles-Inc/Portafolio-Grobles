import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export default function MainLayout() {
  const location = useLocation()
  const smoothWrapperRef = useRef<HTMLDivElement>(null)
  const smoothContentRef = useRef<HTMLDivElement>(null)
  const smootherRef = useRef<ScrollSmoother | null>(null)

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    })

    smootherRef.current = smoother

    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })

    return () => {
      smoother.kill()
      smootherRef.current = null
    }
  }, [])

  useEffect(() => {
    if (smootherRef.current) {
      smootherRef.current.scrollTo(0, true)
    }
    
    AOS.refresh()
  }, [location.pathname])

  return (
    <div id="smooth-wrapper" ref={smoothWrapperRef} className="min-h-screen">
      <NavBar />
      <div id="smooth-content" ref={smoothContentRef}>
        <div className="min-h-screen bg-white flex flex-col">
          <main className="pt-20 flex-1 bg-white">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
