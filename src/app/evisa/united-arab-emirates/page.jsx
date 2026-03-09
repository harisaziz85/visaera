
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function UAETouristVisa() {
  return (
    <EVisaCountryPage
      country="United Arab Emirates"
      title="Apply UAE Tourist Visa"
      flag="https://flagcdn.com/w320/ae.png"
      heroImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdGVkJTIwYXJhYiUyMGVtaXJhdGVzfGVufDB8fDB8fHww"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 30 or 90 days (by visa)" },
          { label: "Validity", value: "Usually 60 days to enter after issue" },
          { label: "Processing", value: "≈ 3–5 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist Visa – 30 days", who: "Short stays" },
          { name: "Tourist Visa – 90 days", who: "Extended visits" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Recent passport-sized photo",
          "Confirmed itinerary & hotel booking",
          "Return/onward ticket",
          "Email + card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/uae-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Apply", desc: "Through airlines/hotels/authorized agents" },
        { title: "Submit & pay", desc: "Online processing" },
        { title: "Approval", desc: "Visa emailed" },
        { title: "Travel", desc: "Carry print/soft copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We pick the right visa (30/90 days)" },
        { title: "Doc review", desc: "Avoid delays" },
        { title: "Submit & track", desc: "Regular updates" },
      ]}
      travelRulesItems={[
        { title: "Insurance", content: "Medical insurance strongly recommended" },
        { title: "Sponsor route", content: "Airlines/hotels often sponsor visas" },
      ]}
      faqs={[
        { q: "How long is processing?", a: "Typically 3–5 working days (express options exist)." },
        { q: "Multiple entry available?", a: "Yes, depending on visa type and issuer." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/united-arab-emirates"
    />
  );
}
