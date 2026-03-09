"use client";

import {
  Shield,
  FileCheck,
  Landmark,
  Globe,
  Award,
  Handshake,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function OfficialVisa() {
  return (
    <SubCategoryVisaPage
      title="Official Visa"
      heroImage="https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z292ZXJubWVudHxlbnwwfHwwfHx8MA%3D%3D"
      heroChips={[
        "Service passport holders",
        "Government missions",
        "Official duty travel",
      ]}

      introHeading="What is an Official Visa?"
      introText={`An Official (Service) Visa is issued to government employees, public servants, and representatives traveling abroad for official duties who do not hold diplomatic status.  
It covers staff of ministries, government agencies, armed forces, and international organizations attending conferences, negotiations, or missions.  
Applications are typically processed through diplomatic or consular channels and must include a *note verbale* or an official government letter confirming the purpose and duration of travel.  
While holders may receive certain courtesies, privileges and immunities depend on host country rules and the nature of the mission.`}

      introImage="https://plus.unsplash.com/premium_photo-1723810029427-a8e3bf9600c6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"

      quickFacts={[
        { label: "Who is it for", value: "Government officials, employees, and mission staff traveling on official business." },
        { label: "Stay Duration", value: "Linked to the mission, conference, or posting duration." },
        { label: "Work Rights", value: "Limited to official government or organization-related duties only." },
      ]}

      benefits={[
        { icon: <FileCheck className="w-7 h-7" />, text: "Recognized travel status for official missions" },
        { icon: <Handshake className="w-7 h-7" />, text: "Facilitated processing via government channels" },
        { icon: <Shield className="w-7 h-7" />, text: "Certain privileges and entry courtesies" },
        { icon: <Globe className="w-7 h-7" />, text: "Multiple-entry access where authorized" },
        { icon: <Landmark className="w-7 h-7" />, text: "Formal documentation through note verbale" },
        { icon: <Award className="w-7 h-7" />, text: "Family members may receive linked dependent status" },
      ]}

      destinations={[
        { name: "United States (A-2 / G-2 Official Visas)", url: "https://flagcdn.com/w320/us.png" },
        { name: "United Kingdom (Official Visit Visa)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Canada (Official & Diplomatic Visa)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Australia (Service Visa)", url: "https://flagcdn.com/w320/au.png" },
        { name: "India (Official Visa)", url: "https://flagcdn.com/w320/in.png" },
        { name: "France (Visa Officiel)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Germany (Official Mission Visa)", url: "https://flagcdn.com/w320/de.png" },
        { name: "UAE (Service/Official Visa)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Japan (Official Visa - 公用ビザ)", url: "https://flagcdn.com/w320/jp.png" },
        { name: "European Union (Schengen Official Category)", url: "https://flagcdn.com/w320/eu.png" },
      ]}

      ctaTitle="Need Assistance with an Official Visa?"
      ctaSubtitle="We’ll handle your official documentation, note verbale, and liaison with the destination’s consular authority."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
