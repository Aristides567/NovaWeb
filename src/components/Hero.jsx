import { motion } from 'framer-motion'

function Hero({ onPrimaryAction, onSecondaryAction }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-900 px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24 transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(192,38,211,0.2),_rgba(162,28,175,0.1),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(192,38,211,0.35),_rgba(162,28,175,0.15),_transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,121,249,0.15),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,121,249,0.25),_transparent_50%)]" aria-hidden="true" />
      
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-brand-500/20 to-purple-500/20 blur-3xl opacity-70 dark:opacity-50" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-500/15 to-brand-500/15 blur-3xl opacity-60 dark:opacity-40" aria-hidden="true" />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE5MiwzOCwyMTEsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40 dark:opacity-20" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/80 
            bg-gradient-to-r from-pink-200/90 via-fuchsia-500/80 to-purple-700/90 
            dark:from-fuchsia-300/40 dark:via-fuchsia-500/70 dark:to-purple-900/80 
            px-3 py-1.5 text-xs font-medium 
            text-fuchsia-800 dark:text-pink-100
            backdrop-blur-md 
            shadow-[0_0_20px_rgba(217,70,239,0.6)] 
            transition-all hover:shadow-xl hover:shadow-pink-500/40"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span>Nuevo • Plataforma SaaS para comercio electrónico</span>
          </div>
          <h1
            className="mt-6 text-4xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-purple-200 dark:to-slate-50 bg-clip-text text-transparent sm:text-5xl lg:text-6xl transition-colors"
          >
            Vende más con una experiencia de checkout pensada para convertir.
          </h1>
          <p
            className="max-w-xl text-balance text-sm text-slate-600 dark:text-slate-300 sm:text-base transition-colors"
          >
            NovaWeb te ayuda a lanzar, optimizar y escalar tu tienda online con analytics en tiempo real,
            automatizaciones inteligentes y un diseño pensado para maximizar la conversión en cualquier dispositivo.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.button
              type="button"
              onClick={onPrimaryAction}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-brand-500/50 transition-all hover:shadow-2xl hover:shadow-brand-500/60 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver catálogo de módulos
            </motion.button>
            <motion.button
              type="button"
              onClick={onSecondaryAction}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 transition-all hover:border-brand-500 hover:bg-brand-50/50 dark:hover:bg-brand-950/30 hover:text-brand-600 dark:hover:text-brand-100 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Comparar planes
            </motion.button>
          </div>
          <dl className="grid grid-cols-2 gap-4 pt-4 text-xs text-slate-600 dark:text-slate-300 sm:grid-cols-3 transition-colors">
            <div>
              <dt className="font-medium text-slate-900 dark:text-slate-100">2023</dt>
              <dd className="text-slate-600 dark:text-slate-400">Año de fundación</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-900 dark:text-slate-100">En crecimiento</dt>
              <dd className="text-slate-600 dark:text-slate-400">Empresa joven y dinámica</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-900 dark:text-slate-100">24/7</dt>
              <dd className="text-slate-600 dark:text-slate-400">Soporte dedicado</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(192,38,211,0.2),_rgba(162,28,175,0.1),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(192,38,211,0.35),_rgba(162,28,175,0.15),_transparent_60%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,121,249,0.15),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,121,249,0.25),_transparent_50%)]"
            aria-hidden="true"
          />
          <div
            className="flex flex-col items-center rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-900/70 dark:to-slate-800/50 p-4 backdrop-blur-md shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            <div
              className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 px-4 py-3 text-xs text-slate-600 dark:text-slate-400 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                Dashboard en vivo
              </span>
              <span>Checkout · Conversion funnel</span>
            </div>
            <div className="aspect-video w-full">
              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
                alt="Panel de analytics de CommerceX con métricas de conversión y ventas"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
