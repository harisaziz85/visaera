"use client";

import { BriefcaseBusiness, Globe, GraduationCap, HeartHandshake, University } from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function StudyVisa() {


  return (
    <SubcategoryVisaPage
      title="Study Visa"
      heroImage="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2400&auto=format&fit=crop"
      heroChips={["Part-time work (varies)", "Post-study pathways", "Official guidance"]}

      introHeading="What is Study Visa"
     introText="A study visa allows international students to live and study abroad for the duration of their academic program.  
It is issued after securing admission to a recognized school, college, or university and permits students to pursue full-time education legally.  
Study visas also help students experience new cultures, access world-class education, and build global career opportunities."
      introImage="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop"

      quickFacts={[
        { label: "Who is it for", value: "International students admitted to recognized institutions." },
        { label: "Stay Duration", value: "Typically matches program length (extensions possible)." },
        { label: "Work Rights", value: "Often limited part-time during study (check official rules)." },
      ]}

      benefits={[
        { icon: <GraduationCap className="w-7 h-7" />, text: "Legal right to live and study" },
        { icon: <University className="w-7 h-7" />, text: "Access to top universities & resources" },
        { icon: <BriefcaseBusiness className="w-7 h-7" />, text: "Part-time work (country specific)" },
        { icon: <Globe className="w-7 h-7" />, text: "Post-study work/residency routes" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Networking & cultural exchange" },
        { icon: <GraduationCap className="w-7 h-7" />, text: "Career growth & global exposure" },
      ]}

      destinations={[
  { name: "United Kingdom (UK)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Canada", url: "https://flagcdn.com/w320/ca.png" },
  { name: "United States (USA)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Australia", url: "https://flagcdn.com/w320/au.png" },
  { name: "Germany", url: "https://flagcdn.com/w320/de.png" },
  { name: "United Arab Emirates (UAE)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "France", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Netherlands", url: "https://flagcdn.com/w320/nl.png" },
  { name: "New Zealand", url: "https://flagcdn.com/w320/nz.png" },
  { name: "Sweden", url: "https://flagcdn.com/w320/se.png" },
  { name: "Ireland", url: "https://flagcdn.com/w320/ie.png" },
  { name: "Singapore", url: "https://flagcdn.com/w320/sg.png" },
  { name: "Japan", url: "https://flagcdn.com/w320/jp.png" },
  { name: "South Korea", url: "https://flagcdn.com/w320/kr.png" },
  { name: "Italy", url: "https://flagcdn.com/w320/it.png" },
]}

      ctaTitle="Need Help with you Study Visa?"
      ctaSubtitle="Get a document checklist review and application guidance."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
