// lib/visas/data.ts
import {
  StickerVisaContent,
  VisaDropdownItem,
} from "../../app/visas/_components/StickerVisaPageDesign";
import { getFlagBySlug } from "../../../data";
import { visaData, stickerVisaCountries } from "../../../data";

/* ------------------------------------------------------------------
   Helpers: country images + generic news with graceful fallbacks
------------------------------------------------------------------- */

// Unsplash featured query (stable enough for <img> use; no Next Image)
const unsplash = (q, w = 1600, h = 900) =>
  `https://source.unsplash.com/${w}x${h}/?${encodeURIComponent(q)}`;

/** Curated hero images per slug (add/replace anytime).
 * If a slug is missing here, we fall back to a sensible query. */
const HERO_BY_SLUG = {
  france: unsplash("paris france skyline"),
  spain: unsplash("barcelona spain city"),
  italy: unsplash("rome italy colosseum"),
  uk: unsplash("london skyline"),
  germany: unsplash("berlin germany skyline"),
  portugal: unsplash("lisbon portugal"),
  uae: unsplash("dubai skyline"),
  sweden: unsplash("stockholm sweden"),
  austria: unsplash("vienna austria"),
  netherlands: unsplash("amsterdam netherlands"),
  finland: unsplash("helsinki finland"),
  denmark: unsplash("copenhagen denmark"),
  norway: unsplash("oslo norway"),
  "south-korea": unsplash("seoul south korea"),
  japan: unsplash("tokyo japan"),
  switzerland: unsplash("zurich switzerland"),
  "czech-republic": unsplash("prague czech republic"),
  belgium: unsplash("brussels belgium"),
  hungary: unsplash("budapest hungary"),
  poland: unsplash("warsaw poland"),
  estonia: unsplash("tallinn estonia"),
  lithuania: unsplash("vilnius lithuania"),
  latvia: unsplash("riga latvia"),
  slovenia: unsplash("ljubljana slovenia"),
  slovakia: unsplash("bratislava slovakia"),
  luxembourg: unsplash("luxembourg city"),
  malta: unsplash("valletta malta"),
  iceland: unsplash("reykjavik iceland"),
  greece: unsplash("santorini greece"),
  croatia: unsplash("dubrovnik croatia"),
  cyprus: unsplash("nicosia cyprus"),
  ireland: unsplash("dublin ireland"),
  singapore: unsplash("singapore skyline"),
  "new-zealand": unsplash("auckland new zealand"),
  australia: unsplash("sydney opera house"),
  canada: unsplash("toronto skyline"),
  "south-africa": unsplash("cape town south africa"),
  brazil: unsplash("rio de janeiro brazil"),
  argentina: unsplash("buenos aires argentina"),
  chile: unsplash("santiago chile"),
  mexico: unsplash("mexico city skyline"),
  kazakhstan: unsplash("astana kazakhstan"),
  georgia: unsplash("tbilisi georgia"),
  "saudi-arabia": unsplash("riyadh saudi arabia"),
  oman: unsplash("muscat oman"),
  bahrain: unsplash("manama bahrain"),
  qatar: unsplash("doha qatar"),
  mauritius: unsplash("mauritius beach"),
  seychelles: unsplash("seychelles beach"),
  "sri-lanka": unsplash("colombo sri lanka"),
};

/** CTA background images per slug; falls back to a travel/passport theme. */
const CTA_BY_SLUG = {
  france: unsplash("eiffel tower travel passport"),
  spain: unsplash("barcelona travel passport"),
  italy: unsplash("rome travel passport"),
  uk: unsplash("london uk travel passport"),
  germany: unsplash("germany travel passport"),
  // add more as you like; the fallback is good enough if omitted
};

const heroFor = (slug, country) =>
  HERO_BY_SLUG[slug] || unsplash(`${country} landmark city`);

const ctaFor = (slug, country) =>
  CTA_BY_SLUG[slug] ||
  unsplash(`${country} travel passport boarding pass`, 1200, 700);

