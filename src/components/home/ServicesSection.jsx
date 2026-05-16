import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../../data/servicesData'
import ServiceCard from '../ServiceCard'

export default function ServicesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="container">
        <div className="services-header">
          <div className="reveal">
            <span className="section-label">Our Expertise</span>
            <h2 className="section-heading">Premium Services We Deliver</h2>
            <p className="section-sub">
              Delivering world-class aluminium fabrication, glass solutions, and structural engineering with precision,
              innovation, and unwavering commitment to quality.
            </p>
          </div>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <ServiceCard key={svc.slug} service={svc} index={i} />
          ))}
        </div>
        <div className="services-footer reveal">
          <Link to="/services" className="btn-outline services-footer__btn">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
