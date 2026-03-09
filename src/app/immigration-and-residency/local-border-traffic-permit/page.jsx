"use client";

import {
  Landmark,
  FileCheck,
  Shield,
  Globe,
  Award,
  Handshake,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function LocalBorderTrafficPermit() {
  return (
    <SubCategoryVisaPage
      title="Local Border Traffic Permit"
      heroImage="https://images.unsplash.com/photo-1740214610991-ba9bcd41de67?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9jYWwlMjBib3JkZXJzJTIwdmlzYXxlbnwwfHwwfHx8MA%3D%3D"
      heroChips={[
        "Border residents only",
        "Frequent short visits",
        "Simplified travel rules",
      ]}

      introHeading="What is a Local Border Traffic Permit?"
      introText={`A Local Border Traffic (LBT) Permit allows residents of officially designated frontier zones to cross the border regularly for limited purposes such as family visits, shopping, healthcare, farming, or social activities.  
These permits simplify entry procedures for people living near national borders and are part of bilateral agreements between neighboring countries.  
Holders can cross through specific border checkpoints without a full visa but must remain within the defined local border zone.  
Employment and long-term stay are generally not allowed under LBT rules.`}

      introImage="https://images.unsplash.com/photo-1613244470181-e4ff087b4a24?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9jYWwlMjBib3JkZXJzJTIwdmlzYXxlbnwwfHwwfHx8MA%3D%3D"

      quickFacts={[
        { label: "Who is it for", value: "Residents of authorized border areas defined under bilateral treaties." },
        { label: "Stay Duration", value: "Short-term visits only (e.g., 1–7 days per trip, multiple entries allowed)." },
        { label: "Work Rights", value: "Employment is not permitted; for personal and social purposes only." },
      ]}

      benefits={[
        { icon: <Handshake className="w-7 h-7" />, text: "Enables cross-border family and social contact" },
        { icon: <FileCheck className="w-7 h-7" />, text: "Simplified entry for residents of frontier zones" },
        { icon: <Shield className="w-7 h-7" />, text: "Controlled and secure border access" },
        { icon: <Globe className="w-7 h-7" />, text: "Facilitates regional cooperation and local trade" },
        { icon: <Landmark className="w-7 h-7" />, text: "Managed under bilateral or EU agreements" },
        { icon: <Award className="w-7 h-7" />, text: "Renewable and long-term use permitted for locals" },
      ]}

      destinations={[
        { name: "Poland (Border with Ukraine, Belarus, Russia)", url: "https://flagcdn.com/w320/pl.png" },
        { name: "Finland (Border with Russia)", url: "https://flagcdn.com/w320/fi.png" },
        { name: "Hungary (Border with Ukraine & Serbia)", url: "https://flagcdn.com/w320/hu.png" },
        { name: "Latvia (Border with Russia & Belarus)", url: "https://flagcdn.com/w320/lv.png" },
        { name: "Lithuania (Border with Belarus & Russia)", url: "https://flagcdn.com/w320/lt.png" },
        { name: "Slovakia (Border with Ukraine)", url: "https://flagcdn.com/w320/sk.png" },
        { name: "Romania (Border with Moldova & Ukraine)", url: "https://flagcdn.com/w320/ro.png" },
        { name: "Croatia (Border with Bosnia & Herzegovina)", url: "https://flagcdn.com/w320/hr.png" },
        { name: "Czech Republic (Regional border arrangements)", url: "https://flagcdn.com/w320/cz.png" },
        { name: "Bulgaria (Border with Turkey & Serbia)", url: "https://flagcdn.com/w320/bg.png" },
        { name: "Ukraine (LBT agreements with Poland, Hungary, Slovakia)", url: "https://flagcdn.com/w320/ua.png" },
        { name: "Norway (Border with Russia – Storskog agreement)", url: "https://flagcdn.com/w320/no.png" },
        { name: "Belarus (Border agreements with Poland, Lithuania, Latvia)", url: "https://flagcdn.com/w320/by.png" },
        { name: "Serbia (Agreements with Hungary, Croatia, Romania)", url: "https://flagcdn.com/w320/rs.png" },
        { name: "Moldova (Border facilitation with Romania & Ukraine)", url: "https://flagcdn.com/w320/md.png" },
      ]}

      ctaTitle="Need a Local Border Traffic Permit?"
      ctaSubtitle="We’ll check your residency eligibility, required documentation, and help prepare your permit application."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
