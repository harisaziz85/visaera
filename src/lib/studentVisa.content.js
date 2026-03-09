import { getScholarshipsByCountry } from "./scholarships";

export const studentVisaCountries = [
  { id: 32, title: "Australia", name: "australia", headerImg: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723126805-46e1f3c5ab07?w=1200&auto=format&fit=crop&q=60" },
  { id: 36, title: "Argentina", name: "argentina", headerImg: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d", coverImg: "https://images.unsplash.com/photo-1611723967562-80a3c6329a2b" },
  { id: 37, title: "Brazil", name: "brazil", headerImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", coverImg: "https://images.unsplash.com/photo-1611746594428-fbfa1e1f08ad" },
  { id: 30, title: "Canada", name: "canada", headerImg: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723569247-466f38d2c45e?w=1200&auto=format&fit=crop&q=60" },
  { id: 27, title: "China", name: "china", headerImg: "https://images.unsplash.com/photo-1526481280695-3c720685208b?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723543575-7e85ed2c3bfa?w=1200&auto=format&fit=crop&q=60" },
  { id: 35, title: "Colombia", name: "colombia", headerImg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723208883-3bba468e2e5f?w=1200&auto=format&fit=crop&q=60" },
  { id: 9, title: "Czech Republic", name: "czech-republic", headerImg: "https://images.unsplash.com/photo-1529218402470-5dec8fea0761?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723192310-44e01f5e648b?w=1200&auto=format&fit=crop&q=60" },
  { id: 13, title: "Estonia", name: "estonia", headerImg: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723128715-d77e8c72c9f0?w=1200&auto=format&fit=crop&q=60" },
  { id: 43, title: "Egypt", name: "egypt", headerImg: "https://images.unsplash.com/photo-1583778177506-1a6a96f2ef64", coverImg: "https://images.unsplash.com/photo-1614283501486-18e1f5086d02" },
  { id: 6, title: "Finland", name: "finland", headerImg: "https://images.unsplash.com/photo-1508264165352-258859e62245?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723517503-3f853ed55677?w=1200&auto=format&fit=crop&q=60" },
  { id: 38, title: "Fiji", name: "fiji", headerImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", coverImg: "https://images.unsplash.com/photo-1614283501486-18e1f5086d02" },
  { id: 2, title: "France", name: "france", headerImg: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1528291151373-7067bdbedbe7?w=1200&auto=format&fit=crop&q=60" },
  { id: 1, title: "Germany", name: "germany", headerImg: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1603386329225-868f9b1ee5fd?w=1200&auto=format&fit=crop&q=60" },
  { id: 10, title: "Hungary", name: "hungary", headerImg: "https://images.unsplash.com/photo-1532274402916-5aadf881bdf0?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723126805-46e1f3c5ab07?w=1200&auto=format&fit=crop&q=60" },
  { id: 17, title: "India", name: "india", headerImg: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723496572-3f77f4b3c3e1?w=1200&auto=format&fit=crop&q=60" },
  { id: 16, title: "Italy", name: "italy", headerImg: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723126805-46e1f3c5ab07?w=1200&auto=format&fit=crop&q=60" },
  { id: 22, title: "Japan", name: "japan", headerImg: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1603386329924-34de5fbe899d?w=1200&auto=format&fit=crop&q=60" },
  { id: 41, title: "Kenya", name: "kenya", headerImg: "https://images.unsplash.com/photo-1543248939-4296e1a15b42", coverImg: "https://images.unsplash.com/photo-1615887123748-1bc0f632f5df" },
  { id: 12, title: "Lithuania", name: "lithuania", headerImg: "https://images.unsplash.com/photo-1530041539828-114de669390d?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723207505-77a3c2d8aaf5?w=1200&auto=format&fit=crop&q=60" },
  { id: 25, title: "Malaysia", name: "malaysia", headerImg: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723128715-d77e8c72c9f0?w=1200&auto=format&fit=crop&q=60" },
  { id: 34, title: "Mexico", name: "mexico", headerImg: "https://images.unsplash.com/photo-1524492449090-3f8a5b1b0a0f?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723530930-4f4a26ac0f3b?w=1200&auto=format&fit=crop&q=60" },
  { id: 42, title: "Morocco", name: "morocco", headerImg: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", coverImg: "https://images.unsplash.com/photo-1611746594428-fbfa1e1f08ad" },
  { id: 19, title: "Nepal", name: "nepal", headerImg: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723582114-3a99e97f6e1a?w=1200&auto=format&fit=crop&q=60" },
  { id: 3, title: "Netherlands", name: "netherlands", headerImg: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1592841200221-10bc7fca8aee?w=1200&auto=format&fit=crop&q=60" },
  { id: 33, title: "New Zealand", name: "new-zealand", headerImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723496572-3f77f4b3c3e1?w=1200&auto=format&fit=crop&q=60" },
  { id: 7, title: "Norway", name: "norway", headerImg: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605727216807-efeb5868ce72?w=1200&auto=format&fit=crop&q=60" },
  { id: 8, title: "Poland", name: "poland", headerImg: "https://images.unsplash.com/photo-1505843743872-5f2b1b2f8a3e?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723576177-dc79b9227c5d?w=1200&auto=format&fit=crop&q=60" },
  { id: 14, title: "Portugal", name: "portugal", headerImg: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723582114-3a99e97f6e1a?w=1200&auto=format&fit=crop&q=60" },
  { id: 29, title: "Qatar", name: "qatar", headerImg: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723495349-378a8a5f47de?w=1200&auto=format&fit=crop&q=60" },
  { id: 4, title: "Ireland", name: "ireland", headerImg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1603386355731-1a89f98782bb?w=1200&auto=format&fit=crop&q=60" },
  { id: 39, title: "Papua New Guinea", name: "papua-new-guinea", headerImg: "https://images.unsplash.com/photo-1549893079-842e6b76c3d8", coverImg: "https://images.unsplash.com/photo-1611724073169-ff0f2deec95e" },
  { id: 18, title: "Philippines", name: "philippines", headerImg: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723208883-3bba468e2e5f?w=1200&auto=format&fit=crop&q=60" },
  { id: 24, title: "Singapore", name: "singapore", headerImg: "https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723496184-9c2d6f5f2d60?w=1200&auto=format&fit=crop&q=60" },
  { id: 11, title: "Slovakia", name: "slovakia", headerImg: "https://images.unsplash.com/photo-1529165231990-8d6d8f7e63c4?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723496572-3f77f4b3c3e1?w=1200&auto=format&fit=crop&q=60" },
  { id: 15, title: "Spain", name: "spain", headerImg: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723208883-3bba468e2e5f?w=1200&auto=format&fit=crop&q=60" },
  { id: 40, title: "South Africa", name: "south-africa", headerImg: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", coverImg: "https://images.unsplash.com/photo-1611730456812-67a68e2db279" },
  { id: 23, title: "South Korea", name: "south-korea", headerImg: "https://images.unsplash.com/photo-1580182214091-d8bc9d5c79e0?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723192562-3b2c292743ff?w=1200&auto=format&fit=crop&q=60" },
  { id: 5, title: "Sweden", name: "sweden", headerImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1606151592884-bb7b29e8c3d7?w=1200&auto=format&fit=crop&q=60" },
  { id: 21, title: "Taiwan", name: "taiwan", headerImg: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723535170-3c39bc8f9a86?w=1200&auto=format&fit=crop&q=60" },
  { id: 26, title: "Thailand", name: "thailand", headerImg: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723574658-1e020c84f5ab?w=1200&auto=format&fit=crop&q=60" },
  { id: 28, title: "United Arab Emirates (UAE)", name: "united-arab-emirates", headerImg: "https://images.unsplash.com/photo-1526483360412-f4dbaf036963?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723156018-c9e0f7e2d54a?w=1200&auto=format&fit=crop&q=60" },
  { id: 31, title: "United States (USA)", name: "united-states", headerImg: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723549288-7f54c32a3c8f?w=1200&auto=format&fit=crop&q=60" },
  { id: 20, title: "Vietnam", name: "vietnam", headerImg: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200&auto=format&fit=crop&q=60", coverImg: "https://images.unsplash.com/photo-1605723128715-d77e8c72c9f0?w=1200&auto=format&fit=crop&q=60" },
];


const flag = (code) => `https://flagcdn.com/w320/${code}.png`;
const hero = (keyword) =>
  `https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0`;

// default blocks (unchanged)
export const defaultBlocks = {
  scholarships: [
    { id: 1, title: "Excellence Scholarship", amount: "€5,000", deadline: "Nov 10, 2025" },
    { id: 2, title: "STEM Innovators Grant", amount: "€8,500", deadline: "Oct 22, 2025" },
    { id: 3, title: "International Student Bursary", amount: "€2,000", deadline: "Dec 05, 2025" },
    { id: 4, title: "Merit-Based Scholarship", amount: "€3,500", deadline: "Jan 15, 2026" },
  ],
  visaTypes: [
    { icon: "shield", name: "Short-Term Study Visa", reqs: ["Confirmed short course enrollment", "Funds for duration", "Travel & health insurance"] },
    { icon: "grad",   name: "Long-Term (Degree) Visa", reqs: ["University admission letter", "Proof of funds / bank statements", "Language proficiency (if applicable)"] },
    { icon: "file",   name: "Research / PhD Visa",     reqs: ["Supervisor/host institution letter", "Research outline", "Funding confirmation"] },
  ],
  steps: [
    { icon: "check", title: "Get an Offer",        body: "Apply to recognized institutions and secure an acceptance letter. Confirm program start dates and tuition fees." },
    { icon: "file",  title: "Collect Documents",   body: "Gather passport, photos, admission letter, financial proof, health insurance, and language test results." },
    { icon: "globe", title: "Submit Application",  body: "Apply online or via the embassy/consulate portal. Pay the visa fee and book biometrics/appointment if required." },
    { icon: "clock", title: "Attend Appointment",  body: "Provide biometrics and attend an interview (if requested). Carry originals and organized copies." },
    { icon: "arrow", title: "Decision & Travel",   body: "Track status, collect your visa, arrange accommodation, and prepare pre-departure checklists." },
  ],
  documents: [
    "Valid passport (6–12 months beyond stay)",
    "University admission/acceptance letter",
    "Financial proof / bank statements",
    "Health insurance coverage",
    "Language test results (if required)",
    "Visa application form & fee receipt",
    "Passport-size photos",
  ],
  workItems: [
    { icon: "briefcase", title: "Part-Time Work",  desc: "Work up to 20 hours/week during term (varies by country) and full-time in breaks." },
    { icon: "badge",     title: "Internships",     desc: "Curricular or post-study internships to build experience and networks." },
    { icon: "globe",     title: "Post-Study Stay", desc: "Stay-back options for graduates to seek jobs or start careers." },
  ],
  faqs: [
    { q: "Do I need IELTS/TOEFL?", a: "Depends on university and program. Some accept alternatives or waivers." },
    { q: "How much money must I show?", a: "Varies by country and city. Typically tuition + 9–12 months of living costs." },
    { q: "Can I switch to a work visa after study?", a: "Most countries offer pathways; eligibility and duration differ." },
  ],
};

// known ISO country codes for flags (add more as needed)
const codes = {
  germany: "de",
  france: "fr",
  netherlands: "nl",
  ireland: "ie",
  sweden: "se",
  finland: "fi",
  norway: "no",
  poland: "pl",
  "czech-republic": "cz",
  hungary: "hu",
  slovakia: "sk",
  lithuania: "lt",
  estonia: "ee",
  portugal: "pt",
  spain: "es",
  italy: "it",
  india: "in",
  philippines: "ph",
  nepal: "np",
  vietnam: "vn",
  taiwan: "tw",
  japan: "jp",
  "south-korea": "kr",
  singapore: "sg",
  malaysia: "my",
  thailand: "th",
  china: "cn",
  "united-arab-emirates": "ae",
  qatar: "qa",
  canada: "ca",
  "united-states": "us",
  australia: "au",
  "new-zealand": "nz",
  mexico: "mx",
  colombia: "co",
  argentina: "ar",
  brazil: "br",
  fiji: "fj",
  "papua-new-guinea": "pg",
  "south-africa": "za",
  kenya: "ke",
  morocco: "ma",
  egypt: "eg",
};

// per-country overrides (only what’s different)
const overrides = {
  germany: {
    heroUrl: hero("germany"),
    scholarships: [
      { id: 1, title: "DAAD Study Grant", amount: "€9,000", deadline: "Oct 01, 2025" },
      { id: 2, title: "Deutschlandstipendium", amount: "€3,600", deadline: "Rolling" },
    ],
  },
  france: {
    heroUrl: hero("france"),
  },
  "united-states": {
    heroUrl: hero("usa"),
    documents: [
      "Valid passport (6+ months beyond stay)",
      "I-20 (for F-1) or DS-2019 (for J-1)",
      "SEVIS fee receipt",
      ...defaultBlocks.documents,
    ],
  },
};

// FINAL: returns content for any country in the list, with defaults when no override exists
export function getCountryContent(slug) {
  const record = studentVisaCountries.find((c) => c.name === slug);
  if (!record) return null;

  const code = codes[slug];
  const base = overrides[slug] ?? {};

  return {
    slug,
    name: record.title,
    flagUrl: code ? flag(code) : undefined,
    heroUrl: base.heroUrl ?? hero(slug),

    scholarships: base.scholarships ?? getScholarshipsByCountry(slug),

    visaTypes: base.visaTypes ?? defaultBlocks.visaTypes,
    steps: base.steps ?? defaultBlocks.steps,
    documents: base.documents ?? defaultBlocks.documents,
    workItems: base.workItems ?? defaultBlocks.workItems,
    faqs: base.faqs ?? defaultBlocks.faqs,
  };
}
