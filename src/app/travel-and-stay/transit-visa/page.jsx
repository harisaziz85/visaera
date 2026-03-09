"use client";

import {
  Plane,
  Clock,
  Waypoints,
  Globe2,
  ShieldCheck,
  Luggage,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function TransitVisa() {
  return (
    <SubcategoryVisaPage
      title="Transit Visa"
      heroImage="https://images.unsplash.com/photo-1695544868751-6ba8b71e2ad5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9hcmRpbmd8ZW58MHwwfDB8fHww"
      heroChips={[
        "Airport connections",
        "Short layovers",
        "Mandatory for some travelers",
      ]}
      introHeading="What is a Transit Visa"
      introText="A transit visa allows travelers to pass through a country on their way to another destination. It is commonly needed during international layovers or connecting flights, even if you don’t leave the airport.  
Some countries require a transit visa for certain nationalities, while others allow visa-free or visa-on-arrival transit stays. Travelers should always check the rules before booking their journey."
      introImage="https://images.unsplash.com/photo-1687585612334-b35b1cbd22fd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hcmRpbmd8ZW58MHwyfDB8fHww"
      quickFacts={[
        { label: "Who is it for", value: "Travelers with international layovers or transit stops." },
        { label: "Stay Duration", value: "Typically valid for 24 to 96 hours depending on the country." },
        { label: "Work Rights", value: "No work rights. Strictly for transit travel." },
      ]}
      destinations={[
  { name: "United Arab Emirates (Dubai)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "Qatar (Doha)", url: "https://flagcdn.com/w320/qa.png" },
  { name: "Singapore", url: "https://flagcdn.com/w320/sg.png" },
  { name: "Turkey (Istanbul)", url: "https://flagcdn.com/w320/tr.png" },
  { name: "United Kingdom (UK)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Schengen (EU)", url: "https://flagcdn.com/w320/eu.png" },
  { name: "United States (USA)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Australia", url: "https://flagcdn.com/w320/au.png" },
]}
      benefits={[
        { icon: <Plane className="w-7 h-7" />, text: "Catch connecting flights legally" },
        { icon: <Clock className="w-7 h-7" />, text: "Short-stay permit during layovers" },
        { icon: <Waypoints className="w-7 h-7" />, text: "Transit across countries smoothly" },
        { icon: <Globe2 className="w-7 h-7" />, text: "Valid for multiple global airports" },
        { icon: <ShieldCheck className="w-7 h-7" />, text: "Ensures compliance with visa rules" },
        { icon: <Luggage className="w-7 h-7" />, text: "Hassle-free baggage transfers" },
      ]}
      
      ctaTitle="Need help with your Transit Visa?"
      ctaSubtitle="We assist with checking transit requirements and preparing documents for smooth international travel."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
