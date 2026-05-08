import { useEffect, useRef } from 'react'
import {
  Frame, Building2, Grid3x3, Wrench,
  ShieldCheck, DoorOpen, Layers, Fence,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Frame,
    title: 'Aluminium Windows & Doors',
    desc: 'Precision-engineered aluminium frame systems with powder coat finish, thermal break profiles, and multi-point locking.',
  },
  {
    icon: Building2,
    title: 'MS Steel Structures',
    desc: 'Heavy-duty mild steel structural frameworks, mezzanine floors, and industrial-grade steel fabrication.',
  },
  {
    icon: Grid3x3,
    title: 'Glass Partition Systems',
    desc: 'Full-height and modular glass partitions using tempered/laminated glass with aluminium or stainless steel framing.',
  },
  {
    icon: Wrench,
    title: 'Stainless Steel Works',
    desc: 'Mirror and matte-finish SS fabrication for railings, counters, kitchen systems, and architectural elements.',
  },
  {
    icon: ShieldCheck,
    title: 'UPVC Window Systems',
    desc: 'Multi-chamber UPVC profiles with thermal insulation, UV resistance, and noise reduction for residential projects.',
  },
  {
    icon: DoorOpen,
    title: 'MS Grills & Gates',
    desc: 'Custom-designed mild steel grills, compound gates, and security shutters with anti-corrosion primer finish.',
  },
  {
    icon: Layers,
    title: 'Cladding & Wall Panels',
    desc: 'ACP, HPL, and aluminium composite cladding systems for commercial facades and interior feature walls.',
  },
  {
    icon: Fence,
    title: 'Handrails & Balustrades',
    desc: 'Engineered stainless steel, aluminium, and MS handrail systems for staircases, balconies, and ramps.',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach(el => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="container">
        <div className="services-header">
          <div className="reveal">
            <span className="section-label">Our Capabilities</span>
            <h2 className="section-heading">What We Build Best</h2>
            <p className="section-sub">
              Eight core fabrication capabilities. One unified standard — excellence at every joint, weld, and finish.
              Sri Ayyan Fabs brings precision engineering to every structure we touch.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <article
                key={i}
                className={`service-card reveal-scale delay-${(i % 4) + 1}`}
              >
                <div className="service-card__icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="service-card__title">{svc.title}</h3>
                <p className="service-card__desc">{svc.desc}</p>
                <a href="#quote-form" className="service-card__cta" aria-label={`Get quote for ${svc.title}`}>
                  <span>Get Quote</span>
                  <ArrowRight size={14} />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
