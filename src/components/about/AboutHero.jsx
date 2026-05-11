import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import heroBg from '../../assets/h2.png'

const stats = [
  ['1,000+', 'Projects Delivered'],
  ['800+', 'Clients Served'],
  ['10+', 'Years in Bangalore'],
  ['8', 'Core Services'],
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
          Built on Precision.<br />
          Grown on Trust.<br />
          Powered by Craftsmanship.
        </h1>
        <p className="about-hero__sub">
          Bangalore's precision fabrication specialists — built on engineering discipline, quality materials, and a culture of delivery.
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
