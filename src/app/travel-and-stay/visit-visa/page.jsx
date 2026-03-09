"use client";

import {
  Users,
  Home,
  CalendarDays,
  Heart,
  Globe2,
  Handshake,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function VisitVisa() {
  return (
    <SubcategoryVisaPage
      title="Visit Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1661475916373-5aaaeb4a5393?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFtaWx5fGVufDB8MHwwfHx8MA%3D%3D"
      heroChips={[
        "Family reunions",
        "Short-term stay",
        "Multiple entries possible",
      ]}
      introHeading="What is a Visit Visa"
      introText="A visit visa allows people to travel abroad for a short time to meet family or friends. It’s usually used for personal visits, family reunions, or attending private events like weddings or celebrations.  
      This visa does not permit working or long-term study, but it gives travelers a chance to spend quality time with loved ones and enjoy local culture during their stay."

      introImage="https://images.unsplash.com/photo-1515622472995-1a06094d2224?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MnwwfHx8MA%3D%3D"
      quickFacts={[
        { label: "Who is it for", value: "Travelers visiting family or friends abroad." },
        { label: "Stay Duration", value: "30 to 180 days depending on the issuing country." },
        { label: "Work Rights", value: "No work rights. Strictly for private visits." },
      ]}
      benefits={[
        { icon: <Users className="w-7 h-7" />, text: "Visit family & friends abroad" },
        { icon: <Home className="w-7 h-7" />, text: "Stay temporarily with relatives" },
        { icon: <CalendarDays className="w-7 h-7" />, text: "Attend family events & functions" },
        { icon: <Heart className="w-7 h-7" />, text: "Strengthen personal relationships" },
        { icon: <Globe2 className="w-7 h-7" />, text: "Explore host country during stay" },
        { icon: <Handshake className="w-7 h-7" />, text: "Pathway to sponsorship/family visas" },
      ]}
      destinations={[
        { name: "United Kingdom (UK)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "United States (USA)", url: "https://flagcdn.com/w320/us.png" },
        { name: "Canada", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Australia", url: "https://flagcdn.com/w320/au.png" },
        { name: "Schengen (EU)", url: "https://flagcdn.com/w320/eu.png" },
        { name: "United Arab Emirates (UAE)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Saudi Arabia", url: "https://flagcdn.com/w320/sa.png" },
        { name: "Qatar", url: "https://flagcdn.com/w320/qa.png" },
        { name: "Singapore", url: "https://flagcdn.com/w320/sg.png" },
        { name: "New Zealand", url: "https://flagcdn.com/w320/nz.png" },
      ]}
      ctaTitle="Need help with your Visit Visa?"
      ctaSubtitle="We guide you through documentation and requirements for visiting family or friends abroad."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
