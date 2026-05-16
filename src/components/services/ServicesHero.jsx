import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import heroBg from '../../assets/h3.png'

export default function ServicesHero() {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Services</span>
        </nav>
        <p className="page-hero__tagline">Precision &amp; Engineering Excellence</p>
        <h1 className="page-hero__title">Our Services</h1>
        <p className="page-hero__sub">
          Delivering high-end structural glazing and aluminium solutions with world-class craftsmanship.
        </p>
      </div>
    </section>
  )
}
