import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Shield } from 'lucide-react'
import { brandCategories } from '../data/brandsData'
import heroBg from '../assets/h2.png'

export default function TrustedBrandsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Trusted Brands | Sri Ayyan Fabs — Industry-Leading Partners'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Trusted Brands</span>
          </nav>
          <p className="page-hero__tagline">Our Industry-Leading Partners</p>
          <h1 className="page-hero__title">Trusted Brands</h1>
          <p className="page-hero__sub">
            We partner exclusively with certified, industry-leading brands to deliver fabrication solutions built on quality, durability, and long-term trust.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="tb-intro">
        <div className="container">
          <div className="tb-intro__inner">
            <div className="tb-intro__badge">
              <Shield size={14} />
              Quality Assured
            </div>
            <h2 className="tb-intro__heading">Built on Trust, Backed by the Best</h2>
            <p className="tb-intro__sub">
              Every project we deliver is powered by industry-leading brands — chosen for their performance, durability, and innovation across structural steel, glass, aluminium, hardware, and finishing systems.
            </p>
          </div>
        </div>
      </section>

      {/* Brand categories */}
      <section className="tb-section">
        <div className="container">
          {brandCategories.map((cat, i) => (
            <div key={i} className="tb-category">
              <div className="tb-category__head">
                <span className="tb-category__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="tb-category__label">{cat.category}</h3>
              </div>
              <div className="tb-marquee-wrap">
                <div className="tb-marquee">
                  {(() => { const min = Math.ceil(8 / cat.brands.length); const arr = Array.from({ length: min * 2 }, (_, i) => cat.brands[i % cat.brands.length]); return arr })().map((brand, j) => (
                    <div key={j} className="tb-logo-card">
                      <img src={brand.logo} alt={brand.name} loading="lazy" />
                      <span className="tb-logo-card__name">{brand.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
