import { useEffect, useRef } from 'react'
import { MapPin, Factory, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    number: '01',
    label: 'Design Consultation',
    copy: 'One-on-one consultation and on-site survey from project inception, ensuring your vision is captured with precision.',
  },
  {
    icon: Factory,
    number: '02',
    label: 'Precision Fabrication',
    copy: 'Crafting with the finest branded components, superior glazing, and trusted hardware for top-notch quality results.',
  },
  {
    icon: PackageCheck,
    number: '03',
    label: 'Delivery & Installation',
    copy: 'Each product is individually wrapped, safely delivered, and professionally installed by our expert team on-site.',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
            el.classList.add('visible')
          })
        }
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="process-section" ref={sectionRef}>
      <div className="container">
        <div className="process-header reveal">
          <span className="section-label">How We Work</span>
          <h2 className="section-heading">The Sri Ayyan Fabs Experience</h2>
          <p className="section-sub">
            A seamless, professionally managed journey from initial concept to final perfection.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className={`process-card reveal delay-${i + 1}`}>
                <div className="process-card__top">
                  <div className="process-card__number">{step.number}</div>
                  <div className="process-card__icon">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                </div>
                <div className="process-card__connector" aria-hidden="true" />
                <h3 className="process-card__label">
                  <span className="process-card__step-tag">Step {step.number}</span>
                  {step.label}
                </h3>
                <p className="process-card__copy">{step.copy}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
