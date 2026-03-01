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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          {/* Left: Picture with yellow hover accent */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative aspect-[4/5] lg:aspect-square"
          >
            {/* Yellow/amber thin outline - same size as picture, behind it, shifted right and down */}
            <span className="absolute inset-0 z-0 rounded-sm border-2 border-amber-light/20 translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5 pointer-events-none transition-all duration-300 ease-out group-hover:border-amber-light/50 group-hover:translate-x-4 group-hover:translate-y-4 lg:group-hover:translate-x-6 lg:group-hover:translate-y-6" />
            {/* Image container - on top of yellow block */}
            <div className="absolute inset-0 z-10 overflow-hidden rounded-sm border border-dark-border transition-all duration-300 ease-out group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] group-hover:-translate-y-1">
              <img
                src="/coding.jpg"
                alt="Auranie Studio"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="space-y-8">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-sans font-medium text-amber-light tracking-[0.3em] uppercase">
             OUR STORY
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-light tracking-tight leading-[1.1]">
            Crafting Digital
              <span className="block text-[#d4af37]">Masterpieces</span>
            </h1>
            </motion.header>

            <div className="space-y-16">
              <motion.section
                custom={0}
                variants={blockVariants}
                initial="hidden"
                animate="visible"
              >
               
                <p className="text-light/75 text-lg leading-relaxed font-light">
               

                "Driven by vision. Built with purpose." <br />

Auranie Studio is a digital studio focused on creating modern, secure, and scalable digital experiences for a fast-moving world. <br />
We believe technology should not only function, it should inspire.

We design and develop custom websites and digital solutions that combine clean aesthetics with strong technical architecture.
<br />
<br />
From web development and system design to cloud-ready infrastructure and security-focused thinking, our work is built for performance, reliability, and long-term growth.
<br />
Every project is approached with clarity, creativity, and intention, transforming ideas into impactful digital experiences.
<br />
<br />
<br />  
</p>
<p className="text-amber-light text-lg leading-relaxed font-light">
Based in Wellington
<br />

Built for everywhere.
                </p>
              </motion.section>

              {/* <motion.section
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
              </motion.section> */}

              <motion.section
                custom={2}
                variants={blockVariants}
                initial="hidden"
                animate="visible"
                className="pt-8 border-t border-dark-border"
              >
                <p className="text-light/50 text-base font-light italic">
                  Auranie Studio Founded in Wellington, New Zealand by Oranee Kasem, was built from a deep passion for Information Technology and Software Development, with continued advancement in Cloud Computing and Cybersecurity. The studio represents continuous growth, resilience, and a commitment to building forward.
                  <br />
                </p>
              </motion.section> 
            </div>
          </div>
        </div>
      </div>
    </PageVideoBackground>
  )
}
