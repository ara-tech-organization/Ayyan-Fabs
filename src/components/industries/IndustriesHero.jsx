import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import heroBg from '../../assets/h1.png'

export default function IndustriesHero() {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Industries & FAQ</span>
        </nav>
        <h1 className="page-hero__title">Industries & Frequently Asked Questions</h1>
        <p className="page-hero__sub">
          Every sector. Every question. One trusted fabrication partner in Bangalore.
        </p>
      </div>
    </section>
  )
}
