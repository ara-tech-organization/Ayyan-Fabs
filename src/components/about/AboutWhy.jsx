import {
  Wrench, Handshake, Lightbulb, ClipboardCheck, Award,
  Factory, Ruler, Zap, FileText, BadgeCheck, Receipt,
} from 'lucide-react'
import { differentiators } from '../../data/aboutData'

const iconMap = {
  Wrench, Handshake, Lightbulb, ClipboardCheck, Award,
  Factory, Ruler, Zap, FileText, BadgeCheck, Receipt,
}

export default function AboutWhy({ addRef }) {
  return (
    <section className="about-why" ref={addRef}>
      <div className="container">
        <div className="about-why__header reveal">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-heading">The Sri Ayyan Fabs Difference</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Every fabricator claims quality. Here is what actually sets us apart.
          </p>
        </div>
        <div className="about-why__grid">
          {differentiators.map((d, i) => {
            const Icon = iconMap[d.icon] || BadgeCheck
            return (
              <div key={i} className={`about-why-card reveal delay-${(i % 3) + 1}`}>
                <div className="about-why-card__top">
                  <div className="about-why-card__icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <span className="about-why-card__num">{i + 1}</span>
                </div>
                <h3 className="about-why-card__title">{d.heading}</h3>
                <p className="about-why-card__body">{d.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
