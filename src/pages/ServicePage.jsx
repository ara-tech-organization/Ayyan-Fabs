import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ChevronRight, CheckCircle2, Wrench, Phone, Mail,
  ArrowRight, Shield, Clock, Star,
} from 'lucide-react'
import { services } from '../data/servicesData'
import img1 from '../assets/h1.png'
import img2 from '../assets/h2.png'
import img3 from '../assets/h3.png'
import { img } from '../utils/imgPath'

const heroImages = [img1, img2, img3]

const trustBadges = [
  { icon: Shield, label: 'Quality Guaranteed' },
  { icon: Clock,  label: '2-Hour Response' },
  { icon: Star,   label: '1000+ Projects' },
]

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

  const imgIndex = services.indexOf(service) % 3
  const heroBg = heroImages[imgIndex]

  return (
    <>
      {/* ── Hero ── */}
      <section className="svc-hero" style={{ '--svc-bg': `url(${heroBg})` }}>
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services">Services</Link>
            <ChevronRight size={14} />
            <span>{service.title}</span>
          </nav>
          <h1 className="svc-hero__title">{service.title}</h1>
          <p className="svc-hero__desc">{service.cardDesc}</p>
          <div className="svc-hero__badges">
            {trustBadges.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={i} className="svc-hero__badge">
                  <Icon size={14} strokeWidth={2.2} />
                  <span>{b.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="svc-body">
        <div className="container">
          <div className="svc-layout">

            {/* Main */}
            <div className="svc-main">

              {/* Intro */}
              <div className="svc-intro">
                <p>{service.intro}</p>
              </div>

              {/* Service photo */}
              {service.image && (
                <div className="svc-photo-wrap">
                  <img src={img(service.image)} alt={service.title} className="svc-photo" loading="lazy" />
                </div>
              )}

              {/* Bullets */}
              <div className="svc-bullets-block">
                <h2 className="svc-section-title">{service.subTitle}</h2>
                <ul className="svc-bullets-grid">
                  {service.bullets.map((b, i) => (
                    <li key={i} className="svc-bullet-item">
                      <CheckCircle2 size={17} strokeWidth={2.2} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech note */}
              <div className="svc-tech-note">
                <div className="svc-tech-note__header">
                  <div className="svc-tech-note__icon">
                    <Wrench size={18} strokeWidth={1.8} />
                  </div>
                  <span className="svc-tech-note__label">Technical & Quality Standard</span>
                </div>
                <p className="svc-tech-note__body">{service.techNote}</p>
              </div>

              {/* Process strip */}
              <div className="svc-process-strip">
                {['Site Survey', 'Design & Quote', 'Fabrication', 'Installation'].map((step, i) => (
                  <div key={i} className="svc-process-step">
                    <div className="svc-process-step__num">{i + 1}</div>
                    <span>{step}</span>
                    {i < 3 && <ChevronRight size={16} className="svc-process-step__arrow" />}
                  </div>
                ))}
              </div>

            </div>

            {/* Sidebar */}
            <aside className="svc-sidebar">

              <div className="svc-cta-card">
                <div className="svc-cta-card__top">
                  <span className="svc-cta-card__eyebrow">Get a Free Quote</span>
                  <h3 className="svc-cta-card__title">{service.cta}</h3>
                </div>
                <a href="tel:+918904038295" className="svc-cta-card__btn-primary">
                  <Phone size={16} strokeWidth={2.2} />
                  Call +91 89040 38295
                </a>
                <Link to="/services" className="svc-cta-card__btn-secondary">
                  <Mail size={16} strokeWidth={2.2} />
                  Request Written Quote
                  <ArrowRight size={14} />
                </Link>
                <div className="svc-cta-card__divider" />
                <a href="mailto:sriayyanfabs@gmail.com" className="svc-cta-card__email">
                  sriayyanfabs@gmail.com
                </a>
              </div>

              <div className="svc-other-services">
                <h4 className="svc-other-services__title">Other Services</h4>
                <ul className="svc-other-services__list">
                  {services
                    .filter(s => s.slug !== slug)
                    .map(s => (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`} className="svc-other-services__link">
                          <ChevronRight size={13} />
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

      {/* ── Bottom CTA strip ── */}
      <section className="svc-bottom-cta">
        <div className="container">
          <div className="svc-bottom-cta__inner">
            <div className="svc-bottom-cta__text">
              <h2 className="svc-bottom-cta__title">Ready to start your {service.title} project?</h2>
              <p className="svc-bottom-cta__sub">Serving Bangalore and surrounding areas. Free site visit included.</p>
            </div>
            <div className="svc-bottom-cta__actions">
              <a href="tel:+918904038295" className="svc-bottom-cta__btn-primary">
                <Phone size={16} strokeWidth={2.2} />
                Call Now — Free Quote
              </a>
              <Link to="/services" className="svc-bottom-cta__btn-secondary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
