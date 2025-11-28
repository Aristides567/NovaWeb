import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

function OrderConfirmationPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const order = location.state?.order

  useEffect(() => {
    if (!order) {
      navigate('/')
    }
  }, [order, navigate])

  if (!order) return null

  return (
    <PageTransition>
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/10 py-16 min-h-screen transition-colors duration-300">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white mb-6">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <motion.h1
              className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              ¡Compra confirmada!
            </motion.h1>
            <motion.p
              className="mt-3 text-lg text-slate-600 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Tu pedido ha sido procesado exitosamente
            </motion.p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/90 dark:bg-slate-900/80 shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-brand-600 to-purple-600 px-6 py-4">
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-sm opacity-90">Número de orden</p>
                  <p className="text-xl font-bold">{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-90">Fecha</p>
                  <p className="font-medium">{new Date(order.date).toLocaleDateString('es-MX')}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Información del cliente
                </h2>
                <div className="grid gap-3 sm:grid-cols-2 text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Nombre</p>
                    <p className="font-medium text-slate-900 dark:text-slate-50">{order.customer.name}</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Email</p>
                    <p className="font-medium text-slate-900 dark:text-slate-50">{order.customer.email}</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Teléfono</p>
                    <p className="font-medium text-slate-900 dark:text-slate-50">{order.customer.phone}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Dirección de envío
                </h2>
                <div className="text-sm text-slate-700 dark:text-slate-300">
                  <p>{order.shipping.address}</p>
                  <p>{order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}</p>
                  <p>{order.shipping.country}</p>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  Productos
                </h2>
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0">
                        {item.image && (
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-900 dark:text-slate-50">{item.name}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Cantidad: {item.quantity} × ${item.price}
                        </p>
                      </div>
                      <p className="font-semibold text-slate-900 dark:text-slate-50">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Subtotal</span>
                    <span>${order.totals.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Envío</span>
                    <span>${order.totals.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>IVA (16%)</span>
                    <span>${order.totals.tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-800 pt-2 flex justify-between text-lg font-bold">
                    <span className="text-slate-900 dark:text-slate-50">Total pagado</span>
                    <span className="text-brand-600 dark:text-brand-400">${order.totals.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-lg p-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-emerald-900 dark:text-emerald-100">Pago procesado</p>
                    <p className="text-emerald-700 dark:text-emerald-300 mt-1">
                      {order.payment.method === 'credit-card' ? 'Tarjeta terminada en' : 'PayPal'} 
                      {order.payment.method === 'credit-card' && ` **** ${order.payment.last4}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 px-6 py-4 border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                Recibirás un correo de confirmación en <span className="font-medium text-slate-900 dark:text-slate-50">{order.customer.email}</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-brand-500 transition"
            >
              Volver al inicio
            </button>
            <button
              onClick={() => navigate('/catalogo')}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Seguir comprando
            </button>
          </motion.div>

          <motion.div
            className="mt-12 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/70 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">
              ¿Qué sigue?
            </h2>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-semibold text-xs">
                  1
                </div>
                <p>Recibirás un correo de confirmación con los detalles de tu compra</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-semibold text-xs">
                  2
                </div>
                <p>Nuestro equipo preparará tu pedido en las próximas 24 horas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-semibold text-xs">
                  3
                </div>
                <p>Te enviaremos el número de seguimiento una vez que se envíe tu pedido</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default OrderConfirmationPage
