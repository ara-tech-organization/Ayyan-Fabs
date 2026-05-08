import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight, ChevronDown, ArrowRight,
  Building2, Factory, Home, ShoppingBag,
  HeartPulse, BookOpen, HardHat, Zap,
} from 'lucide-react'
import { industries, faqs } from '../data/aboutData'
import heroBg from '../assets/h1.png'

const iconMap = { Building2, Factory, Home, ShoppingBag, HeartPulse, BookOpen, HardHat, Zap }

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

export default function IndustriesPage() {
  const indRef = useRef(null)
  const faqRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Industries & FAQ | Sri Ayyan Fabs Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Industries served by Sri Ayyan Fabs across Bangalore — commercial, industrial, residential, healthcare and more. Plus answers to frequently asked questions.')

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
    ;[indRef, faqRef].forEach(r => { if (r.current) observer.observe(r.current) })
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
            <span>Industries & FAQ</span>
          </nav>
          <h1 className="page-hero__title">Industries & Frequently Asked Questions</h1>
          <p className="page-hero__sub">
            Every sector. Every question. One trusted fabrication partner in Bangalore.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="ind-page-section" ref={indRef}>
        <div className="container">
          <div className="ind-page__header reveal">
            <span className="section-label">Who We Serve</span>
            <h2 className="section-heading">Industries We Serve</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              From commercial towers to factory floors — Sri Ayyan Fabs delivers precision fabrication across every sector that builds Bangalore.
            </p>
          </div>
          <div className="ind-page__grid">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Building2
              return (
                <div key={i} className={`ind-page-card reveal-scale delay-${(i % 4) + 1}`}>
                  <div className="ind-page-card__icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="ind-page-card__name">{ind.name}</h3>
                  <div className="ind-page-card__row">
                    <span className="ind-page-card__tag">Key Needs</span>
                    <p className="ind-page-card__val">{ind.needs}</p>
                  </div>
                  <div className="ind-page-card__divider" />
                  <div className="ind-page-card__row">
                    <span className="ind-page-card__tag ind-page-card__tag--blue">Our Solution</span>
                    <p className="ind-page-card__val ind-page-card__val--blue">{ind.solution}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ind-faq-section" ref={faqRef}>
        <div className="container">
          <div className="ind-faq__header reveal">
            <span className="section-label">Common Questions</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Everything you need to know before starting your project with us.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => <FAQItem key={i} item={item} />)}
          </div>
        </div>
      </section>

    </>
  )
}
