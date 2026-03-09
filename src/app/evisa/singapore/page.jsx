
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function SingaporeVisa() {
  return (
    <EVisaCountryPage
      country="Singapore"
      title="Apply Singapore Entry Visa"
      flag="https://flagcdn.com/w320/sg.png"
      heroImage="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3JpJTIwbGFua2F8ZW58MHx8MHx8fDA%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Typically up to 30 days (at ICA discretion)" },
          { label: "Validity", value: "Visa validity varies; stay is set by e-Pass on arrival" },
          { label: "Processing", value: "≈ 3–5 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist Visa", who: "Leisure/short visits (for visa-required passports)" },
          { name: "Business Visa", who: "Meetings & events" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Recent digital photo",
          "Travel bookings / invitation (if applicable)",
          "SG Arrival Card submission",
          "Card for payment",
        ],
        downloads: [{ label: "Photo Specs – ICA", href: "/docs/singapore-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Check eligibility", desc: "Visa requirement + SG Arrival Card" },
        { title: "Apply & pay", desc: "Through ICA/authorized channels" },
        { title: "Decision", desc: "Visa/e-Visa issued" },
        { title: "Travel", desc: "e-Pass sets your stay on entry" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We confirm visa need & docs" },
        { title: "Doc review", desc: "Avoid delays" },
        { title: "Submit & track", desc: "Status updates" },
      ]}
      travelRulesItems={[
        { title: "SG Arrival Card", content: "Submit within 3 days before arrival (mandatory, not a visa)" },
        { title: "Stay period", content: "Length of stay is determined by ICA on arrival" },
      ]}
      faqs={[
        { q: "When to apply?", a: "Within 30 days before arrival; processing generally 3–5 working days." },
        { q: "Is SGAC enough?", a: "No—SGAC is required for all travelers but is not a visa." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/singapore"
    />
  );
}
