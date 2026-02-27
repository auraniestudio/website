import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="relative z-10 bg-dark-surface border-t border-dark-border mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Auranie Studio" className="h-9 w-auto" />
              <span className="font-sans text-sm font-medium text-light tracking-[0.15em] uppercase">
                Auranie <br />
                <span className="text-amber-light">Studio</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-light/50 max-w-xs">
              Crafting elevated experiences through minimal design and thoughtful strategy.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
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
