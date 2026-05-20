import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import heroBg from '../../assets/page-hero1.jpg'

export default function IndustriesHero() {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Trusted Brands</span>
        </nav>
        <h1 className="page-hero__title">Our Trusted Brand Partners</h1>
        <p className="page-hero__sub">
          We collaborate with industry-leading brands to ensure quality, durability, and performance at every stage of fabrication and installation.
        </p>
      </div>
    </section>
  )
}
