import { useEffect, useRef } from 'react'
import IndustriesHero from '../components/industries/IndustriesHero'
import IndustriesGrid from '../components/industries/IndustriesGrid'
import FAQSection from '../components/industries/FAQSection'

export default function IndustriesPage() {
  const indRef = useRef(null)
  const faqRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Industries & FAQ | Sri Ayyan Fabs Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Industries served by Sri Ayyan Fabs across Bangalore — commercial, industrial, residential, healthcare and more. Plus answers to frequently asked questions.')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.07 }
    )
    ;[indRef, faqRef].forEach(r => { if (r.current) observer.observe(r.current) })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <IndustriesHero />
      <IndustriesGrid addRef={indRef} />
      <FAQSection addRef={faqRef} />
    </>
  )
}
