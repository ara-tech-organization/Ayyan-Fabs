import {
  Wrench, Handshake, Lightbulb, ClipboardCheck, Award,
  Factory, Ruler, Zap, FileText, BadgeCheck, Receipt,
} from 'lucide-react'
import { values } from '../../data/aboutData'

const iconMap = {
  Wrench, Handshake, Lightbulb, ClipboardCheck, Award,
  Factory, Ruler, Zap, FileText, BadgeCheck, Receipt,
}

export default function AboutValues({ addRef }) {
  return (
    <section className="about-values" ref={addRef}>
      <div className="container">
        <div className="about-values__header reveal">
          <span className="section-label">What We Stand For</span>
          <h2 className="section-heading">Core Values</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            The principles that guide every project we take on.
          </p>
        </div>
        <div className="about-values__grid">
          {values.map((v, i) => {
            const Icon = iconMap[v.icon] || Award
            return (
              <div key={i} className={`about-value-card reveal-scale delay-${i + 1}`}>
                <div className="about-value-card__num">0{i + 1}</div>
                <div className="about-value-card__icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__desc">{v.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
