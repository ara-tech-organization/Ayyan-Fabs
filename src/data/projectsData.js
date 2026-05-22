const g = (import.meta.env.BASE_URL || '/') + 'gallery/'
const c = (import.meta.env.BASE_URL || '/') + 'clients/'
const p = (import.meta.env.BASE_URL || '/') + 'projects/'

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

// Helper: build image array from a folder and filenames
const pi = (folder, files) => files.map(f => p + folder + '/' + f)

export const projectsByYear = [
  {
    year: '2025+',
    projects: [
      { name: 'Godrej Woodscapes',    category: 'Residential', logo: c+'godrej.png',
        imgs: pi('godrej-woodscapes', ['gw-1.jpg','gw-2.jpg','gw-3.jpg','gw-4.jpg','gw-5.jpg','gw-6.jpg','gw-7.jpg','gw-8.jpg']) },
      { name: 'Godrej Azure',         category: 'Residential', logo: c+'godrej.png',
        imgs: pi('godrej-azure', ['ga-1.jpg']) },
      { name: 'Casagrand Flamingo',   category: 'Residential', logo: c+'casagrand.png',
        imgs: pi('casagrand-flamingo', ['cf-1.jpg','cf-2.jpg']) },
      { name: 'Casagrand Windsor',    category: 'Residential', logo: c+'casagrand.png',
        imgs: pi('casagrand-windsor', ['cw-1.jpg','cw-2.jpg']) },
      { name: 'Casagrand Attapur',    category: 'Residential', logo: c+'casagrand.png',
        imgs: pi('casagrand-attapur', ['ca-1.jpg']) },
      { name: 'Brigade Ivory',        category: 'Residential', logo: c+'brigade.png',
        imgs: pi('brigade-ivory', ['ivory-1.jpg','ivory-2.jpg','ivory-3.jpg']) },
      { name: 'Godrej MSR',           category: 'Residential', logo: c+'godrej.png',
        imgs: pi('godrej-msr', ['gm-1.jpg','gm-2.jpg','gm-3.jpg','gm-4.jpg']) },
      { name: 'Godrej Splendour',     category: 'Residential', logo: c+'godrej.png',
        imgs: [] },
      { name: 'Atmos & Aura',         category: 'Residential', logo: c+'assetz.png',
        imgs: pi('atmos-aura', ['atmos-1.jpg','atmos-2.jpg']) },
      { name: 'Assetz Sora & Saki',   category: 'Residential', logo: c+'assetz.png',
        imgs: pi('assetz-sora-saki', ['ass-1.jpg']) },
      { name: 'Assetz Soho and Sky',  category: 'Commercial',  logo: c+'assetz.png',
        imgs: pi('assetz-soho-sky', ['sas-1.jpg','sas-2.jpg']) },
      { name: 'Assetz Canvas & Cove', category: 'Residential', logo: c+'assetz.png',
        imgs: pi('assetz-canvas-cove', ['cc-1.jpg','cc-2.jpg','cc-3.jpg']) },
      { name: 'Lodha Mirabelle',      category: 'Residential', logo: c+'lodha.png',
        imgs: pi('lodha-mirabelle', ['lm-1.jpg','lm-2.jpg','lm-3.jpg','lm-4.jpg']) },
    ],
  },
  {
    year: '2024',
    projects: [
      { name: 'Godrej Kokapet',                category: 'Residential', logo: c+'godrej.png',
        imgs: pi('godrej-kokapet', ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png','14.png','15.png','16.png','17.png','18.png','19.png','20.png','21.png','22.png','23.png','24.png','25.png','26.png','27.png','28.png','29.png']) },
      { name: 'Godrej Park Retreat Clubhouse', category: 'Commercial',  logo: c+'godrej.png',
        imgs: pi('godrej-park-retreat', ['gpr-2.png','gpr-3.png','gpr-4.png','gpr-5.png','gpr-6.png','gpr-7.png','gpr-8.png','gpr-9.png','gpr-10.png','gpr-11.png','gpr-12.png','gpr-13.png']) },
      { name: 'Godrej Ananda',                 category: 'Residential', logo: c+'godrej.png',
        imgs: pi('godrej-ananda', ['b751226e-7973-43bd-a2ff-6a73f9fb9b8d.jpg','078e10a2-468c-4dae-8e69-3cae8c80c690.jpg','08cbebaf-55d7-4c8c-a5b4-35ff04ed21bd.jpg','2573a076-7a69-4611-bde6-0fb63b84acac.jpg','3a3f3ebe-7c29-4ff7-b637-345bd39ad183.jpg','625c50ec-71d2-4acb-acc8-be4752374a24.jpg','69bef2a8-9b65-4d8f-8541-5791d1245b1d.jpg','6c3967c5-90d9-452a-b98a-93cef6d53706.jpg','7ecf21a7-e0fe-486a-8ab5-eed9115010d8.jpg','99b04e3f-7855-4d98-8877-6fc2d073db9e.jpg','ab786670-c0b3-406e-9a4e-a770735c2940.jpg','c5b51636-ca05-4dec-9add-3bcc9f61ed29.jpg','ccc1d4c4-5a9b-4a7d-bd55-e9349799cb47.jpg','f8471310-4623-498f-94ef-e35572ab0bac.jpg','fb818bd3-5d5c-4f5e-8d44-d65aea3a14f9.jpg']) },
      { name: 'Godrej Regal Pavillion',        category: 'Residential', logo: c+'godrej.png',
        imgs: pi('godrej-regal-pavillion', ['grp-1.jpg','grp-2.jpg','grp-3.jpg']) },
      { name: 'Assetz Bloom and Dell',         category: 'Residential', logo: c+'assetz.png',
        imgs: [] },
      { name: 'Lodha Mirabelle',               category: 'Residential', logo: c+'lodha.png',
        imgs: pi('lodha-mirabelle', ['lm-1.jpg','lm-2.jpg','lm-3.jpg','lm-4.jpg']) },
      { name: 'Casagrand Aquene',              category: 'Residential', logo: c+'casagrand.png',
        imgs: pi('casagrand-aquene', ['caq-1.jpg','caq-2.jpg']) },
      { name: 'Brigade Goldspire',             category: 'Residential', logo: c+'brigade.png',
        imgs: pi('brigade-goldspire', ['bg-1.jpg']) },
      { name: 'Mahindra Eden',                 category: 'Residential', logo: c+'mahindra.png',
        imgs: pi('mahindra-eden', ['me-1.jpg','me-2.jpg','me-3.jpg','me-4.jpg','me-5.jpg']) },
      { name: 'Ren & Rei',                     category: 'Commercial',  logo: c+'assetz.png',
        imgs: pi('ren-rei', ['banner-mob.webp','download.jpg']) },
      { name: 'Assetz Avathi',                 category: 'Residential', logo: c+'assetz.png',
        imgs: pi('assetz-avathi', ['aa-1.jpg']) },
      { name: 'L&W Construction',              category: 'Commercial',  logo: c+'lw.png',
        imgs: pi('lw-construction', ['lw-1.jpg']) },
      { name: 'Inspira World',                 category: 'Commercial',
        imgs: [] },
      { name: 'Godrej RDL-Hosa Road',          category: 'Residential', logo: c+'godrej.png',
        imgs: [] },
      { name: 'Phenix',                        category: 'Commercial',  logo: c+'phenix.png',
        imgs: [] },
    ],
  },
  {
    year: '2023',
    projects: [
      { name: 'Godrej Avenues',           category: 'Residential',   logo: c+'godrej.png',
        imgs: pi('godrej-avenue', ['ga-2.jpeg','ga-3.jpeg','ga-4.jpeg','ga-5.jpeg','ga-6.png']) },
      { name: 'National Public School',   category: 'Institutional', logo: c+'nps.png',
        imgs: pi('national-public-school', ['nps-1.jpg','nps-2.jpg']) },
      { name: 'Brigade Orchards Banyan',  category: 'Residential',   logo: c+'brigade.png',
        imgs: pi('brigade-orchards-banyan', ['bob-1.jpg']) },
      { name: 'Brigade Atmosphere',       category: 'Residential',   logo: c+'brigade.png',
        imgs: pi('brigade-atmosphere', ['ba-1.png']) },
      { name: 'Bloom Hotel',              category: 'Hospitality',   logo: c+'bloom.png',
        imgs: pi('bloom-hotel', ['bloom-1.jpg']) },
      { name: 'Kanpro Chocolate Factory', category: 'Industrial',
        imgs: [] },
    ],
  },
  {
    year: '2022',
    projects: [
      { name: 'La Palmera',          category: 'Residential', logo: c+'la-palmera.png',
        imgs: pi('la-palmera', ['lp-1.png','lp-2.png','lp-3.png','lp-4.png','lp-5.png','lp-6.png','lp-7.png','lp-8.png','lp-9.png','lp-10.png','lp-11.png','lp-12.png','lp-15.jpeg','lp-16.png','lp-17.png','lp-18.png','lp-19.png','lp-20.jpeg','lp-21.png','lp-22.png','lp-23.png','lp-24.png','lp-25.png','lp-26.png','lp-27.png','lp-28.png']) },
      { name: 'Godrej 24',           category: 'Residential', logo: c+'godrej.png',
        imgs: pi('godrej-24', ['g24-1.jpg']) },
      { name: 'Assetz Soho and Sky', category: 'Commercial',  logo: c+'assetz.png',
        imgs: pi('assetz-soho-sky', ['sas-1.jpg','sas-2.jpg']) },
      { name: 'Assetz 38 & Banyan',  category: 'Residential', logo: c+'assetz.png',
        imgs: pi('assetz-38-banyan', ['ab-1.jpg','ab-2.jpg']) },
      { name: 'Ascent Hosur',        category: 'Commercial',  logo: c+'ascent.svg',
        imgs: pi('ascent-hosur', ['ah-1.webp','ah-2.jpg']) },
    ],
  },
  {
    year: '2021',
    projects: [
      { name: 'Soul & Soil',              category: 'Residential', logo: c+'assetz.png',
        imgs: pi('soul-soil', ['ss-1.jpeg','ss-2.jpeg','ss-3.jpeg','ss-4.jpeg','ss-5.jpeg','ss-6.jpeg','ss-7.jpeg','ss-9.jpeg','ss-10.jpeg','ss-11.jpeg','ss-12.jpeg','ss-13.jpeg','ss-14.png','ss-15.png','ss-16.png','ss-17.png','ss-18.jpeg','ss-19.png','ss-20.png','ss-21.jpeg']) },
      { name: 'Sun & Sanctum',            category: 'Residential', logo: c+'assetz.png',
        imgs: pi('sun-sanctum', ['ss-1.jpg','ss-2.jpg','ss-3.jpg','ss-4.jpg','ss-5.jpg','ss-6.jpg']) },
      { name: 'Brigade Ramaiah Hospital', category: 'Healthcare',  logo: c+'brigade.png',
        imgs: pi('brigade-ramaiah-hospital', ['brh-1.jpg','brh-2.avif','brh-3.avif','brh-4.webp']) },
      { name: 'Brigade Pavillion Villas', category: 'Residential', logo: c+'brigade.png',
        imgs: pi('brigade-pavillion-villas', ['bpv-1.png','bpv-2.jpg','bpv-3.jpg']) },
      { name: 'Assetz 18 & Oak',          category: 'Residential', logo: c+'assetz.png',
        imgs: pi('assetz-18-oak', ['ao-1.webp']) },
    ],
  },
  {
    year: '2020',
    projects: [
      { name: 'Corporate Office', category: 'Commercial',  logo: c+'assetz.png',
        imgs: pi('corporate-office', ['co-1.jpg']) },
      { name: 'Biryani Zone',     category: 'Hospitality', logo: c+'biryani-zone-new.jpg',
        imgs: pi('biryani-zone', ['bz-1.jpg']) },
      { name: '63 Degree',        category: 'Commercial',  logo: c+'assetz.png',
        imgs: pi('63-degree', ['63-1.jpg']) },
    ],
  },
  {
    year: '2019',
    projects: [
      { name: 'Assetz Marq PH-2',             category: 'Residential',   logo: c+'assetz.png',
        imgs: pi('assetz-marq', ['am-10.png','am-11.png','am-12.jpg','am-13.png','am-14.png','am-15.png','am-16.png','am-17.png','am-18.png','am-19.png','am-20.png','am-21.png','am-22.png','am-23.jpeg','am-24.jpeg','am-25.jpg','am-26.png','am-27.png','am-28.png','am-29.png','am-30.png','am-31.jpg','am-32.jpg','am-33.png','am-34.png','am-35.png','am-36.png','am-37.png','am-38.png','am-39.png','am-40.png','am-41.png','am-42.png','am-43.png','am-44.png','am-45.png','am-46.png']) },
      { name: 'Orchids International School', category: 'Institutional', logo: c+'orchids.png',
        imgs: pi('orchids-school', ['orchids-1.jpg']) },
      { name: '63 Degree',                    category: 'Commercial',    logo: c+'assetz.png',
        imgs: pi('63-degree', ['63-1.jpg']) },
    ],
  },
  {
    year: '2018',
    projects: [
      { name: 'Earth & Essence',      category: 'Residential', logo: c+'assetz.png',
        imgs: pi('earth-essence', ['ee-2.png','ee-3.png','ee-4.png','ee-5.png','ee-6.png','ee-7.png','ee-8.png','ee-9.png']) },
      { name: 'Assetz Canvas & Cove', category: 'Residential', logo: c+'assetz.png',
        imgs: pi('assetz-canvas-cove', ['cc-1.jpg','cc-2.jpg','cc-3.jpg']) },
      { name: 'Leaves & Livrs',       category: 'Residential', logo: c+'assetz.png',
        imgs: [] },
      { name: 'Here & Now',           category: 'Commercial',  logo: c+'assetz.png',
        imgs: [] },
    ],
  },
  {
    year: '2017',
    projects: [
      { name: 'Assetz 18 & Oak', category: 'Residential',   logo: c+'assetz.png',
        imgs: pi('assetz-18-oak', ['ao-1.webp']) },
      { name: 'Supreme Solar',   category: 'Industrial',    logo: c+'supreme.png',
        imgs: [] },
      { name: 'Chrysalis',       category: 'Institutional', logo: c+'chrysalis.png',
        imgs: [] },
    ],
  },
  {
    year: '2016',
    projects: [
      { name: 'Assetz Lumos',     category: 'Residential', logo: c+'assetz.png',
        imgs: pi('assetz-lumos', ['al-1.webp']) },
      { name: 'Assetz Marq PH-1', category: 'Residential', logo: c+'assetz.png',
        imgs: pi('assetz-marq', ['am-1.png','am-2.png','am-3.png','am-4.png','am-5.png','am-6.png','am-7.png','am-8.jpg','am-9.jpg']) },
    ],
  },
  {
    year: '2015',
    projects: [
      { name: 'Assetz East Point', category: 'Residential', logo: c+'assetz.png',   imgs: [] },
      { name: 'Global Tech Park',  category: 'Commercial',  logo: c+'global.png',   imgs: [] },
      { name: 'Crompton Office',   category: 'Commercial',  logo: c+'crompton.png', imgs: [] },
      { name: 'L & W Builders',    category: 'Commercial',  logo: c+'lw.png',       imgs: [] },
    ],
  },
  {
    year: '2014',
    projects: [
      { name: 'Assetz 27 Park Avenue',     category: 'Residential',   logo: c+'assetz.png',
        imgs: pi('assetz-27-park-avenue', ['pa-1.webp']) },
      { name: 'Ramanashree',               category: 'Hospitality',   logo: c+'ramanashree.png',
        imgs: pi('ramanashree', ['ram-1.jpg']) },
      { name: 'Emmvee Solar',              category: 'Industrial',    logo: c+'emmvee.png',   imgs: [] },
      { name: 'Eco Space Infrastructures', category: 'Commercial',    logo: c+'eco-space.png', imgs: [] },
      { name: 'Vibgyor',                   category: 'Institutional', logo: c+'vibgyor.png',
        imgs: pi('vibgyor', ['v-1.jpg','v-2.jpg']) },
    ],
  },
  {
    year: '2008–2013',
    projects: [
      { name: 'ITC Gardenia Bengaluru', category: 'Hospitality', logo: c+'itc.png',         imgs: [] },
      { name: 'Residential Projects',  category: 'Residential',  logo: c+'residential.png',
        imgs: pi('residential-projects', ['rp-1.jpeg','rp-2.jpeg','rp-3.jpeg','rp-4.jpeg','rp-5.jpeg','rp-6.jpeg','rp-7.jpeg','rp-8.jpeg','rp-9.jpeg','rp-10.jpeg','rp-11.jpeg','rp-12.jpeg','rp-13.jpeg','rp-14.jpeg','rp-15.jpeg','rp-16.jpeg','rp-17.jpeg','rp-18.jpeg']) },
    ],
  },
].map(yearGroup => ({
  ...yearGroup,
  projects: yearGroup.projects.map(pr => ({
    ...pr,
    photos: pr.imgs.length,
    img: pr.imgs.length > 0 ? pr.imgs[0] : null,
    captions: getCaptions(pr.category),
    desc: getDesc(pr.name, pr.category, yearGroup.year),
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
