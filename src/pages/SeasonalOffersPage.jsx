import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { SEASONAL_PRODUCTS } from '../data/storeData.js'
import { IconStar } from '../components/Icons.jsx'
import ProductModal from '../components/ProductModal.jsx'

function SeasonalOffersPage({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/20 py-10 sm:py-12 lg:py-16 transition-colors duration-300">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent blur-3xl opacity-60 dark:opacity-40" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-gradient-to-tl from-blue-500/10 to-transparent blur-3xl opacity-50 dark:opacity-30" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-gradient-to-r from-purple-50/90 to-blue-50/90 dark:from-purple-950/40 dark:to-blue-950/40 px-4 py-2 text-xs font-medium text-purple-700 dark:text-purple-300 backdrop-blur-md shadow-lg">
              <span className="text-base">🎉</span>
              <span>Temporada de ofertas especiales</span>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-purple-800 to-slate-900 dark:from-slate-50 dark:via-purple-300 dark:to-slate-50 bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
              Ofertas de Temporada
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Descubre productos y servicios especialmente diseñados para cada temporada del año. ¡Aprovecha mientras duren!
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-red-500 to-red-600 p-8 shadow-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 text-9xl opacity-10">🎄</div>
              <h2 className="text-2xl font-bold text-white">Black Friday</h2>
              <p className="mt-2 text-red-100">Descuentos de hasta 50% en productos seleccionados</p>
              <button className="mt-4 rounded-full bg-white px-6 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 transition">
                Ver ofertas
              </button>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-blue-500 to-blue-600 p-8 shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 text-9xl opacity-10">💻</div>
              <h2 className="text-2xl font-bold text-white">Cyber Monday</h2>
              <p className="mt-2 text-blue-100">Ofertas exclusivas en servicios digitales</p>
              <button className="mt-4 rounded-full bg-white px-6 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition">
                Explorar
              </button>
            </motion.div>
          </div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 text-center mb-8">
              Productos por Temporada
            </h2>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SEASONAL_PRODUCTS.map((product, index) => (
                <motion.article
                  key={product.id}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-slate-900/80 dark:to-slate-800/60 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  onClick={() => {
                    setSelectedProduct(product)
                    setIsModalOpen(true)
                  }}
                >
                  <div className="absolute top-3 left-3 z-10 rounded-full bg-purple-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    {product.season}
                  </div>

                  <div className="aspect-video overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1 text-xs text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconStar key={i} filled={i < Math.floor(product.rating)} />
                      ))}
                      <span className="ml-1 text-slate-600 dark:text-slate-400">({product.rating})</span>
                    </div>

                    <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-50 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-4">
                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">${product.price}</span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        onAddToCart && onAddToCart(product)
                      }}
                      className="mt-4 w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <ProductModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddToCart={(product) => {
              if (onAddToCart) {
                onAddToCart(product)
              }
            }}
          />

          <motion.div
            className="mt-16 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-900/70 dark:to-slate-800/50 p-8 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 text-center mb-6">
              ¿Por qué elegir nuestras ofertas de temporada?
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">Actualizaciones Constantes</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Nuevas ofertas cada temporada
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💎</div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">Productos Exclusivos</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Solo disponibles por tiempo limitado
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎁</div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">Mejores Precios</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Descuentos especiales de temporada
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default SeasonalOffersPage
