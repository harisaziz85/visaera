
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function IndonesiaEVOA() {
  return (
    <EVisaCountryPage
      country="Indonesia"
      title="Apply Indonesia e-VOA / e-Visa"
      flag= "https://flagcdn.com/w320/id.png"
      heroImage="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb25lc2lhfGVufDB8fDB8fHww"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "30 days (extendable once to 60 days)" },
          { label: "Validity", value: "Use within 90 days of issue" },
          { label: "Processing", value: "Often minutes–48h for e-VOA" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "e-VOA (Tourism/Business meetings)", who: "Short stays; single entry" },
          { name: "Visitor e-Visa (C1/C2 etc.)", who: "Longer/other purposes" },
        ],
      }}
      documents={{
        required: [
          "Passport (6+ months validity)",
          "Recent digital photo",
          "Return/onward ticket & hotel booking",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Photo Specs – Indonesia", href: "/docs/indonesia-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Apply online", desc: "Official Immigration portal" },
        { title: "Pay & receive", desc: "e-VOA/e-Visa emailed" },
        { title: "Extend (optional)", desc: "One-time 30-day extension" },
        { title: "Travel", desc: "Show QR/e-Visa on arrival" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We confirm right category" },
        { title: "Doc review", desc: "Avoid refusals" },
        { title: "Submit & track", desc: "Fast updates" },
      ]}
      travelRulesItems={[
        { title: "All-Indonesia card", content: "New unified declaration introduced—complete online before arrival (rollout by airport)" },
        { title: "Extension", content: "e-VOA extendable once for +30 days at immigration" },
      ]}
      faqs={[
        { q: "Can I extend e-VOA?", a: "Yes, once for an additional 30 days (total 60)." },
        { q: "When should I apply?", a: "Preferably ≥48 hours before departure; must be used within 90 days of issue." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/indonesia"
    />
  );
}
