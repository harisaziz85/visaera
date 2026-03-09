import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function SriLankaETA() {
  return (
    <EVisaCountryPage
      country="Sri Lanka"
      title="Apply Sri Lanka ETA"
      flag="https://flagcdn.com/w320/lk.png"
      heroImage="https://images.unsplash.com/photo-1541394995283-1c41007f098c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNyaWxhbmthfGVufDB8MHwwfHx8MA%3D%3D"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "30 days (double entry; extendable)" },
          { label: "Validity", value: "ETA valid 6 months from issue (enter within)" },
          { label: "Processing", value: "≈ 24h to 3 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "ETA – Tourist", who: "Leisure & family visits" },
          { name: "ETA – Business", who: "Meetings & events" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Recent photo",
          "Return/onward ticket & hotel booking",
          "Sufficient funds (if asked)",
          "Card for payment",
        ],
        downloads: [{ label: "Photo Specs – Sri Lanka", href: "/docs/sri-lanka-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Apply online", desc: "Official ETA portal" },
        { title: "Pay & receive", desc: "Approval email" },
        { title: "Travel", desc: "ETA verified on arrival" },
        { title: "Extend (optional)", desc: "Up to 6 months total stay" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We confirm category" },
        { title: "Doc review", desc: "Fix issues" },
        { title: "Submit & track", desc: "Email updates" },
      ]}
      travelRulesItems={[
        { title: "Double entry", content: "Tourist ETA allows two entries within validity" },
        { title: "On-arrival backup", content: "Limited ETA facility at airport (extra fees)" },
      ]}
      faqs={[
        { q: "Can I extend?", a: "Yes—tourist stays can extend in Sri Lanka (fees apply)." },
        { q: "How long is ETA valid?", a: "Six months from issue to enter." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/sri-lanka"
    />
  );
}
