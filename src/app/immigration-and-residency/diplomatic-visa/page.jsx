"use client";

import {
  Shield,
  Landmark,
  Globe,
  FileCheck,
  Award,
  Handshake,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function DiplomaticVisa() {
  return (
    <SubCategoryVisaPage
      title="Diplomatic Visa"
      heroImage="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z292ZXJubWVudHxlbnwwfHwwfHx8MA%3D%3D"
      heroChips={[
        "Diplomatic passport",
        "Official duty",
        "Privileges & immunities",
      ]}

      introHeading="What is a Diplomatic Visa?"
      introText="A Diplomatic Visa is issued to accredited diplomats, consular officers, and government representatives traveling abroad for official missions.  
It enables the holder to perform their diplomatic or consular functions while enjoying privileges and immunities under international law.  
These visas are typically processed through diplomatic channels—often via a Note Verbale—and are exempt from standard immigration controls or fees.  
Dependents and household staff of accredited diplomats may also receive corresponding diplomatic or official visas.  
The visa is granted strictly for official duties, and its validity usually matches the duration of the diplomatic assignment or posting."

      introImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Accredited diplomats, consular officials, and government representatives traveling for official duty.",
        },
        {
          label: "Stay Duration",
          value:
            "Typically valid for the duration of the official posting, mission, or diplomatic assignment.",
        },
        {
          label: "Work Rights",
          value:
            "Restricted to official diplomatic or consular duties under host country accreditation.",
        },
      ]}

      benefits={[
        { icon: <Shield className="w-7 h-7" />, text: "Diplomatic privileges and immunities under the Vienna Conventions" },
        { icon: <Handshake className="w-7 h-7" />, text: "Facilitated processing via diplomatic missions" },
        { icon: <Landmark className="w-7 h-7" />, text: "Authorized for official government and consular activities" },
        { icon: <FileCheck className="w-7 h-7" />, text: "Processed with a Note Verbale or official request" },
        { icon: <Globe className="w-7 h-7" />, text: "Multiple-entry and visa-exempt privileges in many countries" },
        { icon: <Award className="w-7 h-7" />, text: "Dependents may receive linked diplomatic or official visas" },
      ]}

      destinations={[
        { name: "United States (A-1, A-2 Diplomatic Visa)", url: "https://flagcdn.com/w320/us.png" },
        { name: "United Kingdom (Diplomatic Visa)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "European Union (Schengen Diplomatic Visa)", url: "https://flagcdn.com/w320/eu.png" },
        { name: "Canada (Diplomatic/Official Visa)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Australia (Diplomatic Visa – Subclass 995)", url: "https://flagcdn.com/w320/au.png" },
        { name: "New Zealand (Diplomatic & Official Visa)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "India (Diplomatic Visa – D Type)", url: "https://flagcdn.com/w320/in.png" },
        { name: "China (Diplomatic Visa – Type D)", url: "https://flagcdn.com/w320/cn.png" },
        { name: "Japan (Diplomatic Visa)", url: "https://flagcdn.com/w320/jp.png" },
        { name: "United Arab Emirates (Diplomatic Entry)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Qatar (Diplomatic Visa for Embassy Staff)", url: "https://flagcdn.com/w320/qa.png" },
        { name: "Saudi Arabia (Diplomatic & Official Visa)", url: "https://flagcdn.com/w320/sa.png" },
        { name: "Singapore (Diplomatic & Official Visa)", url: "https://flagcdn.com/w320/sg.png" },
        { name: "South Korea (Diplomatic Visa – A-1/A-2)", url: "https://flagcdn.com/w320/kr.png" },
        { name: "Switzerland (Diplomatic Accreditation Entry)", url: "https://flagcdn.com/w320/ch.png" },
        { name: "Russia (Diplomatic & Official Visa)", url: "https://flagcdn.com/w320/ru.png" },
      ]}

      ctaTitle="Need Assistance with a Diplomatic Visa?"
      ctaSubtitle="We can help coordinate Note Verbale submissions and ensure proper documentation through diplomatic channels."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
