import { Link } from 'react-router-dom'
import { ArrowRight, Frame, Layers, Grid3x3, DoorOpen, Building2, ShieldCheck, Wrench, Fence } from 'lucide-react'

const iconMap = { Frame, Layers, Grid3x3, DoorOpen, Building2, ShieldCheck, Wrench, Fence }

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || Wrench
  return (
    <article className={`service-card reveal-scale delay-${(index % 4) + 1}`}>
      {service.image && (
        <div className="service-card__img-wrap">
          <img src={service.image} alt={service.title} className="service-card__img" loading="lazy" />
          <div className="service-card__img-overlay" />
          <div className="service-card__icon-badge">
            <Icon size={20} strokeWidth={1.8} />
          </div>
        </div>
      )}
      {!service.image && (
        <div className="service-card__icon">
          <Icon size={26} strokeWidth={1.8} />
        </div>
      )}
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.cardDesc}</p>
        <Link to={`/services/${service.slug}`} className="service-card__cta" aria-label={`Explore ${service.title}`}>
          <span>Explore Service</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}
