import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function AzerbaijanEVisa() {
  return (
    <EVisaCountryPage
      country="Azerbaijan"
      title="Apply Azerbaijan E-Visa"
      heroImage="https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXplcmJhaWphbnxlbnwwfHwwfHx8MA%3D%3D"
      flag="https://flagcdn.com/w320/az.png"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 30 days" },
          { label: "Validity", value: "180 days" },
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
          "Scanned passport bio page (valid for at least 6 months)",
          "Recent passport-sized photo (white background)",
          "Confirmed travel itinerary or hotel booking",
          "Valid email address",
          "Credit/Debit card for payment",
        ],
        downloads: [
          {
            label: "Image Guidelines – Photo Specifications",
            href: "/docs/azerbaijan-photo-guidelines.pdf",
          },
        ],
      }}
      processingStages={[
        { title: "Register & fill form", desc: "Online portal" },
        { title: "Upload & pay", desc: "Secure payment" },
        { title: "Get decision", desc: "Email delivery" },
        { title: "Travel", desc: "Carry print/soft copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We guide you field-by-field" },
        { title: "Doc review", desc: "Fix issues before submission" },
        { title: "Submit & track", desc: "Stay updated" },
      ]}
      travelRulesItems={[
        { title: "Return ticket", content: "May be checked on arrival" },
        { title: "Sufficient funds", content: "You may be asked to show proof" },
      ]}
      faqs={[
        { q: "Can I extend my Azerbaijan e-Visa?", a: "No, extensions are not permitted. You must exit and reapply." },
        { q: "Is it a single entry visa?", a: "Yes, all Azerbaijan e-Visas are single entry." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/azerbaijan"
    />
  );
}
