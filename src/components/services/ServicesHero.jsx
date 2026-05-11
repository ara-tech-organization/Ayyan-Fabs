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
        <h1 className="page-hero__title">Our Fabrication Services</h1>
        <p className="page-hero__sub">
          Eight core capabilities. One unified standard of precision. From aluminium glazing to structural steel —
          Sri Ayyan Fabs delivers fabrication that performs and lasts.
        </p>
      </div>
    </section>
  )
}
