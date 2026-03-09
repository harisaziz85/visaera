import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function MalaysiaEVisa() {
  return (
    <EVisaCountryPage
      country="Malaysia"
      title="Apply Malaysia eVisa"
      flag="https://flagcdn.com/w320/my.png"
      heroImage="https://images.unsplash.com/photo-1602427384420-71c70e2b2a2f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGF5c2lhfGVufDB8fDB8fHww"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 30 days per entry" },
          { label: "Validity", value: "Typically 90 days to enter (by visa type)" },
          { label: "Processing", value: "≈ 3–5 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "Tourist eVisa", who: "Leisure travel (single/multiple entry by type)" },
          { name: "Business eVisa", who: "Meetings & events" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Recent passport-sized photo",
          "Return/onward ticket & hotel booking",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/malaysia-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Apply online", desc: "Official MYVISA portal" },
        { title: "Upload & pay", desc: "Secure payment" },
        { title: "Approval", desc: "eVisa via email" },
        { title: "Travel", desc: "Print or keep soft copy" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We choose correct eVisa type" },
        { title: "Doc review", desc: "Fix issues pre-submission" },
        { title: "Submit & track", desc: "Email updates" },
      ]}
      travelRulesItems={[
        { title: "MDAC", content: "Most foreign visitors must submit Malaysia Digital Arrival Card within 3 days before arrival" },
        { title: "Per-entry stay", content: "30 days per entry on many visitor visas" },
      ]}
      faqs={[
        { q: "Is MDAC a visa?", a: "No. It’s a free pre-arrival card; visa rules still apply if required." },
        { q: "How early to apply?", a: "Apply at least a week before travel; processing usually 3–5 working days." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/malaysia"
    />
  );
}
