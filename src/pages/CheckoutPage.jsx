import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

function CheckoutPage({ items, onClearCart }) {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'México',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVV: '',
  })

  const [errors, setErrors] = useState({})
  const [processing, setProcessing] = useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = items.length > 0 ? 9 : 0
  const tax = subtotal * 0.16
  const total = subtotal + shipping + tax

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validatePersonalData = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'Nombre requerido'
    if (!formData.lastName.trim()) newErrors.lastName = 'Apellido requerido'
    if (!formData.email.trim()) {
      newErrors.email = 'Email requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Teléfono requerido'
    return newErrors
  }

  const validateAddress = () => {
    const newErrors = {}
    if (!formData.address.trim()) newErrors.address = 'Dirección requerida'
    if (!formData.city.trim()) newErrors.city = 'Ciudad requerida'
    if (!formData.state.trim()) newErrors.state = 'Estado requerido'
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Código postal requerido'
    return newErrors
  }

  const validatePayment = () => {
    const newErrors = {}
    if (formData.paymentMethod === 'credit-card') {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = 'Número de tarjeta requerido'
      } else if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
        newErrors.cardNumber = 'Número de tarjeta inválido'
      }
      if (!formData.cardName.trim()) newErrors.cardName = 'Nombre en tarjeta requerido'
      if (!formData.cardExpiry.trim()) {
        newErrors.cardExpiry = 'Fecha de expiración requerida'
      }
      if (!formData.cardCVV.trim()) {
        newErrors.cardCVV = 'CVV requerido'
      } else if (formData.cardCVV.length !== 3) {
        newErrors.cardCVV = 'CVV inválido'
      }
    }
    return newErrors
  }

  const goToNextStep = () => {
    let newErrors = {}
    
    if (step === 1) newErrors = validatePersonalData()
    if (step === 2) newErrors = validateAddress()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setStep(step + 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validatePayment()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setProcessing(true)

    await new Promise(resolve => setTimeout(resolve, 2000))

    const order = {
      id: `ORD-${Date.now()}`,
      date: new Date().toISOString(),
      items: items,
      customer: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
      },
      shipping: {
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
      },
      payment: {
        method: formData.paymentMethod,
        last4: formData.cardNumber.slice(-4),
      },
      totals: {
        subtotal,
        shipping,
        tax,
        total,
      },
    }

    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    orders.push(order)
    localStorage.setItem('orders', JSON.stringify(orders))

    onClearCart()
    navigate('/confirmacion', { state: { order } })
  }

  if (items.length === 0) {
    return (
      <PageTransition>
        <section className="relative bg-white dark:bg-slate-950 py-16 min-h-screen transition-colors">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
              No hay productos en el carrito
            </h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Agrega productos antes de proceder al checkout
            </p>
            <button
              onClick={() => navigate('/catalogo')}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-brand-500 transition"
            >
              Ir al catálogo
            </button>
          </div>
        </section>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/10 py-10 sm:py-12 lg:py-16 min-h-screen transition-colors duration-300">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
              Checkout
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Completa tu información para finalizar la compra
            </p>
          </motion.div>

          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`flex items-center justify-center h-10 w-10 rounded-full border-2 transition-colors ${
                    step >= s 
                      ? 'border-brand-600 bg-brand-600 text-white' 
                      : 'border-slate-300 dark:border-slate-700 text-slate-400'
                  }`}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-1 mx-2 transition-colors ${
                      step > s ? 'bg-brand-600' : 'bg-slate-200 dark:bg-slate-800'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-600 dark:text-slate-400">
              <span>Datos personales</span>
              <span>Dirección</span>
              <span>Pago</span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <motion.div
                    className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/70 p-6 shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
                      Información personal
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                        />
                        {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Apellido *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                        />
                        {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/70 p-6 shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
                      Dirección de envío
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Dirección *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className={`w-full rounded-lg border ${errors.address ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                        />
                        {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Ciudad *
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className={`w-full rounded-lg border ${errors.city ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                          />
                          {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Estado *
                          </label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className={`w-full rounded-lg border ${errors.state ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                          />
                          {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Código Postal *
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            className={`w-full rounded-lg border ${errors.zipCode ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                          />
                          {errors.zipCode && <p className="mt-1 text-xs text-red-500">{errors.zipCode}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            País
                          </label>
                          <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/70 p-6 shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
                      Información de pago
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Método de pago
                        </label>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <label className={`flex items-center gap-3 rounded-lg border-2 p-4 cursor-pointer transition ${
                            formData.paymentMethod === 'credit-card'
                              ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/20'
                              : 'border-slate-300 dark:border-slate-700'
                          }`}>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="credit-card"
                              checked={formData.paymentMethod === 'credit-card'}
                              onChange={handleChange}
                              className="text-brand-600"
                            />
                            <div>
                              <div className="font-medium text-slate-900 dark:text-slate-50">Tarjeta de crédito</div>
                              <div className="text-xs text-slate-600 dark:text-slate-400">Visa, Mastercard, AMEX</div>
                            </div>
                          </label>
                          <label className={`flex items-center gap-3 rounded-lg border-2 p-4 cursor-pointer transition ${
                            formData.paymentMethod === 'paypal'
                              ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/20'
                              : 'border-slate-300 dark:border-slate-700'
                          }`}>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="paypal"
                              checked={formData.paymentMethod === 'paypal'}
                              onChange={handleChange}
                              className="text-brand-600"
                            />
                            <div>
                              <div className="font-medium text-slate-900 dark:text-slate-50">PayPal</div>
                              <div className="text-xs text-slate-600 dark:text-slate-400">Pago seguro</div>
                            </div>
                          </label>
                        </div>
                      </div>

                      {formData.paymentMethod === 'credit-card' && (
                        <div className="space-y-4 pt-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                              Número de tarjeta *
                            </label>
                            <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              placeholder="1234 5678 9012 3456"
                              maxLength="19"
                              className={`w-full rounded-lg border ${errors.cardNumber ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                            />
                            {errors.cardNumber && <p className="mt-1 text-xs text-red-500">{errors.cardNumber}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                              Nombre en la tarjeta *
                            </label>
                            <input
                              type="text"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleChange}
                              placeholder="NOMBRE APELLIDO"
                              className={`w-full rounded-lg border ${errors.cardName ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                            />
                            {errors.cardName && <p className="mt-1 text-xs text-red-500">{errors.cardName}</p>}
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Fecha expiración *
                              </label>
                              <input
                                type="text"
                                name="cardExpiry"
                                value={formData.cardExpiry}
                                onChange={handleChange}
                                placeholder="MM/AA"
                                maxLength="5"
                                className={`w-full rounded-lg border ${errors.cardExpiry ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                              />
                              {errors.cardExpiry && <p className="mt-1 text-xs text-red-500">{errors.cardExpiry}</p>}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                CVV *
                              </label>
                              <input
                                type="text"
                                name="cardCVV"
                                value={formData.cardCVV}
                                onChange={handleChange}
                                placeholder="123"
                                maxLength="3"
                                className={`w-full rounded-lg border ${errors.cardCVV ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors`}
                              />
                              {errors.cardCVV && <p className="mt-1 text-xs text-red-500">{errors.cardCVV}</p>}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                <div className="flex gap-3">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="flex-1 rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      Atrás
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={goToNextStep}
                      className="flex-1 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition"
                    >
                      Continuar
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={processing}
                      className="flex-1 rounded-full bg-gradient-to-r from-brand-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {processing ? 'Procesando...' : 'Confirmar compra'}
                    </button>
                  )}
                </div>
              </form>
            </div>

            <aside className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/70 p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">
                  Resumen del pedido
                </h2>
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 text-sm">
                      <div className="h-16 w-16 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0">
                        {item.image && (
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-900 dark:text-slate-50 truncate">{item.name}</p>
                        <p className="text-slate-600 dark:text-slate-400">Cantidad: {item.quantity}</p>
                      </div>
                      <p className="font-medium text-slate-900 dark:text-slate-50">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Envío</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>IVA (16%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-800 pt-2 flex justify-between font-semibold text-slate-900 dark:text-slate-50">
                    <span>Total</span>
                    <span className="text-lg text-brand-600 dark:text-brand-400">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default CheckoutPage
