import { useEffect, useRef } from 'react'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cta-section" ref={ref} aria-label="Call to action">
      <div className="cta-section__bg" aria-hidden="true" />
      <div className="cta-section__grid" aria-hidden="true">
        {[...Array(20)].map((_, i) => <span key={i} />)}
      </div>
      <div className="container cta-inner">
        <div className="reveal">
          <span className="section-label cta-label">Ready to Build?</span>
          <h2 className="cta-headline">Ready to Transform Your Space?</h2>
          <p className="cta-sub">
            Get a free site visit and customised quotation from our expert team.
            No obligations - just honest advice and premium craftsmanship.
          </p>
        </div>
        <div className="cta-actions reveal delay-2">
          <a href="tel:+918904038295" className="cta-btn-primary">
            <Phone size={18} />
            Call +91 8904038295
          </a>
          <a
            href="https://wa.me/918904038295?text=Hi%20Sri%20Ayyan%20Fabs%2C%20I%27m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-secondary"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
          <Link to="/contact" className="cta-btn-secondary">
            Send Enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
        <p className="cta-note reveal delay-3">
          Free site survey included. No commitment required.
        </p>
      </div>
    </section>
  )
}
