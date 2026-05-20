import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import heroBg from '../../assets/page-hero2.jpg'

export default function BlogHero() {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Blog</span>
        </nav>
        <h1 className="page-hero__title">Blog & Resources</h1>
        <p className="page-hero__sub">
          Fabrication guides, cost breakdowns, and expert buying tips — everything you need before starting your next project in Bangalore.
        </p>
      </div>
    </section>
  )
}
