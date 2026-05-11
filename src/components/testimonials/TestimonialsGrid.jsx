import { testimonials } from '../../data/aboutData'

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
                  <div className="tpage-card__avatar">{t.name.charAt(0)}</div>
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
