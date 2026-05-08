import HeroSlider from '../components/HeroSlider'
import ServicesSection from '../components/ServicesSection'
import StatsSection from '../components/StatsSection'
import ProcessSection from '../components/ProcessSection'
import CTASection from '../components/CTASection'
import QuoteFormSection from '../components/QuoteFormSection'
import ProjectsStrip from '../components/ProjectsStrip'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <StatsSection />
      <ProjectsStrip />
      <ProcessSection />
      <CTASection />
      <QuoteFormSection />
    </>
  )
}
