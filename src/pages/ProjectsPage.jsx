import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Phone, X } from 'lucide-react'
import { img } from '../utils/imgPath'
import heroBg from '../assets/h1.png'

const projects = [
  { src: 'images/proj-c1.jpg', label: 'Commercial Facade' },
  { src: 'images/proj-a1.jpg', label: 'Aluminium Works' },
  { src: 'images/proj-p1.jpg', label: 'Patch Glass System' },
  { src: 'images/proj-g1.jpg', label: 'Gates & Grilles' },
  { src: 'images/proj-c2.jpg', label: 'ACP Cladding' },
  { src: 'images/proj-a2.jpg', label: 'Aluminium Facade' },
  { src: 'images/proj-p2.jpg', label: 'Frameless Glass' },
  { src: 'images/proj-g2.jpg', label: 'Metal Gate' },
  { src: 'images/proj-c3.jpg', label: 'Building Exterior' },
  { src: 'images/proj-a3.jpg', label: 'Window System' },
  { src: 'images/proj-p3.jpg', label: 'Glass Partition' },
  { src: 'images/proj-g3.jpg', label: 'Custom Fabrication' },
]

export default function ProjectsPage() {
  const gridRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Projects | Sri Ayyan Fabs Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Project gallery — Sri Ayyan Fabs. Aluminium fabrication, ACP cladding, frameless glass, MS steel and more across Bangalore.')

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
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Projects</span>
          </nav>
          <h1 className="page-hero__title">Our Projects</h1>
          <p className="page-hero__sub">
            A showcase of fabrication work delivered across Bangalore — commercial, industrial, and residential.
          </p>
        </div>
      </section>

      {/* Gallery */}
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
                <img src={img(p.src)} alt={p.label} loading="lazy" />
                <div className="proj-gallery__item-overlay">
                  <span className="proj-gallery__item-label">{p.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="proj-cta-section">
        <div className="container">
          <div className="proj-cta__inner">
            <div className="proj-cta__text">
              <h2 className="proj-cta__title">Want to see more relevant work?</h2>
              <p className="proj-cta__sub">Call us and we'll share photos of projects similar to your requirement.</p>
            </div>
            <div className="proj-cta__actions">
              <a href="tel:+918904038295" className="proj-cta__btn-primary">
                <Phone size={16} strokeWidth={2.2} />
                Call Now
              </a>
              <Link to="/contact" className="proj-cta__btn-secondary">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="proj-lightbox" onClick={() => setLightbox(null)}>
          <button className="proj-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={22} />
          </button>
          <button className="proj-lightbox__nav proj-lightbox__nav--prev" onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous">&#8249;</button>
          <div className="proj-lightbox__img-wrap" onClick={e => e.stopPropagation()}>
            <img src={img(projects[lightbox].src)} alt={projects[lightbox].label} />
            <p className="proj-lightbox__label">{projects[lightbox].label}</p>
          </div>
          <button className="proj-lightbox__nav proj-lightbox__nav--next" onClick={e => { e.stopPropagation(); next() }} aria-label="Next">&#8250;</button>
        </div>
      )}
    </>
  )
}
