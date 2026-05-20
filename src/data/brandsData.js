const b = (import.meta.env.BASE_URL || '/') + 'brands/'

export const brandCategories = [
  {
    category: 'Structural & Materials',
    brands: [
      { name: 'Tata Steel',            logo: b + 'tata_steel.png' },
      { name: 'Jindal Steel',           logo: b + 'jindal.jpg' },
      { name: 'SAIL',                   logo: b + 'sail.jpg' },
      { name: 'APL Apollo',             logo: b + 'apl_apollo.webp' },
      { name: 'Metpro',                 logo: b + 'metpro.png' },
      { name: 'Nezone',                 logo: b + 'nezone.svg' },
    ],
  },
  {
    category: 'Architectural Aluminium',
    brands: [
      { name: 'Jindal Aluminium', logo: b + 'jindal_aluminium.svg' },
      { name: 'Hindalco',         logo: b + 'hindalco.png' },
      { name: 'Vitco Systems',    logo: b + 'vitco.svg' },
    ],
  },
  {
    category: 'Facade & Cladding',
    brands: [
      { name: 'Eurobond',             logo: b + 'eurobond.jpg' },
      { name: 'Alstone',              logo: b + 'alstone.avif' },
      { name: 'Aludecor',             logo: b + 'aludecor.jpg' },
      { name: 'Viva Composite Panel', logo: b + 'viva.jpg' },
      { name: 'Dowsil Silicones',     logo: b + 'dowsil.jpg' },
      { name: 'Century',              logo: b + 'century.jpg' },
      { name: 'Fundermax',            logo: b + 'fundermax.svg' },
    ],
  },
  {
    category: 'Glass Solutions',
    brands: [
      { name: 'S.G.',      logo: b + 'sg.webp' },
      { name: 'Glass',     logo: b + 'glass_brand4.png' },
      { name: 'Ozone',     logo: b + 'ozone.png' },
      { name: 'AIS Glass', logo: b + 'ais.png' },
    ],
  },
  {
    category: 'Hardware & Tools',
    brands: [
      { name: 'HiKOKI',       logo: b + 'hikoki.png' },
      { name: 'ESAB',         logo: b + 'esab.webp' },
      { name: 'Ador Welding', logo: b + 'ador.png' },
      { name: 'Fischer',      logo: b + 'fischer.png' },
      { name: 'Hilti',        logo: b + 'hilti.png' },
      { name: 'Bosch',        logo: b + 'bosch.svg' },
    ],
  },
  {
    category: 'System Windows Hardware',
    brands: [
      { name: 'Hivik',         logo: b + 'hivik.png' },
      { name: 'Tecno Fitus',   logo: b + 'tecnofitus.svg' },
      { name: 'Kinlong',       logo: b + 'kinlong.svg' },
      { name: 'Dhanuka Group', logo: b + 'dhanuka.svg' },
    ],
  },
  {
    category: 'Automation',
    brands: [
      { name: 'Beninca India', logo: b + 'beninca.jpg' },
    ],
  },
  {
    category: 'Premium Powder Coating',
    brands: [
      { name: 'Interpon', logo: b + 'interpon.svg' },
      { name: 'Pulver',   logo: b + 'pulver.svg' },
      { name: 'Jotun',    logo: b + 'jotun.svg' },
    ],
  },
]
