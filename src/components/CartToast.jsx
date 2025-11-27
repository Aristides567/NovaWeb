import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function CartToast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => {
      onClose()
    }, 2600)
    return () => clearTimeout(id)
  }, [toast, onClose])

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          className="pointer-events-none fixed inset-x-0 top-16 z-50 flex justify-center px-4 sm:inset-auto sm:bottom-6 sm:right-6 sm:top-auto sm:justify-end"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-2xl border border-emerald-500/40 bg-white text-slate-900 shadow-xl shadow-emerald-500/20 backdrop-blur-md dark:bg-slate-900/95 dark:text-slate-50">
            <div className="flex items-start gap-3 px-4 py-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/15 dark:text-emerald-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
              </div>
              <div className="flex-1 text-sm">
                <p className="font-semibold text-slate-900 dark:text-slate-50">Producto añadido al carrito</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-medium text-emerald-700 dark:text-emerald-300">{toast.name}</span> se agregó correctamente.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-colors"
                aria-label="Cerrar notificación"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CartToast
