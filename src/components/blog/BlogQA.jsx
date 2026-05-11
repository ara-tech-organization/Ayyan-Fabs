import { MessageCircle, CheckCircle2 } from 'lucide-react'

const qaItems = [
  {
    q: 'Do you offer free site visits?',
    a: 'Yes, we offer free site visits for all projects across Bangalore. Call us at +91 89040 38295 to schedule.',
  },
  {
    q: 'What is your contact number?',
    a: '+91 89040 38295. We also respond via WhatsApp on the same number during business hours.',
  },
  {
    q: 'Do you fabricate and install?',
    a: 'Yes — we handle the complete project. Our own team fabricates at our Dasarahalli yard and installs at your site. No subcontracting.',
  },
  {
    q: 'Are you GST registered?',
    a: 'Yes. GSTIN: 29AIYPR5034K1ZC. We provide full GST invoicing and are eligible for corporate and government projects.',
  },
]

export default function BlogQA({ addRef }) {
  return (
    <section className="blog-qa-section" ref={addRef}>
      <div className="container">
        <div className="blog-qa__header reveal">
          <span className="section-label">Quick Answers</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Common questions answered directly — no back and forth needed.
          </p>
        </div>
        <div className="blog-qa__grid">
          {qaItems.map((item, i) => (
            <div key={i} className={`blog-qa-card reveal-scale delay-${(i % 2) + 1}`}>
              <div className="blog-qa-card__icon">
                <MessageCircle size={20} strokeWidth={1.8} />
              </div>
              <div className="blog-qa-card__content">
                <h3 className="blog-qa-card__q">{item.q}</h3>
                <p className="blog-qa-card__a">{item.a}</p>
              </div>
              <CheckCircle2 size={18} strokeWidth={1.8} className="blog-qa-card__check" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
