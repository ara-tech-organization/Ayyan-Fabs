import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import heroBg from '../../assets/h1.png'

export default function ProjectsHero() {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Projects</span>
        </nav>
        <h1 className="page-hero__title">Our Projects</h1>
        <p className="page-hero__sub">
          A showcase of fabrication work delivered across Bangalore — commercial, industrial, and residential.
        </p>
      </div>
    </section>
  )
}
