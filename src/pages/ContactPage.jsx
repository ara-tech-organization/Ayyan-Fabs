import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/h3.png'
import {
  ChevronRight, Phone, Mail, MapPin, Clock, FileText,
  User, Building, PhoneCall, AtSign, Wrench, Navigation,
  AlignLeft, Calendar, Send, CheckCircle2, ArrowUpRight,
} from 'lucide-react'

const contactDetails = [
  { icon: Phone,    label: 'Call / WhatsApp', value: '+91 89040 38295',          href: 'tel:+918904038295', external: false },
  { icon: Mail,     label: 'Email',            value: 'sriayyanfabs@gmail.com',   href: 'mailto:sriayyanfabs@gmail.com', external: false },
  { icon: MapPin,   label: 'Workshop Address', value: 'No.69, 4th Cross, Royal Garden Layout, Amruthahalli Main Road, Dasarahalli, Bangalore – 560092', href: 'https://maps.google.com/?q=Dasarahalli+Bangalore+560092', external: true },
  { icon: Clock,    label: 'Business Hours',   value: 'Monday – Saturday: 9:00 AM – 6:30 PM', href: null },
  { icon: FileText, label: 'GSTIN',            value: '29AIYPR5034K1ZC',          href: null },
]

const serviceOptions = [
  'Aluminium Fabrication',
  'ACP Cladding Works',
  'Patch Fitting & Frameless Glass',
  'Custom Metal Gates',
  'Industrial & Commercial Roofing',
  'Site Barricading',
  'MS Steel Fabrication',
  'Custom & Miscellaneous Works',
]

const empty = { name: '', company: '', phone: '', email: '', service: '', location: '', description: '', visitDate: '' }
const errors = { name: '', phone: '', service: '' }

export default function ContactPage() {
  const [form, setForm] = useState(empty)
  const [errs, setErrs] = useState(errors)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact Sri Ayyan Fabs | Free Quote Bangalore'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Contact Sri Ayyan Fabs for aluminium fabrication, ACP cladding, steel structures and more in Bangalore. Call +91 89040 38295 or submit a quote request.')
  }, [])

  const set = (field, val) => {
    setForm(f => ({ ...f, [field]: val }))
    if (errs[field]) setErrs(e => ({ ...e, [field]: '' }))
  }

  const validate = () => {
    const e = { name: '', phone: '', service: '' }
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit Indian mobile number'
    if (!form.service) e.service = 'Please select a service'
    setErrs(e)
    return !e.name && !e.phone && !e.service
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSuccess(true) }, 1200)
  }

  return (
    <>
      {/* Hero */}
      <section className="contact-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Contact</span>
          </nav>
          <h1 className="contact-hero__title">Let's Build Something<br />Exceptional Together</h1>
          <p className="contact-hero__sub">
            Whether you have detailed drawings or just an idea — reach out. Our team responds within 2 hours during business hours.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="contact-body">
        <div className="container">
          <div className="contact-layout">

            {/* Left — details */}
            <div className="contact-details">
              <h2 className="contact-details__title">Get in Touch</h2>
              <p className="contact-details__sub">Visit our workshop or reach out through any of the channels below.</p>

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
                        <a href={item.href} className="contact-detail-link"
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}>
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
                  href="https://maps.google.com/?q=Dasarahalli+Bangalore+560092"
                  target="_blank" rel="noopener noreferrer"
                  className="contact-map-link"
                >
                  <MapPin size={20} strokeWidth={1.8} />
                  <span>View on Google Maps</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-form-wrap">
              {success ? (
                <div className="contact-success">
                  <div className="contact-success__icon">
                    <CheckCircle2 size={48} strokeWidth={1.5} />
                  </div>
                  <h3>Request Received!</h3>
                  <p>Thank you! Your request has been received. Our team will contact you within 2 business hours to schedule your free site visit.</p>
                  <button className="btn-primary contact-success__btn" onClick={() => { setForm(empty); setSuccess(false) }}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className="contact-form-header">
                    <h2 className="contact-form-header__title">Request a Free Quote</h2>
                    <p className="contact-form-header__sub">Fill in your details and we'll get back to you within 2 hours.</p>
                  </div>

                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    {/* Row 1 */}
                    <div className="cf-row">
                      <div className={`cf-group${errs.name ? ' cf-group--error' : ''}`}>
                        <label>Full Name <span className="req">*</span></label>
                        <div className="cf-input-wrap">
                          <User size={15} className="cf-icon" />
                          <input type="text" placeholder="Rajesh Kumar" value={form.name} onChange={e => set('name', e.target.value)} />
                        </div>
                        {errs.name && <span className="cf-error">{errs.name}</span>}
                      </div>
                      <div className="cf-group">
                        <label>Company / Project Name</label>
                        <div className="cf-input-wrap">
                          <Building size={15} className="cf-icon" />
                          <input type="text" placeholder="ABC Constructions" value={form.company} onChange={e => set('company', e.target.value)} />
                        </div>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="cf-row">
                      <div className={`cf-group${errs.phone ? ' cf-group--error' : ''}`}>
                        <label>Phone Number <span className="req">*</span></label>
                        <div className="cf-input-wrap">
                          <PhoneCall size={15} className="cf-icon" />
                          <input type="tel" placeholder="9876543210" value={form.phone} onChange={e => set('phone', e.target.value)} />
                        </div>
                        {errs.phone && <span className="cf-error">{errs.phone}</span>}
                      </div>
                      <div className="cf-group">
                        <label>Email Address</label>
                        <div className="cf-input-wrap">
                          <AtSign size={15} className="cf-icon" />
                          <input type="email" placeholder="rajesh@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                        </div>
                      </div>
                    </div>

                    {/* Service */}
                    <div className={`cf-group${errs.service ? ' cf-group--error' : ''}`}>
                      <label>Service Required <span className="req">*</span></label>
                      <div className="cf-input-wrap cf-input-wrap--select">
                        <Wrench size={15} className="cf-icon" />
                        <select value={form.service} onChange={e => set('service', e.target.value)}>
                          <option value="">Select a service…</option>
                          {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      {errs.service && <span className="cf-error">{errs.service}</span>}
                    </div>

                    {/* Row 3 */}
                    <div className="cf-row">
                      <div className="cf-group">
                        <label>Project Location in Bangalore</label>
                        <div className="cf-input-wrap">
                          <Navigation size={15} className="cf-icon" />
                          <input type="text" placeholder="Whitefield, Bangalore" value={form.location} onChange={e => set('location', e.target.value)} />
                        </div>
                      </div>
                      <div className="cf-group">
                        <label>Preferred Site Visit Date</label>
                        <div className="cf-input-wrap">
                          <Calendar size={15} className="cf-icon" />
                          <input type="date" value={form.visitDate} onChange={e => set('visitDate', e.target.value)} />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="cf-group">
                      <label>Brief Requirement Description</label>
                      <div className="cf-input-wrap">
                        <AlignLeft size={15} className="cf-icon cf-icon--textarea" />
                        <textarea rows={4} placeholder="Describe your requirement — material, size, quantity, or any special requirements…" value={form.description} onChange={e => set('description', e.target.value)} />
                      </div>
                    </div>

                    <button type="submit" className="cf-submit" disabled={loading}>
                      {loading ? <span className="cf-spinner" /> : <Send size={16} strokeWidth={2.2} />}
                      {loading ? 'Submitting…' : 'Submit Request →'}
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
