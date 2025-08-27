import { FileText, Laptop, ShoppingCart, Smartphone, Grid3X3 } from "lucide-react";

export const categories = [
  {
    name: "Todos",
    slug: "todos",
    icon: <Grid3X3 className="w-8 h-8" color="gray" />,
    iconColor: "gray",
    description: "Todos los proyectos disponibles en nuestro portfolio."
  },
  {
    name: "App",
    slug: "app",
    icon: <Smartphone className="w-8 h-8" color="green" />,
    iconColor: "green",
    description: "Aplicaciones móviles, incluyendo apps nativas para iOS y Android, aplicaciones híbridas con React Native, y PWAs (Progressive Web Apps)."
  },
  {
    name: "Sistema Web",
    slug: "sistema-web",
    icon: <Laptop className="w-8 h-8" color="red" />,
    iconColor: "red",
    description: "Sistemas de gestión empresarial, plataformas de administración de contenido, dashboards analíticos, etc."
  },
  {
    name: "Ecommerce",
    slug: "ecommerce",
    icon: <ShoppingCart className="w-8 h-8" color="blue" />,
    iconColor: "blue",
    description: "Plataformas de comercio electrónico efectivas y completas que abarcan desde tiendas online básicas hasta marketplaces complejos."
  },
  {
    name: "Landing Page",
    slug: "landing-page",
    icon: <FileText className="w-8 h-8" color="purple" />,
    iconColor: "purple",
    description: "Páginas de aterrizaje estratégicamente diseñadas para campañas de marketing, lanzamientos de productos, y conversión de leads. "
  }
]; 