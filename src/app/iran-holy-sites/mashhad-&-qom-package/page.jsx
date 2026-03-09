"use client";

import {
//   Mosque,
  MapPin,
  Hotel,
  Bus,
  BookOpen,
  Users,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function MashhadQomPackage() {
  return (
    <SubcategoryVisaPage
      title="Mashhad & Qom Package"
      heroImage="https://images.unsplash.com/photo-1722940386027-52e3bdc6bbee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1071"
      heroChips={[
        "Two holiest cities",
        "Imam Reza shrine",
        "Hazrat Masoumeh shrine",
      ]}

      introHeading="What is the Mashhad & Qom Package"
      introText="This specialized package focuses on Iran's two most important Ziyarat destinations - Mashhad (home of Imam Reza's shrine) and Qom (shrine of Hazrat Masoumeh).  
The package includes accommodations near both holy shrines, local transportation, and guided visits to maximize your spiritual experience in these sacred cities.  
Perfect for pilgrims wanting to concentrate on the most significant Shia holy sites in Iran with organized support and comfortable facilities."

      introImage="https://images.unsplash.com/photo-1675274854445-6677aabef5f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331"

      quickFacts={[
        { label: "Who is it for", value: "Pilgrims focusing on Iran's two holiest Shia cities." },
        { label: "Duration", value: "Typically 7-14 days with flexible extensions available." },
        { label: "Inclusions", value: "Visa, flights, hotels near shrines, meals, and transport." },
      ]}

      benefits={[
        // { icon: <Mosque className="w-7 h-7" />, text: "Visit Imam Reza shrine (8th Imam) in Mashhad" },
        { icon: <MapPin className="w-7 h-7" />, text: "Ziyarat at Hazrat Masoumeh shrine in Qom" },
        { icon: <Hotel className="w-7 h-7" />, text: "Hotels within walking distance of both shrines" },
        { icon: <Bus className="w-7 h-7" />, text: "Comfortable transport between cities included" },
        { icon: <BookOpen className="w-7 h-7" />, text: "Knowledgeable guides explaining history and rituals" },
        { icon: <Users className="w-7 h-7" />, text: "Group support with fellow pilgrims" },
      ]}

      destinations={[
        { name: "Iran (Mashhad - Imam Reza)", url: "https://flagcdn.com/w320/ir.png" },
        { name: "Iran (Qom - Hazrat Masoumeh)", url: "https://flagcdn.com/w320/ir.png" },
      ]}

      ctaTitle="Book your Mashhad & Qom Package"
      ctaSubtitle="Experience the spiritual heart of Iran with our complete package for both holy cities."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}