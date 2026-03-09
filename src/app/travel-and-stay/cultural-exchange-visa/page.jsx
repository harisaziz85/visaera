"use client";

import {
  Globe,
  HeartHandshake,
  Languages,
  GraduationCap,
  Music,
  Users,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function CulturalExchangeVisa() {
  return (
    <SubcategoryVisaPage
      title="Cultural Exchange Visa"
      heroImage="https://images.unsplash.com/photo-1717412059783-e58bf305db38?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGN1bHR1cmFsJTIwcHJvZ3JhbXN8ZW58MHwwfDB8fHww"
      heroChips={[
        "Cultural immersion",
        "Educational exchange",
        "Global cooperation",
      ]}
      introHeading="What is a Cultural Exchange Visa"
      introText="A cultural exchange visa allows individuals to travel abroad and take part in approved cultural, educational, or training programs.  
These visas are usually sponsored by government organizations, educational institutions, or cultural bodies.  
The goal is to promote mutual understanding, international cooperation, and cultural exchange between countries."
      introImage="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop"
      quickFacts={[
        { label: "Who is it for", value: "Participants in official cultural, academic, or training exchange programs." },
        { label: "Stay Duration", value: "Program-based, usually 3 months to 2 years." },
        { label: "Work Rights", value: "Limited to program activities; part-time work sometimes allowed." },
      ]}
      benefits={[
        { icon: <Globe className="w-7 h-7" />, text: "Cultural immersion and global exposure" },
        { icon: <Languages className="w-7 h-7" />, text: "Language learning and skill exchange" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Promotes international cooperation and understanding" },
        { icon: <GraduationCap className="w-7 h-7" />, text: "Educational and training opportunities" },
        { icon: <Music className="w-7 h-7" />, text: "Participation in cultural, art, and music programs" },
        { icon: <Users className="w-7 h-7" />, text: "Build lifelong global networks" },
      ]}
      destinations={[
  { name: "United States (J-1 Exchange Program)", url: "https://flagcdn.com/w320/us.png" },
  { name: "United Kingdom (Youth Mobility & Cultural Exchange)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Germany", url: "https://flagcdn.com/w320/de.png" },
  { name: "Japan", url: "https://flagcdn.com/w320/jp.png" },
  { name: "South Korea", url: "https://flagcdn.com/w320/kr.png" },
  { name: "France", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Canada", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia", url: "https://flagcdn.com/w320/au.png" },
  { name: "New Zealand", url: "https://flagcdn.com/w320/nz.png" },
]}
      ctaTitle="Need help with your Cultural Exchange Visa?"
      ctaSubtitle="We’ll help with sponsor selection, program enrollment, and visa documentation for your chosen destination."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
