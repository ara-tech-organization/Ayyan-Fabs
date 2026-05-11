import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { services } from '../data/servicesData'
import img1 from '../assets/h1.png'
import img2 from '../assets/h2.png'
import img3 from '../assets/h3.png'
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
