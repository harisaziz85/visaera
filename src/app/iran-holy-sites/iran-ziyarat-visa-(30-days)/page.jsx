"use client";

import {
  Plane,
  Calendar,
  MapPin,
//   Mosque,
  Heart,
  Globe,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function IranZiyaratVisa30Days() {
  return (
    <SubcategoryVisaPage
      title="Iran Ziyarat Visa (30 Days)"
      heroImage="https://images.unsplash.com/photo-1682312819531-a066ac454b48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1219"
      heroChips={[
        "30-day validity",
        "Multiple holy sites",
        "Flexible itinerary",
      ]}

      introHeading="What is an Iran Ziyarat Visa (30 Days)"
      introText="The Iran Ziyarat Visa is a special pilgrimage visa allowing Shia Muslims to visit sacred shrines and holy sites across Iran for up to 30 days.  
This visa enables pilgrims to pay respects at the shrines of Imam Reza in Mashhad, Hazrat Masoumeh in Qom, and other revered locations throughout the country.  
The 30-day duration provides ample time to visit multiple cities and experience Iran's rich Islamic heritage and hospitality."

      introImage="https://images.unsplash.com/photo-1681486491946-1a4df72152e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"

      quickFacts={[
        { label: "Who is it for", value: "Shia Muslim pilgrims visiting holy shrines in Iran." },
        { label: "Stay Duration", value: "30 days, single or multiple entry available." },
        { label: "Processing Time", value: "7-15 days depending on nationality and application method." },
      ]}

      benefits={[
        { icon: <Calendar className="w-7 h-7" />, text: "Full 30 days to explore multiple sacred sites" },
        // { icon: <Mosque className="w-7 h-7" />, text: "Visit Mashhad, Qom, Shiraz, Tehran, and more" },
        { icon: <MapPin className="w-7 h-7" />, text: "Access to all major Shia shrines and holy sites" },
        { icon: <Heart className="w-7 h-7" />, text: "Experience authentic spiritual atmosphere" },
        { icon: <Plane className="w-7 h-7" />, text: "Flexible travel between multiple Iranian cities" },
        { icon: <Globe className="w-7 h-7" />, text: "Explore Persian culture and Islamic history" },
      ]}

      destinations={[
        { name: "Iran (Mashhad)", url: "https://flagcdn.com/w320/ir.png" },
        { name: "Iran (Qom)", url: "https://flagcdn.com/w320/ir.png" },
        { name: "Iran (Tehran)", url: "https://flagcdn.com/w320/ir.png" },
        { name: "Iran (Shiraz)", url: "https://flagcdn.com/w320/ir.png" },
        { name: "Iran (Isfahan)", url: "https://flagcdn.com/w320/ir.png" },
      ]}

      ctaTitle="Apply for your Iran Ziyarat Visa"
      ctaSubtitle="We'll handle your visa application and help plan your spiritual journey across Iran."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}