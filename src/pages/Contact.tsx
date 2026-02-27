import { useState } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-2xl mx-auto px-6 lg:px-12 pt-28 pb-24">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-light tracking-tight">
          Contact
        </h1>
        <p className="mt-6 text-lg text-light/60 font-light">
          Share your vision. We’d love to hear from you.
        </p>
      </motion.header>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 text-center"
        >
          <p className="font-serif text-2xl text-light">Thank you.</p>
          <p className="mt-2 text-light/60">We’ll be in touch soon.</p>
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border border-amber-light text-light font-sans text-xs font-medium tracking-[0.2em] uppercase rounded-sm hover:bg-amber-light/10 transition-colors duration-300"
          >
            Send message
          </motion.button>
        </motion.form>
      )}
    </div>
  )
}
