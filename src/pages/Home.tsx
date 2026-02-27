import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: () => ({
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  }),
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(6,6,10,0.3) 0%, rgba(10,10,15,0.6) 40%, rgba(10,10,12,0.95) 100%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.p
            variants={item}
            className="text-xs font-sans font-medium text-amber-light tracking-[0.35em] uppercase"
          >
            Crafting Digital Excellence
          </motion.p>
          <motion.h1
            variants={item}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.08]"
          >
            <span className="text-light">Where Vision</span>
            <br />
            <span className="text-amber-light">Meets Design</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-light/75 max-w-xl mx-auto font-light tracking-wide leading-relaxed"
          >
            We transform ambitious ideas into stunning digital experiences that captivate, engage, and convert.
          </motion.p>
          <motion.div variants={item} className="pt-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border border-amber-light text-light font-sans text-xs font-medium tracking-[0.25em] uppercase rounded-sm hover:bg-amber-light/10 transition-colors duration-300"
            >
              Explore
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
