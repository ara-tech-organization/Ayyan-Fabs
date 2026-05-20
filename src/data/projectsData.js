const g = (import.meta.env.BASE_URL || '/') + 'gallery/'
const c = (import.meta.env.BASE_URL || '/') + 'clients/'

const imgs = [
  g + 'aluminium-window-frame-installation.jpg',
  g + 'godrej-park-retreat-2024.jpg',
  g + 'aluminium-office-partition.jpg',
  g + 'aluminium-glass-frame-design.jpg',
  g + 'exterior-wall-cladding-panel.jpg',
  g + 'acp-cladding-commercial-building.jpg',
  g + 'glass-door-patch-fitting.jpg',
  g + 'frameless-glass-installation.jpg',
  g + 'modern-ms-gate-design.jpg',
  g + 'sliding-gate-fabrication.jpg',
  g + 'metal-sheet-roofing-work.jpg',
  g + 'industrial-roof-installation.jpg',
  g + 'road-safety-barrication.jpg',
  g + 'construction-site-barricade.jpg',
  g + 'custom-fabrication-work.jpg',
  g + 'on-site-installation.jpg',
]
const img = i => imgs[i % imgs.length]

const resCaptions  = ['Exterior Facade', 'Premium Windows', 'Structural Glass', 'Modern Architecture', 'Exterior Finish', 'Premium Framing']
const comCaptions  = ['Main Elevation', 'Facade Detail', 'ACP Cladding', 'Glass Partition', 'Shopfront View', 'Interior Works']
const indCaptions  = ['Structural Frame', 'MS Fabrication', 'Industrial Roofing', 'Steel Works', 'Site View', 'Completed Structure']
const instCaptions = ['Entrance Facade', 'Aluminium Doors', 'Window Systems', 'Glass Partition', 'Main Block View', 'Completed Work']
const hospCaptions = ['Hotel Facade', 'Reception Glass', 'Interior Partition', 'Lobby Entrance', 'Side Elevation', 'Completed View']
const healCaptions = ['Hospital Facade', 'ACP Cladding', 'Aluminium Works', 'Glass Partition', 'Side View', 'Completed Block']

const getCaptions = cat => {
  if (cat === 'Residential')   return resCaptions
  if (cat === 'Commercial')    return comCaptions
  if (cat === 'Industrial')    return indCaptions
  if (cat === 'Institutional') return instCaptions
  if (cat === 'Hospitality')   return hospCaptions
  if (cat === 'Healthcare')    return healCaptions
  return resCaptions
}

