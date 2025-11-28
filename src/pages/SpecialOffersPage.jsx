import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { SPECIAL_OFFERS } from '../data/storeData.js'
import { IconStar } from '../components/Icons.jsx'

function SpecialOffersPage({ onAddToCart }) {
  const [category, setCategory] = useState('Todas')
  const [timeLeft, setTimeLeft] = useState({})

  const categories = useMemo(
    () => ['Todas', ...Array.from(new Set(SPECIAL_OFFERS.map((p) => p.category)))],
    [],
  )

  const filtered = useMemo(
    () => SPECIAL_OFFERS.filter((offer) => category === 'Todas' || offer.category === category),
    [category],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const times = {}
      SPECIAL_OFFERS.forEach((offer) => {
        const end = new Date(offer.endsAt).getTime()
        const diff = end - now
        if (diff > 0) {
          times[offer.id] = {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((diff % (1000 * 60)) / 1000),
          }
        }
      })
      setTimeLeft(times)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50/50 via-white to-orange-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-red-950/20 py-10 sm:py-12 lg:py-16 transition-colors duration-300">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-red-500/10 via-orange-500/5 to-transparent blur-3xl opacity-60 dark:opacity-40" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-orange-500/10 to-transparent blur-3xl opacity-50 dark:opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.03),_transparent_70%)]" aria-hidden="true" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.header
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-gradient-to-r from-red-50/90 to-orange-50/90 dark:from-red-950/40 dark:to-orange-950/40 px-4 py-2 text-xs font-medium text-red-700 dark:text-red-300 backdrop-blur-md shadow-lg">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
              <span>Ofertas por tiempo limitado</span>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-red-800 to-slate-900 dark:from-slate-50 dark:via-red-300 dark:to-slate-50 bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
              Ofertas Especiales
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Aprovecha descuentos exclusivos en nuestros mejores productos y servicios. ¡No dejes pasar estas oportunidades!
            </p>
          </motion.header>

          <motion.div
            className="mt-8 flex justify-center flex-wrap gap-2 text-xs"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={
                  'rounded-full border px-4 py-2 transition-all ' +
                  (category === cat
                    ? 'border-red-500 bg-red-500 text-white shadow-lg shadow-red-500/30'
                    : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/30')
                }
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((offer, index) => (
              <motion.article
                key={offer.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-slate-900/80 dark:to-slate-800/60 shadow-lg hover:shadow-xl hover:shadow-red-500/20 dark:hover:shadow-red-500/30 transition-all"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-3 right-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                  -{offer.discount}%
                </div>

                <div className="aspect-video overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1 text-xs text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStar key={i} filled={i < Math.floor(offer.rating)} />
                    ))}
                    <span className="ml-1 text-slate-600 dark:text-slate-400">({offer.rating})</span>
                  </div>

                  <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-50 line-clamp-2">
                    {offer.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {offer.description}
                  </p>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">${offer.price}</span>
                    <span className="text-sm text-slate-500 line-through">${offer.originalPrice}</span>
                  </div>

                  {timeLeft[offer.id] && (
                    <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                      <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-2">
                        <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{timeLeft[offer.id].days}</div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400">Días</div>
                      </div>
                      <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-2">
                        <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{timeLeft[offer.id].hours}</div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400">Horas</div>
                      </div>
                      <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-2">
                        <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{timeLeft[offer.id].minutes}</div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400">Min</div>
                      </div>
                      <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-2">
                        <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{timeLeft[offer.id].seconds}</div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400">Seg</div>
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => onAddToCart && onAddToCart(offer)}
                    className="mt-4 w-full rounded-full bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-red-500/50 transition-all hover:shadow-2xl hover:shadow-red-500/60 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                  >
                    Aprovechar oferta
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default SpecialOffersPage
