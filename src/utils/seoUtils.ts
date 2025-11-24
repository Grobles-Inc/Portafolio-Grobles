// Utilidades para SEO

export interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const urlEntries = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}

export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0]
}

export const getCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://www.groblestudio.com/'
  return `${baseUrl}${path}`
}

export const generateStructuredData = (type: string, data: Record<string, unknown>) => {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  }
}

// Optimización de imágenes para SEO
export const optimizeImageUrl = (url: string, width?: number, height?: number): string => {
  if (url.includes('unsplash.com')) {
    const params = new URLSearchParams()
    if (width) params.append('w', width.toString())
    if (height) params.append('h', height.toString())
    params.append('auto', 'format')
    params.append('fit', 'crop')
    params.append('q', '80')
    
    return `${url}&${params.toString()}`
  }
  return url
}

// Validar meta tags
export const validateMetaTags = (title: string, description: string): { valid: boolean, errors: string[] } => {
  const errors: string[] = []
  
  if (title.length < 30 || title.length > 60) {
    errors.push('El título debe tener entre 30 y 60 caracteres')
  }
  
  if (description.length < 120 || description.length > 160) {
    errors.push('La descripción debe tener entre 120 y 160 caracteres')
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
} 