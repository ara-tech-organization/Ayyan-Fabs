import { Link } from 'react-router-dom'
import { ArrowRight, Frame, Layers, Grid3x3, DoorOpen, Wrench, Fence } from 'lucide-react'

const iconMap = { Frame, Layers, Grid3x3, DoorOpen, Wrench, Fence }

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || Wrench
  const num = String(index + 1).padStart(2, '0')

  return (
    <article className={`svc-card reveal-scale delay-${(index % 3) + 1}`}>
      <Link to={`/services/${service.slug}`} className="svc-card__inner" aria-label={`Explore ${service.title}`}>

        <div className="svc-card__top">
          <div className="svc-card__icon">
            <Icon size={20} strokeWidth={1.8} />
          </div>
          <span className="svc-card__num">{num}</span>
        </div>

        <h3 className="svc-card__title">{service.title}</h3>
        <p className="svc-card__desc">{service.cardDesc}</p>

        <div className="svc-card__cta">
          <span>Explore Service</span>
          <ArrowRight size={14} />
        </div>

      </Link>
    </article>
  )
}
