"use client";

import {
  Clock,
  Calendar,
  Zap,
  CheckCircle,
  MapPin,
  Users,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function HajjCV() {
  return (
    <SubcategoryVisaPage
      title="Hajj CV (Short Hajj)"
      heroImage="https://images.unsplash.com/photo-1605553378313-22d0dc541393?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
      heroChips={[
        "Shorter duration",
        "Essential rituals",
        "Time-efficient",
      ]}

      introHeading="What is Hajj CV (Short Hajj)"
      introText="Hajj CV (Compact Visit) is a shorter Hajj package designed for pilgrims with limited time, typically lasting 10-14 days instead of the traditional 3-4 weeks.  
It covers all mandatory Hajj rituals but with a streamlined schedule, minimizing extra days before and after the core pilgrimage dates.  
Ideal for working professionals or those who cannot take extended leave but want to fulfill their religious obligation."

      introImage="https://images.unsplash.com/photo-1590108589108-3600131de843?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2124"

      quickFacts={[
        { label: "Who is it for", value: "Pilgrims with limited time seeking efficient Hajj completion." },
        { label: "Duration", value: "Typically 10-14 days covering all essential rituals." },
        { label: "Schedule", value: "Focused on core Hajj days with minimal extra stay." },
      ]}

      benefits={[
        { icon: <Clock className="w-7 h-7" />, text: "Complete Hajj in shorter timeframe" },
        { icon: <CheckCircle className="w-7 h-7" />, text: "All mandatory rituals covered properly" },
        { icon: <Zap className="w-7 h-7" />, text: "Efficient schedule without unnecessary waiting" },
        { icon: <Calendar className="w-7 h-7" />, text: "Perfect for working professionals" },
        { icon: <MapPin className="w-7 h-7" />, text: "Strategic accommodation near holy sites" },
        { icon: <Users className="w-7 h-7" />, text: "Organized group with experienced guides" },
      ]}

      destinations={[
        { name: "Saudi Arabia (Makkah)", url: "https://flagcdn.com/w320/sa.png" },
      ]}

      ctaTitle="Book your Short Hajj Package"
      ctaSubtitle="Complete your Hajj obligation efficiently with our time-optimized package."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}