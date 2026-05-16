import { useEffect } from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactDetails from '../components/contact/ContactDetails'
import ContactForm from '../components/contact/ContactForm'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact Sri Ayyan Fabs | Free Quote Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Contact Sri Ayyan Fabs for aluminium fabrication, ACP cladding, steel structures and more in Bangalore. Call +91 89040 38295 or submit a quote request.')
  }, [])

  return (
    <>
      <ContactHero />
      <section className="contact-body">
        <div className="container">
          <div className="contact-layout">
            <ContactDetails />
            <ContactForm />
          </div>

          <div className="contact-map-embed">
            <iframe
              title="Sri Ayyan Fabs Workshop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3!2d77.5!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAmruthahalli%2C+Bangalore+560092!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="340"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
