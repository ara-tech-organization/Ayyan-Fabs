import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { services } from '../data/servicesData'
import ServiceCard from '../components/ServiceCard'
import heroBg from '../assets/h3.png'

export default function ServicesIndexPage() {
  const gridRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach(el => {
              el.classList.add('visible')
            })
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
      <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Services</span>
          </nav>
          <h1 className="page-hero__title">Our Fabrication Services</h1>
          <p className="page-hero__sub">
            Eight core capabilities. One unified standard of precision. From aluminium glazing to structural steel —
            Sri Ayyan Fabs delivers fabrication that performs and lasts.
          </p>
        </div>
      </section>

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