export const projectsByYear = [
  {
    year: '2025+',
    projects: [
      { name: 'Godrej Woodscapes',        category: 'Residential',   photos: 8,  img: img(0),  logo: c+'godrej.png' },
      { name: 'Godrej Azure',             category: 'Residential',   photos: 1,  img: img(1),  logo: c+'godrej.png' },
      { name: 'Casagrand Flamingo',       category: 'Residential',   photos: 2,  img: img(2),  logo: c+'casagrand.png' },
      { name: 'Casagrand Windsor',        category: 'Residential',   photos: 2,  img: img(3),  logo: c+'casagrand.png' },
      { name: 'Casagrand Attapur',        category: 'Residential',   photos: 1,  img: img(4),  logo: c+'casagrand.png' },
      { name: 'Brigade Ivory',            category: 'Residential',   photos: 3,  img: img(5),  logo: c+'brigade.png' },
      { name: 'Godrej MSR',               category: 'Residential',   photos: 4,  img: img(6),  logo: c+'godrej.png' },
      { name: 'Godrej Splendour',         category: 'Residential',   photos: 1,  img: img(7),  logo: c+'godrej.png' },
      { name: 'Atmos & Aura',             category: 'Residential',   photos: 2,  img: img(8),  logo: c+'assetz.png' },
      { name: 'Assetz Sora & Saki',       category: 'Residential',   photos: 1,  img: img(9),  logo: c+'assetz.png' },
      { name: 'Assetz Soho and Sky',      category: 'Commercial',    photos: 2,  img: img(10), logo: c+'assetz.png' },
      { name: 'Assetz Canvas & Cove',     category: 'Residential',   photos: 3,  img: img(11), logo: c+'assetz.png' },
      { name: 'Lodha Mirabelle',          category: 'Residential',   photos: 4,  img: img(0),  logo: c+'lodha.png' },
    ],
  },
  {
    year: '2024',
    projects: [
      { name: 'Godrej Kokapet',                category: 'Residential',  photos: 29, img: img(1),  logo: c+'godrej.png' },
      { name: 'Godrej Park Retreat Clubhouse', category: 'Commercial',   photos: 12, img: img(2),  logo: c+'godrej.png' },
      { name: 'Godrej Ananda',                 category: 'Residential',  photos: 15, img: img(3),  logo: c+'godrej.png' },
      { name: 'Godrej Regal Pavillion',        category: 'Residential',  photos: 3,  img: img(4),  logo: c+'godrej.png' },
      { name: 'Assetz Bloom and Dell',         category: 'Residential',  photos: 9,  img: img(5),  logo: c+'assetz.png' },
      { name: 'Lodha Mirabelle',               category: 'Residential',  photos: 4,  img: img(6),  logo: c+'lodha.png' },
      { name: 'Casagrand Aquene',              category: 'Residential',  photos: 2,  img: img(7),  logo: c+'casagrand.png' },
      { name: 'Brigade Goldspire',             category: 'Residential',  photos: 1,  img: img(8),  logo: c+'brigade.png' },
      { name: 'Mahindra Eden',                 category: 'Residential',  photos: 1,  img: img(9),  logo: c+'mahindra.png' },
      { name: 'Ren & Rei',                     category: 'Commercial',   photos: 2,  img: img(10), logo: c+'assetz.png' },
      { name: 'Assetz Avathi',                 category: 'Residential',  photos: 1,  img: img(11), logo: c+'assetz.png' },
      { name: 'L&W Construction',              category: 'Commercial',   photos: 1,  img: img(0),  logo: c+'lw.png' },
      { name: 'Inspira World',                 category: 'Commercial',   photos: 1,  img: img(1) },
      { name: 'Godrej RDL-Hosa Road',          category: 'Residential',  photos: 1,  img: img(2),  logo: c+'godrej.png' },
      { name: 'Phenix',                        category: 'Commercial',   photos: 1,  img: img(3),  logo: c+'phenix.png' },
    ],
  },
  {
    year: '2023',
    projects: [
      { name: 'Godrej Avenues',           category: 'Residential',   photos: 5,  img: img(4), logo: c+'godrej.png' },
      { name: 'National Public School',   category: 'Institutional', photos: 2,  img: img(5), logo: c+'nps.png' },
      { name: 'Brigade Orchards Banyan',  category: 'Residential',   photos: 1,  img: img(6), logo: c+'brigade.png' },
      { name: 'Brigade Atmosphere',       category: 'Residential',   photos: 1,  img: img(7), logo: c+'brigade.png' },
      { name: 'Bloom Hotel',              category: 'Hospitality',   photos: 1,  img: img(8), logo: c+'bloom.png' },
      { name: 'Kanpro Chocolate Factory', category: 'Industrial',    photos: 1,  img: img(9) },
    ],
  },
  {
    year: '2022',
    projects: [
      { name: 'La Palmera',          category: 'Residential',  photos: 26, img: img(10), logo: c+'la-palmera.png' },
      { name: 'Godrej 24',           category: 'Residential',  photos: 1,  img: img(11), logo: c+'godrej.png' },
      { name: 'Assetz Soho and Sky', category: 'Commercial',   photos: 2,  img: img(0),  logo: c+'assetz.png' },
      { name: 'Assetz 38 & Banyan',  category: 'Residential',  photos: 2,  img: img(1),  logo: c+'assetz.png' },
      { name: 'Ascent Hosur',        category: 'Commercial',   photos: 2,  img: img(2),  logo: c+'ascent.svg' },
    ],
  },
  {
    year: '2021',
    projects: [
      { name: 'Soul & Soil',                 category: 'Residential',  photos: 20, img: img(3), logo: c+'assetz.png' },
      { name: 'Sun & Sanctum',               category: 'Residential',  photos: 6,  img: img(4), logo: c+'assetz.png' },
      { name: 'Brigade Ramaiah Hospital',    category: 'Healthcare',   photos: 4,  img: img(5), logo: c+'brigade.png' },
      { name: 'Brigade Pavillion Villas',    category: 'Residential',  photos: 3,  img: img(6), logo: c+'brigade.png' },
      { name: 'Assetz 18 & Oak',             category: 'Residential',  photos: 1,  img: img(7), logo: c+'assetz.png' },
    ],
  },
  {
    year: '2020',
    projects: [
      { name: 'Corporate Office', category: 'Commercial',  photos: 1, img: img(8),  logo: c+'assetz.png' },
      { name: 'Biryani Zone',     category: 'Hospitality', photos: 1, img: img(9),  logo: c+'biryani-zone-new.jpg' },
      { name: '63 Degree',        category: 'Commercial',  photos: 1, img: img(10), logo: c+'assetz.png' },
    ],
  },
  {
    year: '2019',
    projects: [
      { name: 'Assetz Marq PH-2',             category: 'Residential',   photos: 37, img: img(11), logo: c+'assetz.png' },
      { name: 'Orchids International School', category: 'Institutional', photos: 1,  img: img(0),  logo: c+'orchids.png' },
      { name: '63 Degree',                    category: 'Commercial',    photos: 1,  img: img(1),  logo: c+'assetz.png' },
    ],
  },
  {
    year: '2018',
    projects: [
      { name: 'Earth & Essence',      category: 'Residential', photos: 8, img: img(2), logo: c+'assetz.png' },
      { name: 'Assetz Canvas & Cove', category: 'Residential', photos: 3, img: img(3), logo: c+'assetz.png' },
      { name: 'Leaves & Livrs',       category: 'Residential', photos: 1, img: img(4), logo: c+'assetz.png' },
      { name: 'Here & Now',           category: 'Commercial',  photos: 1, img: img(5), logo: c+'assetz.png' },
    ],
  },
  {
    year: '2017',
    projects: [
      { name: 'Assetz 18 & Oak', category: 'Residential',   photos: 1, img: img(6), logo: c+'assetz.png' },
      { name: 'Supreme Solar',   category: 'Industrial',    photos: 1, img: img(7), logo: c+'supreme.png' },
      { name: 'Chrysalis',       category: 'Institutional', photos: 1, img: img(8), logo: c+'chrysalis.png' },
    ],
  },
  {
    year: '2016',
    projects: [
      { name: 'Assetz Lumos',      category: 'Residential', photos: 1, img: img(9),  logo: c+'assetz.png' },
      { name: 'Assetz Marq PH-1',  category: 'Residential', photos: 9, img: img(10), logo: c+'assetz.png' },
    ],
  },
  {
    year: '2015',
    projects: [
      { name: 'Assetz East Point', category: 'Residential', photos: 1, img: img(11), logo: c+'assetz.png' },
      { name: 'Global Tech Park',  category: 'Commercial',  photos: 1, img: img(0),  logo: c+'global.png' },
      { name: 'Crompton Office',   category: 'Commercial',  photos: 1, img: img(1),  logo: c+'crompton.png' },
      { name: 'L & W Builders',    category: 'Commercial',  photos: 1, img: img(2),  logo: c+'lw.png' },
    ],
  },
  {
    year: '2014',
    projects: [
      { name: 'Assetz 27 Park Avenue',     category: 'Residential',   photos: 1, img: img(3), logo: c+'assetz.png' },
      { name: 'Ramanashree',               category: 'Hospitality',   photos: 1, img: img(4), logo: c+'ramanashree.png' },
      { name: 'Emmvee Solar',              category: 'Industrial',    photos: 1, img: img(5), logo: c+'emmvee.png' },
      { name: 'Eco Space Infrastructures', category: 'Commercial',    photos: 1, img: img(6), logo: c+'eco-space.png' },
      { name: 'Vibgyor',                   category: 'Institutional', photos: 2, img: img(7), logo: c+'vibgyor.png' },
    ],
  },
  {
    year: '2008–2013',
    projects: [
      { name: 'ITC Gardenia Bengaluru', category: 'Hospitality', photos: 1,  img: img(8), logo: c+'itc.png' },
      { name: 'Residential Projects',  category: 'Residential',  photos: 18, img: img(9), logo: c+'residential.png' },
    ],
  },
].map(yearGroup => ({
  ...yearGroup,
  projects: yearGroup.projects.map(p => ({
    ...p,
    captions: getCaptions(p.category),
    desc: getDesc(p.name, p.category, yearGroup.year),
  })),
}))