/** Generic news that reads fine for any country. */
const genericNews = (country) => [
  {
    title: `${country}: peak season advisory — book appointments early to avoid delays`,
    date: "Aug 2025",
    img: unsplash(`${country} embassy visa center`, 600, 360),
    href: "#",
    source: "Visa Application Center",
    category: "Processing",
  },
  {
    title: `${country} short-stay applicants: reminder on travel medical insurance coverage`,
    date: "Jul 2025",
    img: unsplash("travel medical insurance documents", 600, 360),
    href: "#",
    source: "Guidance",
    category: "Policy",
  },
  {
    title: `${country} visas: checklist tips to reduce refusals for incomplete files`,
    date: "Jun 2025",
    img: unsplash("visa documents checklist", 600, 360),
    href: "#",
    source: "Advisory",
    category: "Checklist",
  },
];

/* ------------------------------------------------------------------
   Your country list (kept short here; keep your full 50 list)
------------------------------------------------------------------- */
export const stickerVisas = [
  {
    href: "/visas/france",
    label: "France Visa",
    flag: "https://flagcdn.com/w320/fr.png",
  },
  {
    href: "/visas/morocco",
    label: "morocco Visa",
    flag: "https://flagcdn.com/w320/mo.png",
  },
  {
    href: "/visas/spain",
    label: "Spain Visa",
    flag: "https://flagcdn.com/w320/es.png",
  },
  {
    href: "/visas/italy",
    label: "Italy Visa",
    flag: "https://flagcdn.com/w320/it.png",
  },
  {
    href: "/visas/uk",
    label: "United Kingdom Visa",
    flag: "https://flagcdn.com/w320/gb.png",
  },
  {
    href: "/visas/germany",
    label: "Germany Visa",
    flag: "https://flagcdn.com/w320/de.png",
  },
  {
    href: "/visas/portugal",
    label: "Portugal Visa",
    flag: "https://flagcdn.com/w320/pt.png",
  },
  {
    href: "/visas/uae",
    label: "United Arab Emirates Visa",
    flag: "https://flagcdn.com/w320/ae.png",
  },
  {
    href: "/visas/sweden",
    label: "Sweden Visa",
    flag: "https://flagcdn.com/w320/se.png",
  },
  {
    href: "/visas/austria",
    label: "Austria Visa",
    flag: "https://flagcdn.com/w320/at.png",
  },
  {
    href: "/visas/netherlands",
    label: "Netherlands Visa",
    flag: "https://flagcdn.com/w320/nl.png",
  },
  {
    href: "/visas/finland",
    label: "Finland Visa",
    flag: "https://flagcdn.com/w320/fi.png",
  },
  {
    href: "/visas/denmark",
    label: "Denmark Visa",
    flag: "https://flagcdn.com/w320/dk.png",
  },
  {
    href: "/visas/norway",
    label: "Norway Visa",
    flag: "https://flagcdn.com/w320/no.png",
  },
  {
    href: "/visas/south-korea",
    label: "South Korea Visa",
    flag: "https://flagcdn.com/w320/kr.png",
  },
  {
    href: "/visas/japan",
    label: "Japan Visa",
    flag: "https://flagcdn.com/w320/jp.png",
  },
  {
    href: "/visas/switzerland",
    label: "Switzerland Visa",
    flag: "https://flagcdn.com/w320/ch.png",
  },
  {
    href: "/visas/czech-republic",
    label: "Czech Republic Visa",
    flag: "https://flagcdn.com/w320/cz.png",
  },
  {
    href: "/visas/belgium",
    label: "Belgium Visa",
    flag: "https://flagcdn.com/w320/be.png",
  },
  {
    href: "/visas/hungary",
    label: "Hungary Visa",
    flag: "https://flagcdn.com/w320/hu.png",
  },
  {
    href: "/visas/poland",
    label: "Poland Visa",
    flag: "https://flagcdn.com/w320/pl.png",
  },
  {
    href: "/visas/estonia",
    label: "Estonia Visa",
    flag: "https://flagcdn.com/w320/ee.png",
  },
  {
    href: "/visas/lithuania",
    label: "Lithuania Visa",
    flag: "https://flagcdn.com/w320/lt.png",
  },
  {
    href: "/visas/latvia",
    label: "Latvia Visa",
    flag: "https://flagcdn.com/w320/lv.png",
  },
  {
    href: "/visas/slovenia",
    label: "Slovenia Visa",
    flag: "https://flagcdn.com/w320/si.png",
  },
  {
    href: "/visas/slovakia",
    label: "Slovakia Visa",
    flag: "https://flagcdn.com/w320/sk.png",
  },
  {
    href: "/visas/luxembourg",
    label: "Luxembourg Visa",
    flag: "https://flagcdn.com/w320/lu.png",
  },
  {
    href: "/visas/malta",
    label: "Malta Visa",
    flag: "https://flagcdn.com/w320/mt.png",
  },
  {
    href: "/visas/iceland",
    label: "Iceland Visa",
    flag: "https://flagcdn.com/w320/is.png",
  },
  {
    href: "/visas/greece",
    label: "Greece Visa",
    flag: "https://flagcdn.com/w320/gr.png",
  },
  {
    href: "/visas/croatia",
    label: "Croatia Visa",
    flag: "https://flagcdn.com/w320/hr.png",
  },
  {
    href: "/visas/cyprus",
    label: "Cyprus Visa",
    flag: "https://flagcdn.com/w320/cy.png",
  },
  {
    href: "/visas/ireland",
    label: "Ireland Visa",
    flag: "https://flagcdn.com/w320/ie.png",
  },
  {
    href: "/visas/singapore",
    label: "Singapore Visa",
    flag: "https://flagcdn.com/w320/sg.png",
  },
  {
    href: "/visas/new-zealand",
    label: "New Zealand Visa",
    flag: "https://flagcdn.com/w320/nz.png",
  },
  {
    href: "/visas/australia",
    label: "Australia Visa",
    flag: "https://flagcdn.com/w320/au.png",
  },
  {
    href: "/visas/canada",
    label: "Canada Visa",
    flag: "https://flagcdn.com/w320/ca.png",
  },
  {
    href: "/visas/south-africa",
    label: "South Africa Visa",
    flag: "https://flagcdn.com/w320/za.png",
  },
  {
    href: "/visas/brazil",
    label: "Brazil Visa",
    flag: "https://flagcdn.com/w320/br.png",
  },
  {
    href: "/visas/argentina",
    label: "Argentina Visa",
    flag: "https://flagcdn.com/w320/ar.png",
  },
  {
    href: "/visas/chile",
    label: "Chile Visa",
    flag: "https://flagcdn.com/w320/cl.png",
  },
  {
    href: "/visas/mexico",
    label: "Mexico Visa",
    flag: "https://flagcdn.com/w320/mx.png",
  },
  {
    href: "/visas/kazakhstan",
    label: "Kazakhstan Visa",
    flag: "https://flagcdn.com/w320/kz.png",
  },
  {
    href: "/visas/georgia",
    label: "Georgia Visa",
    flag: "https://flagcdn.com/w320/ge.png",
  },
  {
    href: "/visas/saudi-arabia",
    label: "Saudi Arabia Visa",
    flag: "https://flagcdn.com/w320/sa.png",
  },
  {
    href: "/visas/oman",
    label: "Oman Visa",
    flag: "https://flagcdn.com/w320/om.png",
  },
  {
    href: "/visas/bahrain",
    label: "Bahrain Visa",
    flag: "https://flagcdn.com/w320/bh.png",
  },
  {
    href: "/visas/qatar",
    label: "Qatar Visa",
    flag: "https://flagcdn.com/w320/qa.png",
  },
  {
    href: "/visas/mauritius",
    label: "Mauritius Visa",
    flag: "https://flagcdn.com/w320/mu.png",
  },
  {
    href: "/visas/seychelles",
    label: "Seychelles Visa",
    flag: "https://flagcdn.com/w320/sc.png",
  },
  {
    href: "/visas/sri-lanka",
    label: "Sri Lanka Visa",
    flag: "https://flagcdn.com/w320/lk.png",
  },
  {
    href: "/visas/fiji",
    label: "Fiji Visa",
    flag: "https://flagcdn.com/w320/fj.png",
  },
];

