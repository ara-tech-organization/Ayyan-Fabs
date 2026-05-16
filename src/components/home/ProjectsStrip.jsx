import { useEffect, useRef } from 'react'

const g = (import.meta.env.BASE_URL || '/') + 'gallery/'

const featured = [
  { src: g + 'aluminium-window-frame-installation.jpg', label: 'Aluminium Window Frame' },
  { src: g + 'aluminium-office-partition.jpg',          label: 'Aluminium Office Partition' },
  { src: g + 'aluminium-glass-frame-design.jpg',        label: 'Aluminium Glass Frame' },
  { src: g + 'godrej-park-retreat-2024.jpg',            label: 'Godrej Park Retreat 2024' },
  { src: g + 'exterior-wall-cladding-panel.jpg',        label: 'Exterior Wall Cladding' },
  { src: g + 'acp-cladding-commercial-building.jpg',    label: 'ACP Cladding' },
  { src: g + 'glass-door-patch-fitting.jpg',            label: 'Glass Door Patch Fitting' },
  { src: g + 'frameless-glass-installation.jpg',        label: 'Frameless Glass' },
  { src: g + 'modern-ms-gate-design.jpg',               label: 'Modern MS Gate' },
  { src: g + 'metal-sheet-roofing-work.jpg',            label: 'Metal Sheet Roofing' },
  { src: g + 'custom-fabrication-work.jpg',             label: 'Custom Fabrication' },
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
