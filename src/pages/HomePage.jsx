import HeroSlider from '../components/home/HeroSlider'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import StatsSection from '../components/home/StatsSection'
import HomeAboutSection from '../components/home/HomeAboutSection'
import HomeWhyUsSection from '../components/home/HomeWhyUsSection'
import HomeTestimonialsSection from '../components/home/HomeTestimonialsSection'
import CTASection from '../components/home/CTASection'
import HomeLocationSection from '../components/home/HomeLocationSection'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <HomeAboutSection />
      <HomeWhyUsSection />
      <CTASection />
      <HomeTestimonialsSection />
      <HomeLocationSection />
    </>
  )
}
