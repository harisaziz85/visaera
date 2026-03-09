"use client";

import {
  HeartHandshake,
  FileCheck,
  Shield,
  Globe,
  Award,
  Landmark,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function SurrogacyVisa() {
  return (
    <SubcategoryVisaPage
      title="Surrogacy Visa"
      heroImage="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Parentage documentation",
        "Embassy & hospital coordination",
        "Newborn exit permits",
      ]}

      introHeading="What is a Surrogacy Visa?"
      introText={`A Surrogacy Visa facilitates **intended parents** traveling abroad to participate in **lawful surrogacy programs**, manage childbirth procedures, and return home with their newborns.  
It ensures **legal, medical, and consular compliance** for international surrogacy arrangements.  

Applicants must typically present **hospital records, birth registration, parentage or guardianship documents, and embassy authorization** for the infant’s passport or exit permit.  
Each country enforces distinct eligibility, documentation, and parental rights verification procedures, often in close coordination with **local surrogacy agencies, clinics, and consular authorities**.`}

      introImage="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=1600&auto=format&fit=crop"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Intended parents engaging in legally recognized surrogacy arrangements abroad.",
        },
        {
          label: "Stay Duration",
          value:
            "Short-term stay linked to the child’s birth registration, passport issuance, and travel authorization.",
        },
        {
          label: "Work Rights",
          value:
            "Not applicable — this visa is strictly for family and legal procedures related to surrogacy.",
        },
      ]}

      benefits={[
        {
          icon: <HeartHandshake className="w-7 h-7" />,
          text: "Ensures lawful travel for intended parents during surrogacy",
        },
        {
          icon: <FileCheck className="w-7 h-7" />,
          text: "Covers documentation from hospitals, courts, and embassies",
        },
        {
          icon: <Shield className="w-7 h-7" />,
          text: "Protects parent and child rights under national and international laws",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Streamlines cross-border coordination for newborn documentation",
        },
        {
          icon: <Landmark className="w-7 h-7" />,
          text: "Facilitates legal parentage verification and custody transfer",
        },
        {
          icon: <Award className="w-7 h-7" />,
          text: "Provides peace of mind through regulated legal frameworks",
        },
      ]}

      destinations={[
        { name: "United States (Regulated State-Level Surrogacy)", url: "https://flagcdn.com/w320/us.png" },
        { name: "Canada (Altruistic Surrogacy)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Georgia (Commercial Surrogacy – Legal)", url: "https://flagcdn.com/w320/ge.png" },
        { name: "Ukraine (Currently Limited – Legal Framework Pre-2022)", url: "https://flagcdn.com/w320/ua.png" },
        { name: "Greece (Court-Approved Surrogacy)", url: "https://flagcdn.com/w320/gr.png" },
        { name: "Portugal (Regulated Gestational Surrogacy)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Russia (Permitted under Federal Law)", url: "https://flagcdn.com/w320/ru.png" },
        { name: "Australia (Altruistic Only – Varies by State)", url: "https://flagcdn.com/w320/au.png" },
        { name: "United Kingdom (Altruistic Surrogacy with Parental Order)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "South Africa (High Court Sanctioned Surrogacy)", url: "https://flagcdn.com/w320/za.png" },
        { name: "Israel (Government-Approved Surrogacy Framework)", url: "https://flagcdn.com/w320/il.png" },
        { name: "Argentina (Legalized Gestational Surrogacy Frameworks)", url: "https://flagcdn.com/w320/ar.png" },
        { name: "Mexico (State-Level Regulation in Tabasco, Sinaloa, etc.)", url: "https://flagcdn.com/w320/mx.png" },
        { name: "India (Restricted Altruistic Surrogacy for Nationals)", url: "https://flagcdn.com/w320/in.png" },
      ]}

      ctaTitle="Planning international surrogacy travel?"
      ctaSubtitle="We assist with parental authorization letters, birth certificates, and embassy coordination for newborn documentation and exit permits."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
