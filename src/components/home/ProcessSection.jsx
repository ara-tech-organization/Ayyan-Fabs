import { useEffect, useRef } from 'react'
import { MessageCircle, Wrench, Truck, Diamond } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    label: 'Design Consultation',
    copy: 'One-on-one consultation and on-site survey from project inception, ensuring your vision is captured with precision.',
  },
  {
    number: '02',
    icon: Wrench,
    label: 'Precision Fabrication',
    copy: 'Crafting with the finest branded components, superior glazing, and trusted hardware for top-notch quality results.',
  },
  {
    number: '03',
    icon: Truck,
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
          entry.target.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('visible'))
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="process-section" ref={sectionRef}>
      <div className="process-section__bg" />
      <div className="process-section__grid">
        {Array.from({ length: 20 }).map((_, i) => <span key={i} />)}
      </div>
      <div className="container">

        {/* Header */}
        <div className="process-header reveal">
          <div className="process-badge">
            <Diamond size={11} strokeWidth={2} />
            How We Work
          </div>
          <h2 className="process-title">
            The Sri Ayyan Fabs <span className="process-title__accent">Experience</span>
          </h2>
          <p className="process-subtitle">
            A seamless, professionally managed journey from initial concept to final perfection.
          </p>
        </div>

        {/* Timeline */}
        <div className="process-timeline">

          {/* Progress track line */}
          <div className="process-track">
            <div className="process-track__line" />
          </div>

          {/* Steps */}
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className={`process-step reveal-scale delay-${i + 1}`}>
                {/* Number badge sits on the line */}
                <div className="step-number">
                  <span>{step.number}</span>
                </div>

                {/* Card below */}
                <div className="step-card">
                  <div className="step-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                  <h3 className="step-label">{step.label}</h3>
                  <p className="step-copy">{step.copy}</p>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
