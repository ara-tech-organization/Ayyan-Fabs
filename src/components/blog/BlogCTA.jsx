import { Link } from 'react-router-dom'

export default function BlogCTA() {
  return (
    <section className="blog-cta-section">
      <div className="container">
        <div className="blog-cta__inner">
          <div className="blog-cta__text">
            <h2 className="blog-cta__title">Ready to start your project?</h2>
            <p className="blog-cta__sub">Talk to our team — free site visit, detailed quote, no obligation.</p>
          </div>
          <div className="blog-cta__actions">
            <a href="tel:+918904038295" className="blog-cta__btn-primary">Call +91 89040 38295</a>
            <Link to="/contact" className="blog-cta__btn-secondary">Request a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
