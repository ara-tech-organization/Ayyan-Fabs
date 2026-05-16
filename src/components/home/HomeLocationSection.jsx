import { useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, ArrowUpRight, MessageCircle } from 'lucide-react'

const blocks = [
  {
    icon: MapPin,
    title: 'Our Workshop',
    value: 'Amruthahalli, Bangalore',
    sub: 'No.69, 4th Cross, Royal Garden Layout, Opp Vikas Meadows Apartment, Amruthahalli Main Road, Bangalore - 560092',
    href: 'https://maps.google.com/?q=No.69+4th+Cross+Royal+Garden+Layout+Amruthahalli+Bangalore+560092',
    cta: 'Navigate with Maps',
    external: true,
  },
  {
    icon: Phone,
    title: 'Direct Support',
    value: '+91 89040 38295',
    sub: '+91 89040 98297',
    href: 'tel:+918904038295',
    cta: 'Click to Call Now',
    external: false,
  },
  {
    icon: Mail,
    title: 'Email Concierge',
    value: 'sriayyanfabs@gmail.com',
    sub: 'Send your official project inquiry',
    href: 'mailto:sriayyanfabs@gmail.com',
    cta: 'Send Official Inquiry',
    external: false,
  },
]

export default function HomeLocationSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('visible'))
        }
      },
      { threshold: 0.07 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="home-location" ref={ref}>
      <div className="container">
        <div className="home-location__header reveal">
          <span className="section-label">Find Us</span>
          <h2 className="section-heading">Connect With Excellence</h2>
          <p className="section-sub">
            Experience world-class fabrication consulting. Visit our workshop or reach out through any of the channels below.
          </p>
        </div>

        <div className="home-location__grid">
          {blocks.map((b, i) => {
            const Icon = b.icon
            return (
              <div key={i} className={`home-location-card reveal-scale delay-${i + 1}`}>
                <div className="home-location-card__icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="home-location-card__title">{b.title}</h3>
                <p className="home-location-card__value">{b.value}</p>
                <p className="home-location-card__sub">{b.sub}</p>
                <a
                  href={b.href}
                  target={b.external ? '_blank' : undefined}
                  rel={b.external ? 'noopener noreferrer' : undefined}
                  className="home-location-card__cta"
                >
                  {b.cta}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            )
          })}
        </div>

        <div className="home-location__whatsapp reveal">
          <a
            href="https://wa.me/918904038295?text=Hi%20Sri%20Ayyan%20Fabs%2C%20I%27m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="home-location__wa-btn"
          >
            <MessageCircle size={20} strokeWidth={2} />
            Instant WhatsApp Consulting
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
