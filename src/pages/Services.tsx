import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageVideoBackground } from '../components/PageVideoBackground'

const services = [
  {
    title: 'Brand Strategy',
    description: 'Define your narrative and position in the market with clarity and intention.',
  },
  {
    title: 'Visual Identity',
    description: 'Distinctive logos, typography, and visual systems that endure.',
  },
  {
    title: 'Digital Experiences',
    description: 'Websites and digital products that feel refined and effortless.',
  },
  {
    title: 'Art Direction',
    description: 'Cohesive creative direction for campaigns, lookbooks, and content.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export function Services() {
  return (
    <PageVideoBackground>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-24">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-20"
      >
        <p className="text-sm font-sans font-medium text-amber-light tracking-[0.3em] uppercase">
              WHAT WE DO
            </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-light tracking-tight">
          OurServices
        </h1>
        <p className="mt-6 text-lg text-light/60 font-light">
          We offer a focused set of premium services designed to elevate brands and experiences.
        </p>
      </motion.header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {services.map((service, i) => (
          <motion.article
            key={service.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -4 }}
            className="group relative bg-dark-surface border border-dark-border rounded-sm p-8 lg:p-10 transition-colors duration-300 hover:border-amber-light/40"
          >
            <h2 className="font-serif text-2xl font-medium text-light">{service.title}</h2>
            <p className="mt-4 text-light/60 text-sm leading-relaxed">{service.description}</p>
            <span className="absolute bottom-8 left-8 h-px w-12 bg-amber-light origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </motion.article>
        ))}
      </div>
        <div className="mt-16 flex justify-center">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden px-8 py-4 border border-amber-light text-light font-sans text-xs font-medium tracking-[0.25em] uppercase rounded-sm transition-colors duration-300"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-amber-light transition-[width] duration-300 ease-out group-hover:w-full" aria-hidden />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-dark">
              Contact now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </PageVideoBackground>
  )
}
