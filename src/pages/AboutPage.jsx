import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight, Target, ShieldCheck, Clock, Users, Lightbulb, Leaf,
  Ruler, Factory, BadgeCheck, MapPin, Headphones, Layers,
  ChevronDown, Phone
} from 'lucide-react'
import { values, differentiators, industries, testimonials, faqs } from '../data/aboutData'

const iconMap = { Target, ShieldCheck, Clock, Users, Lightbulb, Leaf, Ruler, Factory, BadgeCheck, MapPin, Headphones, Layers }

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{item.q}</span>
        <ChevronDown size={18} className="faq-item__chevron" />
      </button>
      {open && <p className="faq-item__a">{item.a}</p>}
    </div>
  )
}

export default function AboutPage() {
  const sectionsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'About Sri Ayyan Fabs | Bangalore Fabrication Specialists'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Learn about Sri Ayyan Fabs — Bangalore\'s precision fabrication specialists. In-house engineering, own workshop, 1000+ projects delivered.')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    sectionsRef.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const addRef = (el) => { if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el) }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>About</span>
          </nav>
          <h1 className="page-hero__title">About Sri Ayyan Fabs</h1>
          <p className="page-hero__sub">
            Bangalore's precision fabrication specialists — built on engineering discipline, quality materials, and a culture of delivery.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-intro" ref={addRef}>
        <div className="container">
          <div className="about-intro__grid">
            <div className="about-intro__content reveal-left">
              <span className="section-label">Who We Are</span>
              <h2 className="section-heading">Engineering-Led Fabrication Since Day One</h2>
              <p className="about-intro__body">
                Sri Ayyan Fabs is a Bangalore-based precision fabrication company serving commercial, industrial, and residential clients across the city. We fabricate and install aluminium systems, MS steel structures, ACP cladding, glass partitions, industrial roofing, and custom metalwork — with in-house engineering support and our own workshop production.
              </p>
              <p className="about-intro__body">
                We are not a general contractor. We are specialist fabricators — a team of engineers, skilled welders, and installation technicians who have delivered 1,000+ projects across Bangalore's commercial, industrial, and residential sectors.
              </p>
              <Link to="/services" className="btn-primary about-intro__cta">
                Explore Our Services
              </Link>
            </div>
            <div className="about-intro__cards reveal-right">
              <div className="about-mv-card about-mv-card--mission">
                <span className="about-mv-card__label">Our Mission</span>
                <p className="about-mv-card__text">
                  To deliver fabrication that engineers are proud of — on time, to specification, and built to outlast the building it serves.
                </p>
              </div>
              <div className="about-mv-card about-mv-card--vision">
                <span className="about-mv-card__label">Our Vision</span>
                <p className="about-mv-card__text">
                  To be Bangalore's most trusted precision fabrication company — the first call for every architect, contractor, and developer who refuses to compromise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values" ref={addRef}>
        <div className="container">
          <div className="about-values__header reveal">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-heading">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => {
              const Icon = iconMap[v.icon] || Target
              return (
                <div key={i} className={`value-card reveal-scale delay-${(i % 3) + 1}`}>
                  <div className="value-card__icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="value-card__title">{v.title}</h3>
                  <p className="value-card__desc">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="about-diff" ref={addRef}>
        <div className="container">
          <div className="about-diff__header reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-heading">The Sri Ayyan Fabs Difference</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Every fabricator claims quality. Here is what actually sets us apart.
            </p>
          </div>
          <div className="diff-grid">
            {differentiators.map((d, i) => {
              const Icon = iconMap[d.icon] || ShieldCheck
              return (
                <div key={i} className={`diff-card reveal delay-${(i % 3) + 1}`}>
                  <div className="diff-card__icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="diff-card__title">{d.heading}</h3>
                    <p className="diff-card__body">{d.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="about-industries" ref={addRef}>
        <div className="container">
          <div className="about-industries__header reveal">
            <span className="section-label">Who We Serve</span>
            <h2 className="section-heading">Industries We Work In</h2>
          </div>
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <div key={i} className={`industry-card reveal-scale delay-${(i % 3) + 1}`}>
                <h4 className="industry-card__name">{ind.name}</h4>
                <p className="industry-card__examples">{ind.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="about-testimonials" ref={addRef}>
        <div className="container">
          <div className="about-testimonials__header reveal">
            <span className="section-label">Client Voices</span>
            <h2 className="section-heading">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <blockquote key={i} className={`testimonial-card reveal-scale delay-${i + 1}`}>
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <footer className="testimonial-card__footer">
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}, {t.company}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-faq" ref={addRef}>
        <div className="container">
          <div className="about-faq__header reveal">
            <span className="section-label">Common Questions</span>
            <h2 className="section-heading">Frequently Asked</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => <FAQItem key={i} item={item} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta" ref={addRef}>
        <div className="container">
          <div className="about-cta__inner reveal">
            <h2 className="about-cta__title">Ready to start your project?</h2>
            <p className="about-cta__sub">Get a detailed quote within 2 hours. No obligation. No sales pressure.</p>
            <div className="about-cta__actions">
              <Link to="/#quote-form" className="btn-primary">Request a Free Quote</Link>
              <a href="tel:+918904038295" className="btn-outline about-cta__call">
                <Phone size={15} strokeWidth={2.2} />
                Call +91 89040 38295
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
