// All site content lives here. Pages are generated from this data.

export const company = {
  name: 'National Roofing Services',
  founded: 1944,
  address: ['8, Lallubhai Mansion, Dr. Ambedkar Road,', 'Dadar East, Mumbai 400 014, Maharashtra'],
  mobile: '+91 98203 99467',
  mobileHref: 'tel:+919820399467',
  phones: ['022 2411 3758', '022 2415 0394'],
  email: 'nationalroofingservices@gmail.com',
  whatsapp: 'https://wa.me/919820399467',
  brochure: '/national-roofing-services.pdf',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.289411640576!2d72.83942516101177!3d19.006964624934575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cee771a1ae6b%3A0x3b7b2418adb1d508!2sNational+Roofing+Services!5e0!3m2!1sen!2sin!4v1457349610606',
}

export const services = [
  {
    slug: 'roofing-solutions',
    cover: '/img/photos/svc-roofing.webp',
    name: 'Roofing Solutions',
    short: 'Galvalume, PUF panels, polycarbonate and fibre glass sheets.',
    intro:
      'A complete range of roofing sheets and panels in many profiles, sizes and colours, from multiple trusted brands, supplied and installed.',
    image: '/img/products/coloured-galvalume-sheets-accessories.webp',
    title: 'Roofing Contractor & Roofing Sheet Supplier in Mumbai',
  },
  {
    slug: 'walling-solutions',
    cover: '/img/photos/svc-walling.webp',
    name: 'Walling Solutions',
    short: 'Wall boards, partitions, fire-rated doors and glass.',
    intro:
      'Walling systems procured only through known sources for long-term performance, from Everest wall boards to Promat fire-rated and blast-proof partitions.',
    image: '/img/products/everest-walling-solutions.webp',
    title: 'Walling Solutions & Partitions in Mumbai',
  },
  {
    slug: 'ceiling-solutions',
    cover: '/img/photos/svc-ceiling.webp',
    name: 'Ceiling Solutions',
    short: 'False ceilings and fire-rated ceiling systems.',
    intro:
      'Ceilings that hide services, control acoustics and hold back fire. Durable, weather resistant and installed by our own team.',
    image: '/img/products/everest-false-ceilings.webp',
    title: 'False Ceiling & Fire Rated Ceiling Systems in Mumbai',
  },
  {
    slug: 'everest-roofing-solutions',
    cover: '/img/photos/svc-everest.webp',
    name: 'Everest Roofing Solutions',
    short: 'Everest AC and Hi-Tech non-asbestos sheets.',
    intro:
      'Authorised supply of Everest cement roofing sheets: AC corrugated, semi corrugated and Hi-Tech non-asbestos coloured sheets.',
    image: '/img/products/everest-hi-tech-non-asbesto.webp',
    title: 'Everest Roofing Sheets in Mumbai',
  },
  {
    slug: 'everest-pre-engineered-systems',
    cover: '/img/photos/svc-peb.webp',
    name: 'Everest Pre Engineered Systems',
    short: 'Pre-engineered steel buildings.',
    intro:
      'Everest pre-engineered steel buildings that conform to international standards, at market-leading prices.',
    image: '/img/products/everest-pre-engineered-buil.webp',
    title: 'Everest Pre Engineered Buildings in Mumbai',
  },
  {
    slug: 'dekstrip-flashing',
    cover: '/img/photos/svc-flashing.webp',
    name: 'DEKS Dekstrip Flashing',
    short: 'Flexible, weatherproof roof flashing.',
    intro:
      'DEKS Dekstrip flashing with an aluminium edging that shapes to any roof detail and stays watertight for years.',
    image: '/img/products/dekstrip-flashings.webp',
    title: 'DEKS Dekstrip Flashing Supplier in India',
  },
  {
    slug: 'promat-passive-fire-protection',
    cover: '/img/photos/svc-fire.webp',
    name: 'Promat Passive Fire Protection',
    short: 'Fire-rated boards, ducts, doors, sealants and steel protection.',
    intro:
      'Every Promat system we supply, tested and backed by valid test reports, for fire ratings of up to 4 hours.',
    image: '/img/products/promat-passive-fire-rated-system.webp',
    title: 'Promat Passive Fire Protection Systems in Mumbai',
    brand: 'Promat',
  },
]

const p = (img) => `/img/products/${img}.webp`

