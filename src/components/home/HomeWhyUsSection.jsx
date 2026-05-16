import { useEffect, useRef } from 'react'
import { Factory, Wrench, FileText, BadgeCheck, Leaf, Handshake } from 'lucide-react'

const reasons = [
  {
    icon: Factory,
    num: '01',
    title: '21+ Years of Expertise',
    desc: 'A proven track record delivering 500+ successful projects across residential, commercial, and industrial sectors in and around Bangalore.',
  },
  {
    icon: Wrench,
    num: '02',
    title: 'Precision Craftsmanship',
    desc: 'Every weld, every cut, every installation is done with meticulous attention to detail — ensuring a flawless finish and long-lasting durability.',
  },
  {
    icon: FileText,
    num: '03',
    title: 'Transparent Pricing',
    desc: 'Honest, competitive pricing with no hidden charges. We provide detailed quotations and stick to the agreed budget, always.',
  },
  {
    icon: BadgeCheck,
    num: '04',
    title: 'Site-to-Site Service',
    desc: 'From initial site measurement to final installation and clean-up — we handle every step professionally so you don\'t have to worry.',
  },
  {
    icon: Leaf,
    num: '05',
    title: 'Eco-Friendly Materials',
    desc: 'We use recyclable aluminium, energy-efficient glazing, and low-VOC coatings — contributing to greener, sustainable buildings.',
  },
  {
    icon: Handshake,
    num: '06',
    title: 'Dedicated After-Sales',
    desc: 'Our relationship doesn\'t end at installation. We provide prompt warranty support and scheduled maintenance for every project.',
  },
]

export default function HomeWhyUsSection() {
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
    <section className="home-whyus" ref={ref}>
      <div className="home-whyus__bg" aria-hidden="true" />
      <div className="container">
        <div className="home-whyus__header reveal">
          <span className="section-label">Why Us</span>
          <h2 className="section-heading">The Sri Ayyan Fabs Advantage</h2>
          <p className="section-sub">
            We're not just fabricators — we are your trusted partners in transforming spaces.
            Here's what makes us the preferred choice across Bangalore.
          </p>
        </div>

        <div className="home-whyus__grid">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={i} className={`home-whyus-card reveal-scale delay-${(i % 3) + 1}`}>
                <div className="home-whyus-card__top">
                  <div className="home-whyus-card__icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <span className="home-whyus-card__num">{r.num}</span>
                </div>
                <h3 className="home-whyus-card__title">{r.title}</h3>
                <p className="home-whyus-card__desc">{r.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
