"use client";

import {
  MapPin,
  Hotel,
  Bus,
  Users,
  HeartHandshake,
  Clock,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function BaghdadKazmainZiyarat() {
  return (
    <SubcategoryVisaPage
      title="Baghdad + Kazmain Ziyarat"
      heroImage="https://images.unsplash.com/photo-1608925086961-dbcd276a0e71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      heroChips={[
        "Kazmain & Baghdad shrines",
        "5–7 day trip",
        "Secure & guided",
      ]}

      introHeading="What is Baghdad + Kazmain Ziyarat"
      introText="A focused pilgrimage to the holy shrines of Imam Musa Kazim (AS) and Imam Jawad (AS) in Kazmain, along with Kadhimiya and historical sites in Baghdad.  
This 5–7 day package includes visa, internal flights/transfers, secure accommodation, and expert local guides.  
Ideal for pilgrims seeking blessings from the 7th and 9th Imams in a safe, structured journey."

      introImage="https://images.unsplash.com/photo-1737314417275-92a2657112c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"

      quickFacts={[
        { label: "Key Sites", value: "Kazmain (Imam Kazim & Jawad), Al-Kadhimiya" },
        { label: "Duration", value: "5–7 days (flexible)" },
        { label: "Best Time", value: "Year-round except Muharram/Arbaeen peak" },
      ]}

      benefits={[
        { icon: <MapPin className="w-7 h-7" />, text: "Direct access to Kazmain & Kadhimiya shrines" },
        { icon: <Hotel className="w-7 h-7" />, text: "Secure hotels in protected Baghdad zones" },
        { icon: <Bus className="w-7 h-7" />, text: "Armored transfers & police escort" },
        { icon: <Users className="w-7 h-7" />, text: "Small group with Arabic/Urdu-speaking guide" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Daily majlis & historical insights" },
        { icon: <Clock className="w-7 h-7" />, text: "Customizable add-ons: Samarra, Kufa" },
      ]}

      destinations={[
        { name: "Baghdad", url: "https://flagcdn.com/w320/iq.png" },
        { name: "Kazmain", url: "https://flagcdn.com/w320/iq.png" },
      ]}

      ctaTitle="Plan Your Baghdad-Kazmain Ziyarat"
      ctaSubtitle="Safe, guided, and spiritually enriching — door-to-door service."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}