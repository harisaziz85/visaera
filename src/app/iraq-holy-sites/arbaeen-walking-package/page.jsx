"use client";

import {
  Footprints,
  Tent,
  Bus,
  Users,
  HeartHandshake,
  Calendar,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function Arbaeen2026WalkingPackage() {
  return (
    <SubcategoryVisaPage
      title="Arbaeen 2026 Walking Package (20 Safar)"
      heroImage="https://images.unsplash.com/photo-1718680951424-d3d9b21aa4bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      heroChips={[
        "Najaf to Karbala walk",
        "20 Safar 2026 start",
        "Mawkib support included",
      ]}

      introHeading="What is Arbaeen 2026 Walking Package"
      introText="Join millions in the world’s largest annual pilgrimage with our fully supported Arbaeen Walking Package starting 20 Safar 1448 (2026).  
Walk from Najaf to Karbala (80 km) over 3–4 days with rest stops, mawkibs, medical aid, and security.  
Includes visa, flights, pre-walk accommodation, and post-walk ziyarat in Karbala."

      introImage="https://images.unsplash.com/photo-1724674837133-7f67758099b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"

      quickFacts={[
        { label: "Start Date", value: "20 Safar 1448 (approx. Aug 2026)" },
        { label: "Walking Days", value: "3–4 days (Najaf → Karbala)" },
        { label: "Support", value: "Mawkibs, medical teams, luggage transfer, security." },
      ]}

      benefits={[
        { icon: <Footprints className="w-7 h-7" />, text: "Guided 80 km spiritual walk with pace groups" },
        { icon: <Tent className="w-7 h-7" />, text: "Rest tents every 3–5 km with food & water" },
        { icon: <Bus className="w-7 h-7" />, text: "Backup vehicles & luggage transport" },
        { icon: <Users className="w-7 h-7" />, text: "Group leaders, scholars & medical staff" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Daily dua, latmiya & spiritual programs" },
        { icon: <Calendar className="w-7 h-7" />, text: "Post-Arbaeen ziyarat extension options" },
      ]}

      destinations={[
        { name: "Iraq - Najaf", url: "https://flagcdn.com/w320/iq.png" },
        { name: "Iraq - Karbala", url: "https://flagcdn.com/w320/iq.png" },
      ]}

      ctaTitle="Secure Your Spot for Arbaeen 2026 Walk"
      ctaSubtitle="Limited seats. Full support from Pakistan to Karbala and back."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}