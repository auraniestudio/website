import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageVideoBackground } from '../components/PageVideoBackground'
import { SocialLinks } from '../components/SocialLinks'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageVideoBackground videoSrc="/smoke.mp4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 lg:pt-48 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 lg:items-start">
          {/* Left: GET IN TOUCH + copy + CONNECT WITH US + social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="text-sm font-sans font-medium text-amber-light tracking-[0.3em] uppercase">
              GET IN TOUCH
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-light tracking-tight leading-[1.1]">
              Let's Create
              <span className="block text-[#d4af37]">Something Great</span>
            </h1>
            <p className="text-lg text-light/70 font-light leading-relaxed max-w-md">
              Ready to transform your digital presence? We'd love to hear about your project. Reach out and let's start a conversation.
            </p>
            <div className="pt-6">
              <p className="text-sm font-sans font-medium text-light/60 tracking-[0.2em] uppercase mb-4">
                CONNECT WITH US
              </p>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Right: contact form */}
          <div className="lg:pl-4">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-16"
              >
                <p className="font-serif text-2xl text-light">Thank you.</p>
                <p className="mt-2 text-light/60">We'll be in touch soon.</p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light/80 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-sm text-light placeholder-light/40 focus:outline-none focus:border-amber-light/60 focus:ring-1 focus:ring-amber-light/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light/80 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-sm text-light placeholder-light/40 focus:outline-none focus:border-amber-light/60 focus:ring-1 focus:ring-amber-light/30 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-sm text-light placeholder-light/40 focus:outline-none focus:border-amber-light/60 focus:ring-1 focus:ring-amber-light/30 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden px-8 py-4 border border-amber-light text-light font-sans text-xs font-medium tracking-[0.2em] uppercase rounded-sm transition-colors duration-300"
                >
                  <span className="absolute left-0 top-0 h-full w-0 bg-amber-light transition-[width] duration-300 ease-out group-hover:w-full" aria-hidden />
                  <span className="relative z-10 group-hover:text-dark">Send message</span>
                </motion.button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </PageVideoBackground>
  )
}
