"use client";

import {
  Globe,
  FileCheck,
  Shield,
  Award,
  Plane,
  Landmark,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function SchengenVisa() {
  return (
    <SubcategoryVisaPage
      title="Schengen Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1713364681295-46fbb079a2f9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2NoZW5nZW4lMjBBcmVhfGVufDB8MHwwfHx8MA%3D%3D"
      heroChips={[
        "Short stay (Type C)",
        "26 Schengen countries",
        "90 days in 180",
      ]}

      introHeading="What is a Schengen Visa?"
      introText={`A Schengen Visa is a short-stay visa that allows travel within the 26 Schengen countries for up to **90 days within any 180-day period**.  
It is primarily intended for **tourism, business visits, family trips, medical reasons, or cultural participation**.  

The Schengen Visa removes the need for individual visas to each member state, offering seamless travel across most of Europe under a single authorization.  
Applicants must demonstrate purpose of travel, financial means, return intent, accommodation arrangements, and valid travel insurance.`}

      introImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Travelers from non-Schengen countries requiring a visa for short stays in Europe.",
        },
        {
          label: "Stay Duration",
          value:
            "Up to 90 days within a 180-day rolling window; single, double, or multiple entries.",
        },
        {
          label: "Work Rights",
          value:
            "No paid employment; business meetings, conferences, and events are permitted.",
        },
      ]}

      benefits={[
        {
          icon: <Plane className="w-7 h-7" />,
          text: "Access 26 European countries with one visa",
        },
        {
          icon: <FileCheck className="w-7 h-7" />,
          text: "Standardized requirements and application process",
        },
        {
          icon: <Shield className="w-7 h-7" />,
          text: "Regulated by EU Visa Code ensuring traveler protection",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Allows cross-border movement without internal checks",
        },
        {
          icon: <Landmark className="w-7 h-7" />,
          text: "Supports tourism, business, medical and family travel",
        },
        {
          icon: <Award className="w-7 h-7" />,
          text: "Facilitates longer-term mobility options after multiple entries",
        },
      ]}

      destinations={[
        { name: "Germany", url: "https://flagcdn.com/w320/de.png" },
        { name: "France", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Italy", url: "https://flagcdn.com/w320/it.png" },
        { name: "Spain", url: "https://flagcdn.com/w320/es.png" },
        { name: "Netherlands", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Portugal", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Greece", url: "https://flagcdn.com/w320/gr.png" },
        { name: "Austria", url: "https://flagcdn.com/w320/at.png" },
        { name: "Sweden", url: "https://flagcdn.com/w320/se.png" },
        { name: "Norway", url: "https://flagcdn.com/w320/no.png" },
        { name: "Switzerland", url: "https://flagcdn.com/w320/ch.png" },
        { name: "Finland", url: "https://flagcdn.com/w320/fi.png" },
        { name: "Denmark", url: "https://flagcdn.com/w320/dk.png" },
        { name: "Belgium", url: "https://flagcdn.com/w320/be.png" },
        { name: "Poland", url: "https://flagcdn.com/w320/pl.png" },
      ]}

      ctaTitle="Planning to travel to Europe?"
      ctaSubtitle="We’ll guide you through your Schengen visa file — from itinerary and insurance to documentation and interview preparation."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
