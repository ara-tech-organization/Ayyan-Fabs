import { useEffect, useRef } from 'react'
import TestimonialsHero from '../components/testimonials/TestimonialsHero'
import TestimonialsGrid from '../components/testimonials/TestimonialsGrid'
import TestimonialsCTA from '../components/testimonials/TestimonialsCTA'

export default function TestimonialsPage() {
  const sectionRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Client Testimonials | Sri Ayyan Fabs Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Real client reviews for Sri Ayyan Fabs — aluminium fabrication, ACP cladding, roofing and MS steel projects across Bangalore.')

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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <TestimonialsHero />
      <TestimonialsGrid addRef={sectionRef} />
      <TestimonialsCTA />
    </>
  )
}
