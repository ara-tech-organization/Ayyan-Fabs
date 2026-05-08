import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ChevronRight, CheckCircle2, Wrench, Phone, Mail } from 'lucide-react'
import { services } from '../data/servicesData'

export default function ServicePage() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (service) {
      document.title = service.titleTag
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', service.metaDesc)
    }
  }, [slug, service])

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services">Services</Link>
            <ChevronRight size={14} />
            <span>{service.title}</span>
          </nav>
          <h1 className="page-hero__title">{service.title}</h1>
        </div>
      </section>

      <section className="service-detail">
        <div className="container">
          <div className="service-detail__layout">

            <div className="service-detail__main">
              <p className="service-detail__intro">{service.intro}</p>

              <div className="service-detail__block">
                <h2 className="service-detail__block-title">{service.subTitle}</h2>
                <ul className="service-detail__bullets">
                  {service.bullets.map((b, i) => (
                    <li key={i} className="service-detail__bullet">
                      <CheckCircle2 size={18} strokeWidth={2} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-detail__tech-note">
                <div className="service-detail__tech-icon">
                  <Wrench size={20} strokeWidth={1.8} />
                </div>
                <p>{service.techNote}</p>
              </div>
            </div>

            <aside className="service-detail__sidebar">
              <div className="service-cta-card">
                <h3 className="service-cta-card__title">{service.cta}</h3>
                <p className="service-cta-card__body">
                  Tell us about your project. We'll respond within 2 hours with a detailed quote.
                </p>
                <Link to="/#quote-form" className="btn-primary service-cta-card__btn">
                  Request a Quote
                </Link>
                <div className="service-cta-card__contacts">
                  <a href="tel:+918904038295" className="service-cta-card__contact">
                    <Phone size={15} strokeWidth={2.2} />
                    <span>+91 89040 38295</span>
                  </a>
                  <a href="mailto:sriayyyanfabs@gmail.com" className="service-cta-card__contact">
                    <Mail size={15} strokeWidth={2.2} />
                    <span>sriayyyanfabs@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="service-nav-card">
                <h4 className="service-nav-card__title">Other Services</h4>
                <ul className="service-nav-card__list">
                  {services
                    .filter(s => s.slug !== slug)
                    .map(s => (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`} className="service-nav-card__link">
                          <ChevronRight size={14} />
                          <span>{s.title}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
