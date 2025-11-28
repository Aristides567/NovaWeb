import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import { TEAM_MEMBERS, MILESTONES } from '../data/storeData.js'

function AboutPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-900 py-16 sm:py-20 lg:py-24 transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(192,38,211,0.2),_rgba(162,28,175,0.1),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(192,38,211,0.35),_rgba(162,28,175,0.15),_transparent_60%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,121,249,0.15),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,121,249,0.25),_transparent_50%)]" aria-hidden="true" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/80 bg-gradient-to-r from-pink-200/90 via-fuchsia-500/80 to-purple-700/90 dark:from-fuchsia-300/40 dark:via-fuchsia-500/70 dark:to-purple-900/80 px-5 py-2 text-xs font-semibold text-fuchsia-800 dark:text-pink-100 backdrop-blur-md shadow-[0_0_20px_rgba(217,70,239,0.6)] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>Sobre NovaWeb</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-purple-200 dark:to-slate-50 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
              Construyendo el futuro del comercio digital
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              Somos una startup joven y apasionada, comprometida con hacer el comercio electrónico accesible 
              para todos, combinando tecnología moderna con un trato cercano y personalizado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="relative bg-white dark:bg-slate-950 py-16 sm:py-20 lg:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-900/70 dark:to-slate-800/50 p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">Misión</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Hacer que el comercio electrónico profesional sea accesible para emprendedores y pequeñas empresas, 
                ofreciéndoles herramientas modernas y soporte personalizado para crecer en el mundo digital.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-900/70 dark:to-slate-800/50 p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">Visión</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Crecer junto a nuestros clientes, convirtiéndonos en un referente de innovación y servicio 
                personalizado en el ecosistema de comercio electrónico de la región.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-900/70 dark:to-slate-800/50 p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">💎</div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">Valores</h2>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Innovación constante</li>
                <li>• Transparencia total</li>
                <li>• Enfoque en el cliente</li>
                <li>• Excelencia técnica</li>
                <li>• Trabajo en equipo</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline de Hitos */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50/30 via-white to-slate-50 dark:from-purple-950/20 dark:via-slate-950 dark:to-slate-900 py-16 sm:py-20 lg:py-24 transition-colors duration-300">
        <div className="absolute top-20 -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-brand-500/15 to-transparent blur-3xl opacity-60 dark:opacity-40" aria-hidden="true" />
        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-gradient-to-bl from-purple-500/15 to-transparent blur-3xl opacity-50 dark:opacity-30" aria-hidden="true" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">Nuestra Historia</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Los primeros pasos de nuestra aventura emprendedora
            </p>
          </motion.div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.08),_transparent_55%)]" aria-hidden="true" />

            <div className="relative grid gap-8 sm:gap-10">
              {MILESTONES.map((milestone, index) => (
                <motion.article
                  key={milestone.year}
                  className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/90 dark:bg-slate-900/80 shadow-lg backdrop-blur-sm px-5 py-6 sm:px-7 sm:py-7"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

                  <div className="relative flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="inline-flex items-center gap-3">
                      <span className="inline-flex items-center rounded-full bg-brand-50 dark:bg-brand-950/40 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300 border border-brand-100/60 dark:border-brand-900/60">
                        {milestone.year}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {milestone.description}
                      </span>
                    </div>
                  </div>

                  <p className="relative mt-3 text-base font-semibold text-slate-900 dark:text-slate-50">
                    {milestone.event}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid del Equipo */}
      <section className="relative bg-white dark:bg-slate-950 py-16 sm:py-20 lg:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">Nuestro Equipo</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Las personas detrás de NovaWeb
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.article
                key={member.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-900/70 dark:to-slate-800/50 shadow-lg hover:shadow-xl hover:shadow-brand-500/20 dark:hover:shadow-brand-500/30 transition-all"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                    {member.name}
                  </h3>
                  <p className="text-xs text-brand-600 dark:text-brand-400 mt-1">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 to-purple-600 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),_transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              ¿Listo para comenzar tu viaje digital?
            </h2>
            <p className="mt-4 text-lg text-brand-100">
              Sé parte de nuestra comunidad de emprendedores que están transformando sus negocios
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/catalogo"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-600 shadow-xl hover:bg-brand-50 transition-all hover:scale-105"
              >
                Ver planes
              </a>
              <a
                href="/#"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all hover:scale-105"
              >
                Contactar ventas
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default AboutPage
