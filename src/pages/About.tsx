import { motion } from 'framer-motion'
import { PageVideoBackground } from '../components/PageVideoBackground'

const blockVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export function About() {
  return (
    <PageVideoBackground>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-28 pb-24">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-24"
      >
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-light tracking-tight">
          About
        </h1>
      </motion.header>

      <div className="space-y-20">
        <motion.section
          custom={0}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="font-serif text-2xl text-amber-light mb-4">Mission</h2>
          <p className="text-light/75 text-lg leading-relaxed font-light">
            We exist to create work that feels both timeless and of the moment—design that respects
            the viewer’s intelligence and rewards attention. Every project is an opportunity to
            refine, simplify, and elevate.
          </p>
        </motion.section>

        <motion.section
          custom={1}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="font-serif text-2xl text-amber-light mb-4">Vision</h2>
          <p className="text-light/75 text-lg leading-relaxed font-light">
            We believe the best brands are built on restraint and intention. Our vision is a world
            where premium experiences are defined by clarity, craftsmanship, and quiet confidence—
            not noise.
          </p>
        </motion.section>

        <motion.section
          custom={2}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
          className="pt-12 border-t border-dark-border"
        >
          <p className="text-light/50 text-base font-light italic">
            Auranie Studio works with select clients across fashion, lifestyle, and culture—united
            by a shared appreciation for minimalism and lasting quality.
          </p>
        </motion.section>
      </div>
      </div>
    </PageVideoBackground>
  )
}
