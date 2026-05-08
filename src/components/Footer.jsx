import { Phone, Mail, MapPin, Clock, FileText, ArrowUpRight, ChevronRight } from 'lucide-react'
import logo from '../assets/Logo.jpg'

const contactItems = [
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+91 89040 38295',
    href: 'tel:+918904038295',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sriayyanfabs@gmail.com',
    href: 'mailto:sriayyanfabs@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Workshop Address',
    value: 'No.69, 4th Cross, Royal Garden Layout, Amruthahalli Main Road, Dasarahalli, Bangalore – 560092',
    href: 'https://maps.google.com/?q=Dasarahalli+Bangalore+560092',
    external: true,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Saturday: 9:00 AM – 6:30 PM',
    href: null,
  },
  {
    icon: FileText,
    label: 'GSTIN',
    value: '29AIYPR5034K1ZC',
    href: null,
  },
]

const quickLinks = [
  { label: 'Aluminium Windows & Doors', href: '#services' },
  { label: 'MS Steel Structures', href: '#services' },
  { label: 'Glass Partitions', href: '#services' },
  { label: 'UPVC Systems', href: '#services' },
  { label: 'Cladding & Facades', href: '#services' },
  { label: 'Handrails & Balustrades', href: '#services' },
]

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Our Process', href: '#process' },
  { label: 'Projects', href: '/projects-s1.html' },
  { label: 'Get a Quote', href: '#quote-form' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__top">
        <div className="container footer__grid">

          <div className="footer__brand-col">
            <a href="#" className="footer__logo">
              <img src={logo} alt="Sri Ayyan Fabs" />
              <div>
                <span className="footer__logo-name">Sri Ayyan Fabs</span>
                <span className="footer__logo-tag">Precision Fabrication</span>
              </div>
            </a>
            <p className="footer__brand-desc">
              Bangalore's most trusted aluminium and structural steel fabrication experts.
              Engineering precision on every project — no shortcuts, no compromises.
            </p>
            <div className="footer__badges">
              <span className="footer__badge">ISO Compliant</span>
              <span className="footer__badge">GST Registered</span>
              <span className="footer__badge">10+ Years</span>
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
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer__nav-link">
                    <ChevronRight size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-col">
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__links-list">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer__nav-link">
                    <ChevronRight size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#quote-form" className="footer__cta">
              Request Free Quote
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Sri Ayyan Fabs. All rights reserved.
          </p>
          <p className="footer__copy footer__gstin">
            GSTIN: 29AIYPR5034K1ZC
          </p>
        </div>
      </div>
    </footer>
  )
}
