import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type RouteMeta = { title: string; description: string }

const SITE_NAME = 'Auranie Studio'

const ROUTES: Record<string, RouteMeta> = {
  '/': {
    title: `Custom Websites & Web Development | ${SITE_NAME} | Wellington & Remote`,
    description:
      'Hire Auranie Studio for custom websites built with strategy — web design, development, performance, and security. Serving Wellington, NZ and clients worldwide.',
  },
  '/services': {
    title: `Website Design & Development Services | ${SITE_NAME}`,
    description:
      'Custom web development, user-friendly design, performance optimization, security, and maintenance. End-to-end websites for businesses ready to invest in quality.',
  },
  '/about': {
    title: `About ${SITE_NAME} | Web Designer & Developer`,
    description:
      'Web design and development studio focused on craft, clarity, and outcomes. Based in Wellington, New Zealand — available for remote projects globally.',
  },
  '/projects': {
    title: `Web Design Portfolio | Custom Websites | ${SITE_NAME}`,
    description:
      'Selected web design and development work — custom sites, responsive builds, and strategy-led digital experiences.',
  },
  '/contact': {
    title: `Hire a Web Developer | Contact ${SITE_NAME}`,
    description:
      'Start your website project: tell us about your business, timeline, and goals. Auranie Studio takes on custom web design and development engagements.',
  },
  '/qa': {
    title: `Web Design FAQ | Hiring a Developer | ${SITE_NAME}`,
    description:
      'Common questions about hiring a web developer, timelines, process, and what to expect when you work with Auranie Studio.',
  },
}

const DEFAULT_META: RouteMeta = ROUTES['/']!

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const attrName = attr === 'name' ? 'name' : 'property'
  let el = Array.from(document.head.querySelectorAll('meta')).find(
    (m) => m.getAttribute(attrName) === key,
  ) as HTMLMetaElement | undefined
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

function setJsonLd(json: object) {
  const id = 'seo-jsonld'
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(json)
}

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname in ROUTES ? pathname : '/'
    const meta = ROUTES[path] ?? DEFAULT_META
    const origin = window.location.origin
    const url = `${origin}${pathname === '/' ? '/' : pathname}`
    const imageUrl = `${origin}/logo.png`

    document.title = meta.title

    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'robots', 'index, follow')

    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('property', 'og:locale', 'en_NZ')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)
    upsertMeta('name', 'twitter:image', imageUrl)

    upsertCanonical(url)

    setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: origin,
          description: DEFAULT_META.description,
          publisher: { '@id': `${origin}/#business` },
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${origin}/#business`,
          name: SITE_NAME,
          url: origin,
          image: imageUrl,
          description: DEFAULT_META.description,
          areaServed: [
            { '@type': 'City', name: 'Wellington', containedInPlace: { '@type': 'Country', name: 'New Zealand' } },
            { '@type': 'Place', name: 'Worldwide' },
          ],
          serviceType: ['Web design', 'Web development', 'Custom website design', 'Website maintenance'],
        },
      ],
    })
  }, [pathname])

  return null
}
