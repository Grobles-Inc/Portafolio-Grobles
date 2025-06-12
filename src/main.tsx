import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'
import ProjectDetail from './pages/ProjectDetail.tsx'
import Contact from './pages/Contact.tsx'
import CategoryProjects from './pages/CategoryProjects.tsx'
import MainLayout from './layout/MainLayout.tsx'
import Services from './pages/Services.tsx'
import About from './pages/About.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          { path: '/', element: <Home /> },
          { path: '/projects', element: <Projects /> },
          { path: '/projects/category/:categorySlug', element: <CategoryProjects /> },
          { path: '/projects/:slug', element: <ProjectDetail /> },
          { path: '/about', element: <About /> },
          { path: '/services', element: <Services /> },
          { path: '/contact', element: <Contact /> },
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
