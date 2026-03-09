
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function KazakhstanEVisa() {
  return (
    <EVisaCountryPage
      country="Kazakhstan"
      title="Apply Kazakhstan Tourist Visa / E-Visa"
      flag="https://flagcdn.com/w320/kz.png"
      heroImage="https://images.unsplash.com/photo-1684453728323-a8c2e5b615eb?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2F6YWtoc3RhbnxlbnwwfHwwfHx8MA%3D%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 30 days (tourist)" },
          { label: "Validity", value: "Up to 90 days (single entry window)" },
          { label: "Processing", value: "≈ 5 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist visa (B12)", who: "Leisure travel" },
          { name: "Business visa (B2)", who: "Meetings & services" },
        ],
      }}
      documents={{
        required: [
          "Passport (valid 6+ months)",
          "Photo as per specs",
          "Hotel booking & return ticket",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/kazakhstan-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Register & apply", desc: "Official portal/mission" },
        { title: "Upload & pay", desc: "Online submission" },
        { title: "Approval", desc: "Visa grant notice" },
        { title: "Travel", desc: "Carry print/soft copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We confirm correct category" },
        { title: "Doc review", desc: "Avoid processing delays" },
        { title: "Submit & track", desc: "Updates via email" },
      ]}
      travelRulesItems={[
        { title: "Entry count", content: "Single or multiple entry types exist" },
        { title: "Visa-free cases", content: "Some nationalities enjoy visa-free stays" },
      ]}
      faqs={[
        { q: "Max tourist stay?", a: "Typically up to 30 days per entry." },
        { q: "Multiple entry?", a: "Available depending on invitation/eligibility." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/kazakhstan"
    />
  );
}
