
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function RwandaEVisa() {
  return (
    <EVisaCountryPage
      country="Rwanda"
      title="Apply Rwanda E-Visa"
      flag="https://flagcdn.com/w320/rw.png"
      heroImage="https://plus.unsplash.com/premium_photo-1670689707787-ac9a9dd082e2?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UndhbmRhfGVufDB8fDB8fHww"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 30 days (V1 single entry)" },
          { label: "Validity", value: "Typically 90 days (by visa type)" },
          { label: "Processing", value: "≈ 7 days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Visitor Visa (V1)", who: "Tourism / visits" },
          { name: "Business Visa", who: "Meetings & events" },
        ],
      }}
      documents={{
        required: [
          "Passport bio page (6+ months validity)",
          "Recent photo (white background)",
          "Itinerary or invitation & hotel booking",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/rwanda-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Register & form", desc: "Irembo portal" },
        { title: "Upload & pay", desc: "Card/mobile money" },
        { title: "Decision", desc: "E-visa via email" },
        { title: "Travel", desc: "Carry print/soft copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We guide every step" },
        { title: "Doc review", desc: "Catch issues early" },
        { title: "Submit & track", desc: "Email updates" },
      ]}
      travelRulesItems={[
        { title: "On arrival option", content: "Rwanda grants VOA to many nationalities" },
        { title: "Return ticket", content: "May be checked on arrival" },
      ]}
      faqs={[
        { q: "Is it single entry?", a: "V1 Visitor Visa is typically single entry; multi-entry options exist." },
        { q: "Can I apply online?", a: "Yes, via Irembo Gov portal." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/rwanda"
    />
  );
}
