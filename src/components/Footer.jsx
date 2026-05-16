import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, FileText, ArrowUpRight, ChevronRight } from 'lucide-react'
import logo from '../assets/Logo.jpg'

const contactItems = [
  { icon: Phone, label: 'Call / WhatsApp', value: '+91 8904038295 / +91 8904098297', href: 'tel:+918904038295' },
  { icon: Mail, label: 'Email', value: 'sriayyanfabs@gmail.com', href: 'mailto:sriayyanfabs@gmail.com' },
  {
    icon: MapPin,
    label: 'Workshop Address',
    value: 'No.69, 4th Cross, Royal Garden Layout, Opp Vikas Meadows Apartment, Amruthahalli Main Road Dasarahalli, Bangalore – 560092',
    href: 'https://maps.google.com/?q=No.69+4th+Cross+Royal+Garden+Layout+Amruthahalli+Bangalore+560092',
    external: true,
  },
  { icon: Clock, label: 'Business Hours', value: 'Monday – Saturday: 9:00 AM – 6:30 PM', href: null },
  { icon: FileText, label: 'GSTIN', value: '29AIYPR5034K1ZC', href: null },
]

const serviceLinks = [
  { label: 'Aluminium Fabrication', slug: 'aluminium-fabrication' },
  { label: 'Structural Glazing', slug: 'patch-fitting-glass' },
  { label: 'Patch Fitting & Glass', slug: 'patch-fitting-glass' },
  { label: 'MS Works & Roofing', slug: 'industrial-roofing' },
  { label: 'ACP Cladding Works', slug: 'acp-cladding' },
]

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__top">
        <div className="container footer__grid">

          <div className="footer__brand-col">
            <Link to="/" className="footer__logo">
              <img src={logo} alt="Sri Ayyan Fabs" />
              <div>
                <span className="footer__logo-name">Sri Ayyan Fabs</span>
                <span className="footer__logo-tag">Precision Fabrication</span>
              </div>
            </Link>
            <p className="footer__brand-desc">
              Sri Ayyan Fabs is a leader in premium glass, aluminium, and MS metal fabrication. With 26+ years of excellence
              and state-of-the-art in-house facilities including powder coating, we deliver high-end solutions for corporate,
              residential, and government sectors.
            </p>
            <div className="footer__badges">
              <span className="footer__badge">GST Registered</span>
              <span className="footer__badge">26+ Years</span>
              <span className="footer__badge">500+ Projects</span>
            </div>
          </div>

          <div className="footer__contact-col">
            <h3 className="footer__col-title">Contact Us</h3>
            <ul className="footer__contact-list">
              {contactItems.map((item, i) => {
                const Icon = item.icon
                const inner = (
                  <div className="footer__contact-item">
                    <div className="footer__contact-icon">
                      <Icon size={16} strokeWidth={2} />
                    </div>
                    <div className="footer__contact-text">
                      <span className="footer__contact-label">{item.label}</span>
                      <span className="footer__contact-value">{item.value}</span>
                    </div>
                    {item.href && item.external && (
                      <ArrowUpRight size={14} className="footer__contact-arrow" />
                    )}
                  </div>
                )
                return (
                  <li key={i}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="footer__contact-link"
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="footer__contact-static">{inner}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="footer__links-col">
            <h3 className="footer__col-title">Our Services</h3>
            <ul className="footer__links-list">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link to={`/services/${link.slug}`} className="footer__nav-link">
                    <ChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__links-list">
              <li>
                <Link to="/" className="footer__nav-link"><ChevronRight size={14} />Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer__nav-link"><ChevronRight size={14} />About</Link>
              </li>
              <li>
                <Link to="/projects" className="footer__nav-link"><ChevronRight size={14} />Projects</Link>
              </li>
              <li>
                <Link to="/services" className="footer__nav-link"><ChevronRight size={14} />Services</Link>
              </li>
              <li>
                <Link to="/industries" className="footer__nav-link"><ChevronRight size={14} />Trusted Brands</Link>
              </li>
              <li>
                <Link to="/contact" className="footer__nav-link"><ChevronRight size={14} />Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy footer__copy--white">
            &copy; {new Date().getFullYear()} Sri Ayyan Fabs. All rights reserved.
          </p>
          <p className="footer__copy footer__crafted">
            ❤️ Crafted with Excellence by{' '}
            <a href="https://discovertechnologies.co/" target="_blank" rel="noopener noreferrer" className="footer__crafted-link">
              Ara Discoveries Pvt. Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
