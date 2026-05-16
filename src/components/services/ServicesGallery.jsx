import { useState } from 'react'
import projA1 from '../../assets/proj-a1.jpg'
import projA2 from '../../assets/proj-a2.jpg'
import projA3 from '../../assets/proj-a3.jpg'
import projP1 from '../../assets/proj-p1.jpg'
import projP2 from '../../assets/proj-p2.jpg'
import projP3 from '../../assets/proj-p3.jpg'
import projG1 from '../../assets/proj-g1.jpg'
import projG2 from '../../assets/proj-g2.jpg'
import projG3 from '../../assets/proj-g3.jpg'
import projC1 from '../../assets/proj-c1.jpg'
import projC2 from '../../assets/proj-c2.jpg'
import projC3 from '../../assets/proj-c3.jpg'
import svcRoofing from '../../assets/svc-roofing.jpg'
import svcBarricade from '../../assets/svc-barricade.jpg'
import svcMs from '../../assets/svc-ms.jpg'
import svcGrill from '../../assets/svc-grill.jpg'

const galleryItems = [
  { title: 'Aluminium Window Frame Installation', category: 'Aluminium', img: projA1 },
  { title: 'Aluminium Sliding Door Work',         category: 'Aluminium', img: projA2 },
  { title: 'Aluminium Office Partition',           category: 'Aluminium', img: projA3 },
  { title: 'Aluminium Glass Frame Design',         category: 'Aluminium', img: projA1 },
  { title: 'Exterior Wall Cladding Panel',         category: 'Cladding',  img: projC1 },
  { title: 'ACP Cladding Commercial Building',     category: 'Cladding',  img: projC2 },
  { title: 'Elevation Cladding Design',            category: 'Cladding',  img: projC3 },
  { title: 'Glass Door Patch Fitting',             category: 'Patch Fitting', img: projP1 },
  { title: 'Frameless Glass Installation',         category: 'Patch Fitting', img: projP2 },
  { title: 'Modern MS Gate Design',                category: 'Gates',     img: projG1 },
  { title: 'Sliding Gate Fabrication',             category: 'Gates',     img: projG2 },
  { title: 'Metal Sheet Roofing Work',             category: 'Roofing',   img: svcRoofing },
  { title: 'Industrial Roof Installation',         category: 'Roofing',   img: svcRoofing },
  { title: 'Road Safety Barrication',              category: 'Barrication', img: svcBarricade },
  { title: 'Construction Site Barricade',          category: 'Barrication', img: svcBarricade },
  { title: 'MS Steel Structure Work',              category: 'MS Steel',  img: svcMs },
  { title: 'Heavy Steel Fabrication',              category: 'MS Steel',  img: svcGrill },
  { title: 'Industrial Frame Welding',             category: 'MS Steel',  img: svcMs },
  { title: 'Custom Fabrication Work',              category: 'Miscellaneous', img: projP3 },
  { title: 'On-Site Installation',                 category: 'Miscellaneous', img: projG3 },
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
