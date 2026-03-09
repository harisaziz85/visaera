// 2. UMRAH VISA (INDIVIDUAL)
"use client";

import {
  User,
  Clock,
  Stamp,
  Calendar,
  Plane,
  Palmtree,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function UmrahVisaIndividual() {
  return (
    <SubcategoryVisaPage
      title="Umrah Visa (Individual)"
      heroImage="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1200&auto=format&fit=crop&q=60"
      heroChips={[
        "Flexible travel dates",
        "Independent pilgrimage",
        "90-day validity",
      ]}

      introHeading="What is an Individual Umrah Visa"
      introText="An individual Umrah visa allows Muslims to perform Umrah (the lesser pilgrimage) to Makkah and Medina at any time outside the Hajj season.  
Unlike group packages, this visa offers flexibility in travel dates, accommodation choices, and duration of stay.  
Pilgrims can apply online through the Nusuk platform or authorized travel agents and travel independently or with family."

      introImage="https://images.unsplash.com/photo-1602733458155-647c07d32ef6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"

      quickFacts={[
        { label: "Who is it for", value: "Muslim individuals or families traveling independently for Umrah." },
        { label: "Stay Duration", value: "Up to 90 days with multiple entry options available." },
        { label: "Application", value: "Online via Nusuk platform or through authorized agents." },
      ]}

      benefits={[
        { icon: <User className="w-7 h-7" />, text: "Complete freedom to plan your own itinerary" },
        { icon: <Calendar className="w-7 h-7" />, text: "Travel any time outside Hajj season" },
        { icon: <Clock className="w-7 h-7" />, text: "Flexible stay duration up to 90 days" },
        { icon: <Plane className="w-7 h-7" />, text: "Choose your own flights and accommodation" },
        { icon: <Stamp className="w-7 h-7" />, text: "Fast online application process" },
        { icon: <Palmtree className="w-7 h-7" />, text: "Option to explore other Saudi cities" },
      ]}

      destinations={[
        { name: "Saudi Arabia (Makkah & Medina)", url: "https://flagcdn.com/w320/sa.png" },
      ]}

      ctaTitle="Apply for your Individual Umrah Visa"
      ctaSubtitle="We'll help you complete the online application and provide guidance on travel planning."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}