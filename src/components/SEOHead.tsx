import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
  type?: string
  structuredData?: object
}

export default function SEOHead({
  title = 'Grobles™ - Desarrollo de Software Innovador',
  description = 'Startup líder en desarrollo de software. Convertimos tus ideas en soluciones innovadoras con tecnología de punta y productos escalables.',
  keywords = 'desarrollo software, startup, tecnología, aplicaciones web, programación, soluciones digitales',
  ogImage = 'https://www.groblestudio.com/src/assets/logoGrobles.png',
  canonical,
  type = 'website',
  structuredData
}: SEOProps) {

  useEffect(() => {
    // Actualizar título
    document.title = title

    // Función para actualizar o crear meta tags
    const updateMetaTag = (name: string, content: string, isProperty?: boolean) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector) as HTMLMetaElement

      if (!meta) {
        meta = document.createElement('meta')
        if (isProperty) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)

    // Open Graph
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:image', ogImage, true)

    // Twitter Cards
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage)

    // Actualizar canonical URL si se proporciona
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
      updateMetaTag('og:url', canonical, true)
    }

    // Agregar structured data si se proporciona
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement
      if (!script) {
        script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(structuredData)
    }

  }, [title, description, keywords, ogImage, canonical, type, structuredData])

  return null
}