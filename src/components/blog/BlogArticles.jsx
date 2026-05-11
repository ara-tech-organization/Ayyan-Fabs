import { BookOpen, Tag, Target } from 'lucide-react'

const articles = [
  {
    pri: 1,
    title: 'ACP Cladding Cost Guide for Bangalore Buildings (2025)',
    keyword: 'ACP cladding cost Bangalore',
    intent: 'Cost research — high commercial intent',
  },
  {
    pri: 2,
    title: 'How to Choose a Fabrication Company in Bangalore — 7 Checkpoints',
    keyword: 'fabrication company Bangalore',
    intent: 'Vendor selection — captures decision-stage buyers',
  },
  {
    pri: 3,
    title: "Aluminium vs UPVC Windows — Which is Better for Bangalore's Climate?",
    keyword: 'aluminium windows Bangalore',
    intent: 'Commercial comparison — high volume',
  },
  {
    pri: 4,
    title: 'Industrial Mezzanine Floors — Complete Design & Cost Guide',
    keyword: 'mezzanine floor fabrication Bangalore',
    intent: 'Industrial buyers — high ticket value',
  },
  {
    pri: 5,
    title: 'Roofing Systems for Bangalore Warehouses — What Works in Heavy Monsoon',
    keyword: 'warehouse roofing Bangalore',
    intent: 'Industrial/commercial buyers',
  },
  {
    pri: 6,
    title: 'Frameless Glass Partitions — Everything You Need to Know Before You Order',
    keyword: 'patch fitting glass partition Bangalore',
    intent: 'Office buyers — design intent',
  },
]

export default function BlogArticles({ addRef }) {
  return (
    <section className="blog-section" ref={addRef}>
      <div className="container">
        <div className="blog-section__header reveal">
          <span className="section-label">Expert Articles</span>
          <h2 className="section-heading">Fabrication Guides & Insights</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            In-depth articles to help you make informed decisions on your fabrication projects.
          </p>
        </div>
        <div className="blog-grid">
          {articles.map((art, i) => (
            <article key={i} className={`blog-card reveal-scale delay-${(i % 3) + 1}`}>
              <div className="blog-card__pri">
                <span>{String(art.pri).padStart(2, '0')}</span>
              </div>
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span className="blog-card__keyword">
                    <Tag size={11} strokeWidth={2.2} />
                    {art.keyword}
                  </span>
                </div>
                <h3 className="blog-card__title">{art.title}</h3>
                <div className="blog-card__intent">
                  <Target size={12} strokeWidth={2} />
                  <span>{art.intent}</span>
                </div>
              </div>
              <div className="blog-card__footer">
                <span className="blog-card__coming">Coming Soon</span>
                <BookOpen size={15} strokeWidth={1.8} className="blog-card__icon" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
