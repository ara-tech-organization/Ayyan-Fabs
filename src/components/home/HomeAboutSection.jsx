import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import aboutOverview from '../../assets/about-overview.jpg'

const features = [
  { num: '01', title: 'ISI-Grade Materials', desc: 'Certified aluminium sections and hardware on every project.' },
  { num: '02', title: 'Expert Team', desc: '21+ years of skilled fabricators, designers, and installers.' },
  { num: '03', title: 'On-Time Delivery', desc: 'We commit to deadlines and always deliver on schedule.' },
  { num: '04', title: 'After-Sales Support', desc: 'Warranty service and post-installation support included.' },
]

export default function HomeAboutSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => el.classList.add('visible'))
        }
      },
      { threshold: 0.07 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="home-about" ref={ref}>
      <div className="container">
        <div className="home-about__grid">

          <div className="home-about__right reveal-right">
            <div className="home-about__img-wrap">
              <div className="home-about__img-frame" aria-hidden="true" />
              <img
                src={aboutOverview}
                alt="Sri Ayyan Fabs workshop"
                className="home-about__img"
                loading="lazy"
              />
              <div className="home-about__badge">
                <span className="home-about__badge-num">21+</span>
                <span className="home-about__badge-label">Years of Excellence</span>
              </div>
            </div>
          </div>

          <div className="home-about__left reveal-left">
            <span className="section-label">About Us</span>
            <h2 className="home-about__heading">
              Building the Future,<br />
              <span className="home-about__heading-accent">One Frame at a Time</span>
            </h2>
            <p className="home-about__para">
              Sri Ayyan Fabs is a trusted name in aluminium fabrication, glass works, and custom architectural
              solutions based in Bangalore — delivering 1,000+ premium projects over 21+ years.
            </p>

            <div className="home-about__features">
              {features.map((f, i) => (
                <div key={i} className={`home-about__feature reveal delay-${i + 1}`}>
                  <span className="home-about__feature-num">{f.num}</span>
                  <div className="home-about__feature-text">
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="home-about__actions reveal">
              <Link to="/about" className="btn-primary">
                Explore Our Story
                <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="home-about__quote-btn">
                Get a Quote
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
