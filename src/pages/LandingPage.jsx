import PageTransition from '../components/PageTransition.jsx'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import Pricing from '../components/Pricing.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()

  const goToCatalog = () => {
    navigate('/catalogo')
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <PageTransition>
      <Hero onPrimaryAction={goToCatalog} onSecondaryAction={scrollToPricing} />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
    </PageTransition>
  )
}

export default LandingPage
