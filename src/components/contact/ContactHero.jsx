import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import heroBg from '../../assets/page-hero3.jpg'

export default function ContactHero() {
  return (
    <section className="contact-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Contact</span>
        </nav>
        <p className="page-hero__tagline">Connect With Excellence</p>
        <h1 className="contact-hero__title">Contact Lounge</h1>
        <p className="contact-hero__sub">
          Experience world-class fabrication consulting in our digital lounge. Let's build your vision into reality.
        </p>
      </div>
    </section>
  )
}
