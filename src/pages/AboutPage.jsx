import { useEffect, useRef } from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutStory from '../components/about/AboutStory'

export default function AboutPage() {
  const sectionsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'About Sri Ayyan Fabs | Precision Fabrication, Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', "Learn about Sri Ayyan Fabs — Bangalore's precision fabrication specialists. In-house engineering, own workshop, 500+ projects delivered.")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.07 }
    )
    sectionsRef.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const addRef = el => { if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el) }

  return (
    <>
      <AboutHero />
      <AboutStory addRef={addRef} />
    </>
  )
}
