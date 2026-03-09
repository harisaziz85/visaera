
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function SaudiArabiaEVisa() {
  return (
    <EVisaCountryPage
      country="Saudi Arabia"
      title="Apply Saudi Arabia Tourist E-Visa"
      flag="https://flagcdn.com/w320/sa.png"
      heroImage="https://plus.unsplash.com/premium_photo-1697730274057-19338e84db8e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2F1ZGklMjBhcmFiaWF8ZW58MHx8MHx8fDA%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 90 days per visit" },
          { label: "Validity", value: "1 year – multiple entry" },
          { label: "Processing", value: "Minutes to ~3 days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist e-Visa", who: "Tourism, family visits, Umrah (not Hajj)" },
          { name: "Business visit", who: "Meetings & events" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Recent passport photo (per specs)",
          "Accommodation & return ticket",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/saudi-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Apply online", desc: "Official Visit Saudi portal" },
        { title: "Pay & insurance", desc: "Insurance bundled at checkout" },
        { title: "Approval", desc: "e-Visa email" },
        { title: "Travel", desc: "Show QR/e-Visa on arrival" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We confirm eligibility" },
        { title: "Doc review", desc: "Avoid returns" },
        { title: "Submit & track", desc: "Fast approval" },
      ]}
      travelRulesItems={[
        { title: "Multiple entry", content: "Unlimited entries within validity" },
        { title: "Religious travel", content: "Umrah permitted outside Hajj season" },
      ]}
      faqs={[
        { q: "Do I need insurance?", a: "Yes, it’s selected during application." },
        { q: "What’s max stay?", a: "Up to 90 days per visit within the 1-year validity." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/saudi-arabia"
    />
  );
}
