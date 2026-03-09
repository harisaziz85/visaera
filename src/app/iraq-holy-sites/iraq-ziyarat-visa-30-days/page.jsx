"use client";

import {
  Plane,
  Hotel,
  Users,
  Calendar,
  HeartHandshake,
  MapPin,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function IraqZiyaratVisa30Days() {
  return (
    <SubcategoryVisaPage
      title="Iraq Ziyarat Visa (30 Days)"
      heroImage="https://images.unsplash.com/photo-1724051526928-ae6f5d53bead?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331"
      heroChips={[
        "30-day validity",
        "Multiple holy sites",
        "Hassle-free processing",
      ]}

      introHeading="What is Iraq Ziyarat Visa (30 Days)"
      introText="The Iraq Ziyarat Visa allows Shia Muslims to visit the sacred shrines in Najaf, Karbala, Baghdad, and Samarra for a period of up to 30 days.  
It is ideal for individual pilgrims or small groups seeking a focused spiritual journey without the constraints of larger organized tours.  
The visa is processed through official channels with sponsorship from recognized travel agents, ensuring smooth entry and spiritual fulfillment."

      introImage="https://images.unsplash.com/photo-1756625856232-daeba5489f10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=700"

      quickFacts={[
        { label: "Who is it for", value: "Shia pilgrims with valid passport & sponsor letter." },
        { label: "Stay Duration", value: "Up to 30 days from entry date." },
        { label: "Entry Type", value: "Single entry; extendable in exceptional cases." },
      ]}

      benefits={[
        { icon: <MapPin className="w-7 h-7" />, text: "Visit Imam Ali & Imam Hussain shrines in Najaf & Karbala" },
        { icon: <Calendar className="w-7 h-7" />, text: "Flexible dates for personal spiritual schedule" },
        { icon: <Plane className="w-7 h-7" />, text: "Direct flights from major cities with visa-on-arrival support" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Dedicated local guides & spiritual support" },
        { icon: <Hotel className="w-7 h-7" />, text: "Comfortable stays near holy sites" },
        { icon: <Users className="w-7 h-7" />, text: "Small group or individual travel options" },
      ]}

      destinations={[
        { name: "Najaf", url: "https://flagcdn.com/w320/iq.png" },
        { name: "Karbala", url: "https://flagcdn.com/w320/iq.png" },
        { name: "Baghdad", url: "https://flagcdn.com/w320/iq.png" },
        { name: "Samarra", url: "https://flagcdn.com/w320/iq.png" },
        { name: "Kazmain", url: "https://flagcdn.com/w320/iq.png" },
      ]}

      ctaTitle="Ready for your 30-Day Ziyarat Journey?"
      ctaSubtitle="We handle visa sponsorship, documentation, and travel logistics for a seamless pilgrimage."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}