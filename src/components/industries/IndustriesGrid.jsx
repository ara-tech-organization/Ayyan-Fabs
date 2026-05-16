const brandCategories = [
  {
    category: 'Structural & Materials',
    brands: ['Tata Steel', 'Jindal Steel', 'SAIL', 'APL Apollo Steel Pipes', 'Metpro', 'Nezone'],
  },
  {
    category: 'Architectural Aluminium',
    brands: ['Jindal Aluminium', 'Hindalco', 'Vitco Systems'],
  },
  {
    category: 'Facade & Cladding',
    brands: ['Eurobond', 'Alstone', 'Aludecor', 'Viva Composite Panel', 'Dowsil', 'Century', 'Fundermax'],
  },
  {
    category: 'Glass Solutions',
    brands: ['S.G.', 'Ozone', 'AIS Glass'],
  },
  {
    category: 'Hardware & Tools',
    brands: ['HiKOKI', 'ESAB', 'Ador Welding', 'Fischer', 'Hilti', 'Bosch'],
  },
  {
    category: 'System Windows Hardware',
    brands: ['Hivik', 'Tecno Fitus', 'Kinlong', 'Dhanuka Group'],
  },
  {
    category: 'Automation',
    brands: ['Beninca India'],
  },
  {
    category: 'Premium Powder Coating',
    brands: ['Interpon', 'Pulver', 'Jotun'],
  },
]

export default function IndustriesGrid({ addRef }) {
  return (
    <section className="ind-page-section" ref={addRef}>
      <div className="container">
        <div className="ind-page__header reveal">
          <span className="section-label">Our Partners</span>
          <h2 className="section-heading">Our Trusted Brand Partners</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            We collaborate with industry-leading brands to ensure quality, durability, and performance
            at every stage of fabrication and installation.
          </p>
        </div>
        <div className="ind-page__grid">
          {brandCategories.map((cat, i) => (
            <div key={i} className={`ind-page-card reveal-scale delay-${(i % 4) + 1}`}>
              <h3 className="ind-page-card__name">{cat.category}</h3>
              <div className="ind-page-card__divider" />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {cat.brands.map((brand, j) => (
                  <li key={j} className="ind-page-card__val" style={{ marginBottom: '6px' }}>
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
