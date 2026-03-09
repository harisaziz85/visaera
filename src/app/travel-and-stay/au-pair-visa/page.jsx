"use client";

import {
  Baby,
  Home,
  Globe,
  Languages,
  HeartHandshake,
  Smile,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function AuPairVisa() {
  return (
    <SubcategoryVisaPage
      title="Au Pair Visa"
      heroImage="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Childcare abroad",
        "Cultural exchange",
        "Host family experience",
      ]}
      introHeading="What is an Au Pair Visa"
      introText="An au pair visa allows young people to live with a host family abroad while helping with childcare and light household tasks.  
It is a cultural exchange program that lets au pairs experience everyday life in another country, learn a new language, and build international friendships.  
In return, the host family provides accommodation, meals, and pocket money."

      introImage="https://plus.unsplash.com/premium_photo-1664474636732-5ac5a0be7b72?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
      quickFacts={[
        { label: "Who is it for", value: "Young adults (usually 18–30) seeking cultural exchange while living with a host family." },
        { label: "Stay Duration", value: "6 months to 1 year, depending on country regulations." },
        { label: "Work Rights", value: "Restricted to childcare and light household duties with the host family." },
      ]}
      benefits={[
        { icon: <Baby className="w-7 h-7" />, text: "Provide childcare in a safe, regulated program" },
        { icon: <Home className="w-7 h-7" />, text: "Free accommodation and meals with a host family" },
        { icon: <Globe className="w-7 h-7" />, text: "Live abroad in a family environment" },
        { icon: <Languages className="w-7 h-7" />, text: "Learn or improve host country language skills" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Cultural exchange and lifelong connections" },
        { icon: <Smile className="w-7 h-7" />, text: "Pocket money allowance and family support" },
      ]}
      destinations={[
  { name: "Germany", url: "https://flagcdn.com/w320/de.png" },
  { name: "France", url: "https://flagcdn.com/w320/fr.png" },
  { name: "United States (USA)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Netherlands", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Sweden", url: "https://flagcdn.com/w320/se.png" },
  { name: "Denmark", url: "https://flagcdn.com/w320/dk.png" },
  { name: "Norway", url: "https://flagcdn.com/w320/no.png" },
  { name: "Switzerland", url: "https://flagcdn.com/w320/ch.png" },
  { name: "Austria", url: "https://flagcdn.com/w320/at.png" },
  { name: "Belgium", url: "https://flagcdn.com/w320/be.png" },
]}
      ctaTitle="Need help with your Au Pair Visa?"
      ctaSubtitle="We’ll guide you through requirements, host family contracts, and country-specific conditions."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
