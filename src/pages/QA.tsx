import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageVideoBackground } from '../components/PageVideoBackground'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer web development, user-friendly design, performance optimization, and security and maintenance. From landing pages to full platforms, we build scalable, secure digital experiences.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timeline depends on scope. From a few weeks for a simple site to several months for larger platforms. We’ll give you a clear timeline after discussing your needs.',
  },
  {
    question: 'Do you work with clients remotely?',
    answer: 'Yes. We’re based in Wellington, NZ and work with clients worldwide. Remote collaboration is part of how we work.',
  },
  {
    question: 'How do we get started?',
    answer: 'Reach out via the Contact page or email. We’ll set up a call to understand your project and goals, then provide a proposal and next steps.',
  },
]

const blockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export function QA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <PageVideoBackground>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-24">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <p className="text-sm font-sans font-medium text-amber-light tracking-[0.3em] uppercase mb-4 mt-4">
            Q&A
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-light tracking-tight leading-[1.1]">
            Questions & Answers
          </h1>
          <p className="mt-6 text-lg text-light/60 font-light">
            Common questions about working with us. Can’t find what you need? Get in touch.
          </p>
        </motion.header>

        <ul className="space-y-0 max-w-3xl">
          {faqs.map((faq, i) => (
            <motion.li
              key={faq.question}
              custom={i}
              variants={blockVariants}
              initial="hidden"
              animate="visible"
              className="border-b border-dark-border"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left"
                aria-expanded={openIndex === i}
                aria-controls={`qa-answer-${i}`}
                id={`qa-question-${i}`}
              >
                <h2 className="font-serif text-xl sm:text-2xl text-light">
                  {faq.question}
                </h2>
                <span
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-amber-light/50 text-amber-light transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  aria-hidden
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`qa-answer-${i}`}
                    role="region"
                    aria-labelledby={`qa-question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <p className="text-light/70 text-base lg:text-lg leading-relaxed font-light pb-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </PageVideoBackground>
  )
}
