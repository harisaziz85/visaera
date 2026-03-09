import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function TajikistanEVisa() {
  return (
    <EVisaCountryPage
      country="Tajikistan"
      title="Apply Tajikistan E-Visa"
      flag="https://flagcdn.com/w320/tj.png"
      heroImage="https://images.unsplash.com/photo-1702228101347-2bfbdedc344c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFqaWtzdGFufGVufDB8MnwwfHx8MA%3D%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 45–60 days (by visa)" },
          { label: "Validity", value: "90 days (enter within)" },
          { label: "Processing", value: "1–3 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist e-Visa", who: "Leisure travel" },
          { name: "Business e-Visa", who: "Meetings & events" },
        ],
      }}
      documents={{
        required: [
          "Passport bio page (6+ months validity)",
          "Recent passport photo",
          "Itinerary/hotel booking",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/tajikistan-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Register & fill form", desc: "Official site" },
        { title: "Upload & pay", desc: "Secure payment" },
        { title: "Get decision", desc: "Email e-Visa (PDF)" },
        { title: "Travel", desc: "Print or keep digital copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We guide every field" },
        { title: "Doc review", desc: "Catch mistakes early" },
        { title: "Submit & track", desc: "Status updates" },
      ]}
      travelRulesItems={[
        { title: "GBAO permit", content: "Required for Pamir region (add-on)" },
        { title: "Return ticket", content: "May be checked at arrival" },
      ]}
      faqs={[
        { q: "Is it single entry?", a: "Yes, standard e-Visa is single entry. Multiple-entry may be available." },
        { q: "Can I extend?", a: "Generally not extendable except force majeure." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/tajikistan"
    />
  );
}