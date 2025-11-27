import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import CartToast from './CartToast.jsx'

function Layout({ cartCount, toast, onClearToast }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col transition-colors duration-300">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2"
      >
        Saltar al contenido principal
      </a>
      <Header cartCount={cartCount} />
      <main id="contenido-principal" className="flex-1 pt-12">
        <Outlet />
      </main>
      <CartToast toast={toast} onClose={onClearToast} />
      <Footer />
    </div>
  )
}

export default Layout
