import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import heroBg from '../../assets/h2.png'

export default function AboutHero() {
  return (
    <section className="about-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>About Us</span>
        </nav>
        <h1 className="about-hero__title">
          Engineering Excellence<br />
          &amp; Premium Craftsmanship
        </h1>
        <p className="about-hero__sub">
          Leading the industry in modern aluminium fabrication and structural solutions since 21+ years.
        </p>
      </div>
    </section>
  )
}
