import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { services } from '../data/servicesData'
import img1 from '../assets/page-hero1.jpg'
import img2 from '../assets/page-hero2.jpg'
import img3 from '../assets/page-hero3.jpg'
import ServiceHero from '../components/service/ServiceHero'
import ServiceBody from '../components/service/ServiceBody'
import ServiceCTA from '../components/service/ServiceCTA'

const heroImages = [img1, img2, img3]

export default function ServicePage() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (service) {
      document.title = service.titleTag
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', service.metaDesc)
    }
  }, [slug, service])

  if (!service) return <Navigate to="/services" replace />

  const heroBg = heroImages[services.indexOf(service) % 3]

  return (
    <>
      <ServiceHero service={service} heroBg={heroBg} />
      <ServiceBody service={service} slug={slug} />
      <ServiceCTA title={service.title} />
    </>
  )
}
