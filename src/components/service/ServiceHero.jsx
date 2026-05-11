import { Link } from 'react-router-dom'
import { ChevronRight, Shield, Clock, Star } from 'lucide-react'

const trustBadges = [
  { icon: Shield, label: 'Quality Guaranteed' },
  { icon: Clock,  label: '2-Hour Response' },
  { icon: Star,   label: '1000+ Projects' },
]

export default function ServiceHero({ service, heroBg }) {
  return (
    <section className="svc-hero" style={{ '--svc-bg': `url(${heroBg})` }}>
      <div className="container">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/services">Services</Link>
          <ChevronRight size={14} />
          <span>{service.title}</span>
        </nav>
        <h1 className="svc-hero__title">{service.title}</h1>
        <p className="svc-hero__desc">{service.cardDesc}</p>
        <div className="svc-hero__badges">
          {trustBadges.map((b, i) => {
            const Icon = b.icon
            return (
              <div key={i} className="svc-hero__badge">
                <Icon size={14} strokeWidth={2.2} />
                <span>{b.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
