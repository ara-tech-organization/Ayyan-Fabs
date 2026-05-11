import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'

export default function TestimonialsCTA() {
  return (
    <section className="tpage-cta">
      <div className="container">
        <div className="tpage-cta__inner">
          <h2 className="tpage-cta__title">Ready to become our next success story?</h2>
          <p className="tpage-cta__sub">Get a free site visit and quote within 2 hours. No obligation.</p>
          <div className="tpage-cta__actions">
            <a href="tel:+918904038295" className="tpage-cta__btn-primary">
              <Phone size={16} strokeWidth={2.2} />
              Call +91 89040 38295
            </a>
            <Link to="/services" className="tpage-cta__btn-secondary">
              View Our Services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
