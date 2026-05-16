import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react'

const infos = [
  {
    icon: Phone,
    label: 'Direct Support',
    value: '+91 89040 38295\n+91 89040 98297',
    href: 'tel:+918904038295',
    cta: 'Call Now',
  },
  {
    icon: Mail,
    label: 'Email Concierge',
    value: 'sriayyanfabs@gmail.com',
    href: 'mailto:sriayyanfabs@gmail.com',
    cta: 'Send Email',
  },
  {
    icon: MapPin,
    label: 'Our Workshop',
    value: 'No.69, 4th Cross, Royal Garden Layout,\nAmruthahalli Main Road, Bangalore – 560092',
    href: 'https://maps.google.com/?q=No.69+4th+Cross+Royal+Garden+Layout+Amruthahalli+Bangalore+560092',
    cta: 'View on Maps',
    external: true,
  },
]

export default function ContactDetails() {
  return (
    <div className="contact-info-panel">
      <div className="contact-info-panel__bg" />
      <div className="contact-info-panel__grid">
        {Array.from({ length: 20 }).map((_, i) => <span key={i} />)}
      </div>

      <div className="contact-info-panel__content">
        <h2 className="contact-info-panel__title">Get In Touch</h2>
        <p className="contact-info-panel__sub">
          Reach out through any channel below and our team will respond within 2 business hours.
        </p>

        <div className="contact-info-rows">
          {infos.map(({ icon: Icon, label, value, href, cta, external }) => (
            <div className="contact-info-row" key={label}>
              <div className="contact-info-row__icon">
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <div className="contact-info-row__body">
                <span className="contact-info-row__label">{label}</span>
                <p className="contact-info-row__value">{value.split('\n').map((l, i) => (
                  <span key={i}>{l}{i < value.split('\n').length - 1 && <br />}</span>
                ))}</p>
                <a
                  href={href}
                  className="contact-info-row__cta"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {cta} <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/918904038295?text=Hi%20Sri%20Ayyan%20Fabs%2C%20I%27m%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-wa-pill"
        >
          <MessageCircle size={17} strokeWidth={2} />
          Instant WhatsApp Consulting
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  )
}
