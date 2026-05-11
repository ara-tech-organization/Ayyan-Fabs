import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

export default function ServiceCTA({ title }) {
  return (
    <section className="svc-bottom-cta">
      <div className="container">
        <div className="svc-bottom-cta__inner">
          <div className="svc-bottom-cta__text">
            <h2 className="svc-bottom-cta__title">Ready to start your {title} project?</h2>
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
  )
}
