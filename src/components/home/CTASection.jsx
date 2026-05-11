import { useEffect, useRef } from 'react'
import { ArrowRight, Phone } from 'lucide-react'

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
          <h2 className="cta-headline">Let's Build Something Exceptional Together</h2>
          <p className="cta-sub">
            Whether you have detailed drawings or just an idea — reach out.
            Our team responds within 2 hours during business hours.
          </p>
        </div>
        <div className="cta-actions reveal delay-2">
          <a href="#quote-form" className="cta-btn-primary">
            Request Free Quote
            <ArrowRight size={18} />
          </a>
          <a href="tel:+918904038295" className="cta-btn-secondary">
            <Phone size={18} />
            Call Now: +91 89040 38295
          </a>
        </div>
        <p className="cta-note reveal delay-3">
          Free site survey included. No commitment required.
        </p>
      </div>
    </section>
  )
}
