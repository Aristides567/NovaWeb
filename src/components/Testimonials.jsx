import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '../data/storeData.js'
import { IconStar } from './Icons.jsx'
import { classNames } from '../utils/classNames.js'

function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 7000)
    return () => clearInterval(id)
  }, [])

  const goTo = (index) => {
    setCurrent((index + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const testimonial = TESTIMONIALS[current]

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-purple-50/30 via-white to-slate-50 dark:from-purple-950/20 dark:via-slate-950 dark:to-slate-900 py-16 sm:py-20 lg:py-24 transition-colors duration-300"
      aria-label="Testimonios de clientes"
    >
      {/* Overlays decorativos */}
      <div className="absolute top-20 -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-500/15 to-transparent blur-3xl opacity-60 dark:opacity-40" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-gradient-to-bl from-purple-500/15 to-transparent blur-3xl opacity-50 dark:opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.05),_transparent_50%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 flex items-center justify-between gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl transition-colors">
              Historias de crecimiento real
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base transition-colors">
              Marcas de todo tipo utilizan CommerceX para ofrecer experiencias de compra memorables.
            </p>
          </div>
          <div className="hidden items-center gap-1 text-xs text-slate-600 dark:text-slate-400 sm:flex transition-colors">
            <IconStar />
            <span className="font-medium text-slate-900 dark:text-slate-100 transition-colors">4.9</span>
            <span>en satisfacción promedio</span>
          </div>
        </motion.div>
        <article
          className="relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-slate-900/80 dark:to-slate-800/60 p-6 shadow-2xl shadow-brand-500/10 dark:shadow-brand-500/20 backdrop-blur-xl transition-all hover:shadow-3xl hover:shadow-brand-500/20 dark:hover:shadow-brand-500/30 sm:p-8"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-300">Testimonio</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <p className="mt-4 text-sm text-slate-900 dark:text-slate-100 sm:text-lg transition-colors">"{testimonial.quote}"</p>
              <div className="mt-6 flex flex_wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50 transition-colors">{testimonial.name}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 transition-colors">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <span className="hidden text-xs text-slate-600 dark:text-slate-400 sm:inline transition-colors">Navega entre historias</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 transition-colors"
                aria-label="Ver testimonio anterior"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 transition-colors"
                aria-label="Ver siguiente testimonio"
              >
                ›
              </button>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-1" aria-hidden="true">
            {TESTIMONIALS.map((_, index) => (
              <span
                key={index}
                className={classNames(
                  'h-1.5 w-5 rounded-full transition',
                  current === index ? 'bg-brand-500' : 'bg-slate-300 dark:bg-slate-700',
                )}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
