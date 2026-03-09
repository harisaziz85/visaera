"use client";

import {
  Moon,
  Star,
  Heart,
  Gift,
  Sparkles,
  Clock,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function RamadanUmrah2026() {
  return (
    <SubcategoryVisaPage
      title="Ramadan Umrah 2026"
      heroImage="https://images.unsplash.com/photo-1683828936769-92c51298885c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172"
      heroChips={[
        "Most blessed time",
        "Special rewards",
        "Spiritual atmosphere",
      ]}

      introHeading="What is Ramadan Umrah 2026"
      introText="Ramadan Umrah is performing the pilgrimage during the holy month of Ramadan, considered the most spiritually rewarding time for Umrah.  
Performing Umrah in Ramadan is said to be equivalent to Hajj in terms of reward, making it the most sought-after time for pilgrims.  
The experience includes fasting, Taraweeh prayers at Haram, and the unique spiritual atmosphere of Ramadan in the holy cities."

      introImage="https://images.unsplash.com/photo-1733895422316-d4aafcb1be03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"

      quickFacts={[
        { label: "Who is it for", value: "Muslims seeking maximum spiritual reward during Ramadan." },
        { label: "When", value: "During Ramadan 2026 (estimated February-March)." },
        { label: "Special Features", value: "Taraweeh prayers, Iftar at Haram, and blessed atmosphere." },
      ]}

      benefits={[
        { icon: <Star className="w-7 h-7" />, text: "Perform Umrah during the most blessed month" },
        { icon: <Gift className="w-7 h-7" />, text: "Rewards equivalent to Hajj according to Hadith" },
        { icon: <Moon className="w-7 h-7" />, text: "Experience fasting in the holy cities" },
        { icon: <Heart className="w-7 h-7" />, text: "Pray Taraweeh at Masjid al-Haram" },
        { icon: <Sparkles className="w-7 h-7" />, text: "Unique spiritual atmosphere and community" },
        { icon: <Clock className="w-7 h-7" />, text: "Iftar and Suhoor arrangements at hotels" },
      ]}

      destinations={[
        { name: "Saudi Arabia (Makkah & Medina)", url: "https://flagcdn.com/w320/sa.png" },
      ]}

      ctaTitle="Book your Ramadan Umrah 2026"
      ctaSubtitle="Limited spots available for the most blessed time. Early booking recommended."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}