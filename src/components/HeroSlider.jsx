import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import h1 from '../assets/h1.png'
import h2 from '../assets/h2.png'
import h3 from '../assets/h3.png'

const slides = [
  {
    tag: 'Bangalore\'s #1 Fabrication Company',
    headline: "Bangalore's Most Trusted Fabrication Experts — 1,000+ Projects. Zero Compromises.",
    sub: 'From precision aluminium systems to heavy-duty MS steel structures — Sri Ayyan Fabs delivers fabrication solutions that outlast expectations, on time and on budget.',
    cta1: { text: 'Get a Free Quote', to: '/contact' },
    cta2: { text: 'Our Projects', to: '/services' },
    img: h1,
  },
  {
    tag: 'Engineering Excellence',
    headline: 'Built Stronger. Finished Finer. Delivered Faster.',
    sub: 'We bring engineering precision and aesthetic excellence to every aluminium frame, steel structure, and cladding panel we build.',
    cta1: { text: 'Get a Free Quote', to: '/contact' },
    cta2: { text: 'Our Projects', to: '/services' },
    img: h2,
  },
  {
    tag: 'End-to-End Solutions',
    headline: 'From Blueprint to Build — We Handle Everything.',
    sub: 'Site survey. Custom fabrication. Professional installation. Complete project support. One partner for the entire journey.',
    cta1: { text: 'Get a Free Quote', to: '/contact' },
    cta2: { text: 'Our Projects', to: '/services' },
    img: h3,
  },
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    setActive(index)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const prev = () => goTo((active - 1 + slides.length) % slides.length)
  const next = useCallback(() => goTo((active + 1) % slides.length), [active, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="hero" aria-label="Hero slider">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero__slide${i === active ? ' hero__slide--active' : ''}`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden={i !== active}
        >
          <div className="hero__overlay" aria-hidden="true" />
          <div className="container hero__split">
            <div className="hero__content">
              <span className={`hero__tag reveal${i === active ? ' visible' : ''}`}>{slide.tag}</span>
              <h1 className={`hero__headline reveal delay-1${i === active ? ' visible' : ''}`}>
                {slide.headline}
              </h1>
              <p className={`hero__sub reveal delay-2${i === active ? ' visible' : ''}`}>{slide.sub}</p>
              <div className={`hero__actions reveal delay-3${i === active ? ' visible' : ''}`}>
                <Link to={slide.cta1.to} className="btn-primary hero__cta1">
                  {slide.cta1.text}
                  <ArrowRight size={16} />
                </Link>
                <Link to={slide.cta2.to} className="btn-outline hero__cta2">
                  {slide.cta2.text}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}


      <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous slide">
        <ChevronLeft size={22} />
      </button>
      <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next slide">
        <ChevronRight size={22} />
      </button>

      <div className="hero__dots" role="tablist" aria-label="Slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to slide ${i + 1}`}
            className={`hero__dot${i === active ? ' hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}
