
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function VietnamEVisa() {
  return (
    <EVisaCountryPage
      country="Vietnam"
      title="Apply Vietnam E-Visa"
      flag="https://flagcdn.com/w320/vn.png" 
      heroImage="https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 90 days per entry" },
          { label: "Validity", value: "E-visa up to 90 days (single or multiple)" },
          { label: "Processing", value: "≈ 3 working days (typical)" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "E-Visa (90 days)", who: "Tourism & business; single or multiple entry" },
          { name: "Visa at mission", who: "If special categories required" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Digital photo & passport scan",
          "Entry/exit points & itinerary",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Photo Specs – Vietnam", href: "/docs/vietnam-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Apply online", desc: "Official Vietnam e-Visa portal" },
        { title: "Pay & wait", desc: "≈ 3 working days" },
        { title: "Receive e-Visa", desc: "Download approval" },
        { title: "Travel", desc: "Present e-Visa at border" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We select single vs multiple" },
        { title: "Doc review", desc: "Avoid rework" },
        { title: "Submit & track", desc: "Status updates" },
      ]}
      travelRulesItems={[
        { title: "Multiple entry", content: "90-day e-Visa available for multiple entries" },
        { title: "Ports", content: "Use declared ports of entry/exit" },
      ]}
      faqs={[
        { q: "Who can apply?", a: "E-Visa open to all nationalities (policy since 2023/2024 updates)." },
        { q: "How long is processing?", a: "Typically ~3 working days; can vary." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/vietnam"
    />
  );
}
