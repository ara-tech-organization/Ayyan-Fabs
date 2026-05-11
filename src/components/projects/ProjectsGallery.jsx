import { useRef, useState, useEffect } from 'react'
import { X } from 'lucide-react'
import projC1 from '../../assets/proj-c1.jpg'
import projA1 from '../../assets/proj-a1.jpg'
import projP1 from '../../assets/proj-p1.jpg'
import projG1 from '../../assets/proj-g1.jpg'
import projC2 from '../../assets/proj-c2.jpg'
import projA2 from '../../assets/proj-a2.jpg'
import projP2 from '../../assets/proj-p2.jpg'
import projG2 from '../../assets/proj-g2.jpg'
import projC3 from '../../assets/proj-c3.jpg'
import projA3 from '../../assets/proj-a3.jpg'
import projP3 from '../../assets/proj-p3.jpg'
import projG3 from '../../assets/proj-g3.jpg'

const projects = [
  { src: projC1, label: 'Commercial Facade' },
  { src: projA1, label: 'Aluminium Works' },
  { src: projP1, label: 'Patch Glass System' },
  { src: projG1, label: 'Gates & Grilles' },
  { src: projC2, label: 'ACP Cladding' },
  { src: projA2, label: 'Aluminium Facade' },
  { src: projP2, label: 'Frameless Glass' },
  { src: projG2, label: 'Metal Gate' },
  { src: projC3, label: 'Building Exterior' },
  { src: projA3, label: 'Window System' },
  { src: projP3, label: 'Glass Partition' },
  { src: projG3, label: 'Custom Fabrication' },
]

export default function ProjectsGallery() {
  const gridRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)

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
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setLightbox(null) }
    if (lightbox !== null) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightbox])

  const prev = () => setLightbox(l => (l - 1 + projects.length) % projects.length)
  const next = () => setLightbox(l => (l + 1) % projects.length)

  return (
    <>
      <section className="proj-gallery-section">
        <div className="container">
          <div className="proj-gallery__header">
            <span className="section-label">Our Work</span>
            <h2 className="section-heading">1,000+ Projects Delivered</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              From aluminium shopfronts to structural steel — real projects completed across Bangalore.
            </p>
          </div>
          <div className="proj-gallery__grid" ref={gridRef}>
            {projects.map((p, i) => (
              <button
                key={i}
                className={`proj-gallery__item reveal-scale delay-${(i % 4) + 1}`}
                onClick={() => setLightbox(i)}
                aria-label={`View ${p.label}`}
              >
                <img src={p.src} alt={p.label} loading="lazy" />
                <div className="proj-gallery__item-overlay">
                  <span className="proj-gallery__item-label">{p.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="proj-lightbox" onClick={() => setLightbox(null)}>
          <button className="proj-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={22} />
          </button>
          <button
            className="proj-lightbox__nav proj-lightbox__nav--prev"
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <div className="proj-lightbox__img-wrap" onClick={e => e.stopPropagation()}>
            <img src={projects[lightbox].src} alt={projects[lightbox].label} />
            <p className="proj-lightbox__label">{projects[lightbox].label}</p>
          </div>
          <button
            className="proj-lightbox__nav proj-lightbox__nav--next"
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  )
}
