"use client";

import {
  Calendar,
  Users,
  Tent,
  HeartHandshake,
  Bus,
  Clock,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function ChehlumArbaeen2026Special() {
  return (
    <SubcategoryVisaPage
      title="Chehlum Arbaeen 2026 Special"
      heroImage="https://images.unsplash.com/photo-1718680951424-d3d9b21aa4bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      heroChips={[
        "40th after Arbaeen",
        "Karbala focus",
        "Post-pilgrimage peace",
      ]}

      introHeading="What is Chehlum Arbaeen 2026 Special"
      introText="Observe the 40th day after Arbaeen (Chehlum) in the serene aftermath of the grand pilgrimage.  
This special package offers extended stay in Karbala for quiet reflection, ziyarat, and participation in Chehlum majlis.  
Includes visa extension support, accommodation, meals, and guided programs — ideal for those seeking deeper mourning and connection."

      introImage="https://images.unsplash.com/photo-1649717291645-5f57dd74b46d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=668"

      quickFacts={[
        { label: "Date", value: "Approx. 40 days after Arbaeen 2026" },
        { label: "Focus", value: "Karbala — Imam Hussain Shrine" },
        { label: "Crowd Level", value: "Peaceful, post-pilgrimage calm" },
      ]}

      benefits={[
        { icon: <Calendar className="w-7 h-7" />, text: "Stay for full Chehlum observance" },
        { icon: <Tent className="w-7 h-7" />, text: "Comfortable lodging near Roza" },
        { icon: <Users className="w-7 h-7" />, text: "Intimate majlis with renowned zakireen" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Special Chehlum rituals & processions" },
        { icon: <Bus className="w-7 h-7" />, text: "Optional visits to Najaf & Kazmain" },
        { icon: <Clock className="w-7 h-7" />, text: "Visa extension & late departure flights" },
      ]}

      destinations={[
        { name: "Iraq - Karbala", url: "https://flagcdn.com/w320/iq.png" },
        { name: "Iraq - Najaf (Optional)", url: "https://flagcdn.com/w320/iq.png" },
      ]}

      ctaTitle="Join Chehlum Arbaeen 2026 in Karbala"
      ctaSubtitle="A time for reflection, mourning, and spiritual renewal."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}