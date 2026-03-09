
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function EgyptEVisa() {
  return (
    <EVisaCountryPage
      country="Egypt"
      title="Apply Egypt E-Visa"
      flag="https://flagcdn.com/w320/eg.png"
      heroImage="https://plus.unsplash.com/premium_photo-1664303467567-17891a27998a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVneXB0fGVufDB8fDB8fHww"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 30 days per entry" },
          { label: "Validity", value: "Up to 90 days to enter (e-Visa window)" },
          { label: "Processing", value: "≈ 5 working days (apply ≥7 days before travel)" },
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
          "Passport (6+ months validity)",
          "Recent passport photo (white background)",
          "Return/onward ticket & accommodation details",
          "Valid email address",
          "Credit/Debit card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/egypt-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Create account", desc: "Visa2Egypt portal" },
        { title: "Apply & pay", desc: "Upload docs and checkout" },
        { title: "Receive e-Visa", desc: "Email delivery (PDF/QR)" },
        { title: "Travel", desc: "Carry print/soft copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We verify eligibility & type" },
        { title: "Doc review", desc: "Fix issues before submission" },
        { title: "Submit & track", desc: "Get status updates" },
      ]}
      travelRulesItems={[
        { title: "Entry type", content: "Single or multiple entry depending on nationality" },
        { title: "Timeline", content: "Submit at least 7 days before departure" },
      ]}
      faqs={[
        { q: "How long can I stay?", a: "Typically 30 days per entry under the e-Visa." },
        { q: "What’s the validity window?", a: "Usually 90 days from issue to enter; stay granted at border control." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/egypt"
    />
  );
}
