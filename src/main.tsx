import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'
import MainLayout from './layout/MainLayout.tsx'
import Services from './pages/Services.tsx'
import About from './pages/About.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/contact', element: <Contact /> },
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
