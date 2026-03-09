import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function TanzaniaEVisa() {
  return (
    <EVisaCountryPage
      country="Tanzania"
      title="Apply Tanzania E-Visa"
      flag="https://flagcdn.com/w320/tz.png"
      heroImage="https://images.unsplash.com/photo-1589177900326-900782f88a55?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGFuemFuaWF8ZW58MHwwfDB8fHww"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 90 days (tourist)" },
          { label: "Validity", value: "90 days (enter within validity)" },
          { label: "Processing", value: "3–10 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist e-Visa", who: "Leisure travel, family visit" },
          { name: "Business e-Visa", who: "Meetings, short-term assignments" },
          { name: "Transit e-Visa", who: "Up to 7 days while transiting" },
          { name: "Multiple-Entry (special)", who: "Frequent travelers (subject to eligibility)" },
        ],
      }}
      documents={{
        required: [
          "Passport bio page (6+ months validity, 2+ blank pages)",
          "Recent passport photo (white background)",
          "Itinerary or hotel booking",
          "Return/onward ticket",
          "Email address",
          "Card for payment",
          "Invitation letter (Business only, if applicable)",
          "Yellow fever certificate (if arriving from/transiting through risk countries)",
        ],
        downloads: [
          { label: "Image Guidelines – Photo Specifications", href: "/docs/tanzania-photo-guidelines.pdf" },
        ],
      }}
      processingStages={[
        { title: "Register & fill form", desc: "Provide trip + personal details" },
        { title: "Upload & pay", desc: "Secure online payment" },
        { title: "Get decision", desc: "E-Visa sent by email (PDF)" },
        { title: "Travel", desc: "Carry print or digital copy for arrival" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We guide every field to avoid errors" },
        { title: "Doc review", desc: "Compliance checks & corrections" },
        { title: "Submit & track", desc: "Status updates until issued" },
      ]}
      travelRulesItems={[
        { title: "Yellow fever", content: "Certificate may be required if coming from risk areas" },
        { title: "Overstay penalties", content: "Fines or removal; extensions must be approved in country" },
        { title: "Work not permitted", content: "Employment requires separate permits/visas" },
      ]}
      faqs={[
        {
          q: "Is the e-Visa single entry?",
          a: "Tourist and Business e-Visas are usually single entry. A multiple-entry option exists for eligible applicants.",
        },
        {
          q: "Can I extend my stay?",
          a: "Extensions may be possible at local immigration offices before expiry (officer’s discretion).",
        },
        {
          q: "How long does processing take?",
          a: "Typical processing is 3–10 business days; apply early during peak seasons.",
        },
        {
          q: "Do I need a yellow fever certificate?",
          a: "Only if arriving from/transiting through countries with risk of yellow fever transmission.",
        },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/tanzania"
    />
  );
}
