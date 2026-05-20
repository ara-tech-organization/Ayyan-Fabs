import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import heroBg from '../../assets/page-hero2.jpg'

export default function TestimonialsHero() {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Testimonials</span>
        </nav>
        <h1 className="page-hero__title">What Our Clients Say</h1>
        <p className="page-hero__sub">
          1,000+ projects delivered. 800+ clients served. Here is what some of them have to say.
        </p>
      </div>
    </section>
  )
}
