import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react'

export default function ContactDetails() {
  return (
    <div className="contact-details">
      <h2 className="contact-details__title">Connect With Excellence</h2>
      <p className="contact-details__sub">
        Experience world-class fabrication consulting. Visit our workshop or reach out through any channel below.
      </p>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/918904038295?text=Hi%20Sri%20Ayyan%20Fabs%2C%20I%27m%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="contact-whatsapp-btn"
      >
        <MessageCircle size={18} strokeWidth={2} />
        Instant WhatsApp Consulting
        <ArrowUpRight size={14} />
      </a>

      {/* 3 action cards */}
      <div className="contact-cards">

        {/* Direct Support */}
        <div className="contact-card">
          <div className="contact-card__icon">
            <Phone size={20} strokeWidth={1.7} />
          </div>
          <div className="contact-card__body">
            <span className="contact-card__label">Direct Support</span>
            <p className="contact-card__value">+91 89040 38295<br />+91 89040 98297</p>
          </div>
          <a href="tel:+918904038295" className="contact-card__btn">
            Click to Call Now
          </a>
        </div>

        {/* Email Concierge */}
        <div className="contact-card">
          <div className="contact-card__icon">
            <Mail size={20} strokeWidth={1.7} />
          </div>
          <div className="contact-card__body">
            <span className="contact-card__label">Email Concierge</span>
            <p className="contact-card__value">sriayyanfabs@gmail.com</p>
          </div>
          <a href="mailto:sriayyanfabs@gmail.com" className="contact-card__btn">
            Send official inquiry
          </a>
        </div>

        {/* Our Workshop */}
        <div className="contact-card">
          <div className="contact-card__icon">
            <MapPin size={20} strokeWidth={1.7} />
          </div>
          <div className="contact-card__body">
            <span className="contact-card__label">Our Workshop</span>
            <p className="contact-card__value">No.69, 4th Cross, Royal Garden Layout, Amruthahalli Main Road, Bangalore – 560092</p>
          </div>
          <a
            href="https://maps.google.com/?q=No.69+4th+Cross+Royal+Garden+Layout+Amruthahalli+Bangalore+560092"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card__btn"
          >
            View On Google Maps
            <ArrowUpRight size={13} />
          </a>
        </div>

      </div>

      {/* Google Maps embed */}
      <div className="contact-map-embed">
        <iframe
          title="Sri Ayyan Fabs Workshop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3!2d77.5!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAmruthahalli%2C+Bangalore+560092!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="220"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
