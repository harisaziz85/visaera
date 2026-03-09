
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function SouthKoreaKETA() {
  return (
    <EVisaCountryPage
      country="South Korea"
      flag="https://flagcdn.com/w320/kr.png"
      title="Apply K-ETA (Korea Electronic Travel Authorization)"
      heroImage="https://images.unsplash.com/photo-1525762867061-21c9fb70b15a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c291dGglMjBrb3JlYXxlbnwwfHwwfHx8MA%3D%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 90 days (visa-free stays)" },
          { label: "Validity", value: "K-ETA typically 2 years (by policy)" },
          { label: "Processing", value: "Minutes to 72 hours" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "K-ETA (tourism/business)", who: "Short stays for eligible nationals" },
          { name: "Short-term Business (C-3)", who: "If K-ETA not applicable" },
        ],
      }}
      documents={{
        required: [
          "Passport (valid through stay)",
          "Recent digital photo",
          "Flight & accommodation details",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/south-korea-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Apply online", desc: "Official K-ETA site" },
        { title: "Pay & submit", desc: "Instant filing" },
        { title: "Receive approval", desc: "Email K-ETA" },
        { title: "Travel", desc: "No arrival card for K-ETA holders" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We confirm eligibility/exemptions" },
        { title: "Doc review", desc: "Photo & passport checks" },
        { title: "Submit & track", desc: "Fast decisions" },
      ]}
      travelRulesItems={[
        { title: "Temporary exemptions", content: "Some nationalities exempt until Dec 31, 2025" },
        { title: "Return ticket", content: "May be checked at boarding" },
      ]}
      faqs={[
        { q: "Is K-ETA multi-trip?", a: "Yes, valid for multiple trips during validity." },
        { q: "Do all nationals need K-ETA now?", a: "Some are temporarily exempt; rules vary by passport." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/south-korea"
    />
  );
}
