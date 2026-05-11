import { useEffect, useRef } from 'react'
import { services } from '../data/servicesData'
import ServiceCard from '../components/ServiceCard'
import ServicesHero from '../components/services/ServicesHero'

export default function ServicesIndexPage() {
  const gridRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.05 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <ServicesHero />
      <section className="services-section" ref={gridRef}>
        <div className="container">
          <div className="services-grid">
            {services.map((svc, i) => (
              <ServiceCard key={svc.slug} service={svc} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
