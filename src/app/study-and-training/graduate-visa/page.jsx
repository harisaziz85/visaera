"use client";

import {
  GraduationCap,
  BriefcaseBusiness,
  Globe,
  TrendingUp,
  Award,
  HeartHandshake,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function GraduateVisa() {
  return (
    <SubcategoryVisaPage
      title="Graduate Visa"
      heroImage="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Post-study work rights",
        "Pathways to residency",
        "Employer sponsorship",
      ]}

      introHeading="What is a Graduate Visa"
      introText="A graduate visa allows international students to stay and work in the country after completing their studies.  
It gives graduates the opportunity to gain professional experience, find skilled employment, and explore pathways toward permanent residence or long-term visas.  
This visa is ideal for students who want to start their careers where they studied and apply their academic knowledge in real-world settings."
      introImage="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"

      quickFacts={[
        {
          label: "Who is it for",
          value: "International graduates of eligible programs at approved institutions.",
        },
        {
          label: "Stay Duration",
          value:
            "Commonly 1–3 years depending on country, level of study, and location.",
        },
        {
          label: "Work Rights",
          value: "Generally full-time, with potential routes to sponsorship/residency.",
        },
      ]}

      benefits={[
        {
          icon: <BriefcaseBusiness className="w-7 h-7" />,
          text: "Gain local, post-study work experience in your field",
        },
        {
          icon: <TrendingUp className="w-7 h-7" />,
          text: "Improve eligibility for skilled migration or sponsorship",
        },
        {
          icon: <Award className="w-7 h-7" />,
          text: "Leverage your qualification from a recognized institution",
        },
        {
          icon: <GraduationCap className="w-7 h-7" />,
          text: "Bridge from study to long-term career pathways",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Join international talent pools in high-demand sectors",
        },
        {
          icon: <HeartHandshake className="w-7 h-7" />,
          text: "Unlock employer sponsorship and professional networks",
        },
      ]}

      
      destinations={[
  { name: "Canada", url: "https://flagcdn.com/w320/ca.png" },            
  { name: "Australia", url: "https://flagcdn.com/w320/au.png" },         
  { name: "United Kingdom (UK)", url: "https://flagcdn.com/w320/gb.png" }, 
  { name: "New Zealand", url: "https://flagcdn.com/w320/nz.png" },         
  { name: "Ireland", url: "https://flagcdn.com/w320/ie.png" },             
  { name: "Germany", url: "https://flagcdn.com/w320/de.png" },             
  { name: "France", url: "https://flagcdn.com/w320/fr.png" },              
  { name: "Netherlands", url: "https://flagcdn.com/w320/nl.png" },         
  { name: "Sweden", url: "https://flagcdn.com/w320/se.png" },              
  { name: "Finland", url: "https://flagcdn.com/w320/fi.png" },            
  { name: "Denmark", url: "https://flagcdn.com/w320/dk.png" },             
  { name: "Norway", url: "https://flagcdn.com/w320/no.png" },             
  { name: "Singapore", url: "https://flagcdn.com/w320/sg.png" },         
  { name: "Japan", url: "https://flagcdn.com/w320/jp.png" },           
  { name: "South Korea", url: "https://flagcdn.com/w320/kr.png" },       
  { name: "Switzerland", url: "https://flagcdn.com/w320/ch.png" },        
]}

      ctaTitle="Need help with your Graduate Visa?"
      ctaSubtitle="We’ll confirm eligibility, map your timelines, and build a country-specific document plan."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
