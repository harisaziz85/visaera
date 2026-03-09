import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function UzbekistanEVisa() {
  return (
    <EVisaCountryPage
      country="Uzbekistan"
      title="Apply Uzbekistan E-Visa"
      flag="https://flagcdn.com/w320/uz.png"
      heroImage="https://images.unsplash.com/photo-1709737006157-caf2bec3bde3?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHV6YmVraXN0YW58ZW58MHwyfDB8fHww"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 30 days" },
          { label: "Validity", value: "90 days (enter within)" },
          { label: "Processing", value: "2–3 working days" },
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
          "Recent passport photo (white background)",
          "Travel itinerary or hotel booking",
          "Valid email address",
          "Credit/Debit card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/uzbekistan-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Register & fill form", desc: "Official portal" },
        { title: "Upload & pay", desc: "Secure payment" },
        { title: "Get decision", desc: "Email PDF e-Visa" },
        { title: "Travel", desc: "Carry print/soft copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We guide you field-by-field" },
        { title: "Doc review", desc: "Fix issues before submission" },
        { title: "Submit & track", desc: "Status updates" },
      ]}
      travelRulesItems={[
        { title: "Registration", content: "Hotels usually register you automatically" },
        { title: "Return/onward ticket", content: "May be requested at check-in" },
      ]}
      faqs={[
        { q: "Is it single-entry?", a: "Yes (multi-entry options also exist depending on nationality)." },
        { q: "When should I apply?", a: "At least 3 business days before travel." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/uzbekistan"
    />
  );
}