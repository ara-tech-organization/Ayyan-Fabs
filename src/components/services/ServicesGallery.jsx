import { useState } from 'react'

const g = (import.meta.env.BASE_URL || '/') + 'gallery/'

const galleryItems = [
  { title: 'Aluminium Window Frame Installation', category: 'Aluminium',    img: g + 'aluminium-window-frame-installation.jpg' },
  { title: 'Aluminium Office Partition',          category: 'Aluminium',    img: g + 'aluminium-office-partition.jpg' },
  { title: 'Aluminium Glass Frame Design',        category: 'Aluminium',    img: g + 'aluminium-glass-frame-design.jpg' },
  { title: 'Godrej Park Retreat 2024',            category: 'Aluminium',    img: g + 'godrej-park-retreat-2024.jpg' },
  { title: 'Exterior Wall Cladding Panel',        category: 'Cladding',     img: g + 'exterior-wall-cladding-panel.jpg' },
  { title: 'ACP Cladding Commercial Building',    category: 'Cladding',     img: g + 'acp-cladding-commercial-building.jpg' },
  { title: 'Glass Door Patch Fitting',            category: 'Patch Fitting', img: g + 'glass-door-patch-fitting.jpg' },
  { title: 'Frameless Glass Installation',        category: 'Patch Fitting', img: g + 'frameless-glass-installation.jpg' },
  { title: 'Modern MS Gate Design',               category: 'Gates',         img: g + 'modern-ms-gate-design.jpg' },
  { title: 'Sliding Gate Fabrication',            category: 'Gates',         img: g + 'sliding-gate-fabrication.jpg' },
  { title: 'Metal Sheet Roofing Work',            category: 'Roofing',       img: g + 'metal-sheet-roofing-work.jpg' },
  { title: 'Industrial Roof Installation',        category: 'Roofing',       img: g + 'industrial-roof-installation.jpg' },
  { title: 'Road Safety Barrication',             category: 'Barrication',   img: g + 'road-safety-barrication.jpg' },
  { title: 'Construction Site Barricade',         category: 'Barrication',   img: g + 'construction-site-barricade.jpg' },
  { title: 'Custom Fabrication Work',             category: 'MS Steel',      img: g + 'custom-fabrication-work.jpg' },
  { title: 'On-Site Installation',                category: 'Miscellaneous', img: g + 'on-site-installation.jpg' },
]

const tabs = ['All Works', 'Aluminium', 'Cladding', 'Patch Fitting', 'Gates', 'Roofing', 'Barrication', 'MS Steel', 'Miscellaneous']

export default function ServicesGallery() {
  const [active, setActive] = useState('All Works')

  const filtered = active === 'All Works'
    ? galleryItems
    : galleryItems.filter(i => i.category === active)

  return (
    <section className="svc-gallery">
      <div className="container">
        <div className="svc-gallery__header reveal">
          <span className="section-label">Project Gallery</span>
          <h2 className="section-heading">Our Work in Action</h2>
          <p className="section-sub">
            Explore our premium fabrication works across diverse specializations.
          </p>
        </div>

        <div className="svc-gallery__tabs reveal">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`svc-gallery__tab${active === tab ? ' svc-gallery__tab--active' : ''}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="svc-gallery__grid">
          {filtered.map((item, i) => (
            <div key={`${item.title}-${i}`} className="svc-gallery__item">
              <img src={item.img} alt={item.title} loading="lazy" className="svc-gallery__img" />
              <div className="svc-gallery__overlay">
                <span className="svc-gallery__cat">{item.category}</span>
                <p className="svc-gallery__title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
