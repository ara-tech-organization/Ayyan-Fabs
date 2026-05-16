import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { brandCategories } from '../data/brandsData'
import heroBg from '../assets/h2.png'

export default function TrustedBrandsPage() {
  const sectionsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Trusted Brands | Sri Ayyan Fabs — Industry-Leading Partners'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Sri Ayyan Fabs works with industry-leading brands — Tata Steel, Jindal, AIS Glass, Hilti, Bosch, Interpon and more for premium fabrication quality.')

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
            <span>Trusted Brands</span>
          </nav>
          <p className="page-hero__tagline">Our Industry-Leading Partners</p>
          <h1 className="page-hero__title">Trusted Brands</h1>
        </div>
      </section>

      {/* Brands section */}
      <section className="brands-section" ref={addRef}>
        <div className="container">
          <div className="brands-section__header reveal">
            <h2 className="brands-section__heading">Our Trusted Brand Partners</h2>
            <p className="brands-section__sub">
              We collaborate with industry-leading brands to ensure quality, durability, and performance at every stage of fabrication and installation.
            </p>
          </div>

          <div className="brands-grid">
            {brandCategories.map((cat, i) => (
              <div key={i} className={`brands-category reveal delay-${(i % 3) + 1}`}>
                <h3 className="brands-category__label">{cat.category}</h3>
                <div className="brands-category__chips">
                  {cat.brands.map((brand, j) => (
                    <span key={j} className="brand-chip">{brand}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
