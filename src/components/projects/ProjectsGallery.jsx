import { useState, useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, MapPin, Tag, Calendar, Images, CheckCircle, ArrowUpRight } from 'lucide-react'
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

function ProjectModal({ project, onClose }) {
  const [photoIdx, setPhotoIdx] = useState(0)
  const hasPhotos = project.imgs && project.imgs.length > 0
  const total = hasPhotos ? project.imgs.length : 0

  useEffect(() => {
    setPhotoIdx(0)
  }, [project])

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPhotos) setPhotoIdx(i => (i - 1 + total) % total)
      if (e.key === 'ArrowRight' && hasPhotos) setPhotoIdx(i => (i + 1) % total)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, hasPhotos, total])

  const catStyle = categoryColors[project.category] || { bg: 'rgba(100,116,139,0.1)', color: '#64748b' }

  return (
    <div className="proj-modal-overlay" onClick={onClose}>
      <div className="proj-modal" onClick={e => e.stopPropagation()}>
        <button className="proj-modal__close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {/* Photo gallery */}
        {hasPhotos ? (
          <div className="proj-modal__gallery">
            <img
              src={project.imgs[photoIdx]}
              alt={project.name}
              className="proj-modal__gallery-img"
            />
            {project.logo && (
              <div className="proj-modal__img-logo">
                <img src={project.logo} alt="" />
              </div>
            )}
            {total > 1 && (
              <>
                <button
                  className="proj-modal__gal-btn proj-modal__gal-btn--prev"
                  onClick={() => setPhotoIdx(i => (i - 1 + total) % total)}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="proj-modal__gal-btn proj-modal__gal-btn--next"
                  onClick={() => setPhotoIdx(i => (i + 1) % total)}
                >
                  <ChevronRight size={20} />
                </button>
                <div className="proj-modal__gal-counter">{photoIdx + 1} / {total}</div>
              </>
            )}
          </div>
        ) : (
          <div className="proj-modal__img-placeholder" style={{ background: catStyle.bg }}>
            {project.logo && <img src={project.logo} alt="" className="proj-modal__placeholder-logo" />}
          </div>
        )}

        {/* Thumbnail strip */}
        {total > 1 && (
          <div className="proj-modal__thumbs">
            {project.imgs.map((src, i) => (
              <button
                key={i}
                className={`proj-modal__thumb-btn${i === photoIdx ? ' proj-modal__thumb-btn--active' : ''}`}
                onClick={() => setPhotoIdx(i)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}

        <div className="proj-modal__body">
          <div className="proj-modal__tags">
            <CategoryBadge category={project.category} />
            <span className="proj-modal__year"><Calendar size={12} />{project.year}</span>
            {total > 0 && (
              <span className="proj-modal__photos"><Images size={12} />{total} {total === 1 ? 'Photo' : 'Photos'}</span>
            )}
          </div>
          <div className="proj-modal__meta">
            <span className="proj-modal__status">
              <CheckCircle size={13} />
              Completed — {project.year}
            </span>
          </div>
          <h2 className="proj-modal__title">{project.name}</h2>
          <p className="proj-modal__desc">{project.desc}</p>
          {project.captions && (
            <div className="proj-modal__captions">
              <span className="proj-modal__captions-label">View Highlights</span>
              <div className="proj-modal__captions-grid">
                {project.captions.map((cap, i) => <span key={i} className="proj-modal__caption-tag">{cap}</span>)}
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
      entries => entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.04 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered = activeYear === ALL
    ? projectsByYear
    : projectsByYear.filter(y => y.year === activeYear)

  const flatProjects = filtered.flatMap(y => y.projects.map(p => ({ ...p, year: y.year })))
  const allFlat = projectsByYear.flatMap(y => y.projects.map(p => ({ ...p, year: y.year })))
  const totalProjects = allFlat.length

  const seenLogos = new Set()

  return (
    <>
      <section className="proj-premium-section" ref={sectionRef}>
        <div className="container">

          {/* Header */}
          <div className="proj-premium__header reveal">
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
            >All Years</button>
            {allYears.map(year => (
              <button
                key={year}
                className={`proj-year-btn${activeYear === year ? ' proj-year-btn--active' : ''}`}
                onClick={() => setActiveYear(year)}
              >{year}</button>
            ))}
          </div>

          {/* Premium card grid */}
          <div className="proj-premium-grid reveal">
            {flatProjects.map((project, i) => {
              const showLogo = project.logo && !seenLogos.has(project.logo)
              if (project.logo) seenLogos.add(project.logo)
              const catStyle = categoryColors[project.category] || { bg: 'rgba(100,116,139,0.1)', color: '#64748b' }
              return (
                <button
                  key={`${project.year}-${i}`}
                  className="proj-pcard"
                  onClick={() => setModal({ idx: i })}
                  aria-label={`View ${project.name}`}
                  style={{ '--cat-color': catStyle.color }}
                >
                  <div className="proj-pcard__logo-area">
                    {project.img ? (
                      <>
                        <img src={project.img} alt={project.name} className="proj-pcard__thumb" />
                        {project.logo && (
                          <div className="proj-pcard__logo-pill">
                            <img src={project.logo} alt="" className="proj-pcard__logo-img" />
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="proj-pcard__placeholder" style={{ background: catStyle.bg }}>
                        {project.logo && <img src={project.logo} alt="" className="proj-pcard__placeholder-logo" />}
                      </div>
                    )}
                  </div>

                  <div className="proj-pcard__body">
                    <div className="proj-pcard__top">
                      <span className="proj-pcard__cat" style={{ background: catStyle.bg, color: catStyle.color }}>
                        {project.category}
                      </span>
                      <ArrowUpRight size={14} className="proj-pcard__arrow" />
                    </div>
                    <h3 className="proj-pcard__name">{project.name}</h3>
                    <div className="proj-pcard__meta">
                      <span className="proj-pcard__year">{project.year}</span>
                      {project.photos > 0 && (
                        <span className="proj-pcard__photos">{project.photos} Photos</span>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

        </div>
      </section>

      {modal && (
        <ProjectModal
          project={flatProjects[modal.idx]}
          onClose={() => setModal(null)}
        />
      )}
    </>
  )
}
