
import EVisaCountryPage from "@/components/EVisaCountryPage";
import Image from "next/image";

export default function AustraliaEvisa() {
  return (
    <EVisaCountryPage
      country="Australia"
      title="Apply Australia E-Visa"
      flag="https://flagcdn.com/w320/au.png"
      heroImage="https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333"
      ImageComponent={Image}
      quickFacts={{
        items: [
          { label: "Stay length", value: "Up to 90 days" },
          { label: "Validity", value: "90 days (enter within)" },
          { label: "Processing", value: "≈ 3 working days" },
        ],
      }}
      visaTypes={{
        items: [
          { name: "eTA – Tourism", who: "Leisure travel" },
          { name: "eTA – Business", who: "Meetings & events" },
        ],
      }}
      documents={{
        required: [
          "Passport bio page (6+ months validity)",
          "Recent passport photo",
          "Return/onward ticket & hotel booking",
          "Email address",
          "Card for payment",
        ],
        downloads: [{ label: "Image Guidelines – Photo Specifications", href: "/docs/Australia-photo-guidelines.pdf" }],
      }}
      processingStages={[
        { title: "Register & form", desc: "Official E-Visa portal" },
        { title: "Upload & pay", desc: "Secure checkout" },
        { title: "Decision", desc: "eTA via email" },
        { title: "Travel", desc: "Present E-Visa on arrival" },
      ]}
      howItWorksSteps={[
        { title: "Start", desc: "We guide step-by-step" },
        { title: "Doc review", desc: "Avoid rejections" },
        { title: "Submit & track", desc: "Email updates" },
      ]}
      travelRulesItems={[
        { title: "Single entry", content: "eTA is generally single entry" },
        { title: "Yellow fever (if applicable)", content: "Carry certificate if arriving from risk areas" },
      ]}
      faqs={[
        { q: "Is E-Visa a visa?", a: "It replaces visas for most travelers; authorization required before travel." },
        { q: "When to apply?", a: "At least 3 business days before departure." },
      ]}
      whatsappHref="https://wa.me/306973931683"
      ctaHref="/apply/Australia"
    />
  );
}
