// 1. INDIA
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function IndiaEVisa() {
  return (
    <EVisaCountryPage
      country="India"
      title="Apply India E-Visa"
      flag="https://flagcdn.com/w320/in.png"
      heroImage="https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "30/90/180 days (by type)" },
          { label: "Validity", value: "1 year multiple (Tourist)" },
          { label: "Processing", value: "24–72 hours" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist e-Visa", who: "Sightseeing & family visits" },
          { name: "Business e-Visa", who: "Meetings & conferences" },
          { name: "Medical e-Visa", who: "Treatment in India" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Digital photo (2x2 inch)",
          "Flight tickets",
          "Email address",
          "Debit/Credit card",
        ],
        downloads: [{ label: "Photo Specifications PDF", href: "/docs/india-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Fill form", desc: "Official indianvisaonline.gov.in" },
        { title: "Upload photo", desc: "Instant validation" },
        { title: "Pay fee", desc: "$25–$80 by nationality" },
        { title: "Get e-Visa", desc: "PDF in 1–3 days" },
      ]}
      howItWorksSteps={[
        { title: "Check eligibility", desc: "165+ countries qualify" },
        { title: "We review docs", desc: "Zero rejection guarantee" },
        { title: "Receive ETA", desc: "Print & fly" },
      ]}
      travelRulesItems={[
        { title: "Entry ports", content: "30 airports + 5 seaports" },
        { title: "1-year multiple", content: "Max 180 days per visit" },
      ]}
      faqs={[
        { q: "Do I need biometrics?", a: "No, fully online." },
        { q: "Can I extend?", a: "No extension for e-Visa." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/india"
    />
  );
}