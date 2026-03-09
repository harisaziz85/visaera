
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function OmanEVisa() {
  return (
    <EVisaCountryPage
      country="Oman"
      title="Apply Oman E-Visa"
      flag="https://flagcdn.com/w320/om.png"
      heroImage="https://plus.unsplash.com/premium_photo-1661940975273-5ff6431cf911?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b21hbnxlbnwwfDB8MHx8fDA%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 30 days (26B Tourist)" },
          { label: "Validity", value: "Single: 1 month; Multiple: 1 year" },
          { label: "Processing", value: "≈ 1–4 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist e-Visa (30 days)", who: "Single entry – leisure" },
          { name: "Tourist e-Visa (1-year multiple)", who: "30 days per visit" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Recent photo",
          "Hotel booking & return ticket",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/oman-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Create account", desc: "ROP eVisa portal" },
        { title: "Apply & pay", desc: "Upload documents" },
        { title: "Approval", desc: "e-Visa via email" },
        { title: "Travel", desc: "Print or keep digital" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "Select right visa (26A/26B/Multiple)" },
        { title: "Doc review", desc: "Avoid delays" },
        { title: "Submit & track", desc: "Status online" },
      ]}
      travelRulesItems={[
        { title: "GCC resident options", content: "Special categories exist" },
        { title: "Extensions", content: "Some visas allow in-country extension" },
      ]}
      faqs={[
        { q: "Is multiple-entry available?", a: "Yes, 1-year multiple entry with 30 days per visit." },
        { q: "When to apply?", a: "Apply 3–7 days before travel." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/oman"
    />
  );
}
