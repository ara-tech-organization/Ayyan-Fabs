import './App.css'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import ProcessSection from './components/ProcessSection'
import CTASection from './components/CTASection'
import QuoteFormSection from './components/QuoteFormSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <ServicesSection />
        <StatsSection />
        <ProcessSection />
        <CTASection />
        <QuoteFormSection />
      </main>
      <Footer />
    </>
  )
}
