import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 1000, suffix: '+', label: 'Projects Delivered',  sub: 'Embarking on Over 1000 Successful Projects and Counting' },
  { value: 800,  suffix: '+', label: 'Satisfied Clients',    sub: 'Served a Diverse Community of 800+ Satisfied Clients and Growing' },
  { value: 100,  suffix: '%', label: 'Quality Satisfaction', sub: 'Achieving 100% Satisfaction in Every Interaction' },
  { value: 21,   suffix: '+', label: 'Years of Excellence',  sub: '21+ Years of Trusted Fabrication Expertise' },
]

function useCountUp(target, started, duration = 2200) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])
  return count
}

function StatCard({ stat, started, index }) {
  const count = useCountUp(stat.value, started)
  return (
    <div className={`stat-card reveal delay-${index + 1}`}>
      <div className="stat-card__value">
        {count.toLocaleString()}{stat.suffix}
        <span className="stat-card__accent-bar" />
      </div>
      <div className="stat-card__label">{stat.label}</div>
      <div className="stat-card__sub">{stat.sub}</div>
    </div>
  )
}

export default function StatsSection() {
  const sectionRef = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container stats-inner">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} started={started} index={i} />
        ))}
      </div>
    </section>
  )
}
