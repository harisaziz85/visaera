
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function TurkeyEVisa() {
  return (
    <EVisaCountryPage
      country="Türkiye"
      title="Apply Türkiye E-Visa"
      flag="https://flagcdn.com/w320/tr.png"
      heroImage="https://plus.unsplash.com/premium_photo-1661962550248-59cf249e078b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXN0YW5idWx8ZW58MHx8MHx8fDA%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 30–90 days (by nationality)" },
          { label: "Validity", value: "180 days (e-Visa validity window)" },
          { label: "Processing", value: "Usually minutes" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist e-Visa", who: "Leisure travel" },
          { name: "Business e-Visa", who: "Meetings & fairs" },
        ],
      }}
      documents={{
        required: [
          "Passport (valid throughout stay; some nationalities need 6+ months)",
          "Recent photo (if requested)",
          "Travel booking details",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/turkey-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Apply online", desc: "Official e-Visa site" },
        { title: "Pay online", desc: "Instant payment" },
        { title: "Receive e-Visa", desc: "Email PDF within minutes" },
        { title: "Travel", desc: "Carry print/soft copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We guide country-specific rules" },
        { title: "Doc check", desc: "Fix issues before paying" },
        { title: "Submit & receive", desc: "Instant e-Visa" },
      ]}
      travelRulesItems={[
        { title: "Multiple vs single", content: "Depends on nationality" },
        { title: "Re-apply rule", content: "90-day stay within 180-day period" },
      ]}
      faqs={[
        { q: "Is it instant?", a: "Many applicants receive e-Visa in minutes." },
        { q: "How long can I stay?", a: "30–90 days depending on nationality." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/turkey"
    />
  );
}
