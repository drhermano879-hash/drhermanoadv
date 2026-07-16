import { useEffect } from 'react'

export interface OpenGraphMeta {
  title?: string
  description?: string
  url?: string
  image?: string
  type?: string
}

export interface TwitterMeta {
  card?: string
  title?: string
  description?: string
  image?: string
}

export interface SEOProps {
  title: string
  description: string
  canonicalUrl: string
  robots?: string
  openGraph?: OpenGraphMeta
  twitter?: TwitterMeta
  schemas?: Record<string, any>[]
}

export function useSEO({
  title,
  description,
  canonicalUrl,
  robots = 'index, follow',
  openGraph,
  twitter,
  schemas = [],
}: SEOProps) {
  useEffect(() => {
    // ─── 1. Title ───
    document.title = title

    // Helper to get or create a meta tag
    const getOrCreateMeta = (attributeName: string, attributeValue: string): HTMLMetaElement => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attributeName, attributeValue)
        document.head.appendChild(meta)
      }
      return meta
    }

    // Helper to get or create a link tag
    const getOrCreateLink = (rel: string): HTMLLinkElement => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        document.head.appendChild(link)
      }
      return link
    }

    // ─── 2. Primary Meta Tags ───
    getOrCreateMeta('name', 'description').setAttribute('content', description)
    getOrCreateMeta('name', 'robots').setAttribute('content', robots)

    // ─── 3. Canonical Link ───
    getOrCreateLink('canonical').setAttribute('href', canonicalUrl)

    // ─── 4. OpenGraph Meta Tags ───
    const ogTitle = openGraph?.title || title
    const ogDesc = openGraph?.description || description
    const ogUrl = openGraph?.url || canonicalUrl
    const ogImg = openGraph?.image || 'https://hermanosousa.adv.br/og-image.jpg'
    const ogType = openGraph?.type || 'website'

    getOrCreateMeta('property', 'og:title').setAttribute('content', ogTitle)
    getOrCreateMeta('property', 'og:description').setAttribute('content', ogDesc)
    getOrCreateMeta('property', 'og:url').setAttribute('content', ogUrl)
    getOrCreateMeta('property', 'og:image').setAttribute('content', ogImg)
    getOrCreateMeta('property', 'og:type').setAttribute('content', ogType)
    getOrCreateMeta('property', 'og:locale').setAttribute('content', 'pt_BR')
    getOrCreateMeta('property', 'og:site_name').setAttribute('content', 'Hermano Sousa Advogados Associados')

    // ─── 5. Twitter Card Meta Tags ───
    const twCard = twitter?.card || 'summary_large_image'
    const twTitle = twitter?.title || ogTitle
    const twDesc = twitter?.description || ogDesc
    const twImg = twitter?.image || ogImg

    getOrCreateMeta('name', 'twitter:card').setAttribute('content', twCard)
    getOrCreateMeta('name', 'twitter:title').setAttribute('content', twTitle)
    getOrCreateMeta('name', 'twitter:description').setAttribute('content', twDesc)
    getOrCreateMeta('name', 'twitter:image').setAttribute('content', twImg)

    // ─── 6. Schema JSON-LD Injection ───
    const scriptElements: HTMLScriptElement[] = []

    schemas.forEach((schema, idx) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = `seo-schema-${idx}`
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)
      scriptElements.push(script)
    })

    // Clean up injected elements on component unmount / update
    return () => {
      scriptElements.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    }
  }, [title, description, canonicalUrl, robots, openGraph, twitter, schemas])
}
