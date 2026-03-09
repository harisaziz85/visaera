"use client";

import {
  Landmark,
  FileCheck,
  Shield,
  Award,
  HeartHandshake,
  Globe,
  BookOpen,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function ReligiousWorkerVisa() {
  return (
    <SubcategoryVisaPage
      title="Religious Worker Visa (e.g., R-1)"
      heroImage="https://images.unsplash.com/photo-1551590192-8070a16d9f67?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Faith-based service",
        "Religious occupation",
        "Sponsorship by organization",
      ]}

      introHeading="What is a Religious Worker Visa?"
      introText={`A Religious Worker Visa allows qualified clergy, missionaries, and religious workers to travel abroad and serve within a registered faith-based or charitable organization.  
It supports individuals engaged in religious vocations such as ministers, priests, monks, nuns, missionaries, or staff performing essential religious duties.  
Applicants must usually demonstrate membership in their denomination, proof of sponsorship from a recognized organization, and the intent to perform genuine religious work.  
Many countries also extend dependent visas to the worker’s immediate family, with options for renewal or longer-term residence based on ongoing service.`}

      introImage="https://images.unsplash.com/photo-1606838974689-1a4039d727fa?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVsaWdpb3VzfGVufDB8MHwwfHx8MA%3D%3D"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Clergy, missionaries, and religious workers sponsored by recognized faith-based organizations.",
        },
        {
          label: "Stay Duration",
          value:
            "Commonly valid for 2–5 years, with extensions available depending on country and service term.",
        },
        {
          label: "Work Rights",
          value:
            "Authorized strictly for the approved religious institution or charitable entity.",
        },
      ]}

      benefits={[
        { icon: <BookOpen className="w-7 h-7" />, text: "Serve and minister in your religious calling abroad" },
        { icon: <FileCheck className="w-7 h-7" />, text: "Structured application and sponsor verification" },
        { icon: <Shield className="w-7 h-7" />, text: "Legal recognition and protection for religious service" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Eligibility for dependents in most countries" },
        { icon: <Landmark className="w-7 h-7" />, text: "Renewable visa with continued organizational support" },
        { icon: <Award className="w-7 h-7" />, text: "Potential route to residence in long-term assignments" },
      ]}

      destinations={[
        { name: "United States (R-1 Religious Worker)", url: "https://flagcdn.com/w320/us.png" },
        { name: "Canada (Religious or Charitable Worker)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "United Kingdom (Minister of Religion / Religious Worker)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Australia (Religious Worker 408 / 186)", url: "https://flagcdn.com/w320/au.png" },
        { name: "New Zealand (Religious Worker Resident / Temporary)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "Ireland (Minister of Religion Visa)", url: "https://flagcdn.com/w320/ie.png" },
        { name: "Germany (Faith-Based Organization Residence Permit)", url: "https://flagcdn.com/w320/de.png" },
        { name: "France (Religious Assignment Visa)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Italy (Missionary / Religious Residence Permit)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Spain (Religious Work & Mission Visa)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Portugal (Missionary / Religious Activity Visa)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Brazil (Missionary Visa)", url: "https://flagcdn.com/w320/br.png" },
        { name: "South Africa (Religious Worker Visa)", url: "https://flagcdn.com/w320/za.png" },
        { name: "Philippines (Missionary Visa)", url: "https://flagcdn.com/w320/ph.png" },
        { name: "South Korea (D-6 Religious Worker Visa)", url: "https://flagcdn.com/w320/kr.png" },
      ]}

      ctaTitle="Planning to Serve Abroad as a Religious Worker?"
      ctaSubtitle="We assist with sponsorship validation, evidence gathering, and country-specific filing for clergy and faith workers."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
