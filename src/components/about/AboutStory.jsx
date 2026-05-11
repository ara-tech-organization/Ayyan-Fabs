import { Link } from 'react-router-dom'
import aboutOverview from '../../assets/about-overview.jpg'
import { companyStory, mission, vision } from '../../data/aboutData'

export default function AboutStory({ addRef }) {
  return (
    <section className="about-story" ref={addRef}>
      <div className="container">
        <div className="about-story__grid">
          <div className="about-story__left reveal-left">
            <span className="section-label">Who We Are</span>
            <h2 className="section-heading">Our Story</h2>
            {companyStory.map((para, i) => (
              <p key={i} className="about-story__para">{para}</p>
            ))}
            <Link to="/services" className="btn-primary about-story__cta">
              Explore Our Services
            </Link>
          </div>
          <div className="about-story__right reveal-right">
            <div className="about-story__photo-wrap">
              <img
                src={aboutOverview}
                alt="Sri Ayyan Fabs workshop"
                className="about-story__photo"
                loading="lazy"
              />
              <div className="about-story__photo-badge">
                <span className="about-story__photo-badge-num">10+</span>
                <span className="about-story__photo-badge-label">Years in Bangalore</span>
              </div>
            </div>
            <div className="about-mv about-mv--mission">
              <span className="about-mv__label">Our Mission</span>
              <p className="about-mv__text">{mission}</p>
            </div>
            <div className="about-mv about-mv--vision">
              <span className="about-mv__label">Our Vision</span>
              <p className="about-mv__text">{vision}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
