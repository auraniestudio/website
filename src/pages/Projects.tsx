import { motion } from 'framer-motion'
import { PageVideoBackground } from '../components/PageVideoBackground'

const projects = [
  { id: 1, title: 'Lumina', category: 'Brand Identity' },
  { id: 2, title: 'Atelier No. 7', category: 'Digital Experience' },
  { id: 3, title: 'Sundial', category: 'Art Direction' },
  { id: 4, title: 'Meridian', category: 'Brand Strategy' },
  { id: 5, title: 'Vault', category: 'Visual Identity' },
  { id: 6, title: 'Horizon', category: 'Campaign' },
]

export function Projects() {
  return (
    <PageVideoBackground>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-24">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-20"
      >
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-light tracking-tight">
          Projects
        </h1>
        <p className="mt-6 text-lg text-light/60 font-light">
          A selection of our recent work—each project built on clarity and craft.
        </p>
      </motion.header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-[4/3] bg-dark-surface border border-dark-border rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-end p-6 lg:p-8">
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
    </PageVideoBackground>
  )
}
