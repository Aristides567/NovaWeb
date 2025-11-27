import { motion } from 'framer-motion';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-b from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/20 py-10 sm:py-12 lg:py-14 transition-colors duration-300" aria-label="Pie de página">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(192,38,211,0.1),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(192,38,211,0.2),_transparent_60%)] pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
                <span className="text-lg font-semibold">NW</span>
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors">NovaWeb</span>
            </div>
            <p className="max-w-xs text-xs text-slate-600 dark:text-slate-400 sm:text-sm transition-colors">
              Startup de comercio electrónico enfocada en hacer la tecnología accesible para emprendedores 
              y pequeñas empresas.
            </p>
          </motion.div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300 transition-colors">Producto</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Inicio</a></li>
              <li><a href="/catalogo" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Catálogo</a></li>
              <li><a href="/ofertas" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Ofertas</a></li>
              <li><a href="/temporada" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Temporada</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300 transition-colors">Empresa</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/nosotros" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Nosotros</a></li>
              <li><a href="/carrito" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Carrito</a></li>
              <li><a href="/#pricing-section" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Planes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300 transition-colors">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Privacidad</a></li>
              <li><a href="/#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Términos</a></li>
              <li><a href="/#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600 dark:text-slate-400 transition-colors">&copy; {year} NovaWeb. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-600 dark:text-slate-400 transition-colors">Síguenos</span>
            <div className="flex gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                aria-label="Visitar perfil de NovaWeb en LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                aria-label="Visitar perfil de NovaWeb en Twitter"
              >
                𝕏
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                aria-label="Visitar perfil de NovaWeb en GitHub"
              >
                gh
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
