import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import { IconStar } from '../components/Icons.jsx'

function CartPage({ items, onIncrement, onDecrement, onRemove, onContinueShopping }) {
  const navigate = useNavigate()
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = items.length > 0 ? 9 : 0
  const total = subtotal + shipping

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/10 py-10 sm:py-12 lg:py-16 transition-colors duration-300">
      <div className="absolute top-0 left-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-brand-500/15 to-transparent blur-3xl opacity-60 dark:opacity-40" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gradient-to-tl from-purple-500/15 to-transparent blur-3xl opacity-50 dark:opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(192,38,211,0.05),_transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.header
          className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-500 dark:text-brand-300 transition-colors">Carrito</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl transition-colors">
              Tu selección de productos
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-300 transition-colors">
              Revisa los módulos seleccionados antes de continuar con el proceso de pago.
            </p>
          </div>
          <motion.button
            type="button"
            onClick={onContinueShopping}
            className="mt-2 inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 px-4 py-2 text-xs font-semibold text-slate-900 dark:text-slate-100 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 transition-colors"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Seguir explorando catálogo
          </motion.button>
        </motion.header>

        {items.length === 0 ? (
          <motion.div
            className="relative mt-8 overflow-hidden rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-12 text-center transition-colors"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(192,38,211,0.1),_transparent_70%)]" aria-hidden="true" />
            <div className="relative">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 transition-colors">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-base font-semibold text-slate-900 dark:text-slate-100 transition-colors">Tu carrito está vacío</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 transition-colors">
                Agrega productos desde el catálogo para ver aquí el resumen de tu compra.
              </p>
              <motion.button
                type="button"
                onClick={onContinueShopping}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                Explorar catálogo
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="space-y-4" aria-label="Lista de productos en el carrito">
              <AnimatePresence mode="popLayout">
                {items.map((item, index) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, height: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-900/70 dark:to-slate-800/50 p-4 shadow-lg backdrop-blur-sm transition-all hover:border-brand-500/60 hover:shadow-xl hover:shadow-brand-500/20 dark:hover:shadow-brand-500/30 hover:scale-[1.01]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                    <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950 sm:h-20 sm:w-20 transition-colors">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 transition-colors">
                            <span className="text-xs font-medium text-slate-600 dark:text-slate-400 transition-colors">{item.category}</span>
                          </div>
                        )}
                        <div className="absolute bottom-1.5 right-1.5">
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-2 py-0.5 text-[10px] font-medium text-slate-100 backdrop-blur-sm">
                            <IconStar />
                            {item.rating?.toFixed(1) || '4.5'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-1 flex-col gap-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50 sm:text-base transition-colors">{item.name}</h2>
            <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400 transition-colors">Licencia mensual · Cancelación flexible</p>
                          </div>
                          <motion.button
                            type="button"
                            onClick={() => onRemove(item.id)}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-600 dark:text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
                            aria-label={`Eliminar ${item.name}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </motion.button>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-lg font-bold text-brand-400 sm:text-xl">${item.price}</span>
                            <span className="text-xs text-slate-400">/mes</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-xs text-slate-600 dark:text-slate-400 transition-colors">Cantidad:</span>
                            <div className="inline-flex items-center gap-1 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/80 px-1 py-1 transition-colors">
                              <motion.button
                                type="button"
                                onClick={() => onDecrement(item.id)}
                                className="inline-flex h-11 w-11 sm:h-7 sm:w-7 items-center justify-center rounded-full text-slate-700 dark:text-slate-200 transition hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-brand-500 dark:hover:text-brand-400"
                                aria-label={`Disminuir cantidad de ${item.name}`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                                </svg>
                              </motion.button>
                              <span className="min-w-[2rem] text-center text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors">{item.quantity}</span>
                              <motion.button
                                type="button"
                                onClick={() => onIncrement(item.id)}
                                className="inline-flex h-11 w-11 sm:h-7 sm:w-7 items-center justify-center rounded-full text-slate-700 dark:text-slate-200 transition hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-brand-500 dark:hover:text-brand-400"
                                aria-label={`Aumentar cantidad de ${item.name}`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                </svg>
                              </motion.button>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800/50 pt-2 transition-colors">
                          <span className="text-xs text-slate-600 dark:text-slate-400 transition-colors">Subtotal:</span>
                          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
            <aside
              className="relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-slate-900/80 dark:to-slate-800/60 p-6 text-sm shadow-xl backdrop-blur-sm transition-all hover:shadow-2xl"
              aria-label="Resumen de precios"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(192,38,211,0.15),_transparent_50%)]" aria-hidden="true" />
              <div className="relative">
              <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50 transition-colors">Resumen del pedido</h2>
              <div className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300 transition-colors">
                <div className="flex items-center justify-between">
                  <span>Subtotal ({items.length} {items.length === 1 ? 'producto' : 'productos'})</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100 transition-colors">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Envío</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100 transition-colors">{shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-emerald-400">
                  <span>Descuento aplicado</span>
                  <span>—</span>
                </div>
              </div>
              <div className="my-4 border-t border-slate-200 dark:border-slate-800 transition-colors" />
              <div className="flex items-center justify-between text-base">
                <span className="font-semibold text-slate-900 dark:text-slate-50 transition-colors">Total estimado</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-brand-400">${total.toFixed(2)}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 transition-colors">USD</div>
                </div>
              </div>
              <form className="space-y-2" onSubmit={(event) => event.preventDefault()}>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors">
                  <span className="mb-2 block">¿Tienes un cupón?</span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/80 px-4 py-2.5 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-500 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      placeholder="Código de descuento"
                    />
                    <motion.button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 px-4 py-2.5 text-xs font-semibold text-slate-900 dark:text-slate-100 transition hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-600 dark:hover:text-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Aplicar
                    </motion.button>
                  </div>
                </label>
              </form>
              <div className="space-y-3 pt-2">
                <motion.button
                  type="button"
                  onClick={() => navigate('/checkout')}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-brand-500/50 transition-all hover:shadow-2xl hover:shadow-brand-500/60 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Proceder al pago
                </motion.button>
                <motion.button
                  type="button"
                  onClick={onContinueShopping}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-6 py-2.5 text-sm font-semibold text-slate-900 dark:text-slate-100 transition hover:border-brand-500 hover:bg-brand-500/5 hover:text-brand-600 dark:hover:text-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Seguir comprando
                </motion.button>
              </div>
              </div>
            </aside>
          </motion.div>
        )}
      </div>
    </section>
    </PageTransition>
  )
}

export default CartPage
