import { Link } from 'react-router-dom'
import { ChevronRight, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react'
import { services } from '../../data/servicesData'
import projA1 from '../../assets/proj-a1.jpg'
import projA2 from '../../assets/proj-a2.jpg'
import projA3 from '../../assets/proj-a3.jpg'
import projP1 from '../../assets/proj-p1.jpg'
import projP2 from '../../assets/proj-p2.jpg'
import projP3 from '../../assets/proj-p3.jpg'
import projG1 from '../../assets/proj-g1.jpg'
import projG2 from '../../assets/proj-g2.jpg'
import projG3 from '../../assets/proj-g3.jpg'
import projC1 from '../../assets/proj-c1.jpg'
import projC2 from '../../assets/proj-c2.jpg'
import projC3 from '../../assets/proj-c3.jpg'
import svcGrill from '../../assets/svc-grill.jpg'
import svcMs from '../../assets/svc-ms.jpg'

const showcaseImgMap = {
  'aluminium-fabrication':  [projA1, projA2, projA3, projA1, projA2],
  'glass-solutions':        [projP1, projP2, projP3, projP1, projP2],
  'sliding-folding-systems':[projG1, projG2, projG3, projG1, projG2],
  'acp-cladding':           [projC1, projC2, projC3, projC1, projC2],
  'custom-interiors':       [projA1, projP1, projG1, projC1, projP2],
  'structural-fabrication': [projG1, projG2, projC1, svcGrill, svcMs],
}

export default function ServiceBody({ service, slug }) {
  const imgs = showcaseImgMap[slug] || [projA1, projA2, projA3, projA1, projA2]

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
