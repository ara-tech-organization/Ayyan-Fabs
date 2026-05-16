import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ShieldCheck, Clock, Crosshair, BadgeDollarSign, Truck, Leaf, HeartHandshake, CheckCircle2 } from 'lucide-react'
import heroBg from '../assets/h1.png'

const features = [
  {
    icon: ShieldCheck,
    title: 'Superior Quality Guaranteed',
    desc: "We don't just build structures; we build trust through engineering perfection and premium materials.",
  },
  {
    icon: Clock,
    title: '21+ Years of Expertise',
    desc: 'A proven track record delivering 500+ successful projects across residential, commercial, and industrial sectors in and around Bangalore.',
  },
  {
    icon: Crosshair,
    title: 'Precision Craftsmanship',
    desc: 'Every weld, every cut, every installation is done with meticulous attention to detail.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Transparent Pricing',
    desc: 'Honest, competitive pricing with no hidden charges. We provide detailed quotations and stick to the agreed budget, always.',
  },
  {
    icon: Truck,
    title: 'Site-to-Site Service',
    desc: 'From initial site measurement to final installation and clean-up — we handle every step.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Materials',
    desc: 'We use recyclable aluminium, energy-efficient glazing, and low-VOC coatings — contributing to greener, sustainable buildings.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated After-Sales',
    desc: "Our relationship doesn't end at installation. We provide prompt warranty support and scheduled maintenance for every project.",
  },
]

const commitmentPoints = [
  'Advanced CNC Cutting Technology',
  'In-house Powder Coating Facility',
  'IS-Certified Structural Materials',
]


export default function WhyUsPage() {
  const sectionsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Why Choose Sri Ayyan Fabs | Quality Fabrication Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', '21+ years of expertise, 500+ projects, transparent pricing, precision craftsmanship — discover why clients trust Sri Ayyan Fabs for aluminium and glass fabrication.')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right').forEach(el => el.classList.add('visible'))
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
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Why Us</span>
          </nav>
          <p className="page-hero__tagline">Why Clients Trust Sri Ayyan Fabs</p>
          <h1 className="page-hero__title">The Advantage</h1>
          <p className="page-hero__sub">21+ years of reliability, precision, and architectural innovation.</p>
        </div>
      </section>

      {/* Key Features */}
      <section className="why-features" ref={addRef}>
        <div className="container">
          <div className="why-features__header reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-heading">What Sets Us Apart</h2>
          </div>
          <div className="why-features__grid">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <div key={i} className={`why-feature-card reveal-scale delay-${(i % 3) + 1}`}>
                  <div className="why-feature-card__icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                  <h3 className="why-feature-card__title">{f.title}</h3>
                  <p className="why-feature-card__desc">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="why-commitment" ref={addRef}>
        <div className="container">
          <div className="why-commitment__content reveal">
            <span className="section-label">Our Promise</span>
            <h2 className="why-commitment__heading">Our Commitment</h2>
            <p className="why-commitment__body">
              At Sri Ayyan Fabs, we are committed to providing the highest quality of service and products to our clients. Our team of experienced professionals works closely with you to ensure your project is completed to your satisfaction.
            </p>
            <ul className="why-commitment__list">
              {commitmentPoints.map((pt, i) => (
                <li key={i} className="why-commitment__item">
                  <CheckCircle2 size={18} strokeWidth={2.2} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  )
}
