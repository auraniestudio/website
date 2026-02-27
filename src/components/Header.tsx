import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

function NavLink({ path, label }: { path: string; label: string }) {
  const location = useLocation()
  const isActive = location.pathname === path

  return (
    <Link to={path} className="group relative py-2 text-xs font-medium text-light/90 tracking-[0.2em] uppercase inline-block">
      <span className="relative z-10">{label}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-amber-light origin-left"
        initial={false}
        animate={{ scaleX: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{ width: '100%' }}
      />
    </Link>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/70 backdrop-blur-md border-b border-dark-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20 lg:h-24">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-light text-amber-light font-serif text-lg font-medium">
            A
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-sans font-medium text-light tracking-[0.2em] uppercase">
              Auranie
            </span>
            <span className="text-sm font-sans font-medium text-light tracking-[0.2em] uppercase">
              Studio
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink key={item.path} path={item.path} label={item.label} />
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-light"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
            className="block w-6 h-px bg-light"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block w-6 h-px bg-light"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
            className="block w-6 h-px bg-light"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-dark-border/50 bg-dark-surface/98 backdrop-blur-md"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block font-sans text-sm text-light tracking-[0.15em] uppercase py-2"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
