import { useState, useEffect, useRef } from 'react'
import { Send, CheckCircle, User, Building, Phone, Mail, Wrench, MapPin, AlignLeft, Calendar } from 'lucide-react'

const services = [
  'Aluminium Windows & Doors',
  'MS Steel Structures',
  'Glass Partition Systems',
  'Stainless Steel Works',
  'UPVC Window Systems',
  'MS Grills & Gates',
  'Cladding & Wall Panels',
  'Handrails & Balustrades',
]

const initialForm = {
  name: '', company: '', phone: '', email: '',
  service: '', location: '', description: '', visitDate: '',
}

export default function QuoteFormSection() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .quote-benefit').forEach(el => {
            el.classList.add('visible')
          })
        }
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit Indian mobile number'
    if (!form.service) e.service = 'Please select a service'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const handleReset = () => {
    setForm(initialForm)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="quote-form" className="quote-section" ref={sectionRef}>
      <div className="container quote-inner">
        <div className="quote-info reveal-left">
          <span className="section-label">Request a Quote</span>
          <h2 className="section-heading quote-heading">
            Start Your Project Today
          </h2>
          <p className="section-sub">
            Fill in your requirements and our team will reach out within 2 business hours to schedule your free site visit.
          </p>

          <ul className="quote-benefits">
            {[
              'Free site survey included',
              'Detailed, itemised quotation',
              'No-obligation consultation',
              'Response within 2 business hours',
            ].map((b, i) => (
              <li key={i} className={`quote-benefit delay-${i + 1}`}>
                <CheckCircle size={18} strokeWidth={2} />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="quote-contact-strip">
            <a href="tel:+918904038295" className="quote-contact-link">
              <Phone size={16} />
              <span>+91 89040 38295</span>
            </a>
            <a href="mailto:sriayyanfabs@gmail.com" className="quote-contact-link">
              <Mail size={16} />
              <span>sriayyanfabs@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="quote-form-wrap reveal-right">
          {submitted ? (
            <div className="quote-success" role="alert">
              <div className="quote-success__icon">
                <CheckCircle size={48} strokeWidth={1.5} />
              </div>
              <h3>Request Received!</h3>
              <p>
                Thank you! Your request has been received. Our team will contact you within
                2 business hours to schedule your free site visit.
              </p>
              <button className="btn-primary quote-success__btn" onClick={handleReset}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit} noValidate aria-label="Quote request form">
              <div className="form-row">
                <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
                  <label htmlFor="q-name">
                    Full Name <span className="req" aria-hidden="true">*</span>
                  </label>
                  <div className="form-input-wrap">
                    <User size={16} className="form-icon" />
                    <input
                      id="q-name" name="name" type="text" autoComplete="name"
                      placeholder="Your full name"
                      value={form.name} onChange={handleChange}
                      aria-required="true" aria-describedby={errors.name ? 'name-err' : undefined}
                    />
                  </div>
                  {errors.name && <span id="name-err" className="form-error" role="alert">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="q-company">Company / Project Name</label>
                  <div className="form-input-wrap">
                    <Building size={16} className="form-icon" />
                    <input
                      id="q-company" name="company" type="text"
                      placeholder="Optional"
                      value={form.company} onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group${errors.phone ? ' form-group--error' : ''}`}>
                  <label htmlFor="q-phone">
                    Phone Number <span className="req" aria-hidden="true">*</span>
                  </label>
                  <div className="form-input-wrap">
                    <Phone size={16} className="form-icon" />
                    <input
                      id="q-phone" name="phone" type="tel" autoComplete="tel"
                      placeholder="10-digit mobile number"
                      value={form.phone} onChange={handleChange}
                      aria-required="true" aria-describedby={errors.phone ? 'phone-err' : undefined}
                    />
                  </div>
                  {errors.phone && <span id="phone-err" className="form-error" role="alert">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="q-email">Email Address</label>
                  <div className="form-input-wrap">
                    <Mail size={16} className="form-icon" />
                    <input
                      id="q-email" name="email" type="email" autoComplete="email"
                      placeholder="Optional"
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group${errors.service ? ' form-group--error' : ''}`}>
                  <label htmlFor="q-service">
                    Service Required <span className="req" aria-hidden="true">*</span>
                  </label>
                  <div className="form-input-wrap form-input-wrap--select">
                    <Wrench size={16} className="form-icon" />
                    <select
                      id="q-service" name="service"
                      value={form.service} onChange={handleChange}
                      aria-required="true" aria-describedby={errors.service ? 'service-err' : undefined}
                    >
                      <option value="">Select a service</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  {errors.service && <span id="service-err" className="form-error" role="alert">{errors.service}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="q-location">Project Location in Bangalore</label>
                  <div className="form-input-wrap">
                    <MapPin size={16} className="form-icon" />
                    <input
                      id="q-location" name="location" type="text"
                      placeholder="e.g. Koramangala, Whitefield"
                      value={form.location} onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group form-group--full">
                <label htmlFor="q-desc">Brief Requirement Description</label>
                <div className="form-input-wrap form-input-wrap--textarea">
                  <AlignLeft size={16} className="form-icon form-icon--textarea" />
                  <textarea
                    id="q-desc" name="description" rows={4}
                    placeholder="Describe your project, measurements, or any specific requirements..."
                    value={form.description} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="q-date">Preferred Site Visit Date</label>
                <div className="form-input-wrap">
                  <Calendar size={16} className="form-icon" />
                  <input
                    id="q-date" name="visitDate" type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={form.visitDate} onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className={`form-submit${loading ? ' form-submit--loading' : ''}`} disabled={loading}>
                {loading ? (
                  <>
                    <span className="form-submit__spinner" aria-hidden="true" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Submit Request
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
