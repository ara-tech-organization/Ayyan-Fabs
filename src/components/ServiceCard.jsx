import { Link } from 'react-router-dom'
import { ArrowRight, Frame, Layers, Grid3x3, DoorOpen, Building2, ShieldCheck, Wrench, Fence } from 'lucide-react'

const iconMap = { Frame, Layers, Grid3x3, DoorOpen, Building2, ShieldCheck, Wrench, Fence }

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || Wrench
  return (
    <article className={`service-card reveal-scale delay-${(index % 4) + 1}`}>
      <div className="service-card__icon">
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.cardDesc}</p>
      <Link to={`/services/${service.slug}`} className="service-card__cta" aria-label={`Learn more about ${service.title}`}>
        <span>Learn More</span>
        <ArrowRight size={14} />
      </Link>
    </article>
  )
}
