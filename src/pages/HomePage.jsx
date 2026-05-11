import HeroSlider from '../components/home/HeroSlider'
import ServicesSection from '../components/home/ServicesSection'
import StatsSection from '../components/home/StatsSection'
import ProcessSection from '../components/home/ProcessSection'
import CTASection from '../components/home/CTASection'
import QuoteFormSection from '../components/home/QuoteFormSection'
import ProjectsStrip from '../components/home/ProjectsStrip'

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
