"use client";

import {
  Crown,
  Hotel,
  Star,
  UtensilsCrossed,
  Car,
  Sparkles,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function HajjPremiumPackage() {
  return (
    <SubcategoryVisaPage
      title="Hajj Premium Package"
      heroImage="https://images.unsplash.com/photo-1589827577276-65d717348780?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      heroChips={[
        "5-star hotels",
        "VIP services",
        "Maximum comfort",
      ]}

      introHeading="What is a Hajj Premium Package"
      introText="Hajj Premium Package offers the highest level of comfort and convenience during the sacred pilgrimage with luxury accommodations and exclusive services.  
Pilgrims stay in 5-star hotels closest to Haram, enjoy private transportation, gourmet meals, and personalized assistance throughout the journey.  
Designed for those who want to focus entirely on worship without concerns about logistics, comfort, or accessibility."

      introImage="https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"

      quickFacts={[
        { label: "Who is it for", value: "Pilgrims seeking luxury, comfort, and premium services." },
        { label: "Accommodation", value: "5-star hotels with closest proximity to Haram." },
        { label: "Services", value: "VIP transport, gourmet meals, and dedicated support." },
      ]}

      benefits={[
        { icon: <Crown className="w-7 h-7" />, text: "VIP treatment throughout your journey" },
        { icon: <Hotel className="w-7 h-7" />, text: "5-star luxury hotels with Haram views" },
        { icon: <Star className="w-7 h-7" />, text: "Closest possible rooms to Masjid al-Haram" },
        { icon: <Car className="w-7 h-7" />, text: "Private air-conditioned transportation" },
        { icon: <UtensilsCrossed className="w-7 h-7" />, text: "Premium dining with international cuisine" },
        { icon: <Sparkles className="w-7 h-7" />, text: "Dedicated guides and 24/7 support staff" },
      ]}

      destinations={[
        { name: "Saudi Arabia (Makkah & Medina)", url: "https://flagcdn.com/w320/sa.png" },
      ]}

      ctaTitle="Experience Hajj in Ultimate Comfort"
      ctaSubtitle="Our premium package ensures a stress-free pilgrimage with the finest accommodations and services."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}