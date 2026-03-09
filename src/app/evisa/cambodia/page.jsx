
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function CambodiaEVisa() {
  return (
    <EVisaCountryPage
      country="Cambodia"
      title="Apply Cambodia E-Visa (Tourist T)"
      flag="https://flagcdn.com/w320/kh.png"
      heroImage="https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8fDA%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "30 days (single entry)" },
          { label: "Validity", value: "3 months to enter" },
          { label: "Processing", value: "≈ 3 business days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist e-Visa (T)", who: "Leisure visits" },
          { name: "Business Visa", who: "Meetings & work trips (apply separately)" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Recent passport photo",
          "Return/onward ticket & hotel booking",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/cambodia-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Apply online", desc: "Official Cambodia e-Visa" },
        { title: "Pay & wait", desc: "≈ 3 business days" },
        { title: "Receive e-Visa", desc: "PDF via email" },
        { title: "Travel", desc: "Carry print/soft copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We guide each field" },
        { title: "Doc review", desc: "Avoid delays" },
        { title: "Submit & track", desc: "Email updates" },
      ]}
      travelRulesItems={[
        { title: "Entry type", content: "Single entry; extensions possible in-country" },
        { title: "Ports", content: "Check permitted airports/land borders for e-Visa" },
      ]}
      faqs={[
        { q: "How long can I stay?", a: "30 days on the Tourist e-Visa (extendable)." },
        { q: "Processing time?", a: "About 3 business days." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/cambodia"
    />
  );
}
