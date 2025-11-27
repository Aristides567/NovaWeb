import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '../data/storeData.js'
import { IconClose, IconMenu } from './Icons.jsx'
import { classNames } from '../utils/classNames.js'
import ThemeToggle from './ThemeToggle.jsx'

function Header({ cartCount }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50 transition-colors duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/" className="flex items-center gap-2 focus-visible:outline-none">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
              <span className="text-lg font-semibold">NW</span>
            </div>
            <div className="flex flex-col">
              <span className="text-left text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50 hover:text-brand-600 dark:hover:text-brand-100 transition-colors">
                NovaWeb
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400 transition-colors">Plataforma SaaS para tiendas modernas</span>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="hidden items-center gap-8 md:flex"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-6 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  classNames(
                    'transition-colors',
                    isActive ? 'text-brand-600 dark:text-brand-100' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <ThemeToggle />
          <motion.button
            type="button"
            onClick={() => navigate('/catalogo')}
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver catálogo
          </motion.button>
        </motion.div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => navigate('/carrito')}
            className="relative inline-flex items-center rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 text-xs font-medium text-slate-900 dark:text-slate-100 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 transition-colors"
            aria-label={`Abrir carrito (${cartCount} productos)`}
          >
            Carrito
            {cartCount > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-brand-600 px-1 text-[11px] font-semibold">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 p-2 text-slate-900 dark:text-slate-100 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 transition-colors"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden"
            role="dialog"
            aria-modal="true"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.div
              className="space-y-1 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pb-4 pt-2 shadow-lg transition-colors"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  classNames(
                    'block w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors',
                    isActive ? 'bg-brand-600 text-white' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
