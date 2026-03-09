
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function NepalVisa() {
  return (
    <EVisaCountryPage
      country="Nepal"
      title="Apply Nepal Tourist Visa (On Arrival)"
      flag="https://flagcdn.com/w320/np.png"
      heroImage="https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5lcGFsfGVufDB8fDB8fHww"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "15 / 30 / 90 days (choose at entry)" },
          { label: "Validity", value: "Visa issued on arrival (or embassy)" },
          { label: "Processing", value: "On-arrival counters (complete online form for faster processing)" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist Visa (VOA)", who: "Most travelers eligible" },
          { name: "Embassy Visa", who: "Apply in advance if preferred" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Passport photo (if applying at mission)",
          "Hotel booking / itinerary",
          "Fees payable (USD cash/cards as available)",
          "Online pre-application (optional, recommended)",
        ],
        downloads: [{ label: "Photo Specs – Nepal", href: "/docs/nepal-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Fill form", desc: "Online pre-application or at kiosk" },
        { title: "Pay fee", desc: "Select 15/30/90 days" },
        { title: "Get visa", desc: "Sticker/e-record at counter" },
        { title: "Travel", desc: "Proceed through immigration" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We guide VOA steps" },
        { title: "Doc review", desc: "Have docs/fees ready" },
        { title: "Submit & go", desc: "Smooth entry" },
      ]}
      travelRulesItems={[
        { title: "Durations", content: "Choose 15, 30 or 90 days; extensions available" },
        { title: "Pre-apply", content: "Online form speeds arrival processing" },
      ]}
      faqs={[
        { q: "Is VOA available?", a: "Yes for most; check eligibility list and fees." },
        { q: "Can I extend?", a: "Yes—extensions possible via Immigration offices." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/nepal"
    />
  );
}
