import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Rajesh Kumar',
    location: 'Office Building Project',
    date: '2 weeks ago',
    quote: 'Sri Ayyan Fabs did an incredible job with the aluminum cladding for our office building. The finish is top-notch and the team was very professional. Highly recommended!',
    initials: 'RK',
  },
  {
    name: 'Priya Sharma',
    location: 'Residential Project',
    date: '1 month ago',
    quote: 'Exceeded my expectations for our residential trellis work. The design is modern and materials used are premium. Very reasonable pricing compared to others.',
    initials: 'PS',
  },
  {
    name: 'Murali Dharan',
    location: 'Industrial Gate',
    date: '3 weeks ago',
    quote: 'Excellent service! Delivered our industrial gate fabrication on time with great attention to detail. Their professionalism is unmatched in Bangalore.',
    initials: 'MD',
  },
  {
    name: 'Amit Patel',
    location: 'ACP Cladding Project',
    date: '2 months ago',
    quote: 'Handled our complex ACP cladding project with ease. The workmanship is precise and clean. Definitely one of the best fabrication teams I\'ve worked with.',
    initials: 'AP',
  },
]

export default function HomeTestimonialsSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('visible'))
        }
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="home-reviews" ref={ref}>
      <div className="container">
        <div className="home-reviews__header reveal">
          <span className="section-label">Google Reviews</span>
          <h2 className="section-heading">Recent Google Reviews</h2>
          <p className="section-sub">
            Rated <strong>4.9 / 5</strong> on Google &nbsp;·&nbsp; 300+ Satisfied Clients &amp; Growing
          </p>
        </div>

        <div className="home-reviews__grid">
          {reviews.map((r, i) => (
            <div key={i} className={`review-card reveal-scale delay-${(i % 4) + 1}`}>
              <div className="review-card__quote-icon">
                <Quote size={20} strokeWidth={1.5} />
              </div>
              <p className="review-card__text">"{r.quote}"</p>
              <div className="review-card__stars">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="review-card__footer">
                <div className="review-card__avatar">{r.initials}</div>
                <div>
                  <div className="review-card__name">{r.name}</div>
                  <div className="review-card__meta">{r.location} · {r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="home-reviews__badge reveal">
          <span>⭐ 4.9/5 on Google</span>
          <span className="home-reviews__sep" />
          <span>500+ Successful Projects</span>
          <span className="home-reviews__sep" />
          <span>300+ Satisfied Clients</span>
        </div>
      </div>
    </section>
  )
}
