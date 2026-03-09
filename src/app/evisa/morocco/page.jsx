import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function MoroccoEVisa() {
  return (
    <EVisaCountryPage
      country="Morocco"
      title="Apply Morocco E-Visa"
      flag="https://flagcdn.com/w320/ma.png"
      heroImage="https://images.unsplash.com/photo-1519594445471-0e5f86b3fb09?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vcm9jY298ZW58MHwwfDB8fHww"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 30 days (e-Visa)" },
          { label: "Validity", value: "Up to 180 days (enter within validity)" },
          { label: "Processing", value: "Typically 1–3 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist e-Visa", who: "Leisure travel for eligible nationalities" },
          { name: "Business e-Visa", who: "Meetings, events, short business visits" },
          // Transit visas exist, but usually not via e-Visa. Handle case-by-case if needed.
        ],
      }}
      documents={{
        required: [
          "Passport bio page (6+ months validity from entry)",
          "Recent passport photo (plain background)",
          "Return/onward ticket",
          "Hotel booking or host/invitation details",
          "Email address",
          "Card for payment",
          "Business invitation (Business e-Visa, if applicable)",
        ],
        downloads: [
          { label: "Image Guidelines – Photo Specifications", href: "/docs/morocco-photo-guidelines.pdf" },
        ],
      }}
      processingStages={[
        { title: "Register & fill form", desc: "Provide personal and trip details" },
        { title: "Upload & pay", desc: "Secure online payment" },
        { title: "Get decision", desc: "e-Visa (PDF) emailed to you" },
        { title: "Travel", desc: "Carry print/digital copy for arrival" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We guide each step to reduce errors" },
        { title: "Doc review", desc: "We check compliance before submission" },
        { title: "Submit & track", desc: "Get status updates until issued" },
      ]}
      travelRulesItems={[
        { title: "Visa-exempt nationals", content: "Many nationalities are visa-exempt for stays up to 90 days—check eligibility before applying." },
        { title: "Passport validity", content: "Ensure at least 6 months’ validity from the date of entry." },
        { title: "No employment", content: "Work requires separate authorization/permits." },
        { title: "Overstay penalties", content: "Fines or exit issues may apply—extend in-country only if allowed." },
      ]}
      faqs={[
        {
          q: "Is the Morocco e-Visa single entry?",
          a: "Standard e-Visas are typically single-entry. Multiple-entry options may be limited; confirm eligibility before applying.",
        },
        {
          q: "How long does processing take?",
          a: "Most applications are processed within 1–3 working days, but times can vary—apply in advance.",
        },
        {
          q: "Who can apply for an e-Visa?",
          a: "Eligible nationalities designated by Moroccan authorities. Others may be visa-exempt or require embassy/consulate visas.",
        },
        {
          q: "Do I need a yellow fever certificate?",
          a: "Not required for Morocco in general. If you’re arriving from a yellow-fever risk area, carry standard health documentation.",
        },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/morocco"
    />
  );
}
