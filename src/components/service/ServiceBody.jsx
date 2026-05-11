import { Link } from 'react-router-dom'
import { ChevronRight, CheckCircle2, Wrench, Phone, Mail, ArrowRight } from 'lucide-react'
import { services } from '../../data/servicesData'

export default function ServiceBody({ service, slug }) {
  return (
    <section className="svc-body">
      <div className="container">
        <div className="svc-layout">

          <div className="svc-main">
            <div className="svc-intro">
              <p>{service.intro}</p>
            </div>

            {service.image && (
              <div className="svc-photo-wrap">
                <img src={service.image} alt={service.title} className="svc-photo" loading="lazy" />
              </div>
            )}

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

            <div className="svc-tech-note">
              <div className="svc-tech-note__header">
                <div className="svc-tech-note__icon">
                  <Wrench size={18} strokeWidth={1.8} />
                </div>
                <span className="svc-tech-note__label">Technical & Quality Standard</span>
              </div>
              <p className="svc-tech-note__body">{service.techNote}</p>
            </div>

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
  )
}