export const products = [
  // Roofing
  {
    id: 'puf-roofing-panels',
    service: 'roofing-solutions',
    brand: 'Insulated',
    name: 'Insulated Roofing Panels',
    image: p('roofing-panels'),
    text: 'Roofing panels made from top-quality polyurethane foam (PUF) for maximum thermal efficiency and durability. Available in a range of designs, patterns and specifications.',
    points: ['Technically advanced', 'Reliable', 'Reasonable rates'],
    moq: '100 pieces',
  },
  {
    id: 'prepainted-sheets',
    service: 'roofing-solutions',
    brand: 'Metal',
    name: 'Prepainted Sheets & Accessories',
    image: p('prepainted-sheets-accessories'),
    text: 'Procured from established vendors in various sizes, thicknesses and grades to suit your requirement. Available in corrugated or trapezoidal profiles.',
    points: ['Corrugated profile', 'Trapezoidal profile'],
    moq: '100 pieces',
  },
  {
    id: 'bare-galvalume',
    service: 'roofing-solutions',
    brand: 'Metal',
    name: 'Bare Galvalume Sheets',
    image: p('bare-galvalume-sheets-and-accessories'),
    text: 'Galvalume sheets, wall panels and accessories widely used in construction, offered in many thicknesses and sizes.',
    points: [
      'Base metal: steel',
      'Metallic coating of zinc or aluminium-zinc',
      'Chromate coating for adhesion',
      'Primer coat against undercut corrosion',
      'Top finish coat for a clean appearance',
    ],
    moq: '100 pieces',
  },
  {
    id: 'coloured-galvalume',
    service: 'roofing-solutions',
    brand: 'Metal',
    name: 'Coloured Galvalume Sheets',
    image: p('coloured-galvalume-sheets-accessories'),
    text: 'Coloured sheets, wall panels and accessories in a wide choice of colours, sizes and thicknesses, used mostly for roofing and cladding.',
    points: ['Strength and formability', 'Easy jointing', 'Corrosion resistance'],
    moq: '100 pieces',
  },
  {
    id: 'corrugated-panels',
    service: 'roofing-solutions',
    brand: 'Plastic',
    name: 'Corrugated Roofing Panels',
    image: p('corrugated-roofing-panels'),
    text: 'Made from top-quality components to international standards and quality-checked before dispatch. Available in various styles, finishes and designs.',
    points: ['Easy installation', 'Robust', 'Long lasting'],
  },
  {
    id: 'fibre-glass-sheets',
    service: 'roofing-solutions',
    brand: 'Plastic',
    name: 'Fibre Glass Sheets',
    image: p('fibre-glass-sheets'),
    text: 'Light fibre glass sheets with a high surface area to weight ratio, used widely for translucent roofing panels that let daylight in.',
    points: ['Translucent', 'Lightweight'],
  },
  {
    id: 'polycarbonate-sheets',
    service: 'roofing-solutions',
    brand: 'Plastic',
    name: 'Polycarbonate Sheets',
    image: p('polycarbonate-sheets'),
    text: 'Flexible, strong polycarbonate sheets that curve and bend into simple shapes. Available in many shapes, designs and sizes.',
    points: ['Bends and curves easily', 'Many sizes'],
  },
  {
    id: 'sheet-roofing',
    service: 'roofing-solutions',
    brand: 'Metal',
    name: 'Sheet Roofing',
    image: p('sheet-roofing'),
    text: 'Supply and installation of sheet roofing for industrial and commercial sheds. Call us for sizes and current rates.',
    points: [],
  },
  {
    id: 'tin-roofing',
    service: 'roofing-solutions',
    brand: 'Metal',
    name: 'Tin Roofing',
    image: p('tin-roofing'),
    text: 'Tin roofing sheets supplied and fixed for sheds, warehouses and site structures. Call us for sizes and current rates.',
    points: [],
  },

  // Walling
  {
    id: 'promat-mortar-sealants',
    service: 'walling-solutions',
    brand: 'Promat',
    name: 'Fire Rated Mortar & Sealants',
    image: p('promat-fire-rated-mortar-stoppings-sealants'),
    text: 'Promat fire rated mortar, fire stopping and sealants. Joints and gaps in floor and wall openings are fire stopped using PROMASEAL.',
    points: [
      'Acrylic sealant rated up to -/240/240',
      'Tested to AS1530 Part 4 and BS476 Part 20',
      'Installed to manufacturer recommendations',
    ],
  },
  {
    id: 'promat-wooden-doors',
    service: 'walling-solutions',
    brand: 'Promat',
    name: 'Fire Rated Wooden Doors',
    image: p('promat-fire-rated-wooden-do'),
    text: 'Fire resistant doors fitted with Saint-Gobain glass and GI profiles for high impact resistance. Choose your colour.',
    points: ['Single or double leaf', 'Up to 2 hours fire resistance', 'High impact resistance'],
  },
  {
    id: 'everest-walling',
    service: 'walling-solutions',
    brand: 'Everest',
    name: 'Everest Walling Solutions',
    image: p('everest-walling-solutions'),
    text: 'Used in modern buildings, offices, theatres, schools and hospitals. We plan the walling layout to suit the interior, for a fine finish and high strength.',
    points: ['Everest Wall Boards', 'Everest Designer Wall Boards', 'Everest Heavy Duty Wall Boards', 'Everest Solid Wall Panels'],
  },
  {
    id: 'everest-partitions',
    service: 'walling-solutions',
    brand: 'Everest',
    name: 'Everest Partitions',
    image: p('everest-partitions'),
    text: 'As authorised stockists, we supply sturdy Everest partitions for homes, offices, institutes and commercial spaces.',
    points: ['Fire resistant', 'Moisture resistant', 'Termite resistant'],
  },
  {
    id: 'promat-blast-proof',
    service: 'walling-solutions',
    brand: 'Promat',
    name: 'Blast Proof Partitions & Doors',
    image: p('promat-blast-proof-partitions-door'),
    text: 'PROMATECT-S systems: a fibre reinforced cement core mechanically bonded to 0.5mm perforated galvanised steel. Used in military, petrochemical, pharmaceutical and metro projects.',
    points: ['Light', 'Strong', 'Outstanding impact resistance', 'Exceptional fire and corrosion resistance'],
  },
  {
    id: 'fire-rated-glass',
    service: 'walling-solutions',
    brand: 'Promat',
    name: 'Fire Rated Glass',
    image: p('fire-rated-glass'),
    text: 'Tested at over 1,000°F, fire rated glass forms a barrier against flames and smoke. Ideal for server rooms, stairwells, corridors and lobbies.',
    points: ['Blocks flames and smoke', 'Keeps sight lines open'],
  },
  {
    id: 'promat-walling',
    service: 'walling-solutions',
    brand: 'Promat',
    name: 'Fire & Non Fire Rated Walling',
    image: p('1'),
    text: 'Tested Promat walling systems with valid test reports, protecting against fire for 2 or 4 hours.',
    points: ['2 hour and 4 hour ratings', 'Valid test reports'],
  },

  // Ceiling
  {
    id: 'everest-false-ceilings',
    service: 'ceiling-solutions',
    brand: 'Everest',
    name: 'Everest False Ceilings',
    image: p('everest-false-ceilings'),
    text: 'Hide cables and pipes behind a clean ceiling that also improves acoustics and thermal insulation. Suits homes, offices, hospitals and hotels.',
    points: ['Everest Standard Ceiling', 'Everest Designer Ceiling', 'Everest Acoustic Ceiling', 'Everest Ceiling Grid System'],
  },
  {
    id: 'promat-ducts',
    service: 'ceiling-solutions',
    brand: 'Promat',
    name: 'Fire Rated Ducts (Type A & B)',
    image: p('promat-fire-rated-ducts-typ'),
    text: 'Encases steel ducts up to 1500mm wide. Impact resistant systems to BS5669 Part 1 use 50mm PROMATECT-L500 boards.',
    points: ['Ducts up to 1500mm wide', 'Internal and external fire exposure'],
  },
  {
    id: 'promat-passive-system',
    service: 'ceiling-solutions',
    brand: 'Promat',
    name: 'Passive Fire Rated System',
    image: p('promat-passive-fire-rated-system'),
    text: 'For horizontal and vertical plenums and pressurised ducts, in 1, 2, 3 or 4 sided fabrications up to 6000mm x 2000mm.',
    points: ['2 and 4 hour fire ratings', 'Impact resistant', 'Weather resistant', 'Durable'],
  },
  {
    id: 'promat-ceilings',
    service: 'ceiling-solutions',
    brand: 'Promat',
    name: 'Fire Rated Ceiling Systems',
    image: p('promat-fire-rated-ceilings-systems'),
    text: 'Certified and tested fire rated boards and composite panels that limit the spread of fire and need little maintenance.',
    points: ['Certified components', 'Low maintenance'],
  },
  {
    id: 'promat-steel-protection',
    service: 'ceiling-solutions',
    brand: 'Promat',
    name: 'Structural Steel Protection',
    image: p('promat-fire-rated-structural-steel-protection-spray-paints-boards'),
    text: 'Fire protection for structural steel using Promat sprays, intumescent paints and boards.',
    points: ['Spray', 'Paint', 'Boards'],
  },

  // Everest roofing
  {
    id: 'everest-ac-semi-corrugated',
    service: 'everest-roofing-solutions',
    brand: 'Everest',
    name: 'AC Semi Corrugated Sheets',
    image: p('everest-ac-semi-corrugated-sheets'),
    text: 'Everest semi corrugated sheets in a range of sizes, designs and shapes.',
    points: ['Lightweight', 'Fine finish', 'Flexible and durable', 'Anti-corrosive'],
  },
  {
    id: 'everest-hi-tech',
    service: 'everest-roofing-solutions',
    brand: 'Everest',
    name: 'Hi-Tech Non Asbestos Coloured Sheets',
    image: p('everest-hi-tech-non-asbesto'),
    text: 'Corrugated cement roofing reinforced with high impact polypropylene (HIPP) fibres, in several shapes, sizes and colours.',
    points: ['High impact resistance', 'Quiet in rain', 'Thermal insulation from heat', 'Less need for extra insulation'],
  },
  {
    id: 'everest-ac-corrugated',
    service: 'everest-roofing-solutions',
    brand: 'Everest',
    name: 'AC Corrugated Sheets',
    image: p('everest-ac-corrugated-sheet'),
    text: 'Made from premium cement and fibre using the fibre orientation process, certified to IS 459-1992.',
    points: [
      'Fire, corrosion and vermin resistant',
      'Consistent strength along and across',
      'Dimensionally stable',
      'No maintenance needed',
      'High strength to weight ratio',
      'Low thermal conductivity',
      'Good sound absorption',
    ],
  },

  // Everest PEB
  {
    id: 'everest-peb',
    service: 'everest-pre-engineered-systems',
    brand: 'Everest',
    name: 'Everest Pre Engineered Buildings',
    image: p('everest-pre-engineered-buil'),
    text: 'Pre-engineered steel buildings that conform to international standards, widely used across construction, at market-leading prices.',
    points: ['International standards', 'Fast to erect'],
  },

  // DEKS
  {
    id: 'deks-dekstrip',
    service: 'dekstrip-flashing',
    brand: 'DEKS',
    name: 'DEKS Dekstrip Flashing',
    image: p('dekstrip-flashings'),
    text: 'A roof flashing with an aluminium edging that you shape to suit each detail. Works continuously from -50°C to 115°C.',
    points: [
      'Flexible',
      'Waterproof and weatherproof',
      'Resists ozone, acid rain and UV',
      'Soil and stain resistant',
      'Excellent abrasion resistance',
    ],
  },
]

