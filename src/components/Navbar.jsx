import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/Logo.jpg'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '/projects-s1.html' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="Sri Ayyan Fabs logo" className="navbar__logo-img" />
          <div className="navbar__brand">
            <span className="navbar__brand-name">Sri Ayyan Fabs</span>
            <span className="navbar__brand-tagline">Precision Fabrication</span>
          </div>
        </a>

        <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`} aria-label="Main navigation">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="navbar__link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#quote-form" className="btn-primary navbar__cta-mobile" onClick={closeMenu}>
            Free Quote
          </a>
        </nav>

        <div className="navbar__actions">
          <a href="tel:+918904038295" className="navbar__phone">
            <Phone size={15} strokeWidth={2.5} />
            <span>+91 89040 38295</span>
          </a>
          <a href="#quote-form" className="btn-primary navbar__cta">
            Free Quote
          </a>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  )
}