function getDesc(name, category, year) {
  const map = {
    'Godrej Kokapet':                'High-end architectural fabrication and premium window systems for Godrej Kokapet, delivering unparalleled luxury and structural excellence.',
    'Godrej Park Retreat Clubhouse': 'Architectural glazing, ACP cladding, and aluminium works for Godrej Park Retreat Clubhouse — a premium lifestyle amenity space.',
    'Godrej Ananda':                 'Comprehensive aluminium fabrication including windows, doors and facades across all towers of Godrej Ananda.',
    'Godrej Regal Pavillion':        'Premium aluminium systems and glass works for Godrej Regal Pavillion residential development.',
    'Assetz Bloom and Dell':         'Custom aluminium sliding and folding systems with glass partitions for Assetz Bloom and Dell residential complex.',
    'La Palmera':                    'Extensive aluminium facade, glass systems and ACP cladding works — 26 photos documenting the full scope at La Palmera.',
    'Soul & Soil':                   'Comprehensive aluminium and glass fabrication for Soul & Soil — 20 photos showcasing precision-engineered window and door systems.',
    'Assetz Marq PH-2':             'Large-scale aluminium fabrication for Assetz Marq Phase 2 — 37 photos showcasing the full scope of window, door, and facade work.',
    'Assetz Lumos':                  'Sophisticated residential development by Assetz, featuring precision-engineered aluminium fabrication and high-performance architectural glazing by Sri Ayyan Fabs.',
    'Assetz Marq PH-1':             'Phase 1 of Assetz Marq — comprehensive aluminium window, door, and facade systems across the entire residential complex.',
    'ITC Gardenia Bengaluru':        'Landmark aluminium and glass fabrication for ITC Gardenia — one of Bangalore\'s most prestigious luxury hotels. A signature project in Sri Ayyan Fabs\' legacy.',
    'Brigade Ramaiah Hospital':      'Clean-line aluminium partitions, doors, and ACP cladding for Brigade Ramaiah Hospital — meeting healthcare-grade precision and durability requirements.',
    'Godrej Avenues':                'Full aluminium window, door, and facade systems for Godrej Avenues — covering all towers and common areas of the residential complex.',
    'National Public School':        'Aluminium doors, windows, and safety glass partition systems for National Public School Bangalore — institutional-grade fabrication.',
    'Earth & Essence':               'Premium aluminium fabrication and architectural glass works for Earth & Essence — 8 photos of completed residential project.',
    'Global Tech Park':              'Large-scale ACP cladding, aluminium curtain walls, and glass facades for Global Tech Park commercial development.',
  }
  if (map[name]) return map[name]
  const cat = category.toLowerCase()
  if (cat === 'residential') return `Precision-engineered aluminium windows, doors, and facade systems for ${name} — delivering lasting beauty and structural strength.`
  if (cat === 'commercial')  return `ACP cladding, aluminium shopfronts, and glass partition systems for ${name} commercial development in Bangalore.`
  if (cat === 'industrial')  return `Heavy-duty MS steel and structural aluminium fabrication for ${name} industrial facility.`
  if (cat === 'institutional') return `Aluminium doors, windows, and glass systems for ${name} — institutional-grade precision and durability.`
  if (cat === 'hospitality') return `Modern aluminium and glass fabrication for ${name} — combining aesthetics with functional hospitality design.`
  if (cat === 'healthcare')  return `Clean-line aluminium partitions and ACP cladding for ${name} — meeting healthcare-grade precision requirements.`
  return `Premium aluminium and glass fabrication project by Sri Ayyan Fabs — ${name}, ${year}.`
}

export const allYears = projectsByYear.map(y => y.year)

export const categoryColors = {
  Residential:   { bg: 'rgba(28,63,148,0.1)',  color: '#1C3F94' },
  Commercial:    { bg: 'rgba(234,88,12,0.1)',   color: '#ea580c' },
  Industrial:    { bg: 'rgba(71,85,105,0.1)',   color: '#475569' },
  Institutional: { bg: 'rgba(5,150,105,0.1)',   color: '#059669' },
  Healthcare:    { bg: 'rgba(220,38,38,0.1)',   color: '#dc2626' },
  Hospitality:   { bg: 'rgba(124,58,237,0.1)',  color: '#7c3aed' },
}
