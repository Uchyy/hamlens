// Mock data modeled after real UK datasets for PO2 – Portsmouth

export const postcodeData = {
  postcode: "PO2",
  area: "Portsmouth",
  region: "South East England",
  localAuthority: "Portsmouth City Council",
  population: 209_000,
  latitude: 50.819,
  longitude: -1.087,
  cityCentre: { lat: 50.7989, lng: -1.0912 },
};

// Crime – modeled on UK Police API categories
export const crimeData = [
  { month: "Aug", violence: 195, asb: 158, vehicle: 72, burglary: 38, shoplifting: 29 },
  { month: "Sep", violence: 210, asb: 145, vehicle: 68, burglary: 42, shoplifting: 31 },
  { month: "Oct", violence: 188, asb: 132, vehicle: 75, burglary: 36, shoplifting: 27 },
  { month: "Nov", violence: 220, asb: 160, vehicle: 80, burglary: 48, shoplifting: 34 },
  { month: "Dec", violence: 245, asb: 170, vehicle: 90, burglary: 55, shoplifting: 40 },
  { month: "Jan", violence: 205, asb: 140, vehicle: 65, burglary: 40, shoplifting: 28 },
];

export const crimeSummary = [
  { category: "Violence & sexual offences", count: 210, change: -3.2 },
  { category: "Anti-social behaviour", count: 145, change: -8.5 },
  { category: "Vehicle crime", count: 68, change: 5.1 },
  { category: "Burglary", count: 42, change: -12.0 },
  { category: "Shoplifting", count: 31, change: 2.4 },
];

// Housing – modeled on HM Land Registry
export const housingPrices = {
  detached: 470_000,
  semiDetached: 320_000,
  terraced: 285_000,
  flat: 210_000,
};

export const housingTrend = [
  { month: "Aug", avgPrice: 278_000 },
  { month: "Sep", avgPrice: 282_000 },
  { month: "Oct", avgPrice: 285_000 },
  { month: "Nov", avgPrice: 290_000 },
  { month: "Dec", avgPrice: 295_000 },
  { month: "Jan", avgPrice: 302_000 },
];

// Healthcare – modeled on NHS England
export const hospitals = [
  { name: "Queen Alexandra Hospital", type: "Acute", distance: 3.2, hasAE: true, website: "https://www.porthosp.nhs.uk" },
  { name: "St Mary's Community Health Campus", type: "Community", distance: 1.1, hasAE: false, website: "https://www.solent.nhs.uk" },
];

export const gpSurgeries = [
  { name: "Kingston Crescent Surgery", distance: 0.4, accepting: true, rating: 4.5, website: "https://www.kingstoncrescentsurgery.co.uk" },
  { name: "Stamshaw Health Centre", distance: 0.6, accepting: true, rating: 4.2, website: "https://www.stamshawandtippner.co.uk" },
  { name: "The Parade Surgery", distance: 0.9, accepting: false, rating: 4.0, website: "https://www.theparadesurgery.co.uk" },
  { name: "Copnor Road Medical Practice", distance: 1.1, accepting: true, rating: 4.3, website: "https://www.copnorroadsurgery.co.uk" },
];

// Dentists – modeled on NHS England
export const dentists = [
  { name: "Northern Parade Dental Practice", distance: 0.7, nhsAccepting: true, rating: 4.1, website: "https://www.northernparadedental.co.uk" },
  { name: "North End Dental Clinic", distance: 0.9, nhsAccepting: false, rating: 4.4, website: "https://www.northenddental.co.uk" },
  { name: "Cosham Dental Care", distance: 1.8, nhsAccepting: true, rating: 3.9, website: "https://www.coshamdentalcare.co.uk" },
  { name: "Portsmouth Dental Suite", distance: 2.1, nhsAccepting: false, rating: 4.6, website: "https://www.portsmouthdentalsuite.co.uk" },
];

