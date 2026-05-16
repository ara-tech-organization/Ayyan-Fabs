import { Link } from 'react-router-dom'
import { ChevronRight, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react'
import { services } from '../../data/servicesData'

const g = (import.meta.env.BASE_URL || '/') + 'gallery/'

const showcaseImgMap = {
  'aluminium-fabrication':  [
    g + 'aluminium-window-frame-installation.jpg',
    g + 'aluminium-office-partition.jpg',
    g + 'aluminium-glass-frame-design.jpg',
    g + 'godrej-park-retreat-2024.jpg',
    g + 'aluminium-window-frame-installation.jpg',
  ],
  'glass-solutions':        [
    g + 'glass-door-patch-fitting.jpg',
    g + 'frameless-glass-installation.jpg',
    g + 'glass-door-patch-fitting.jpg',
    g + 'frameless-glass-installation.jpg',
    g + 'glass-door-patch-fitting.jpg',
  ],
  'sliding-folding-systems':[
    g + 'modern-ms-gate-design.jpg',
    g + 'sliding-gate-fabrication.jpg',
    g + 'modern-ms-gate-design.jpg',
    g + 'sliding-gate-fabrication.jpg',
    g + 'modern-ms-gate-design.jpg',
  ],
  'acp-cladding':           [
    g + 'exterior-wall-cladding-panel.jpg',
    g + 'acp-cladding-commercial-building.jpg',
    g + 'exterior-wall-cladding-panel.jpg',
    g + 'acp-cladding-commercial-building.jpg',
    g + 'exterior-wall-cladding-panel.jpg',
  ],
  'custom-interiors':       [
    g + 'aluminium-office-partition.jpg',
    g + 'frameless-glass-installation.jpg',
    g + 'glass-door-patch-fitting.jpg',
    g + 'aluminium-glass-frame-design.jpg',
    g + 'on-site-installation.jpg',
  ],
  'structural-fabrication': [
    g + 'modern-ms-gate-design.jpg',
    g + 'sliding-gate-fabrication.jpg',
    g + 'metal-sheet-roofing-work.jpg',
    g + 'industrial-roof-installation.jpg',
    g + 'custom-fabrication-work.jpg',
  ],
}

export default function ServiceBody({ service, slug }) {
  const imgs = showcaseImgMap[slug] || showcaseImgMap['aluminium-fabrication']

  return (
    <section className="svc-body">
      <div className="container">
        <div className="svc-layout">

          <div className="svc-main">
            {/* Intro */}
            <div className="svc-intro">
              <h2 className="svc-intro__heading">{service.worldClass}</h2>
              <p>{service.intro}</p>
            </div>

            {/* Main image */}
            {service.image && (
              <div className="svc-photo-wrap">
                <img src={service.image} alt={service.title} className="svc-photo" loading="lazy" />
              </div>
            )}

            {/* Features */}
            <div className="svc-bullets-block">
              <h3 className="svc-section-title">Key Features</h3>
              <ul className="svc-bullets-list">
                {service.features.map((f, i) => (
                  <li key={i} className="svc-bullet-item">
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project showcase */}
            <div className="svc-showcase">
              <h3 className="svc-section-title">{service.title} Project Showcase</h3>
              <div className="svc-showcase-cards">
                {service.showcase.map((item, i) => (
                  <div key={i} className="svc-showcase-card">
                    <div className="svc-showcase-card__img-wrap">
                      <img src={imgs[i]} alt={item.title} loading="lazy" className="svc-showcase-card__img" />
                    </div>
                    <div className="svc-showcase-card__body">
                      <span className="svc-showcase-card__cat">{item.category}</span>
                      <p className="svc-showcase-card__title">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              <Link to="/contact" className="svc-cta-card__btn-secondary">
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
              <h4 className="svc-other-services__title">Our Services</h4>
              <ul className="svc-other-services__list">
                {services.map(s => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className={`svc-other-services__link${s.slug === slug ? ' svc-other-services__link--active' : ''}`}
                    >
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
  )
}