/* ------------------------------------------------------------------
   The rest of your original base content
------------------------------------------------------------------- */
const baseDropdowns = [
  {
    title: "Single Entry Visa",
    description:
      "Short-stay Schengen visa (Type C) allowing one entry for up to 90 days in any 180-day period.",
    documents: [
      { label: "Visa application form, completed and signed" },
      { label: "Passport", hint: "Valid per Schengen rules; 2 blank pages" },
      { label: "Recent biometric photo", hint: "ICAO/Schengen standard" },
      { label: "Travel medical insurance (≥ €30,000)" },
      { label: "Accommodation proof (hotel/host invite)" },
      { label: "Proof of funds" },
      { label: "Return itinerary" },
    ],
    notes: ["Bring originals + copies where requested."],
  },
  {
    title: "Multiple Entry Visa",
    description:
      "Short-stay Schengen visa allowing multiple entries (90/180 rule). Validity varies with profile.",
    documents: [
      { label: "All core short-stay documents (as Single Entry)" },
      { label: "Evidence of recurrent travel need" },
    ],
  },
];

export function slugFromHref(href) {
  const parts = href.split("/").filter(Boolean);
  return parts.length ? parts.pop() : "";
}

export function labelFromHref(href) {
  const last = href.split("/").filter(Boolean).pop();
  return last ? last.replace(/-/g, " ") : "";
}

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

export function getVisaContentBySlug(slug) {
  const s = String(slug).toLowerCase().trim();

  // find by canonical name OR by href tail
  const rec =
    stickerVisaCountries.find((c) => c.name === s) ||
    stickerVisaCountries.find((c) => (c.href || "").split("/").pop() === s);

  if (!rec) return null; // 404 cleanly if not found

  // figure out the best slug to look up in `codes`
  const canonical =
    rec.name || (rec.href ? rec.href.split("/").pop() : null) || s;

  const code =
    codes[s] || codes[canonical] || codes[(rec.href || "").split("/").pop()];

  const flag = code ? `https://flagcdn.com/w320/${code}.png` : undefined;

  // Map data to fields your page expects
  return {
    slug: s,
    country: rec.title,
    flag, // <- now always safe
    heroImage: rec.headerImg || rec.coverImg,
    coverImage: rec.coverImg || rec.headerImg,
    heroTitle: `${rec.title} Visa`,
    breadcrumbBase: "Visas",
    article: {
      intro: `All you need to know about the ${rec.title} visa application process.`,
      requirements: [
        "Valid passport",
        "Proof of funds",
        "Admission/Invitation letter (if applicable)",
        "Travel/health insurance",
      ],
      benefits: [
        "Quality opportunities",
        "Part-time work options (country-specific)",
        "Post-study/work pathways (country-specific)",
      ],
      prepText:
        "Prepare documents early, check appointment availability, and verify official requirements before submission.",
    },
    dropdowns: [],
    sidebar: {
      news: [],
      visaTypes: ["Short-Term", "Long-Term", "Research/PhD"],
      ctaImage: rec.coverImg,
    },
    whatsappHref: null,
  };
}

// export function allSlugs() {
//   return stickerVisas.map((v) => slugFromHref(v.href));
// }

// ✅ Helper: flatten all visa slugs from visaData
// ✅ Replace your old allSlugs() with this one
export function allSlugs() {
  const slugs = [];

  Object.entries(visaData).forEach(([category, data]) => {
    if (Array.isArray(data.subcategories)) {
      data.subcategories.forEach((sub) => {
        const subSlug = sub.toLowerCase().replace(/\s+/g, "-");
        slugs.push(`${category}/${subSlug}`);
      });
    }
  });

  return slugs;
}
export function allSlugs2() {
  const slugs = [];

  Object.entries(stickerVisas).forEach(([category, data]) => {
    if (Array.isArray(data.subcategories)) {
      data.subcategories.forEach((sub) => {
        const subSlug = sub.toLowerCase().replace(/\s+/g, "-");
        slugs.push(`${category}/${subSlug}`);
      });
    }
  });

  return slugs;
}

// ✅ Example function that returns data by slug
// export function getVisaContentBySlug(slug) {
//   const [category, subSlug] = slug.split("/");

//   const categoryData = visaData[category];
//   if (!categoryData) return null;

//   const visaTitle = categoryData.subcategories.find(
//     (s) => s.toLowerCase().replace(/\s+/g, "-") === subSlug
//   );

//   if (!visaTitle) return null;

//   return {
//     ...categoryData,
//     country: visaTitle,
//     slug,
//     heroImage: categoryData.heroImage,
//   };
// }
