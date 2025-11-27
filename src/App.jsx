import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import CatalogPage from './pages/CatalogPage.jsx'
import CartPage from './pages/CartPage.jsx'
import SpecialOffersPage from './pages/SpecialOffersPage.jsx'
import SeasonalOffersPage from './pages/SeasonalOffersPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import OrderConfirmationPage from './pages/OrderConfirmationPage.jsx'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [toast, setToast] = useState(null)

  const showToast = (product) => {
    setToast({ id: Date.now(), name: product.name })
  }

  const handleAddToCart = (product) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id)
      if (existing) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...items, { ...product, quantity: 1 }]
    })
    showToast(product)
  }

  const handleIncrement = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const handleDecrement = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Routes>
      <Route path="/" element={<Layout cartCount={cartCount} toast={toast} onClearToast={() => setToast(null)} />}>
        <Route index element={<LandingPage />} />
        <Route path="catalogo" element={<CatalogPage onAddToCart={handleAddToCart} />} />
        <Route
          path="carrito"
          element={
            <CartPage
              items={cartItems}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onRemove={handleRemove}
              onContinueShopping={() => window.history.back()}
            />
          }
        />
        <Route path="ofertas" element={<SpecialOffersPage onAddToCart={handleAddToCart} />} />
        <Route path="temporada" element={<SeasonalOffersPage onAddToCart={handleAddToCart} />} />
        <Route path="nosotros" element={<AboutPage />} />
        <Route path="checkout" element={<CheckoutPage items={cartItems} onClearCart={handleClearCart} />} />
        <Route path="confirmacion" element={<OrderConfirmationPage />} />
      </Route>
    </Routes>
  )
}

export default App