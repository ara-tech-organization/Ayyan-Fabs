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
        </div>
      </section>
    </>
  )
}
