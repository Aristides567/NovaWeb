import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQS } from '../data/storeData.js'
import { classNames } from '../utils/classNames.js'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section
      className="relative overflow-hidden bg-white dark:bg-slate-950 py-16 sm:py-20 lg:py-24 transition-colors duration-300"
      aria-label="Preguntas frecuentes"
    >
      <div className="absolute -top-24 right-1/3 h-80 w-80 rounded-full bg-gradient-to-bl from-blue-500/10 to-transparent blur-3xl opacity-50" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl transition-colors">Preguntas frecuentes</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base transition-colors">
            Todo lo que necesitas saber sobre cómo CommerceX se integra en tu operación actual.
          </p>
        </motion.div>
        <dl className="mt-10 space-y-4" role="list">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <motion.div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/70 shadow-sm transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3>
                  <motion.button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-slate-900 dark:text-slate-50 transition-colors hover:bg-slate-100 dark:hover:bg-slate-900/90"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{item.question}</span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 transition-colors">
                      {isOpen ? '-' : '+'}
                    </span>
                  </motion.button>
                </h3>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      className="border-t border-slate-200 dark:border-slate-800 px-5 py-4 text-sm text-slate-600 dark:text-slate-300 transition-colors"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}

export default FAQ
