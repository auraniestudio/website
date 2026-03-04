import { useRef, useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PageVideoBackground } from '../components/PageVideoBackground'

const projects = [
  { id: 1, title: 'Cake', category: 'Brand Showcase', image: '/public/projects/cake.png', url: 'https://delighttscakery.vercel.app/' },
  { id: 2, title: 'Atelier No. 7', category: 'Digital Experience', image: '/projects/project-2.jpg', url: 'https://example.com' },
  { id: 3, title: 'Sundial', category: 'Art Direction', image: '/projects/project-3.jpg', url: 'https://example.com' },
  { id: 4, title: 'Meridian', category: 'Brand Strategy', image: '/projects/project-4.jpg', url: 'https://example.com' },
  { id: 5, title: 'Vault', category: 'Visual Identity', image: '/projects/project-5.jpg', url: 'https://example.com' },
  { id: 6, title: 'Horizon', category: 'Campaign', image: '/projects/project-6.jpg', url: 'https://example.com' },
]

const ArrowLeft = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)
const ArrowRight = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToIndex = useCallback((index: number) => {
    const i = Math.max(0, Math.min(index, projects.length - 1))
    setCurrentIndex(i)
    const el = scrollRef.current?.children[i] as HTMLElement | undefined
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const width = el.offsetWidth
      const i = Math.round(el.scrollLeft / width)
      setCurrentIndex(Math.max(0, Math.min(i, projects.length - 1)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <PageVideoBackground videoSrc="/abstract.mp4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-24">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-20"
        >
           <p className="text-sm font-sans font-medium text-amber-light tracking-[0.3em] uppercase mb-4 mt-4">
             OUR WORK
            </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-light tracking-tight">
            Projects
          </h1>
          <p className="mt-6 text-lg text-light/60 font-light">
            A selection of our recent works, each project built on clarity and craft.
          </p>
        </motion.header>

        <div className="relative -mx-6 sm:mx-0">
          {/* Mobile: slider arrows */}
          <button
            type="button"
            onClick={() => scrollToIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label="Previous project"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-amber-light/50 bg-dark/80 text-amber-light shadow-lg transition-opacity disabled:opacity-30 disabled:pointer-events-none sm:hidden"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(currentIndex + 1)}
            disabled={currentIndex === projects.length - 1}
            aria-label="Next project"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-amber-light/50 bg-dark/80 text-amber-light shadow-lg transition-opacity disabled:opacity-30 disabled:pointer-events-none sm:hidden"
          >
            <ArrowRight />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 scrollbar-hide sm:grid sm:grid-cols-2 sm:overflow-visible sm:snap-none sm:px-0 lg:grid-cols-3 lg:gap-8"
          >
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative flex-shrink-0 w-[85vw] max-w-sm snap-center aspect-[16/10] bg-dark-surface border border-dark-border rounded-sm overflow-hidden sm:w-auto sm:flex-shrink sm:aspect-[4/3]"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
                className="absolute inset-0 z-10"
              />
              {/* Project image: B&W by default, color on hover */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* External link icon - top right (decorative, whole card is clickable) */}
              <span
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-amber-light/50 bg-dark/60 text-amber-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
              {/* Title & category - bottom */}
              <div className="absolute inset-0 flex items-end p-6 lg:p-8 pointer-events-none">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-amber-light text-sm font-medium tracking-wide">
                    {project.category}
                  </span>
                  <h2 className="font-serif text-2xl lg:text-3xl text-light mt-1">
                    {project.title}
                  </h2>
                </div>
              </div>
            </motion.article>
          ))}
          </div>
        </div>
      </div>
    </PageVideoBackground>
  )
}
