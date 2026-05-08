import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, Award, Handshake } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: 1000,
    suffix: '+',
    label: 'Projects Delivered',
    sub: 'Across Bangalore and beyond',
  },
  {
    icon: Users,
    value: 800,
    suffix: '+',
    label: 'Satisfied Clients',
    sub: 'From apartments to industrial parks',
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'Quality Satisfaction',
    sub: 'Our standard, not our target',
  },
  {
    icon: Handshake,
    value: 15,
    suffix: '+',
    label: 'Brand Partners',
    sub: 'Certified material suppliers only',
  },
]

function useCountUp(target, started, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return count
}

function StatCard({ stat, started, index }) {
  const Icon = stat.icon
  const count = useCountUp(stat.value, started)

  return (
    <div className={`stat-card reveal delay-${index + 1}`}>
      <div className="stat-card__icon">
        <Icon size={28} strokeWidth={1.8} />
      </div>
      <div className="stat-card__value">
        {count.toLocaleString()}{stat.suffix}
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
      <div className="stats-section__bg" aria-hidden="true" />
      <div className="container stats-inner">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} started={started} index={i} />
        ))}
      </div>
    </section>
  )
}
