import { useEffect, useRef } from 'react'
import { img } from '../utils/imgPath'

const featured = [
  { src: 'images/proj-c1.jpg', label: 'Commercial Facade' },
  { src: 'images/proj-a2.jpg', label: 'Aluminium Works' },
  { src: 'images/proj-g1.jpg', label: 'Gates & Grilles' },
  { src: 'images/proj-p2.jpg', label: 'Frameless Glass' },
  { src: 'images/proj-c3.jpg', label: 'ACP Cladding' },
  { src: 'images/proj-a1.jpg', label: 'Aluminium Facade' },
  { src: 'images/proj-p1.jpg', label: 'Patch Glass System' },
  { src: 'images/proj-g2.jpg', label: 'Metal Gate' },
  { src: 'images/proj-c2.jpg', label: 'Building Exterior' },
  { src: 'images/proj-p3.jpg', label: 'Glass Partition' },
  { src: 'images/proj-g3.jpg', label: 'Custom Fabrication' },
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
              <img src={img(p.src)} alt={p.label} loading="lazy" />
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