// Schools – modeled on DfE / Ofsted
export const schools = [
  { name: "Ark Charter Academy", type: "Secondary", ofsted: "Good", distance: 0.8, website: "https://www.arkcharteracademy.org" },
  { name: "Mayfield School", type: "Secondary", ofsted: "Requires Improvement", distance: 1.2, website: "https://www.mayfield.portsmouth.sch.uk" },
  { name: "Copnor Primary School", type: "Primary", ofsted: "Good", distance: 0.5, website: "https://www.copnorprimary.co.uk" },
  { name: "St Paul's Catholic Primary", type: "Primary", ofsted: "Outstanding", distance: 0.9, website: "https://www.stpaulscatholicprimary.co.uk" },
  { name: "Craneswater Junior School", type: "Primary", ofsted: "Good", distance: 1.4, website: "https://www.craneswaterjunior.co.uk" },
  { name: "Admiral Lord Nelson School", type: "Secondary", ofsted: "Good", distance: 1.7, website: "https://www.alnschool.org" },
];

// Transport – modeled on National Rail
export const trainStations = [
  { name: "Hilsea", distance: 1.2 },
  { name: "Portsmouth & Southsea", distance: 1.6 },
  { name: "Fratton", distance: 2.0 },
];

export const travelTimes = [
  { destination: "London Waterloo", duration: "1h 35m", changes: 0 },
  { destination: "Brighton", duration: "1h 10m", changes: 1 },
  { destination: "Southampton Central", duration: "50m", changes: 0 },
];

// Distance to city centre
export const distanceToCentre = {
  miles: 2.1,
  byCar: "12 minutes",
  byBus: "18 minutes",
  byWalk: "42 minutes",
};

// Key insights
export const insights = [
  { label: "Crime", summary: "Crime decreased 8% compared to last year", change: -8, icon: "shield" },
  { label: "Housing", summary: "House prices increased 5% in the past 12 months", change: 5, icon: "home" },
  { label: "Population", summary: "Population grew 2% since 2021 Census", change: 2, icon: "users" },
  { label: "Schools", summary: "83% of nearby schools rated Good or Outstanding", change: 0, icon: "graduation-cap" },
];

// City highlights – known for, landmarks, best & worst
export const cityHighlights = {
  knownFor: [
    "Headquarters of HM Naval Base",
    "Home of the Royal Navy",
    "Historic Dockyard & maritime heritage",
    "University of Portsmouth",
  ],
  landmarks: [
    "Spinnaker Tower",
    "Portsmouth Historic Dockyard",
    "HMS Victory",
    "Southsea Castle",
  ],
  best: [
    "Top 3 safest coastal city (2025)",
    "Strong transport links to London",
    "Affordable housing vs South East average",
    "83% schools rated Good or Outstanding",
  ],
  worst: [
    "Above-average unemployment rate",
    "Limited green spaces per capita",
    "Higher deprivation index in north",
    "Congestion on M275 corridor",
  ],
};

// Useful links
export const usefulLinks = {
  council: { name: "Portsmouth City Council", url: "https://www.portsmouth.gov.uk" },
  transport: { name: "South Western Railway", url: "https://www.southwesternrailway.com" },
  nhs: { name: "NHS Portsmouth CCG", url: "https://www.portsmouthccg.nhs.uk" },
  police: { name: "Hampshire Constabulary", url: "https://www.hampshire.police.uk" },
};

// Comparison data – Southampton (SO14)
export const comparisonData = {
  postcode: "SO14",
  area: "Southampton",
  population: 252_000,
  avgHousePrice: 265_000,
  crimeRate: 112, // per 1000 people
  schoolsGoodOrAbove: 78,
  avgRent: 950,
  distanceToCentre: 1.8,
};

export const currentAreaStats = {
  postcode: "PO2",
  area: "Portsmouth",
  population: 209_000,
  avgHousePrice: 302_000,
  crimeRate: 98,
  schoolsGoodOrAbove: 83,
  avgRent: 875,
  distanceToCentre: 2.1,
};
