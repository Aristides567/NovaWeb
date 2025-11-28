import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { PRODUCTS } from '../data/storeData.js'
import ProductCard from '../components/ProductCard.jsx'

function CatalogPage({ onAddToCart }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todas')
  const [view, setView] = useState('grid')

  const categories = useMemo(
    () => ['Todas', ...Array.from(new Set(PRODUCTS.map((p) => p.category)))],
    [],
  )

  const filtered = useMemo(
    () =>
      PRODUCTS.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category === 'Todas' || product.category === category
        return matchesSearch && matchesCategory
      }),
    [search, category],
  )

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-10 sm:py-12 lg:py-16 transition-colors duration-300">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-brand-500/10 via-purple-500/5 to-transparent blur-3xl opacity-60 dark:opacity-40" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl opacity-50 dark:opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(192,38,211,0.03),_transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.header
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-500 dark:text-brand-300 transition-colors">Catálogo</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl transition-colors">
              Explora los módulos de CommerceX
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-300 transition-colors">
              Combina suscripciones, módulos adicionales y servicios para diseñar la solución perfecta para tu
              operación.
            </p>
          </div>
          <motion.div
            className="flex items-center gap-2 self-start rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/60 p-1 text-xs text-slate-700 dark:text-slate-300 transition-colors"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          >
            <button
              type="button"
              onClick={() => setView('grid')}
              className={
                'rounded-full px-3 py-1 transition-colors ' +
                (view === 'grid' ? 'bg-slate-800 dark:bg-slate-700 text-slate-50' : 'hover:bg-slate-200 dark:hover:bg-slate-800/60')
              }
            >
              Vista en cuadrícula
            </button>
            <button
              type="button"
              onClick={() => setView('list')}
              className={
                'rounded-full px-3 py-1 transition-colors ' +
                (view === 'list' ? 'bg-slate-800 dark:bg-slate-700 text-slate-50' : 'hover:bg-slate-200 dark:hover:bg-slate-800/60')
              }
            >
              Vista en lista
            </button>
          </motion.div>
        </motion.header>

        <motion.div
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <label className="relative block w-full sm:max-w-xs">
            <span className="sr-only">Buscar productos</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar por nombre..."
              className="rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/80 px-4 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors"
            />
          </label>
          <div className="flex flex-wrap gap-2 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={
                  'rounded-full border px-3 py-1 transition ' +
                  (category === cat
                    ? 'text-brand-600 dark:text-brand-100'
                    : 'text-slate-700 dark:text-slate-300')
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-8">
          {filtered.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/60 p-6 text-sm text-slate-700 dark:text-slate-300 transition-colors">
              No encontramos resultados para tu búsqueda. Intenta con otro término o categoría.
            </p>
          ) : view === 'grid' ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} layout="grid" />
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} layout="list" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
    </PageTransition>
  )
}

export default CatalogPage
