import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import aboutOverview from '../../assets/about-overview.jpg'
import { companyStory, coreStrengths } from '../../data/aboutData'

export default function AboutStory({ addRef }) {
  return (
    <section className="about-story-center" ref={addRef}>
      <div className="container">

        {/* Centered header */}
        <div className="about-story-center__header reveal">
          <span className="section-label">Who We Are</span>
          <h2 className="about-story-center__heading">
            Crafting Modern Aluminium &amp; Glass Solutions
          </h2>
        </div>

        {/* Two paragraphs */}
        <div className="about-story-center__paras reveal">
          {companyStory.map((para, i) => (
            <p key={i} className="about-story-center__para">{para}</p>
          ))}
        </div>

        {/* Core strengths — 3 col */}
        <div className="about-story-center__strengths reveal">
          {coreStrengths.map((item, i) => (
            <div key={i} className="about-story-center__strength">
              <CheckCircle2 size={18} className="about-story-center__check" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="about-story-center__ctas reveal">
          <Link to="/projects" className="btn-primary">View Our Projects</Link>
          <Link to="/contact" className="btn-outline">Get a Free Quote</Link>
        </div>

        {/* Wide image */}
        <div className="about-story-center__img-wrap reveal">
          <img src={aboutOverview} alt="Sri Ayyan Fabs workshop" loading="lazy" />
          <div className="about-story-center__img-badge about-story-center__img-badge--tl">
            <span className="about-story-center__badge-num">21+</span>
            <span className="about-story-center__badge-label">Years Experience</span>
          </div>
          <div className="about-story-center__img-badge about-story-center__img-badge--tr">
            <span className="about-story-center__badge-num">500+</span>
            <span className="about-story-center__badge-label">Projects Done</span>
          </div>
        </div>

      </div>
    </section>
  )
}
