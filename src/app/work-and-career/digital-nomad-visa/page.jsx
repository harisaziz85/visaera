// app/work-and-oriented/digital-nomad-visa/page.jsx
"use client";

import {
  Laptop,
  Globe,
  Plane,
  Home,
  Wallet,
  Sun,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function DigitalNomadVisa() {
  return (
    <SubCategoryVisaPage
      title="Digital Nomad Visa"
      heroImage="https://images.unsplash.com/photo-1596457596405-2c3ea4502d67?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjBub21hZHxlbnwwfDB8MHx8fDA%3D"
      heroChips={["Remote work abroad", "Flexible lifestyle", "Global residency"]}

      introHeading="What is a Digital Nomad Visa"
      introText="A Digital Nomad Visa lets remote professionals live legally in another country while continuing to work for foreign employers or clients. Programs usually require proof of income, remote work status, and health insurance, offering a pathway to enjoy cultural immersion while maintaining global careers."
      introImage="https://images.unsplash.com/photo-1649061358901-8a28b9237c69?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG5vbWFkfGVufDB8MnwwfHx8MA%3D%3D"

      quickFacts={[
        { label: "Who is it for", value: "Remote workers, freelancers, and entrepreneurs." },
        { label: "Stay Duration", value: "Typically 6–24 months, with extensions in some countries." },
        { label: "Income Requirement", value: "Proof of stable remote income (varies by country)." },
      ]}

      benefits={[
        { icon: <Laptop className="w-7 h-7" />, text: "Work remotely while residing abroad" },
        { icon: <Globe className="w-7 h-7" />, text: "Live in vibrant global destinations" },
        { icon: <Wallet className="w-7 h-7" />, text: "Often tax benefits or simplified regimes" },
        { icon: <Plane className="w-7 h-7" />, text: "Flexible travel & relocation options" },
        { icon: <Home className="w-7 h-7" />, text: "Legal residency without local employer" },
        { icon: <Sun className="w-7 h-7" />, text: "Balanced lifestyle in scenic locations" },
      ]}

      destinations={[
  { name: "Estonia (Digital Nomad Visa)", url: "https://flagcdn.com/w320/ee.png" },
  { name: "Portugal (Digital Nomad / D8 Visa)", url: "https://flagcdn.com/w320/pt.png" },
  { name: "Spain (Digital Nomad Visa - Startup Law)", url: "https://flagcdn.com/w320/es.png" },
  { name: "Croatia (Digital Nomad Residence Permit)", url: "https://flagcdn.com/w320/hr.png" },
  { name: "Greece (Digital Nomad Visa)", url: "https://flagcdn.com/w320/gr.png" },
  { name: "Germany (Freelancer / Self-Employment Visa)", url: "https://flagcdn.com/w320/de.png" },
  { name: "Italy (Digital Nomad Visa)", url: "https://flagcdn.com/w320/it.png" },
  { name: "Malta (Nomad Residence Permit)", url: "https://flagcdn.com/w320/mt.png" },
  { name: "Iceland (Remote Work Visa)", url: "https://flagcdn.com/w320/is.png" },
  { name: "Norway (Independent Contractor Visa)", url: "https://flagcdn.com/w320/no.png" },
  { name: "United Arab Emirates (UAE Remote Work Visa)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "Costa Rica (Digital Nomad Visa - Stay Work Abroad Program)", url: "https://flagcdn.com/w320/cr.png" },
  { name: "Barbados (12-Month Welcome Stamp)", url: "https://flagcdn.com/w320/bb.png" },
  { name: "Mauritius (Premium Travel Visa)", url: "https://flagcdn.com/w320/mu.png" },
  { name: "Mexico (Temporary Resident Visa for Remote Workers)", url: "https://flagcdn.com/w320/mx.png" },
  { name: "Thailand (Long-Term Resident Visa - Digital Nomad Category)", url: "https://flagcdn.com/w320/th.png" },
]}


      programNotes={[
        {
          country: "Estonia",
          note:
            "The first official Digital Nomad Visa (2020). Allows up to 12 months stay for remote workers earning from non-Estonian employers/clients.",
        },
        {
          country: "Portugal",
          note:
            "Digital Nomad Visa requires €3,040 monthly income (2024). Grants 1-year stay, extendable, with pathway to D7 residency.",
        },
        {
          country: "Spain",
          note:
            "Launched in 2023. Requires remote work contract + proof of income (~€2,500/month). Includes tax incentives for 5 years.",
        },
        {
          country: "Croatia",
          note:
            "1-year Digital Nomad Visa, non-renewable consecutively. Requires proof of €2,300/month income & health insurance.",
        },
        {
          country: "Greece",
          note:
            "Digital Nomad Visa valid for 1 year, renewable for 2. Requires ~€3,500 monthly income and remote work contract.",
        },
      ]}

      ctaTitle="Thinking about a Digital Nomad lifestyle?"
      ctaSubtitle="We’ll guide you through requirements, income proof, and application support."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
