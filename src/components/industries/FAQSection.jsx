import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/aboutData'

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{item.q}</span>
        <ChevronDown size={18} className="faq-item__chevron" />
      </button>
      {open && <p className="faq-item__a">{item.a}</p>}
    </div>
  )
}

export default function FAQSection({ addRef }) {
  return (
    <section className="ind-faq-section" ref={addRef}>
      <div className="container">
        <div className="ind-faq__header reveal">
          <span className="section-label">Common Questions</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Everything you need to know before starting your project with us.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => <FAQItem key={i} item={item} />)}
        </div>
      </div>
    </section>
  )
}
