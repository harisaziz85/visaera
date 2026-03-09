"use client";

import {
  HeartHandshake,
  Shield,
  FileCheck,
  Globe,
  Award,
  Landmark,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function HumanitarianVisa() {
  return (
    <SubCategoryVisaPage
      title="Humanitarian Visa"
      heroImage="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Urgent need",
        "Exceptional grounds",
        "Temporary entry",
      ]}

      introHeading="What is a Humanitarian Visa?"
      introText="A Humanitarian Visa is a special entry permit granted on compassionate or emergency grounds to individuals facing critical circumstances such as medical emergencies, conflict, persecution, natural disasters, or family reunification barriers.  
It is intended for people who do not meet standard visa criteria but require urgent protection or assistance.  
Applications are assessed case by case, often requiring strong supporting evidence like medical reports, proof of vulnerability, or sponsor statements.  
Some humanitarian visas allow temporary residence and access to basic rights, while others serve as a bridge to refugee or permanent protection status."

      introImage="https://images.unsplash.com/photo-1617699755337-c79e46f7eb0e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

      quickFacts={[
        { label: "Who is it for", value: "Individuals in crisis situations — medical, conflict-related, or humanitarian emergencies." },
        { label: "Stay Duration", value: "Usually temporary (3–12 months), with options for renewal or protection status conversion." },
        { label: "Work Rights", value: "Varies by country — some permit work after entry or upon protection status approval." },
      ]}

      benefits={[
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Legal entry for people in life-threatening or urgent need" },
        { icon: <Shield className="w-7 h-7" />, text: "Protection for vulnerable individuals and families" },
        { icon: <FileCheck className="w-7 h-7" />, text: "Case-by-case evaluation with humanitarian consideration" },
        { icon: <Globe className="w-7 h-7" />, text: "Possible coordination with NGOs or humanitarian agencies" },
        { icon: <Landmark className="w-7 h-7" />, text: "Bridge to refugee, protection, or residence pathways" },
        { icon: <Award className="w-7 h-7" />, text: "Access to essential healthcare, shelter, and support services" },
      ]}

      destinations={[
        { name: "Brazil (Humanitarian Visa Program)", url: "https://flagcdn.com/w320/br.png" },
        { name: "France (Visa for Humanitarian Grounds)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Italy (Humanitarian Protection / Special Cases)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Germany (Humanitarian Admission Program)", url: "https://flagcdn.com/w320/de.png" },
        { name: "Canada (Humanitarian & Compassionate Grounds)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Australia (Humanitarian & Refugee Visas)", url: "https://flagcdn.com/w320/au.png" },
        { name: "United States (Humanitarian Parole / Emergency Entry)", url: "https://flagcdn.com/w320/us.png" },
        { name: "Portugal (Humanitarian Residence Permit)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Spain (Temporary Residence for Humanitarian Reasons)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Sweden (Humanitarian Protection Residence)", url: "https://flagcdn.com/w320/se.png" },
        { name: "Netherlands (Exceptional Humanitarian Grounds)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Belgium (Humanitarian Visa / Article 9 & 13 Entry)", url: "https://flagcdn.com/w320/be.png" },
        { name: "Switzerland (Humanitarian Admission)", url: "https://flagcdn.com/w320/ch.png" },
        { name: "Norway (Protection & Humanitarian Residence Permit)", url: "https://flagcdn.com/w320/no.png" },
        { name: "Greece (Humanitarian Protection Visa)", url: "https://flagcdn.com/w320/gr.png" },
        { name: "Austria (Visa for Humanitarian Reasons)", url: "https://flagcdn.com/w320/at.png" },
      ]}

      ctaTitle="Need Humanitarian Visa Assistance?"
      ctaSubtitle="We provide urgent, compassionate visa guidance — helping you or your loved ones access safety and lawful entry quickly."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
