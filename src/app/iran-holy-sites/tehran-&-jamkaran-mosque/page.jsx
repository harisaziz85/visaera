"use client";

import {
  Building2,
//   Mosque,
  Camera,
  MapPin,
  History,
  Sparkles,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function TehranJamkaranPackage() {
  return (
    <SubcategoryVisaPage
      title="Tehran & Jamkaran Mosque"
      heroImage="https://images.unsplash.com/photo-1671812059071-49ddd49c32c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      heroChips={[
        "Capital city exploration",
        "Sacred Jamkaran Mosque",
        "Cultural heritage",
      ]}

      introHeading="What is the Tehran & Jamkaran Mosque Package"
      introText="This package combines spiritual pilgrimage with cultural exploration, visiting Tehran's important religious sites and the blessed Jamkaran Mosque near Qom.  
Jamkaran Mosque is believed to be associated with Imam Mahdi (AJ), making it one of the most spiritually significant locations for Shia Muslims worldwide.  
The package also includes Tehran's key Islamic landmarks, museums, and the opportunity to experience Iran's vibrant capital city."

      introImage="https://images.unsplash.com/photo-1671812059484-86af50853942?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"

      quickFacts={[
        { label: "Who is it for", value: "Pilgrims wanting spiritual sites plus cultural exploration." },
        { label: "Duration", value: "Typically 5-10 days covering Tehran and nearby Qom." },
        { label: "Highlights", value: "Jamkaran Mosque, Tehran shrines, museums, and bazaars." },
      ]}

      benefits={[
        { icon: <Sparkles className="w-7 h-7" />, text: "Visit blessed Jamkaran Mosque (Imam Mahdi association)" },
        // { icon: <Mosque className="w-7 h-7" />, text: "Explore Tehran's important shrines and mosques" },
        { icon: <History className="w-7 h-7" />, text: "Visit Imam Khomeini shrine and Islamic monuments" },
        { icon: <Building2 className="w-7 h-7" />, text: "Experience Iran's modern capital city" },
        { icon: <Camera className="w-7 h-7" />, text: "Explore bazaars, museums, and Persian architecture" },
        { icon: <MapPin className="w-7 h-7" />, text: "Easy day trip from Tehran to Jamkaran" },
      ]}

      destinations={[
        { name: "Iran (Tehran)", url: "https://flagcdn.com/w320/ir.png" },
        { name: "Iran (Jamkaran Mosque, Qom)", url: "https://flagcdn.com/w320/ir.png" },
      ]}

      ctaTitle="Explore Tehran & Jamkaran Mosque"
      ctaSubtitle="Combine spiritual pilgrimage with cultural discovery in Iran's capital region."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}