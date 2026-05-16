import { useEffect, useRef } from 'react'
import { services } from '../data/servicesData'
import ServiceCard from '../components/ServiceCard'
import ServicesHero from '../components/services/ServicesHero'
import ServicesGallery from '../components/services/ServicesGallery'

export default function ServicesIndexPage() {
  const sectionsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Our Services | Sri Ayyan Fabs — Aluminium & Glass Solutions'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Premium aluminium fabrication, glass solutions, ACP cladding, sliding systems, custom interiors and structural fabrication by Sri Ayyan Fabs, Bangalore.')

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
    sectionsRef.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const addRef = el => { if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el) }

  return (
    <>
      <ServicesHero />

      {/* Services grid */}
      <section className="services-section" ref={addRef}>
        <div className="container">
          <div className="services-section__header reveal">
            <span className="section-label">Our Expertise</span>
            <h2 className="section-heading">Premium Services We Deliver</h2>
            <p className="section-sub">
              Delivering world-class aluminium fabrication, glass solutions, and structural engineering with precision, innovation, and unwavering commitment to quality.
            </p>
          </div>
          <div className="services-grid">
            {services.map((svc, i) => (
              <ServiceCard key={svc.slug} service={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <div ref={addRef}>
        <ServicesGallery />
      </div>

      {/* CTA */}
      <section className="services-cta-strip">
        <div className="container">
          <div className="services-cta-strip__inner">
            <div className="services-cta-strip__text">
              <h2 className="services-cta-strip__title">Ready to Start Your Project?</h2>
              <p className="services-cta-strip__sub">Get a free consultation and customized quotation from our expert fabrication team. We deliver excellence from concept to completion.</p>
            </div>
            <a href="tel:+918904038295" className="btn-primary">Get Free Quote</a>
          </div>
        </div>
      </section>
    </>
  )
}
