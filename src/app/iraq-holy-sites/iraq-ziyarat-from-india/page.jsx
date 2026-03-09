"use client";

import {
  Plane,
  Hotel,
  Bus,
  Text,
  HeartHandshake,
  Globe,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function IraqZiyaratFromIndia() {
  return (
    <SubcategoryVisaPage
      title="Iraq Ziyarat from Pakistan/India"
      heroImage="https://images.unsplash.com/photo-1718680951424-d3d9b21aa4bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      heroChips={[
        "Direct India–Iraq flights",
        "Urdu/Hindi support",
        "Group departures",
      ]}

      introHeading="What is Iraq Ziyarat from Pakistan/India"
      introText="Tailored for Indian pilgrims, this package covers visa processing, direct flights from Delhi/Mumbai/Lucknow, accommodation, meals, and guided ziyarat in Najaf, Karbala, and beyond.  
Includes pre-departure orientation in Urdu/Hindi and 24/7 support from Indian tour leaders.  
Perfect for families, seniors, and first-time travelers from India."

      introImage="https://plus.unsplash.com/premium_photo-1678129526108-584c001dbdaa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"

      quickFacts={[
        { label: "Departure Cities", value: "Delhi, Mumbai, Lucknow, Hyderabad" },
        { label: "Language Support", value: "Urdu, Hindi, English" },
        { label: "Meal Plan", value: "Jain/vegetarian/non-veg Indian cuisine" },
      ]}

      benefits={[
        { icon: <Plane className="w-7 h-7" />, text: "Direct or 1-stop flights via Gulf hubs" },
        { icon: <Text className="w-7 h-7" />, text: "Fast Iraq e-visa for Indian passport holders" },
        { icon: <Hotel className="w-7 h-7" />, text: "Indian-managed hotels with desi food" },
        { icon: <Bus className="w-7 h-7" />, text: "AC coaches with Indian tour manager" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Urdu majlis & noha by Indian scholars" },
        { icon: <Globe className="w-7 h-7" />, text: "Group departures every week" },
      ]}

      destinations={[
        { name: "Iraq - Najaf", url: "https://flagcdn.com/w320/iq.png" },
        { name: "Iraq - Karbala", url: "https://flagcdn.com/w320/iq.png" },
        { name: "Iraq - Kazmain", url: "https://flagcdn.com/w320/iq.png" },
        { name: "Iraq - Samarra", url: "https://flagcdn.com/w320/iq.png" },
      ]}

      ctaTitle="Iraq Ziyarat from India – Book Now"
      ctaSubtitle="End-to-end support in your language. From passport to prayers."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}