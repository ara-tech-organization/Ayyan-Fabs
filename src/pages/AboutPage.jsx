import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/h2.png'
import { img } from '../utils/imgPath'
import {
  ChevronRight,
  Wrench, Handshake, Lightbulb, ClipboardCheck, Award,
  Factory, Ruler, Zap, FileText, BadgeCheck, Receipt,
} from 'lucide-react'
import { companyStory, mission, vision, values, differentiators } from '../data/aboutData'

const iconMap = {
  Wrench, Handshake, Lightbulb, ClipboardCheck, Award,
  Factory, Ruler, Zap, FileText, BadgeCheck, Receipt,
}

export default function AboutPage() {
  const sectionsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'About Sri Ayyan Fabs | Precision Fabrication, Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', "Learn about Sri Ayyan Fabs — Bangalore's precision fabrication specialists. In-house engineering, own workshop, 1000+ projects delivered.")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.07 }
    )
    sectionsRef.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const addRef = el => { if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el) }

  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>About Us</span>
          </nav>
          <h1 className="about-hero__title">
            Built on Precision.<br />
            Grown on Trust.<br />
            Powered by Craftsmanship.
          </h1>
          <p className="about-hero__sub">
            Bangalore's precision fabrication specialists — built on engineering discipline, quality materials, and a culture of delivery.
          </p>
          <div className="about-hero__stats">
            {[['1,000+', 'Projects Delivered'], ['800+', 'Clients Served'], ['10+', 'Years in Bangalore'], ['8', 'Core Services']].map(([num, label]) => (
              <div key={label} className="about-hero__stat">
                <span className="about-hero__stat-num">{num}</span>
                <span className="about-hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story + Mission/Vision ── */}
      <section className="about-story" ref={addRef}>
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__left reveal-left">
              <span className="section-label">Who We Are</span>
              <h2 className="section-heading">Our Story</h2>
              {companyStory.map((para, i) => (
                <p key={i} className="about-story__para">{para}</p>
              ))}
              <Link to="/services" className="btn-primary about-story__cta">
                Explore Our Services
              </Link>
            </div>
            <div className="about-story__right reveal-right">
              <div className="about-story__photo-wrap">
                <img src={img('images/about-overview.jpg')} alt="Sri Ayyan Fabs workshop" className="about-story__photo" loading="lazy" />
                <div className="about-story__photo-badge">
                  <span className="about-story__photo-badge-num">10+</span>
                  <span className="about-story__photo-badge-label">Years in Bangalore</span>
                </div>
              </div>
              <div className="about-mv about-mv--mission">
                <span className="about-mv__label">Our Mission</span>
                <p className="about-mv__text">{mission}</p>
              </div>
              <div className="about-mv about-mv--vision">
                <span className="about-mv__label">Our Vision</span>
                <p className="about-mv__text">{vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="about-values" ref={addRef}>
        <div className="container">
          <div className="about-values__header reveal">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-heading">Core Values</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>The principles that guide every project we take on.</p>
          </div>
          <div className="about-values__grid">
            {values.map((v, i) => {
              const Icon = iconMap[v.icon] || Award
              return (
                <div key={i} className={`about-value-card reveal-scale delay-${i + 1}`}>
                  <div className="about-value-card__num">0{i + 1}</div>
                  <div className="about-value-card__icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="about-value-card__title">{v.title}</h3>
                  <p className="about-value-card__desc">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="about-why" ref={addRef}>
        <div className="container">
          <div className="about-why__header reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-heading">The Sri Ayyan Fabs Difference</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Every fabricator claims quality. Here is what actually sets us apart.</p>
          </div>
          <div className="about-why__grid">
            {differentiators.map((d, i) => {
              const Icon = iconMap[d.icon] || BadgeCheck
              return (
                <div key={i} className={`about-why-card reveal delay-${(i % 3) + 1}`}>
                  <div className="about-why-card__top">
                    <div className="about-why-card__icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <span className="about-why-card__num">{i + 1}</span>
                  </div>
                  <h3 className="about-why-card__title">{d.heading}</h3>
                  <p className="about-why-card__body">{d.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}
