import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, Phone } from 'lucide-react'
import { testimonials } from '../data/aboutData'
import heroBg from '../assets/h2.png'

export default function TestimonialsPage() {
  const sectionRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Client Testimonials | Sri Ayyan Fabs Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Real client reviews for Sri Ayyan Fabs — aluminium fabrication, ACP cladding, roofing and MS steel projects across Bangalore.')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.07 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Testimonials</span>
          </nav>
          <h1 className="page-hero__title">What Our Clients Say</h1>
          <p className="page-hero__sub">
            1,000+ projects delivered. 800+ clients served. Here is what some of them have to say.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="tpage-section" ref={sectionRef}>
        <div className="container">
          <div className="tpage-grid">
            {testimonials.map((t, i) => (
              <blockquote key={i} className={`tpage-card reveal-scale delay-${(i % 2) + 1}`}>
                <div className="tpage-card__quote-mark">"</div>
                <p className="tpage-card__text">{t.quote}</p>
                <footer className="tpage-card__footer">
                  <div className="tpage-card__author">
                    <div className="tpage-card__avatar">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="tpage-card__name">— {t.name}</div>
                      <div className="tpage-card__role">{t.role}</div>
                      <div className="tpage-card__company">{t.company}</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </>
  )
}
