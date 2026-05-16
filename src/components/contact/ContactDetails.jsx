import { Phone, Mail, MapPin, Clock, FileText, ArrowUpRight } from 'lucide-react'

const contactDetails = [
  { icon: Phone,    label: 'Direct Support',    value: '+91 89040 38295 / +91 89040 98297', href: 'tel:+918904038295',                                          external: false },
  { icon: Mail,     label: 'Email Concierge',   value: 'sriayyanfabs@gmail.com',             href: 'mailto:sriayyanfabs@gmail.com',                              external: false },
  { icon: MapPin,   label: 'Our Workshop',      value: 'No.69, 4th Cross, Royal Garden Layout, Opp Vikas Meadows Apartment, Amruthahalli Main Road Dasarahalli, Bangalore – 560092', href: 'https://maps.google.com/?q=No.69+4th+Cross+Royal+Garden+Layout+Amruthahalli+Bangalore+560092', external: true },
  { icon: Clock,    label: 'Business Hours',    value: 'Monday – Saturday: 9:00 AM – 6:30 PM', href: null },
  { icon: FileText, label: 'GSTIN',             value: '29AIYPR5034K1ZC',                    href: null },
]

export default function ContactDetails() {
  return (
    <div className="contact-details">
      <h2 className="contact-details__title">Connect With Excellence</h2>
      <p className="contact-details__sub">
        Experience world-class fabrication consulting. Visit our workshop or reach out through any of the channels below.
      </p>

      <ul className="contact-detail-list">
        {contactDetails.map((item, i) => {
          const Icon = item.icon
          const inner = (
            <div className="contact-detail-item">
              <div className="contact-detail-item__icon">
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <div className="contact-detail-item__text">
                <span className="contact-detail-item__label">{item.label}</span>
                <span className="contact-detail-item__value">{item.value}</span>
              </div>
              {item.external && <ArrowUpRight size={14} className="contact-detail-item__arrow" />}
            </div>
          )
          return (
            <li key={i}>
              {item.href ? (
                <a
                  href={item.href}
                  className="contact-detail-link"
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {inner}
                </a>
              ) : (
                <div className="contact-detail-static">{inner}</div>
              )}
            </li>
          )
        })}
      </ul>

      <div className="contact-map-placeholder">
        <a
          href="https://maps.google.com/?q=No.69+4th+Cross+Royal+Garden+Layout+Amruthahalli+Bangalore+560092"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-map-link"
        >
          <MapPin size={20} strokeWidth={1.8} />
          <span>Navigate with Maps</span>
          <ArrowUpRight size={14} />
        </a>
        <a
          href="https://wa.me/918904038295?text=Hi%20Sri%20Ayyan%20Fabs%2C%20I%27m%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-map-link"
          style={{ marginTop: '10px' }}
        >
          <span>💬 Instant WhatsApp Consulting</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  )
}
