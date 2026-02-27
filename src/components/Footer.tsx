import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-light text-amber-light font-serif text-base font-medium">
                A
              </span>
              <span className="font-sans text-sm font-medium text-light tracking-[0.15em] uppercase">
                Auranie Studio
              </span>
            </Link>
            <p className="mt-4 text-sm text-light/50 max-w-xs">
              Crafting elevated experiences through minimal design and thoughtful strategy.
            </p>
          </div>
          <nav className="flex flex-wrap gap-8">
            <Link to="/services" className="text-sm text-light/60 hover:text-amber-light transition-colors tracking-wide">
              Services
            </Link>
            <Link to="/about" className="text-sm text-light/60 hover:text-amber-light transition-colors tracking-wide">
              About
            </Link>
            <Link to="/projects" className="text-sm text-light/60 hover:text-amber-light transition-colors tracking-wide">
              Projects
            </Link>
            <Link to="/contact" className="text-sm text-light/60 hover:text-amber-light transition-colors tracking-wide">
              Contact
            </Link>
          </nav>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-dark-border text-sm text-light/40"
        >
          © {new Date().getFullYear()} Auranie Studio. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}
