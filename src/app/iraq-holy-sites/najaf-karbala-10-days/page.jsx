"use client";

import {
  Clock,
  Hotel,
  Users,
  HeartHandshake,
  Bus,
  Calendar,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function NajafKarbala10Days() {
  return (
    <SubcategoryVisaPage
      title="Najaf-Karbala 10 Days"
      heroImage="https://images.unsplash.com/photo-1718680951424-d3d9b21aa4bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      heroChips={[
        "10-day focused trip",
        "Imam Ali & Imam Hussain shrines",
        "All-inclusive package",
      ]}

      introHeading="What is Najaf-Karbala 10 Days Package"
      introText="A compact 10-day spiritual journey covering the holiest Shia sites: the Shrine of Imam Ali (AS) in Najaf and the Shrine of Imam Hussain (AS) in Karbala.  
This package includes visa, round-trip flights, 4-star hotels, daily meals, and guided transfers.  
Perfect for pilgrims seeking deep spiritual reflection in a short, well-organized trip."

      introImage="https://images.unsplash.com/photo-1564287531351-815cc2d36011?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"

      quickFacts={[
        { label: "Who is it for", value: "Devotees with limited time; ideal for first-time pilgrims." },
        { label: "Duration", value: "10 days / 9 nights." },
        { label: "Group Size", value: "Small groups (10–25 pilgrims) with dedicated guide." },
      ]}

      benefits={[
        { icon: <Clock className="w-7 h-7" />, text: "Optimized 10-day itinerary for maximum ziyarat" },
        { icon: <Hotel className="w-7 h-7" />, text: "4-star hotels within walking distance of shrines" },
        { icon: <Users className="w-7 h-7" />, text: "Small group with experienced religious guide" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Daily majlis & spiritual sessions" },
        { icon: <Bus className="w-7 h-7" />, text: "AC coaches for Najaf–Karbala transfers" },
        { icon: <Calendar className="w-7 h-7" />, text: "Year-round departures except peak Arbaeen" },
      ]}

      destinations={[
        { name: "Iraq - Najaf", url: "https://flagcdn.com/w320/iq.png" },
        { name: "Iraq - Karbala", url: "https://flagcdn.com/w320/iq.png" },
      ]}

      ctaTitle="Book Your 10-Day Najaf-Karbala Journey"
      ctaSubtitle="Visa, flights, hotels, meals, and guidance — everything included in one package."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}