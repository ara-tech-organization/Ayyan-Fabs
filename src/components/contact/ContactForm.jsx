import { useState } from 'react'
import {
  User, Building, PhoneCall, AtSign, Wrench, Navigation,
  AlignLeft, Calendar, Send, CheckCircle2,
} from 'lucide-react'

const serviceOptions = [
  'Premium Aluminium Fabrication',
  'Modern Glass Solutions',
  'Sliding & Folding Systems',
  'ACP Cladding Works',
  'Custom Interior Works',
  'Structural Fabrication',
]

const empty = { name: '', company: '', phone: '', email: '', service: '', location: '', description: '', visitDate: '' }

export default function ContactForm() {
  const [form, setForm] = useState(empty)
  const [errs, setErrs] = useState({ name: '', phone: '', service: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

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
    <div className="contact-form-wrap">
      {success ? (
        <div className="contact-success">
          <div className="contact-success__icon">
            <CheckCircle2 size={48} strokeWidth={1.5} />
          </div>
          <h3>Request Received!</h3>
          <p>
            Thank you! Your request has been received. Our team will contact you within 2 business hours to schedule your free site visit.
          </p>
          <button
            className="btn-primary contact-success__btn"
            onClick={() => { setForm(empty); setSuccess(false) }}
          >
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

            <div className="cf-group">
              <label>Brief Requirement Description</label>
              <div className="cf-input-wrap">
                <AlignLeft size={15} className="cf-icon cf-icon--textarea" />
                <textarea
                  rows={4}
                  placeholder="Describe your requirement — material, size, quantity, or any special requirements…"
                  value={form.description}
                  onChange={e => set('description', e.target.value)}
                />
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
  )
}
