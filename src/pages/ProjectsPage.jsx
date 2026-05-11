import { useEffect } from 'react'
import ProjectsHero from '../components/projects/ProjectsHero'
import ProjectsGallery from '../components/projects/ProjectsGallery'
import ProjectsCTA from '../components/projects/ProjectsCTA'

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Projects | Sri Ayyan Fabs Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Project gallery — Sri Ayyan Fabs. Aluminium fabrication, ACP cladding, frameless glass, MS steel and more across Bangalore.')
  }, [])

  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
      <ProjectsCTA />
    </>
  )
}
