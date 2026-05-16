import { useState, useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, MapPin, Tag, Calendar, Images, CheckCircle } from 'lucide-react'
import { projectsByYear, allYears, categoryColors } from '../../data/projectsData'

const ALL = 'All'

function CategoryBadge({ category }) {
  const style = categoryColors[category] || { bg: 'rgba(100,116,139,0.1)', color: '#64748b' }
  return (
    <span className="proj-badge" style={{ background: style.bg, color: style.color }}>
      {category}
    </span>
  )
}

function ProjectModal({ project, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="proj-modal-overlay" onClick={onClose}>
      <div className="proj-modal" onClick={e => e.stopPropagation()}>

        <div className="proj-modal__img-wrap">
          <img src={project.img} alt={project.name} className="proj-modal__img" />
          <div className="proj-modal__img-nav">
            <button className="proj-modal__nav-btn" onClick={onPrev} aria-label="Previous project">
              <ChevronLeft size={20} />
            </button>
            <button className="proj-modal__nav-btn" onClick={onNext} aria-label="Next project">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="proj-modal__body">
          <button className="proj-modal__close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>

          <div className="proj-modal__meta">
            <span className="proj-modal__status">
              <CheckCircle size={13} />
              Completed Project — {project.year}
            </span>
          </div>

          <div className="proj-modal__tags">
            <CategoryBadge category={project.category} />
            <span className="proj-modal__year">
              <Calendar size={12} />
              {project.year}
            </span>
            <span className="proj-modal__photos">
              <Images size={12} />
              {project.photos} {project.photos === 1 ? 'Photo' : 'Photos'}
            </span>
          </div>

          <h2 className="proj-modal__title">{project.name}</h2>
          <p className="proj-modal__desc">{project.desc}</p>

          {project.captions && (
            <div className="proj-modal__captions">
              <span className="proj-modal__captions-label">View Highlights</span>
              <div className="proj-modal__captions-grid">
                {project.captions.map((cap, i) => (
                  <span key={i} className="proj-modal__caption-tag">{cap}</span>
                ))}
              </div>
            </div>
          )}

          <div className="proj-modal__footer">
            <span className="proj-modal__loc"><MapPin size={13} />Bangalore, Karnataka</span>
            <span className="proj-modal__fab"><Tag size={13} />Sri Ayyan Fabs · GSTIN 29AIYPR5034K1ZC</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsGallery() {
  const [activeYear, setActiveYear] = useState(ALL)
  const [modal, setModal] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .proj-masonry__item').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.04 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.reveal, .proj-masonry__item').forEach(el => el.classList.add('visible'))
    }
  }, [activeYear])

  const filtered = activeYear === ALL
    ? projectsByYear
    : projectsByYear.filter(y => y.year === activeYear)

  const flatProjects = filtered.flatMap(y =>
    y.projects.map(p => ({ ...p, year: y.year }))
  )

  const totalProjects = projectsByYear.reduce((acc, y) => acc + y.projects.length, 0)

  const prevModal = () => setModal(m => ({ ...m, idx: (m.idx - 1 + flatProjects.length) % flatProjects.length }))
  const nextModal = () => setModal(m => ({ ...m, idx: (m.idx + 1) % flatProjects.length }))

  return (
    <>
      <section className="proj-masonry-section" ref={sectionRef}>
        <div className="container">

          {/* Header */}
          <div className="proj-masonry__header reveal">
            <span className="section-label">Legacy Roadmap</span>
            <h2 className="section-heading">Fabricating Dreams Since 2008</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              {totalProjects}+ projects delivered across Bangalore — residential, commercial, industrial and institutional.
            </p>
          </div>

          {/* Year filter */}
          <div className="proj-year-filters reveal">
            <button
              className={`proj-year-btn${activeYear === ALL ? ' proj-year-btn--active' : ''}`}
              onClick={() => setActiveYear(ALL)}
            >
              All Years
            </button>
            {allYears.map(year => (
              <button
                key={year}
                className={`proj-year-btn${activeYear === year ? ' proj-year-btn--active' : ''}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="proj-masonry">
            {flatProjects.map((project, i) => (
              <button
                key={`${project.year}-${i}`}
                className="proj-masonry__item"
                onClick={() => setModal({ idx: i })}
                aria-label={`View ${project.name}`}
              >
                <img src={project.img} alt={project.name} loading="lazy" />
                <div className="proj-masonry__overlay">
                  <div className="proj-masonry__overlay-content">
                    <CategoryBadge category={project.category} />
                    <h3 className="proj-masonry__name">{project.name}</h3>
                    <span className="proj-masonry__year">{project.year}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {modal && (
        <ProjectModal
          project={flatProjects[modal.idx]}
          onClose={() => setModal(null)}
          onPrev={prevModal}
          onNext={nextModal}
        />
      )}
    </>
  )
}
