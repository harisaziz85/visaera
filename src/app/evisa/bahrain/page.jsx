
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function BahrainEVisa() {
  return (
    <EVisaCountryPage
      country="Bahrain"
      title="Apply Bahrain E-Visa"
      flag="https://flagcdn.com/w320/bh.png"
      heroImage="https://plus.unsplash.com/premium_photo-1661962249814-f0294a3846e6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFocmFpbnxlbnwwfDJ8MHx8fDA%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 14 or 30 days (by type)" },
          { label: "Validity", value: "90 days to 1 year (by type)" },
          { label: "Processing", value: "≈ 3–5 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist e-Visa", who: "Leisure visits" },
          { name: "Business e-Visa", who: "Meetings & events" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Recent photo",
          "Return/onward ticket & hotel booking",
          "Proof of funds (if asked)",
          "Email + card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/bahrain-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Apply online", desc: "NPRA eVisa portal" },
        { title: "Upload & pay", desc: "Secure payment" },
        { title: "Get decision", desc: "e-Visa by email" },
        { title: "Travel", desc: "Carry print/soft copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We pick correct visa type" },
        { title: "Doc review", desc: "Avoid refusals" },
        { title: "Submit & track", desc: "Email updates" },
      ]}
      travelRulesItems={[
        { title: "Extensions", content: "Some eVisas can be extended online" },
        { title: "Accommodation proof", content: "Hotel booking often required" },
      ]}
      faqs={[
        { q: "Is multiple-entry available?", a: "Yes, specific eVisa types allow it." },
        { q: "How long to apply in advance?", a: "Apply at least a week before travel." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/bahrain"
    />
  );
}
