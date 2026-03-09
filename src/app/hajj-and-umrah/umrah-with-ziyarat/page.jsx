// 4. UMRAH WITH ZIYARAT
"use client";

import {
  MapPin,
  Mountain,
  Landmark,
  BookOpen,
  Camera,
  History,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function UmrahWithZiyarat() {
  return (
    <SubcategoryVisaPage
      title="Umrah with Ziyarat"
      heroImage="https://images.unsplash.com/photo-1704693004804-acf74b339e5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      heroChips={[
        "Historical sites",
        "Spiritual journey",
        "Complete experience",
      ]}

      introHeading="What is Umrah with Ziyarat"
      introText="Umrah with Ziyarat combines the spiritual pilgrimage of Umrah with visits to important Islamic historical sites in Makkah, Medina, and surrounding areas.  
Ziyarat includes visiting places like the Cave of Hira, Mount Uhud, Quba Mosque, and other significant locations from Islamic history.  
This enriched experience deepens understanding of Islamic heritage and provides a more comprehensive spiritual journey."

      introImage="https://plus.unsplash.com/premium_photo-1678373454581-919140902cc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"

      quickFacts={[
        { label: "Who is it for", value: "Pilgrims wanting to combine Umrah with historical site visits." },
        { label: "Duration", value: "Typically 10-21 days to cover Umrah and Ziyarat locations." },
        { label: "Locations", value: "Makkah, Medina, and major Islamic heritage sites." },
      ]}

      benefits={[
        { icon: <MapPin className="w-7 h-7" />, text: "Visit all major Islamic historical landmarks" },
        { icon: <Mountain className="w-7 h-7" />, text: "Explore Cave of Hira, Mount Uhud, and Jabal Thawr" },
        { icon: <Landmark className="w-7 h-7" />, text: "Tour important mosques including Quba and Qiblatain" },
        { icon: <BookOpen className="w-7 h-7" />, text: "Learn Islamic history with knowledgeable guides" },
        { icon: <Camera className="w-7 h-7" />, text: "Memorable spiritual and educational experience" },
        { icon: <History className="w-7 h-7" />, text: "Walk in the footsteps of the Prophet (PBUH)" },
      ]}

      destinations={[
        { name: "Saudi Arabia (Makkah, Medina & Historic Sites)", url: "https://flagcdn.com/w320/sa.png" },
        { name: "Saudi Arabia (Jagal e Noor)", url: "https://flagcdn.com/w320/sa.png" },
        { name: "Saudi Arabia (Mina)", url: "https://flagcdn.com/w320/sa.png" },
        { name: "Saudi Arabia (Masjid e Nimra)", url: "https://flagcdn.com/w320/sa.png" },
        { name: "Saudi Arabia (Badar Valley)", url: "https://flagcdn.com/w320/sa.png" },
        { name: "Saudi Arabia (Jabal Al Malaika)", url: "https://flagcdn.com/w320/sa.png" },
        { name: "Saudi Arabia (Masjid e Qiblatain)", url: "https://flagcdn.com/w320/sa.png" },
        { name: "Saudi Arabia (Taif)", url: "https://flagcdn.com/w320/sa.png" },
      ]}

      ctaTitle="Book your Umrah with Ziyarat package"
      ctaSubtitle="We offer comprehensive packages covering spiritual worship and historical exploration."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}