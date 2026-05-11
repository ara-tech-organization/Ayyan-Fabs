import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import heroBg from '../../assets/h3.png'

export default function ContactHero() {
  return (
    <section className="contact-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Contact</span>
        </nav>
        <h1 className="contact-hero__title">
          Let's Build Something<br />Exceptional Together
        </h1>
        <p className="contact-hero__sub">
          Whether you have detailed drawings or just an idea — reach out. Our team responds within 2 hours during business hours.
        </p>
      </div>
    </section>
  )
}
