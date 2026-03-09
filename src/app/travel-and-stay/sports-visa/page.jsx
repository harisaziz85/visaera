"use client";

import {
  Trophy,
  Dumbbell,
  Medal,
  Users,
  Flag,
  Globe,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function SportsVisa() {
  return (
    <SubcategoryVisaPage
      title="Sports Visa"
      heroImage="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0c3xlbnwwfDB8MHx8fDA%3D"
      heroChips={[
        "Athletes & coaches",
        "International tournaments",
        "Global sports events",
      ]}
      introHeading="What is a Sports Visa"
      introText="A sports visa allows professional athletes, coaches, referees, and team staff to travel abroad for sports events, tournaments, or training. It provides legal permission to take part in international competitions, represent a club or country, and attend training camps.  
The visa helps promote global sports participation while ensuring athletes and officials meet each country's immigration rules."
      introImage="https://images.unsplash.com/photo-1587565725500-b2f408632a31?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwb3J0c3xlbnwwfDJ8MHx8fDA%3D"
      quickFacts={[
        { label: "Who is it for", value: "Athletes, coaches, referees, and officials." },
        { label: "Stay Duration", value: "From weeks for tournaments up to 1-2 years for contracts." },
        { label: "Work Rights", value: "Limited to sports-related activities and competitions." },
      ]}
      benefits={[
        { icon: <Trophy className="w-7 h-7" />, text: "Compete in international tournaments" },
        { icon: <Dumbbell className="w-7 h-7" />, text: "Train with global athletes" },
        { icon: <Medal className="w-7 h-7" />, text: "Gain international recognition" },
        { icon: <Users className="w-7 h-7" />, text: "Bring team staff & coaches" },
        { icon: <Flag className="w-7 h-7" />, text: "Represent your country or club abroad" },
        { icon: <Globe className="w-7 h-7" />, text: "Access world-class facilities" },
      ]}
      destinations={[
  { name: "United States (USA)", url: "https://flagcdn.com/w320/us.png" },
  { name: "United Kingdom (UK)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Australia", url: "https://flagcdn.com/w320/au.png" },
  { name: "Canada", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Qatar", url: "https://flagcdn.com/w320/qa.png" },
  { name: "France", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Germany", url: "https://flagcdn.com/w320/de.png" },
  { name: "Spain", url: "https://flagcdn.com/w320/es.png" },
  { name: "Japan", url: "https://flagcdn.com/w320/jp.png" },
  { name: "United Arab Emirates (UAE)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "Saudi Arabia", url: "https://flagcdn.com/w320/sa.png" },
  { name: "Italy", url: "https://flagcdn.com/w320/it.png" },
]}
      ctaTitle="Need help with your Sports Visa?"
      ctaSubtitle="We assist athletes, teams, and coaches in getting the right visa for tournaments and training."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
