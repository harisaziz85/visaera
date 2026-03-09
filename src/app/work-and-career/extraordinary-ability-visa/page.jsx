// app/work-and-oriented/extraordinary-work-visa/page.jsx
"use client";

import {
  Star,
  Award,
  Briefcase,
  Globe,
  Lightbulb,
  Users,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function ExtraordinaryWorkVisa() {
  return (
    <SubCategoryVisaPage
      title="Extraordinary Work Visa"
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Exceptional Talent",
        "Arts & Sciences",
        "Global Recognition",
      ]}
      
      introHeading="What is an Extraordinary Work Visa"
      introText="An Extraordinary Work Visa is a special category for individuals who demonstrate outstanding achievements or abilities in fields such as science, education, arts, athletics, or business. These visas are reserved for recognized experts who can make a significant impact in their host country."
      introImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"

      quickFacts={[
        { label: "Who is it for", value: "Highly talented individuals with proven international or national recognition." },
        { label: "Stay Duration", value: "Usually 1–3 years, renewable depending on country/program." },
        { label: "Work Rights", value: "Authorized employment in specialized fields, sometimes tied to specific employer or project." },
      ]}

      benefits={[
        { icon: <Star className="w-7 h-7" />, text: "Work abroad based on exceptional skills" },
        { icon: <Award className="w-7 h-7" />, text: "Recognition of global/national achievements" },
        { icon: <Briefcase className="w-7 h-7" />, text: "Opportunities in arts, sciences, business & sports" },
        { icon: <Lightbulb className="w-7 h-7" />, text: "Contribute to innovation and cultural exchange" },
        { icon: <Users className="w-7 h-7" />, text: "Networking with top institutions worldwide" },
        { icon: <Globe className="w-7 h-7" />, text: "Pathway to permanent residence in some countries" },
      ]}

      destinations={[
  { name: "United States (O-1 Extraordinary Ability Visa)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Canada (Global Talent Stream)", url: "https://flagcdn.com/w320/ca.png" },
  { name: "United Kingdom (Global Talent Visa)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Australia (Global Talent / Distinguished Talent Visa)", url: "https://flagcdn.com/w320/au.png" },
  { name: "European Union (EU Blue Card)", url: "https://flagcdn.com/w320/eu.png" },
  { name: "Germany (EU Blue Card for Highly Skilled Workers)", url: "https://flagcdn.com/w320/de.png" },
  { name: "France (Talent Passport - Highly Qualified)", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Portugal (Tech Visa / Highly Qualified Workers Visa)", url: "https://flagcdn.com/w320/pt.png" },
  { name: "Netherlands (Highly Skilled Migrant Visa)", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Sweden (Talent Visa for Skilled Professionals)", url: "https://flagcdn.com/w320/se.png" },
  { name: "Finland (Specialist Residence Permit)", url: "https://flagcdn.com/w320/fi.png" },
  { name: "Denmark (Pay Limit / Positive List Schemes)", url: "https://flagcdn.com/w320/dk.png" },
  { name: "Ireland (Critical Skills Employment Permit)", url: "https://flagcdn.com/w320/ie.png" },
  { name: "United Arab Emirates (Golden Visa for Exceptional Talent)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "Singapore (Tech.Pass for Global Experts)", url: "https://flagcdn.com/w320/sg.png" },
]}


      programNotes={[
        {
          country: "USA",
          note:
            "O-1 Visa for individuals with extraordinary ability in sciences, arts, education, business, or athletics, based on national/international recognition.",
        },
        {
          country: "Canada",
          note:
            "Global Talent Stream (part of Temporary Foreign Worker Program) expedites work permits for exceptional professionals in demand sectors.",
        },
        {
          country: "UK",
          note:
            "Global Talent Visa attracts leaders or potential leaders in academia, research, digital technology, and arts & culture.",
        },
        {
          country: "Australia",
          note:
            "Distinguished Talent Visa (subclass 858) for internationally recognized individuals in sports, arts, research, or academia.",
        },
        {
          country: "EU",
          note:
            "EU Blue Card available for highly qualified non-EU citizens; certain countries offer special schemes for exceptional talent.",
        },
      ]}

      ctaTitle="Do you qualify for an Extraordinary Work Visa?"
      ctaSubtitle="We guide talented professionals through the application process for global opportunities."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
