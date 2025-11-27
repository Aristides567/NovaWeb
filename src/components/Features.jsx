import { motion } from 'framer-motion'
import { FEATURES } from '../data/storeData.js'

function Features() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-white dark:from-slate-950 dark:via-purple-950/10 dark:to-slate-950 py-16 sm:py-20 lg:py-24 transition-colors duration-300">
      {/* Overlays decorativos */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-purple-500/10 to-transparent blur-3xl opacity-50" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-brand-500/10 to-transparent blur-3xl opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(192,38,211,0.03),_transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl transition-colors">
            Todo lo que necesitas para vender sin fricción
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base transition-colors">
            Diseñado con una filosofía utility-first para construir experiencias rápidas, limpias y altamente
            personalizables sin escribir CSS a mano.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="group relative rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-900/70 dark:to-slate-800/50 p-6 backdrop-blur-sm shadow-lg transition-all hover:border-brand-500/60 hover:shadow-xl hover:shadow-brand-500/20 dark:hover:shadow-brand-500/30 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600/10 text-brand-400">
                <span className="text-lg" aria-hidden="true">
                  •
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 sm:text-base transition-colors">{feature.title}</h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 sm:text-sm transition-colors">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