export function productsFor(service) {
  if (service.brand) return products.filter((x) => x.brand === service.brand)
  return products.filter((x) => x.service === service.slug)
}

export const applications = ['Warehousing', 'Pharma', 'Automobiles', 'Textiles', 'Sugar', 'FMCG']

export const team = ['Procurement agents', 'Designers', 'Skilled workforce', 'Technicians']

// Display size per logo, so wide and tall logos carry the same visual weight.
const logoSizes = [
  [100, 52], [118, 44], [156, 33], [63, 64], [85, 61], [155, 34], [121, 43], [106, 49], [140, 37], [135, 39], [121, 43], [99, 53], [100, 52], [111, 47], [162, 32], [144, 36], [105, 50], [77, 64], [136, 25], [152, 32], [139, 37], [97, 53], [84, 62], [75, 64], [91, 57], [94, 55],
]

export const clients = [
  'Aditya Birla Group', 'Aswathnarayan & Eswara', 'Bajaj', 'Crompton', 'CRN Chennai', "Dr. Reddy's Lab",
  'Glaxo', 'Godrej', 'Hansen Drives', 'Architects Combine', 'Hindustan Unilever', 'IFFCO',
  'Larsen & Toubro', 'B Mehtalia Consultants', 'Novartis', 'Pepsi Foods', 'P&G', 'Rallis (Tata)',
  'Reliance', 'Siemens', 'Shapoorji Pallonji', 'Sterlite Technologies', 'STUP Consultants', 'Tata Group',
  'Videocon', 'Volkswagen',
].map((name, i) => ({ name, logo: `/img/clients/cli-${i + 1}.webp`, w: logoSizes[i][0], h: logoSizes[i][1] }))

export const heroSlides = [
  { image: '/img/photos/hero-metal-roof.webp', label: 'Metal roofing', alt: 'Standing-seam metal roof against a grey sky' },
  { image: '/img/photos/hero-steel-frame.webp', label: 'Pre-engineered buildings', alt: 'Steel frame of a pre-engineered industrial building under construction' },
  { image: '/img/photos/hero-warehouse.webp', label: 'Warehouses and sheds', alt: 'Empty warehouse with a metal sheet roof and steel trusses' },
  { image: '/img/photos/hero-space-frame.webp', label: 'Large-span structures', alt: 'Steel space-frame roof seen from below' },
]
