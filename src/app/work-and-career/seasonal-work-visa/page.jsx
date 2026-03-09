// app/work-and-oriented/seasonal-work-visa/page.jsx
"use client";

import {
  Leaf,
  Utensils,
  Plane,
  Sun,
  Calendar,
  Briefcase,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function SeasonalWorkVisa() {
  return (
    <SubCategoryVisaPage
      title="Seasonal Work Visa"
      heroImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop"
      heroChips={["Agriculture", "Tourism", "Hospitality", "Temporary work"]}

      introHeading="What is a Seasonal Work Visa"
      introText="A Seasonal Work Visa permits foreign workers to take up short-term employment in sectors with temporary labor demand, such as agriculture, hospitality, and tourism. These visas typically align with harvest cycles or peak tourist seasons and are strictly time-bound without offering long-term residency."
      introImage="https://images.unsplash.com/photo-1495725274072-fd5d0b961a9f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFib3J8ZW58MHwyfDB8fHww"

      quickFacts={[
        { label: "Who is it for", value: "Workers filling temporary roles in agriculture, hospitality, and tourism." },
        { label: "Stay Duration", value: "Varies by country; usually 3–9 months tied to season." },
        { label: "Work Rights", value: "Employment limited to approved seasonal sectors/employers." },
      ]}

      benefits={[
        { icon: <Leaf className="w-7 h-7" />, text: "Legal right to work seasonally abroad" },
        { icon: <Utensils className="w-7 h-7" />, text: "Opportunities in agriculture & hospitality" },
        { icon: <Sun className="w-7 h-7" />, text: "Live abroad during peak work seasons" },
        { icon: <Calendar className="w-7 h-7" />, text: "Defined, short-term visa period" },
        { icon: <Briefcase className="w-7 h-7" />, text: "Gain international work experience" },
        { icon: <Plane className="w-7 h-7" />, text: "Pathways to return for multiple seasons" },
      ]}

      destinations={[
  { name: "United States (H-2B / H-2A Seasonal Worker Visa)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Canada (Seasonal Agricultural Worker Program - SAWP)", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia (Seasonal Worker & Pacific Labour Scheme)", url: "https://flagcdn.com/w320/au.png" },
  { name: "New Zealand (Recognised Seasonal Employer Scheme - RSE)", url: "https://flagcdn.com/w320/nz.png" },
  { name: "European Union (Italy, Spain, Germany - Seasonal Work Permits)", url: "https://flagcdn.com/w320/eu.png" },
  { name: "France (Temporary Agricultural & Tourism Work Visa)", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Portugal (Temporary Work Visa for Seasonal Employment)", url: "https://flagcdn.com/w320/pt.png" },
  { name: "Poland (Seasonal Work Visa / Type D)", url: "https://flagcdn.com/w320/pl.png" },
  { name: "Greece (Seasonal Agricultural Work Visa)", url: "https://flagcdn.com/w320/gr.png" },
  { name: "Norway (Seasonal Work Residence Permit)", url: "https://flagcdn.com/w320/no.png" },
  { name: "Sweden (Temporary Work Permit for Seasonal Jobs)", url: "https://flagcdn.com/w320/se.png" },
  { name: "Finland (Seasonal Work Visa - Agriculture & Forestry)", url: "https://flagcdn.com/w320/fi.png" },
  { name: "United Kingdom (Seasonal Worker Visa - Agriculture & Horticulture)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Spain (Temporary Employment Visa - Agriculture & Hospitality)", url: "https://flagcdn.com/w320/es.png" },
  { name: "Italy (Decreto Flussi - Seasonal Work Permit)", url: "https://flagcdn.com/w320/it.png" },
]}


      programNotes={[
        {
          country: "USA",
          note:
            "H-2B visa allows temporary non-agricultural seasonal workers (hospitality, landscaping, etc.). H-2A is specific to agriculture.",
        },
        {
          country: "Canada",
          note:
            "Seasonal Agricultural Worker Program (SAWP) allows workers from partner countries to work up to 8 months in farming/harvesting.",
        },
        {
          country: "Australia",
          note:
            "Pacific Australia Labour Mobility (PALM) scheme permits temporary seasonal work in agriculture & hospitality, up to 9 months.",
        },
        {
          country: "New Zealand",
          note:
            "Recognised Seasonal Employer (RSE) scheme allows up to 7 months work in horticulture & viticulture.",
        },
        {
          country: "European Union",
          note:
            "EU Seasonal Workers Directive allows non-EU nationals to work up to 9 months per year in agriculture & tourism sectors.",
        },
      ]}

      ctaTitle="Looking for a Seasonal Work Visa?"
      ctaSubtitle="We’ll help you navigate official programs and secure seasonal job offers."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
