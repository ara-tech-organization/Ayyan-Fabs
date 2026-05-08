import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, BookOpen, Tag, Target, MessageCircle, CheckCircle2 } from 'lucide-react'
import heroBg from '../assets/h2.png'

const articles = [
  {
    pri: 1,
    title: 'ACP Cladding Cost Guide for Bangalore Buildings (2025)',
    keyword: 'ACP cladding cost Bangalore',
    intent: 'Cost research — high commercial intent',
  },
  {
    pri: 2,
    title: 'How to Choose a Fabrication Company in Bangalore — 7 Checkpoints',
    keyword: 'fabrication company Bangalore',
    intent: 'Vendor selection — captures decision-stage buyers',
  },
  {
    pri: 3,
    title: 'Aluminium vs UPVC Windows — Which is Better for Bangalore\'s Climate?',
    keyword: 'aluminium windows Bangalore',
    intent: 'Commercial comparison — high volume',
  },
  {
    pri: 4,
    title: 'Industrial Mezzanine Floors — Complete Design & Cost Guide',
    keyword: 'mezzanine floor fabrication Bangalore',
    intent: 'Industrial buyers — high ticket value',
  },
  {
    pri: 5,
    title: 'Roofing Systems for Bangalore Warehouses — What Works in Heavy Monsoon',
    keyword: 'warehouse roofing Bangalore',
    intent: 'Industrial/commercial buyers',
  },
  {
    pri: 6,
    title: 'Frameless Glass Partitions — Everything You Need to Know Before You Order',
    keyword: 'patch fitting glass partition Bangalore',
    intent: 'Office buyers — design intent',
  },
]

const qaItems = [
  {
    q: 'Do you offer free site visits?',
    a: 'Yes, we offer free site visits for all projects across Bangalore. Call us at +91 89040 38295 to schedule.',
  },
  {
    q: 'What is your contact number?',
    a: '+91 89040 38295. We also respond via WhatsApp on the same number during business hours.',
  },
  {
    q: 'Do you fabricate and install?',
    a: 'Yes — we handle the complete project. Our own team fabricates at our Dasarahalli yard and installs at your site. No subcontracting.',
  },
  {
    q: 'Are you GST registered?',
    a: 'Yes. GSTIN: 29AIYPR5034K1ZC. We provide full GST invoicing and are eligible for corporate and government projects.',
  },
]

export default function BlogPage() {
  const articlesRef = useRef(null)
  const qaRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Blog & Resources | Sri Ayyan Fabs Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Expert fabrication guides, cost breakdowns, and buying tips from Sri Ayyan Fabs — Bangalore\'s trusted aluminium and steel fabrication specialists.')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.06 }
    )
    ;[articlesRef, qaRef].forEach(r => { if (r.current) observer.observe(r.current) })
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
            <span>Blog</span>
          </nav>
          <h1 className="page-hero__title">Blog & Resources</h1>
          <p className="page-hero__sub">
            Fabrication guides, cost breakdowns, and expert buying tips — everything you need before starting your next project in Bangalore.
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="blog-section" ref={articlesRef}>
        <div className="container">
          <div className="blog-section__header reveal">
            <span className="section-label">Expert Articles</span>
            <h2 className="section-heading">Fabrication Guides & Insights</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              In-depth articles to help you make informed decisions on your fabrication projects.
            </p>
          </div>

          <div className="blog-grid">
            {articles.map((art, i) => (
              <article key={i} className={`blog-card reveal-scale delay-${(i % 3) + 1}`}>
                <div className="blog-card__pri">
                  <span>{String(art.pri).padStart(2, '0')}</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span className="blog-card__keyword">
                      <Tag size={11} strokeWidth={2.2} />
                      {art.keyword}
                    </span>
                  </div>
                  <h3 className="blog-card__title">{art.title}</h3>
                  <div className="blog-card__intent">
                    <Target size={12} strokeWidth={2} />
                    <span>{art.intent}</span>
                  </div>
                </div>
                <div className="blog-card__footer">
                  <span className="blog-card__coming">Coming Soon</span>
                  <BookOpen size={15} strokeWidth={1.8} className="blog-card__icon" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GBP Q&A */}
      <section className="blog-qa-section" ref={qaRef}>
        <div className="container">
          <div className="blog-qa__header reveal">
            <span className="section-label">Quick Answers</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Common questions answered directly — no back and forth needed.
            </p>
          </div>

          <div className="blog-qa__grid">
            {qaItems.map((item, i) => (
              <div key={i} className={`blog-qa-card reveal-scale delay-${(i % 2) + 1}`}>
                <div className="blog-qa-card__icon">
                  <MessageCircle size={20} strokeWidth={1.8} />
                </div>
                <div className="blog-qa-card__content">
                  <h3 className="blog-qa-card__q">{item.q}</h3>
                  <p className="blog-qa-card__a">{item.a}</p>
                </div>
                <CheckCircle2 size={18} strokeWidth={1.8} className="blog-qa-card__check" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </>
  )
}
