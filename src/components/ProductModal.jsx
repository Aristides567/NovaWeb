import { motion, AnimatePresence } from 'framer-motion'
import { IconStar, IconCheck, IconClose } from './Icons.jsx'

function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-slate-900/60 dark:bg-slate-950/90 backdrop-blur-md transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto">
            <motion.div
              className="relative w-full max-w-4xl bg-gradient-to-br from-white/95 to-slate-50/95 dark:from-slate-900/95 dark:to-slate-800/95 sm:rounded-2xl shadow-2xl shadow-brand-500/20 dark:shadow-brand-500/30 border-t sm:border border-slate-200/60 dark:border-slate-800/60 overflow-hidden sm:my-8 min-h-screen sm:min-h-0 backdrop-blur-xl transition-colors"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-200/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 backdrop-blur-md shadow-lg transition-all hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white hover:scale-110 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                aria-label="Cerrar modal"
              >
                <IconClose />
              </button>

              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-0">
                <div className="relative h-56 sm:h-64 lg:h-auto bg-slate-100 dark:bg-slate-950 order-1 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-slate-950/50" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-2.5 py-1 sm:px-3 text-xs font-medium text-slate-100 backdrop-blur-sm">
                      <IconStar />
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="inline-flex rounded-full bg-brand-600/90 px-2.5 py-1 sm:px-3 text-xs font-semibold text-white backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col p-4 sm:p-6 lg:p-8 order-2 bg-white dark:bg-transparent transition-colors">
                  <div className="flex-1 space-y-4 sm:space-y-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <h2 id="modal-title" className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl lg:text-3xl transition-colors">
                        {product.name}
                      </h2>
                      <div className="flex items-baseline gap-1.5 sm:gap-2">
                        <span className="text-2xl sm:text-3xl font-bold text-brand-400">${product.price}</span>
                        <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors">/mes</span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base transition-colors">
                      {product.description}
                    </p>

                    {product.features && product.features.length > 0 && (
                      <div className="space-y-2.5 sm:space-y-3">
                        <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400 transition-colors">
                          Características incluidas
                        </h3>
                        <ul className="space-y-1.5 sm:space-y-2 max-h-48 sm:max-h-64 overflow-y-auto pr-2">
                          {product.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition-colors"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                              <span className="mt-0.5 flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                                <IconCheck />
                              </span>
                              <span className="leading-relaxed">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 sm:mt-6 flex flex-col gap-2.5 sm:gap-3 border-t border-slate-200 dark:border-slate-800 pt-4 sm:pt-6 transition-colors">
                    <motion.button
                      type="button"
                      onClick={() => {
                        onAddToCart(product)
                        onClose()
                      }}
                      className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-purple-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-xl shadow-brand-500/40 transition-all hover:shadow-2xl hover:shadow-brand-500/60 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Añadir al carrito
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={onClose}
                      className="w-full inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 transition hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancelar
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProductModal
