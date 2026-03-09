// /data/evisa/configs.js
export const evisaConfigs = {
  azerbaijan: {
    country: "Azerbaijan",
    title: "Apply Azerbaijan E-Visa",
    heroImage:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop",
    heroChips: [
      "Online application",
      "Fast processing",
      "Multiple entry options",
    ],

    quickFacts: {
      items: [
        { label: "Stay length", value: "Up to 30 days" },
        { label: "Validity", value: "90 days" },
        { label: "Entries", value: "Single" },
        { label: "Processing", value: "3–5 working days" },
        { label: "Biometrics", value: "Not required" },
        { label: "Portal", value: "Official e-Visa" },
      ],
    },

    visaTypes: {
      items: [
        {
          name: "Tourist e-Visa",
          who: "Leisure travel",
          badges: ["Stay 30d"],
          docsDelta: ["Hotel/host details"],
        },
        {
          name: "Business e-Visa",
          who: "Meetings & events",
          badges: ["Stay 30d"],
          docsDelta: ["Invitation letter"],
        },
      ],
    },

    documents: {
      required: [
        "Passport bio page (clear color scan)",
        "Photo (35×45mm, light background)",
        "Travel itinerary (flight/hotel or host address)",
        "Bank statement (last 3–6 months)",
      ],
      conditional: [
        "Invitation letter (business/visit)",
        "Minor consent letter",
      ],
      downloads: [
        {
          label: "Invitation Letter – Sample",
          href: "/docs/invitation-sample.docx",
        },
        { label: "Photo Specs – Guide", href: "/docs/photo-guide.pdf" },
      ],
    },

    processing: {
      stages: [
        { title: "Create account", desc: "Register on official portal" },
        { title: "Complete form", desc: "Personal & travel details" },
        { title: "Upload documents", desc: "Passport, photo, proofs" },
        { title: "Pay & submit", desc: "Track decision via email" },
      ],
    },

    fees: {
      currency: "USD",
      items: [
        { label: "Government fee", amount: 25 },
        { label: "Service fee", amount: 20 },
      ],
      rates: { USD: 1, PKR: 280, EUR: 0.92 },
    },

    howItWorks: {
      steps: [
        { title: "Start application", desc: "We guide you field-by-field" },
        { title: "Doc review", desc: "Fix issues before submission" },
        { title: "Submission & tracking", desc: "Status updates" },
      ],
    },

    travelRules: {
      items: [
        {
          title: "Carry original passport",
          content: "Same passport as application",
        },
        { title: "Return ticket", content: "May be checked by immigration" },
        { title: "Funds & insurance", content: "Recommended to carry proof" },
      ],
    },

    faqs: [
      {
        q: "How early should I apply?",
        a: "2–4 weeks before travel is ideal.",
      },
      {
        q: "Do I need confirmed flights?",
        a: "Tentative itinerary is usually fine.",
      },
    ],

    sources: [{ label: "Official e-Visa Portal", href: "#" }],
    lastUpdated: "2025-08-23",

    sticky: {
      whatsappHref: "https://wa.me/306973931683XXXXX",
      ctaHref: "/apply/azerbaijan",
    },
  },

  // --- Minimal samples you can copy & edit quickly ---
  turkey: {
    country: "Turkey",
    title: "Apply Turkey E-Visa",
    heroImage:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
    quickFacts: {
      items: [
        { label: "Stay length", value: "Up to 30 days" },
        { label: "Validity", value: "180 days" },
        { label: "Processing", value: "1–3 working days" },
      ],
    },
    visaTypes: {
      items: [
        { name: "Tourist e-Visa", who: "Leisure travel" },
        { name: "Business e-Visa", who: "Meetings & events" },
      ],
    },
    documents: {
      required: ["Passport", "Photo", "Itinerary"],
      conditional: [],
      downloads: [],
    },
    processing: {
      stages: [
        { title: "Register & fill form", desc: "Online portal" },
        { title: "Upload & pay", desc: "Secure payment" },
        { title: "Get decision", desc: "Email delivery" },
        { title: "Travel", desc: "Carry print/soft copy" },
      ],
    },
    fees: {
      currency: "USD",
      items: [{ label: "Government fee", amount: 60 }],
      rates: { USD: 1, PKR: 280, EUR: 0.92 },
    },
    howItWorks: { steps: ["Start", "Review", "Submit"] },
    travelRules: {
      items: [{ title: "Return ticket", content: "May be asked on arrival" }],
    },
    faqs: [{ q: "Can I extend?", a: "Generally not; exit & reapply." }],
    sources: [{ label: "Official portal", href: "#" }],
    lastUpdated: "2025-08-23",
    sticky: {
      whatsappHref: "https://wa.me/306973931683XXXXX",
      ctaHref: "/apply/turkey",
    },
  },

  malaysia: {
    country: "Malaysia",
    title: "Apply Malaysia E-Visa",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    quickFacts: {
      items: [
        { label: "Stay length", value: "Up to 30 days" },
        { label: "Processing", value: "3–5 working days" },
        { label: "Biometrics", value: "Not required" },
      ],
    },
    visaTypes: { items: [{ name: "Tourist e-Visa", who: "Leisure travel" }] },
    documents: {
      required: ["Passport", "Photo", "Itinerary", "Bank statement"],
      conditional: [],
      downloads: [],
    },
    processing: {
      stages: [
        { title: "Account & form", desc: "Create & fill" },
        { title: "Upload documents", desc: "Passport, photo, proofs" },
        { title: "Pay & submit", desc: "Track online" },
        { title: "Decision", desc: "Email delivery" },
      ],
    },
    fees: {
      currency: "USD",
      items: [
        { label: "Government fee", amount: 25 },
        { label: "Service fee", amount: 15 },
      ],
      rates: { USD: 1, PKR: 280, EUR: 0.92 },
    },
    howItWorks: { steps: ["Start", "Review", "Submit"] },
    travelRules: {
      items: [{ title: "Funds & insurance", content: "Recommended" }],
    },
    faqs: [{ q: "Tentative booking OK?", a: "Usually yes." }],
    sources: [{ label: "Official portal", href: "#" }],
    lastUpdated: "2025-08-23",
    sticky: {
      whatsappHref: "https://wa.me/306973931683XXXXX",
      ctaHref: "/apply/malaysia",
    },
  },
};
