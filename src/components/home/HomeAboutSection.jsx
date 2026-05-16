import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import aboutOverview from '../../assets/about-overview.jpg'

const highlights = [
  { title: 'ISI-Grade Materials', desc: 'Only branded, certified aluminium sections and hardware used in every project.' },
  { title: 'Expert Team', desc: 'Skilled fabricators, designers, and installers with 21+ years of field experience.' },
  { title: 'On-Time Delivery', desc: 'We commit to deadlines and deliver every project on schedule, always.' },
  { title: 'After-Sales Support', desc: 'Dedicated warranty service and post-installation support for complete peace of mind.' },
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

          <div className="home-about__left reveal-left">
            <span className="section-label">About Us</span>
            <h2 className="section-heading">
              Building the Future,<br />One Frame at a Time
            </h2>
            <p className="home-about__para">
              Sri Ayyan Fabs is a trusted name in aluminium fabrication, glass works, and custom architectural
              solutions based in Bangalore. With over 21 years of hands-on experience, we have delivered
              500+ premium projects — from luxury residences to large commercial complexes.
            </p>
            <p className="home-about__para">
              We combine cutting-edge materials, modern design principles, and skilled craftsmanship to deliver
              structures that are not just beautiful — but engineered to last.
            </p>

            <ul className="home-about__highlights">
              {highlights.map((h, i) => (
                <li key={i} className={`home-about__highlight reveal delay-${i + 1}`}>
                  <div className="home-about__check">
                    <CheckCircle size={16} strokeWidth={2.5} />
                  </div>
                  <div className="home-about__highlight-text">
                    <strong>{h.title}</strong>
                    <span>{h.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="home-about__actions reveal">
              <Link to="/about" className="btn-primary">
                Explore Our Story
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="home-about__quote-btn">
                Get a Quote
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="home-about__right reveal-right">
            <div className="home-about__img-wrap">
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
              <div className="home-about__badge2">
                <span className="home-about__badge2-num">500+</span>
                <span className="home-about__badge2-label">Projects Delivered</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
