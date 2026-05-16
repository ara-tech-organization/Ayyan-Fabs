import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import heroBg from '../../assets/h2.png'

const stats = [
  ['21+', 'Years Experience'],
  ['500+', 'Projects Completed'],
  ['300+', 'Clients Served'],
  ['100%', 'Satisfaction Rate'],
]

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
        <div className="about-hero__stats">
          {stats.map(([num, label]) => (
            <div key={label} className="about-hero__stat">
              <span className="about-hero__stat-num">{num}</span>
              <span className="about-hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
