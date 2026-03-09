"use client";

import {
  BriefcaseBusiness,
  Building2,
  Globe,
  HeartHandshake,
  CalendarRange,
  ListChecks,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function InternshipVisa() {
  return (
    <SubcategoryVisaPage
      title="Internship Visa"
      heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Industry experience",
        "Host-supervised training",
        "Career readiness",
      ]}

      introHeading="What is an Internship Visa"
      introText="An internship visa allows students and recent graduates to travel abroad and gain hands-on work experience with an approved company or organization.  
It is designed for short-term training programs that build professional skills, complement academic studies, and prepare individuals for future careers.  
These visas ensure that internships are conducted legally and within structured learning environments."

      introImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Students or recent graduates joining approved, supervised internships.",
        },
        {
          label: "Stay Duration",
          value: "Commonly 3–12 months (varies by country & program).",
        },
        {
          label: "Work Rights",
          value:
            "Limited to internship scope with the designated host; rules differ by country.",
        },
      ]}

      benefits={[
        {
          icon: <BriefcaseBusiness className="w-7 h-7" />,
          text: "Real-world experience aligned with your field of study",
        },
        {
          icon: <ListChecks className="w-7 h-7" />,
          text: "Structured training plan and defined learning outcomes",
        },
        {
          icon: <CalendarRange className="w-7 h-7" />,
          text: "Short-term, goal-oriented placements that fit academic timelines",
        },
        {
          icon: <Building2 className="w-7 h-7" />,
          text: "Access to reputable host companies and institutions",
        },
        {
          icon: <HeartHandshake className="w-7 h-7" />,
          text: "Mentorship, references, and professional networking",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "International exposure and cross-cultural teamwork",
        },
      ]}

      
      destinations={[
  { name: "United States (J-1 Internship / Trainee Visa)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Germany", url: "https://flagcdn.com/w320/de.png" },
  { name: "France", url: "https://flagcdn.com/w320/fr.png" },
  { name: "United Kingdom (UK)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Canada", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia", url: "https://flagcdn.com/w320/au.png" },
  { name: "Netherlands", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Japan", url: "https://flagcdn.com/w320/jp.png" },
  { name: "Switzerland", url: "https://flagcdn.com/w320/ch.png" },
  { name: "Singapore", url: "https://flagcdn.com/w320/sg.png" },
]}

      ctaTitle="Need help with your Internship Visa?"
      ctaSubtitle="We’ll align you with a compliant host, training plan, and country-specific requirements."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
