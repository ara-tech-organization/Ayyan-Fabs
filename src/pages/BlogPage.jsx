import { useEffect, useRef } from 'react'
import BlogHero from '../components/blog/BlogHero'
import BlogArticles from '../components/blog/BlogArticles'
import BlogQA from '../components/blog/BlogQA'
import BlogCTA from '../components/blog/BlogCTA'

export default function BlogPage() {
  const articlesRef = useRef(null)
  const qaRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Blog & Resources | Sri Ayyan Fabs Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', "Expert fabrication guides, cost breakdowns, and buying tips from Sri Ayyan Fabs — Bangalore's trusted aluminium and steel fabrication specialists.")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.06 }
    )
    ;[articlesRef, qaRef].forEach(r => { if (r.current) observer.observe(r.current) })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <BlogHero />
      <BlogArticles addRef={articlesRef} />
      <BlogQA addRef={qaRef} />
      <BlogCTA />
    </>
  )
}
