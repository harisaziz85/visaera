"use client";

import {
  Moon,
  Heart,
  Users,
  Droplet,
  BookOpen,
  Calendar,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function MuharramSafarPackages() {
  return (
    <SubcategoryVisaPage
      title="Muharram/Safar Iran Packages"
      heroImage="https://images.unsplash.com/photo-1724358318024-59681784f813?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935"
      heroChips={[
        "Sacred mourning period",
        "Special ceremonies",
        "Peak spiritual season",
      ]}

      introHeading="What are Muharram/Safar Iran Packages"
      introText="Muharram and Safar packages allow pilgrims to experience Iran's holy shrines during the most spiritually significant mourning period for Shia Muslims.  
These packages include participation in Azadari (mourning ceremonies), special majalis, and processions at the shrines of Mashhad, Qom, and other sacred sites.  
The atmosphere during these months is uniquely spiritual, with millions of pilgrims gathering to commemorate the martyrdom of Imam Hussain and the Ahlul Bayt."

      introImage="https://images.unsplash.com/photo-1722974621401-458f2f527b8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627"

      quickFacts={[
        { label: "Who is it for", value: "Pilgrims wanting to participate in Muharram/Safar ceremonies." },
        { label: "When", value: "Islamic months of Muharram and Safar (dates vary annually)." },
        { label: "Experience", value: "Majalis, processions, and mourning ceremonies at shrines." },
      ]}

      benefits={[
        { icon: <Moon className="w-7 h-7" />, text: "Experience the most sacred mourning period" },
        { icon: <Heart className="w-7 h-7" />, text: "Participate in authentic Azadari ceremonies" },
        { icon: <Users className="w-7 h-7" />, text: "Join millions of pilgrims in collective mourning" },
        { icon: <Droplet className="w-7 h-7" />, text: "Witness powerful processions and matam gatherings" },
        { icon: <BookOpen className="w-7 h-7" />, text: "Attend special majalis by renowned scholars" },
        { icon: <Calendar className="w-7 h-7" />, text: "Spiritual programs throughout both holy months" },
      ]}

      destinations={[
        { name: "Iran (Mashhad - Imam Reza)", url: "https://flagcdn.com/w320/ir.png" },
        { name: "Iran (Qom - Hazrat Masoumeh)", url: "https://flagcdn.com/w320/ir.png" },
        { name: "Iran (Tehran)", url: "https://flagcdn.com/w320/ir.png" },
        { name: "Iran (Shiraz)", url: "https://flagcdn.com/w320/ir.png" },
      ]}

      ctaTitle="Join Muharram/Safar in Iran"
      ctaSubtitle="Experience the profound spirituality of mourning ceremonies at Iran's holiest shrines. Book early as spaces fill quickly."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}