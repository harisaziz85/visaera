"use client";

import {
  Globe,
  GraduationCap,
  HeartHandshake,
  University,
  BookOpen,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function StudentExchangeVisa() {
  return (
    <SubcategoryVisaPage
      title="Student Exchange Visa"
      heroImage="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Semester abroad",
        "Cultural immersion",
        "University partnerships",
      ]}
      introHeading="What is a Student Exchange Visa"
      introText="A student exchange visa allows enrolled students to study for a semester or an academic year at a partner university abroad while staying enrolled at their home institution.  
It promotes global learning, cultural exchange, and international academic cooperation through formal agreements between universities.  
Students can experience new cultures, improve language skills, and earn credits that count toward their degree."

      introImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
      quickFacts={[
        {
          label: "Who is it for",
          value: "University students nominated by their home institution.",
        },
        {
          label: "Stay Duration",
          value: "Typically one semester to one year.",
        },
        {
          label: "Work Rights",
          value: "Usually limited or restricted; depends on host country.",
        },
      ]}
      benefits={[
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Experience a new culture and global perspective",
        },
        {
          icon: <University className="w-7 h-7" />,
          text: "Study at an international partner university",
        },
        {
          icon: <GraduationCap className="w-7 h-7" />,
          text: "Earn transferable academic credits",
        },
        {
          icon: <HeartHandshake className="w-7 h-7" />,
          text: "Form lasting friendships and networks",
        },
        {
          icon: <BookOpen className="w-7 h-7" />,
          text: "Improve language skills and intercultural communication",
        },
      ]}
      destinations={[
  { name: "United States (USA)", url: "https://flagcdn.com/w320/us.png" },
  { name: "United Kingdom (UK)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Germany", url: "https://flagcdn.com/w320/de.png" },
  { name: "France", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Japan", url: "https://flagcdn.com/w320/jp.png" },
  { name: "Canada", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia", url: "https://flagcdn.com/w320/au.png" },
  { name: "New Zealand", url: "https://flagcdn.com/w320/nz.png" },
  { name: "Netherlands", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Sweden", url: "https://flagcdn.com/w320/se.png" },
  { name: "South Korea", url: "https://flagcdn.com/w320/kr.png" },
  { name: "Spain", url: "https://flagcdn.com/w320/es.png" },
  { name: "Italy", url: "https://flagcdn.com/w320/it.png" },
  { name: "Finland", url: "https://flagcdn.com/w320/fi.png" },
  { name: "Singapore", url: "https://flagcdn.com/w320/sg.png" },
]}
      ctaTitle="Need help with your Student Exchange Visa?"
      ctaSubtitle="Get detailed guidance on exchange requirements, partner institutions, and country-specific rules."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
