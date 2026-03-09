
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function ThailandEVisa() {
  return (
    <EVisaCountryPage
      country="Thailand"
      title="Apply Thailand E-Visa"
      flag="https://flagcdn.com/w320/th.png"
      heroImage="https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Tourist (TR): up to 60 days (extendable +30)" },
          { label: "Validity", value: "TR single entry: 3 months to enter" },
          { label: "Processing", value: "≈ 3–10 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist Visa (TR)", who: "Leisure travel (single/multiple entry)" },
          { name: "e-VOA", who: "Selected nationalities, up to 15 days stay" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Recent photo",
          "Travel bookings & proof of funds",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Photo Specs – Thailand", href: "/docs/thailand-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Apply online", desc: "Official Thai e-Visa portal" },
        { title: "Upload & pay", desc: "Secure payment" },
        { title: "Approval", desc: "Visa emailed" },
        { title: "Travel", desc: "Carry print/soft copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We pick TR vs e-VOA" },
        { title: "Doc review", desc: "Avoid rejections" },
        { title: "Submit & track", desc: "Status updates" },
      ]}
      travelRulesItems={[
        { title: "Extensions", content: "Tourist stay can often extend +30 days at immigration" },
        { title: "Policy changes", content: "Length of stay/visa-free lists updated periodically—check latest before travel" },
      ]}
      faqs={[
        { q: "Is TR extendable?", a: "Yes, typically once for +30 days (max 90 per entry)." },
        { q: "Do I need e-VOA?", a: "Only if eligible/required; many are visa-exempt or use TR." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/thailand"
    />
  );
}
