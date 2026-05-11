import { useEffect, useRef } from 'react'
import projC1 from '../../assets/proj-c1.jpg'
import projA2 from '../../assets/proj-a2.jpg'
import projG1 from '../../assets/proj-g1.jpg'
import projP2 from '../../assets/proj-p2.jpg'
import projC3 from '../../assets/proj-c3.jpg'
import projA1 from '../../assets/proj-a1.jpg'
import projP1 from '../../assets/proj-p1.jpg'
import projG2 from '../../assets/proj-g2.jpg'
import projC2 from '../../assets/proj-c2.jpg'
import projP3 from '../../assets/proj-p3.jpg'
import projG3 from '../../assets/proj-g3.jpg'

const featured = [
  { src: projC1, label: 'Commercial Facade' },
  { src: projA2, label: 'Aluminium Works' },
  { src: projG1, label: 'Gates & Grilles' },
  { src: projP2, label: 'Frameless Glass' },
  { src: projC3, label: 'ACP Cladding' },
  { src: projA1, label: 'Aluminium Facade' },
  { src: projP1, label: 'Patch Glass System' },
  { src: projG2, label: 'Metal Gate' },
  { src: projC2, label: 'Building Exterior' },
  { src: projP3, label: 'Glass Partition' },
  { src: projG3, label: 'Custom Fabrication' },
]

export default function ProjectsStrip() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-scale').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="proj-strip-section">
      <div className="container">
        <div className="proj-strip__header">
          <div className="proj-strip__header-left">
            <span className="section-label">Our Work</span>
            <h2 className="section-heading">Projects We're Proud Of</h2>
            <p className="section-sub proj-strip__sub">Fabrication delivered across Bangalore — on time, on spec, and built to last.</p>
          </div>
        </div>
        <div className="proj-strip__grid" ref={ref}>
          {featured.map((p, i) => (
            <div
              key={i}
              className={`proj-strip__item reveal-scale delay-${(i % 4) + 1}`}
              aria-label={p.label}
            >
              <img src={p.src} alt={p.label} loading="lazy" />
              <div className="proj-strip__item-overlay">
                <span>{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
