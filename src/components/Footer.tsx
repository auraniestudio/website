import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="relative z-10 bg-black border-t border-dark-border mt-10 py-8 lg:mt-16 lg:py-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-0 pb-8 lg:py-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-row lg:justify-between gap-10 lg:gap-20">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center justify-center gap-3 lg:justify-start">
              <img src="/logo.png" alt="Web Design & Development Studio" className="h-10 w-auto" />
              <span className="font-sans text-sm font-medium text-light tracking-[0.15em] uppercase">
                Auranie <br />
                <span className=" text-sm text-amber-light">Studio</span>
              </span>
              
            </Link>
            <p className="mt-4 text-sm text-light/70">
            Crafting custom websites driven by strategy.
Driven by vision. Built with purpose.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <SocialLinks />
            </div>
          </div>
          
          <nav className="flex flex-row flex-wrap justify-center gap-6 lg:flex-col lg:gap-4 lg:justify-start lg:items-end">
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
            <Link to="/qa" className="text-sm text-light/60 hover:text-amber-light transition-colors tracking-wide">
              Q&A
            </Link>
          </nav>
          <div className="flex flex-col gap-3 text-sm items-center lg:items-center">
            <span className="font-sans font-medium text-light tracking-[0.15em] uppercase text-amber-light">Contact</span>
            <a href="mailto:auranie.studio@gmail.com" className="text-light/60 hover:text-amber-light transition-colors">
              auranie.studio@gmail.com
            </a>
            <span className="text-light/60"> Wellington, NZ</span>
            <span className="text-light/60">Worldwide • Remote</span>
            <span className="text-amber-light font-medium">Available for projects</span>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t border-dark-border text-xs text-light/50 text-center lg:mt-8 lg:pt-8 lg:text-sm"
        >
          © {new Date().getFullYear()} Auranie Studio. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}
