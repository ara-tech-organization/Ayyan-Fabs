import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/Logo.jpg'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/industries', label: 'Industries & FAQ' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="Sri Ayyan Fabs logo" className="navbar__logo-img" />
          <div className="navbar__brand">
            <span className="navbar__brand-name">Sri Ayyan Fabs</span>
            <span className="navbar__brand-tagline">Precision Fabrication</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop phone */}
        <a href="tel:+918904038295" className="navbar__phone">
          <Phone size={14} strokeWidth={2.5} />
          <span>+91 89040 38295</span>
        </a>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="navbar__drawer-nav">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `navbar__drawer-link${isActive ? ' navbar__drawer-link--active' : ''}`}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <a href="tel:+918904038295" className="navbar__drawer-phone">
          <Phone size={16} strokeWidth={2.2} />
          +91 89040 38295
        </a>
      </div>

      {menuOpen && <div className="navbar__backdrop" onClick={closeMenu} aria-hidden="true" />}
    </header>
  )
}
