import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/features/home/index.tsx'
import Projects from './features/projects/index.tsx'
import Contact from './features/contact/index.tsx'
import MainLayout from './layout/MainLayout.tsx'
import Services from './features/services/index.tsx'
import About from './features/about/index.tsx'
import Logo from './features/Logo.tsx'

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
      { path: '/logo', element: <Logo /> }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
