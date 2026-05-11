import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

export default function ProjectsCTA() {
  return (
    <section className="proj-cta-section">
      <div className="container">
        <div className="proj-cta__inner">
          <div className="proj-cta__text">
            <h2 className="proj-cta__title">Want to see more relevant work?</h2>
            <p className="proj-cta__sub">Call us and we'll share photos of projects similar to your requirement.</p>
          </div>
          <div className="proj-cta__actions">
            <a href="tel:+918904038295" className="proj-cta__btn-primary">
              <Phone size={16} strokeWidth={2.2} />
              Call Now
            </a>
            <Link to="/contact" className="proj-cta__btn-secondary">Request a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
