import { useState } from 'react'
import { motion } from 'framer-motion'
import { IconStar } from './Icons.jsx'
import ProductModal from './ProductModal.jsx'

function ProductCard({ product, onAddToCart, layout = 'grid' }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <motion.article
        className={
          'group relative cursor-pointer rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-900/70 dark:to-slate-800/50 p-4 text-sm shadow-lg backdrop-blur-sm transition-all hover:border-brand-500/80 hover:shadow-xl hover:shadow-brand-500/20 dark:hover:shadow-brand-500/30 hover:scale-[1.02] overflow-hidden ' +
          (layout === 'list' ? 'flex items-center gap-4' : 'flex flex-col')
        }
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        whileHover={{ y: -4 }}
        onClick={() => setIsModalOpen(true)}
      >
      {/* Overlay decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
      <div
        className={
          'relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-100/90 to-slate-200/90 dark:from-slate-900/90 dark:to-slate-800/90 backdrop-blur-sm shadow-inner ' +
          (layout === 'list' ? 'h-20 w-24 shrink-0' : 'h-32 w-full')
        }
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950">
            {product.category}
          </div>
        )}
      </div>
      <div className={(layout === 'list' ? 'mt-0 ' : 'mt-3 ') + 'flex-1 space-y-2'}>
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50 transition-colors">{product.name}</h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 transition-colors">Licencia flexible · Sin contrato mínimo · Actualizaciones incluidas.</p>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-semibold text-slate-900 dark:text-slate-50 transition-colors">${product.price}</span>
            <span className="text-[11px] text-slate-600 dark:text-slate-400 transition-colors">/mes</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-600 dark:text-slate-400 transition-colors">
            <IconStar />
            <span>{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <motion.button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onAddToCart(product)
          }}
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-purple-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/50 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          Añadir al carrito
        </motion.button>
      </div>
    </motion.article>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={onAddToCart}
      />
    </>
  )
}

export default ProductCard
