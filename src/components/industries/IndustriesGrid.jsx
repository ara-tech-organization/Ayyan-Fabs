import { Building2, Factory, Home, ShoppingBag, HeartPulse, BookOpen, HardHat, Zap } from 'lucide-react'
import { industries } from '../../data/aboutData'

const iconMap = { Building2, Factory, Home, ShoppingBag, HeartPulse, BookOpen, HardHat, Zap }

export default function IndustriesGrid({ addRef }) {
  return (
    <section className="ind-page-section" ref={addRef}>
      <div className="container">
        <div className="ind-page__header reveal">
          <span className="section-label">Who We Serve</span>
          <h2 className="section-heading">Industries We Serve</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            From commercial towers to factory floors — Sri Ayyan Fabs delivers precision fabrication across every sector that builds Bangalore.
          </p>
        </div>
        <div className="ind-page__grid">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon] || Building2
            return (
              <div key={i} className={`ind-page-card reveal-scale delay-${(i % 4) + 1}`}>
                <div className="ind-page-card__icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="ind-page-card__name">{ind.name}</h3>
                <div className="ind-page-card__row">
                  <span className="ind-page-card__tag">Key Needs</span>
                  <p className="ind-page-card__val">{ind.needs}</p>
                </div>
                <div className="ind-page-card__divider" />
                <div className="ind-page-card__row">
                  <span className="ind-page-card__tag ind-page-card__tag--blue">Our Solution</span>
                  <p className="ind-page-card__val ind-page-card__val--blue">{ind.solution}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
