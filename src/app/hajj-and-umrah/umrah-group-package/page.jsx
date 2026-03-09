// 3. UMRAH GROUP PACKAGE
"use client";

import {
  Users,
  Hotel,
  Bus,
  Utensils,
  HandHeart,
  BookOpen,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function UmrahGroupPackage() {
  return (
    <SubcategoryVisaPage
      title="Umrah Group Package"
      heroImage="https://images.unsplash.com/photo-1633546707050-88e2b545831c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
      heroChips={[
        "All-inclusive package",
        "Experienced guides",
        "Group support",
      ]}

      introHeading="What is an Umrah Group Package"
      introText="An Umrah Group Package is a complete travel solution where pilgrims perform Umrah as part of an organized group with shared accommodation, transport, and guidance.  
These packages are ideal for first-time pilgrims or those who prefer structured travel with religious scholars and tour leaders.  
Everything from visa processing to meals is arranged, allowing pilgrims to focus solely on worship and spiritual growth."

      introImage="https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765"

      quickFacts={[
        { label: "Who is it for", value: "Pilgrims preferring organized travel with group support." },
        { label: "Package Duration", value: "Typically 7-21 days depending on package type." },
        { label: "Inclusions", value: "Visa, flights, hotels, meals, transport, and guides included." },
      ]}

      benefits={[
        { icon: <Users className="w-7 h-7" />, text: "Travel with like-minded pilgrims in organized groups" },
        { icon: <Hotel className="w-7 h-7" />, text: "Pre-arranged hotels near Haram in Makkah & Medina" },
        { icon: <Bus className="w-7 h-7" />, text: "Ground transportation and local tours included" },
        { icon: <Utensils className="w-7 h-7" />, text: "Meals provided throughout the journey" },
        { icon: <BookOpen className="w-7 h-7" />, text: "Guidance from religious scholars and experienced tour leaders" },
        { icon: <HandHeart className="w-7 h-7" />, text: "Hassle-free experience with full support" },
      ]}

      destinations={[
        { name: "Saudi Arabia (Makkah & Medina)", url: "https://flagcdn.com/w320/sa.png" },
      ]}

      ctaTitle="Join an Umrah Group Package"
      ctaSubtitle="We offer various group packages with different comfort levels and durations to suit your needs."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}