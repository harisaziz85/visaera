"use client";

import {
  GraduationCap,
  BriefcaseBusiness,
  Globe,
  TrendingUp,
  Award,
  HeartHandshake,
  Crown,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function EliteVisa() {
  return (
    <SubcategoryVisaPage
      title="Elite Visa"
      heroImage="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Long-stay membership",
        "Priority immigration services",
        "Luxury lifestyle benefits",
      ]}

      introHeading="What is an Elite Visa?"
      introText={`An **Elite Visa**—sometimes called a *Privilege Entry Visa* or *Long-Stay Membership Visa*—is a premium residence option that grants multi-year legal stay, airport privileges, concierge support, and other lifestyle benefits.  
It is typically offered to high-net-worth individuals, digital entrepreneurs, retirees, and frequent travelers who prefer **ease of entry, administrative simplicity, and long-term flexibility** without permanent relocation.  

Applicants must undergo **security/background checks** and purchase a qualifying membership package or investment plan. While these visas provide **residency rights**, they rarely grant employment authorization, and separate permits may be needed for business or professional activities.`}

      introImage="/thailandelite.jpg"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Long-term visitors, entrepreneurs, investors, or retirees seeking premium residence access with minimal bureaucracy.",
        },
        {
          label: "Stay Duration",
          value:
            "Usually 5–20 years depending on package or program tier; renewable or upgradeable in many countries.",
        },
        {
          label: "Work Rights",
          value:
            "Typically restricted; business ownership or consulting may require an additional permit.",
        },
      ]}

      benefits={[
        {
          icon: <Crown className="w-7 h-7" />,
          text: "Exclusive multi-year residence with VIP privileges",
        },
        {
          icon: <Award className="w-7 h-7" />,
          text: "Fast-track airport services, luxury lounges, and concierge access",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Visa-free entries and easy renewals under one membership",
        },
        {
          icon: <HeartHandshake className="w-7 h-7" />,
          text: "Family inclusion available for spouse and dependants",
        },
        {
          icon: <TrendingUp className="w-7 h-7" />,
          text: "Tier upgrades and transfer options across program levels",
        },
        {
          icon: <BriefcaseBusiness className="w-7 h-7" />,
          text: "Business and lifestyle networking privileges (where applicable)",
        },
      ]}

      destinations={[
        { name: "Thailand (Thailand Elite Visa)", url: "https://flagcdn.com/w320/th.png" },
        { name: "United Arab Emirates (Golden & Long-Term Residence)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Portugal (Golden Residence Program)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Singapore (Global Investor Program)", url: "https://flagcdn.com/w320/sg.png" },
        { name: "Malaysia (MM2H – Malaysia My Second Home)", url: "https://flagcdn.com/w320/my.png" },
        { name: "Spain (Residence by Investment)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Greece (Golden Visa Program)", url: "https://flagcdn.com/w320/gr.png" },
        { name: "Cyprus (Permanent Residency via Investment)", url: "https://flagcdn.com/w320/cy.png" },
        { name: "Italy (Elective Residence Visa)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Malta (Permanent Residence Program)", url: "https://flagcdn.com/w320/mt.png" },
        { name: "Monaco (Residence Card Program)", url: "https://flagcdn.com/w320/mc.png" },
        { name: "Indonesia (Second Home Visa)", url: "https://flagcdn.com/w320/id.png" },
        { name: "Mauritius (Premium Visa)", url: "https://flagcdn.com/w320/mu.png" },
        { name: "Turkey (Long-Stay Residence Program)", url: "https://flagcdn.com/w320/tr.png" },
        { name: "Saint Kitts & Nevis (Residency by Investment)", url: "https://flagcdn.com/w320/kn.png" },
      ]}

      ctaTitle="Explore Elite & Long-Stay Visa Programs"
      ctaSubtitle="We’ll help you select the best membership or residence package, complete background checks, and handle premium visa processing."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
