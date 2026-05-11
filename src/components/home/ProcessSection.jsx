import { useEffect, useRef } from 'react'
import { MapPin, FileText, Factory, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    number: '01',
    label: 'Site Survey & Consultation',
    copy: 'We begin with a free site visit to understand your requirements in detail — structural conditions, aesthetic goals, budget parameters, and timeline expectations. We don\'t quote from photos; we assess from site.',
  },
  {
    icon: FileText,
    number: '02',
    label: 'Design, Material Selection & Quotation',
    copy: 'Our engineering team prepares fabrication drawings and a detailed Bill of Materials with branded components. You receive a transparent, itemised quotation — no vague estimates. Changes? We revise until you\'re fully aligned.',
  },
  {
    icon: Factory,
    number: '03',
    label: 'Workshop Fabrication',
    copy: 'Manufacturing begins only after drawing approval. Every component is cut, formed, and welded in our own fabrication yard using CNC machinery, calibrated welding equipment, and branded materials. We don\'t outsource fabrication — ever.',
  },
  {
    icon: PackageCheck,
    number: '04',
    label: 'Delivery, Installation & Handover',
    copy: 'Completed components are individually protected and transported to site. Our trained installation team handles the fit-out to precise tolerances. We don\'t hand over until every joint is perfect, every surface is clean, and you\'ve signed off on satisfaction.',
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
          <h2 className="section-heading">How We Deliver Every Project — 4 Precise Steps</h2>
          <p className="section-sub">
            From first call to final installation, our process is built for clarity, speed, and zero surprises.
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
