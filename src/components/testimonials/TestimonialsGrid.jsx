import { testimonials } from '../../data/aboutData'
import photoRajesh from '../../assets/testimonials/rajesh.png'
import photoPriya   from '../../assets/testimonials/priya.png'
import photoMurali  from '../../assets/testimonials/murali.png'
import photoAmit    from '../../assets/testimonials/amit.png'

const photos = [photoRajesh, photoAmit, photoPriya, photoMurali]

export default function TestimonialsGrid({ addRef }) {
  return (
    <section className="tpage-section" ref={addRef}>
      <div className="container">
        <div className="tpage-grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className={`tpage-card reveal-scale delay-${(i % 2) + 1}`}>
              <div className="tpage-card__quote-mark">"</div>
              <p className="tpage-card__text">{t.quote}</p>
              <footer className="tpage-card__footer">
                <div className="tpage-card__author">
                  <img src={photos[i]} alt={t.name} className="tpage-card__avatar" />
                  <div>
                    <div className="tpage-card__name">— {t.name}</div>
                    <div className="tpage-card__role">{t.role}</div>
                    <div className="tpage-card__company">{t.company}</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
