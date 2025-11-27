import { motion } from 'framer-motion'
import { PRICING_PLANS } from '../data/storeData.js'
import { IconCheck } from './Icons.jsx'
import { classNames } from '../utils/classNames.js'

function Pricing() {
  return (
    <section
      id="pricing-section"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/20 py-16 sm:py-20 lg:py-24 transition-colors duration-300"
      aria-label="Planes de precios"
    >
      {/* Overlays decorativos */}
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-brand-400/20 via-purple-400/15 to-transparent blur-3xl opacity-60 dark:opacity-40" aria-hidden="true" />
      <div className="absolute top-1/2 -right-48 h-[32rem] w-[32rem] rounded-full bg-gradient-to-bl from-purple-500/15 via-pink-500/10 to-transparent blur-3xl opacity-50 dark:opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(192,38,211,0.05),_transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl transition-colors">
            Planes pensados para cada etapa
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base transition-colors">
            Comienza en minutos con un plan flexible y escala solo cuando tu negocio lo necesite.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <motion.article
              key={plan.name}
              className={classNames(
                'relative rounded-2xl p-6 backdrop-blur-sm transition-all hover:scale-[1.02] ' +
                (plan.highlight
                  ? 'border-2 border-brand-500/80 bg-gradient-to-br from-brand-50/90 to-purple-50/90 dark:from-brand-950/50 dark:to-purple-950/50 shadow-2xl shadow-brand-500/40 dark:shadow-brand-500/50 ring-2 ring-brand-500/20'
                  : 'border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-900/70 dark:to-slate-800/50 shadow-lg hover:shadow-xl hover:shadow-brand-500/10'),
              )}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              {plan.highlight && (
                <p className="mb-3 inline-flex max-w-max items-center rounded-full bg-brand-600/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-300">
                  Más popular
                </p>
              )}
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50 transition-colors">{plan.name}</h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 transition-colors">{plan.description}</p>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-slate-900 dark:text-slate-50 transition-colors">{plan.price}</span>
                <span className="text-xs text-slate-600 dark:text-slate-400 transition-colors">{plan.period}</span>
              </p>
              <ul className="mt-4 flex-1 space-y-2 text-xs text-slate-700 dark:text-slate-200 transition-colors">
                {plan.features.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <IconCheck />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                type="button"
                className={classNames(
                  plan.highlight
                    ? 'mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-brand-500/50 transition-all hover:shadow-2xl hover:shadow-brand-500/60 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'
                    : 'mt-6 inline-flex w-full items-center justify-center rounded-full border-2 border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 transition-all hover:border-brand-500 hover:bg-brand-50/80 dark:hover:bg-brand-950/40 hover:text-brand-600 dark:hover:text-brand-100 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500',
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
              >
                Elegir este plan
              </motion.button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
