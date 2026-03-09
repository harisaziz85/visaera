// 1. HAJJ VISA 2026
"use client";

import {
  Plane,
  Hotel,
  MapPin,
  Calendar,
  Users,
  Shield,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function HajjVisa2026() {
  return (
    <SubcategoryVisaPage
      title="Hajj Visa 2026"
      heroImage="https://images.unsplash.com/photo-1602733458155-647c07d32ef6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      heroChips={[
        "Official quota allocation",
        "Complete travel package",
        "Guided pilgrimage",
      ]}

      introHeading="What is a Hajj Visa 2026"
      introText="The Hajj Visa is a special religious visa issued by the Kingdom of Saudi Arabia for Muslims performing the annual Hajj pilgrimage in Makkah.  
For 2026, pilgrims must apply through authorized Hajj operators who handle visa processing, accommodation, and transportation within Saudi Arabia.  
The visa is valid only during the Hajj season and includes entry to holy sites in Makkah and Medina."

      introImage="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1200&auto=format&fit=crop&q=60"

      quickFacts={[
        { label: "Who is it for", value: "Muslim pilgrims performing Hajj through authorized operators." },
        { label: "Stay Duration", value: "Typically 2-4 weeks during Hajj season (June 2026)." },
        { label: "Validity", value: "Single entry, valid only for Hajj dates with group departure." },
      ]}

      benefits={[
        { icon: <Shield className="w-7 h-7" />, text: "Official Saudi government-approved visa" },
        { icon: <Hotel className="w-7 h-7" />, text: "Pre-arranged accommodation near holy sites" },
        { icon: <Users className="w-7 h-7" />, text: "Experienced guides and group support" },
        { icon: <Plane className="w-7 h-7" />, text: "Complete travel package with flights included" },
        { icon: <MapPin className="w-7 h-7" />, text: "Transportation between Makkah, Mina, Arafat & Medina" },
        { icon: <Calendar className="w-7 h-7" />, text: "Organized schedule for all Hajj rituals" },
      ]}

      destinations={[
        { name: "Saudi Arabia (Makkah)", url: "https://flagcdn.com/w320/sa.png" },
      ]}

      ctaTitle="Ready to apply for Hajj 2026?"
      ctaSubtitle="We'll guide you through the application process, quota availability, and complete package booking."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
