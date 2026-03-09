"use client";

import {
  Award,
  HeartHandshake,
  Shield,
  FileCheck,
  BriefcaseBusiness,
  Globe,
  Landmark,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function ImmigrantVisa() {
  return (
    <SubCategoryVisaPage
      title="Immigrant Visa (e.g., U.S. Green Card)"
      heroImage="https://images.unsplash.com/photo-1525799165-f95e2ccbb152?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1taWdyYW50fGVufDB8MHwwfHx8MA%3D%3D"
      heroChips={[
        "Permanent residence",
        "Family & employment routes",
        "Background checks",
      ]}

      introHeading="What is an Immigrant Visa?"
      introText="An Immigrant Visa allows individuals to permanently live and work in a country.  
It is granted to those qualifying under family sponsorship, employment-based categories, humanitarian protection, or special immigration programs like diversity lotteries.  
Successful applicants become permanent residents—often referred to as Green Card holders or PRs—gaining full legal status to live, study, and work without restriction.  
Before approval, applicants typically undergo medical examinations, security clearances, and eligibility reviews to ensure compliance with immigration laws.  
Many immigrant visa holders later become eligible to apply for citizenship after maintaining lawful residence for a defined period."

      introImage="https://plus.unsplash.com/premium_photo-1722945718944-231804044283?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGltbWlncmFudCUyMGZhbWlseXxlbnwwfDJ8MHx8fDA%3D"

      quickFacts={[
        { label: "Who is it for", value: "Family-sponsored, employment-based, humanitarian, or skilled migration applicants." },
        { label: "Stay Duration", value: "Permanent, subject to residency and admissibility maintenance." },
        { label: "Work Rights", value: "Full and unrestricted work rights upon residence approval." },
      ]}

      benefits={[
        { icon: <Landmark className="w-7 h-7" />, text: "Live and work indefinitely in your chosen country" },
        { icon: <BriefcaseBusiness className="w-7 h-7" />, text: "Access diverse job and business opportunities" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Sponsor eligible family members for future immigration" },
        { icon: <FileCheck className="w-7 h-7" />, text: "Clear, regulated path to citizenship eligibility" },
        { icon: <Shield className="w-7 h-7" />, text: "Secure residence under strong legal protections" },
        { icon: <Award className="w-7 h-7" />, text: "Eligibility for education, healthcare, and social services" },
      ]}

      destinations={[
        { name: "United States (Green Card / Diversity / Family)", url: "https://flagcdn.com/w320/us.png" },
        { name: "Canada (Permanent Residency – Express Entry, Family, Refugee)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Australia (Permanent Residence – Skilled, Family, Humanitarian)", url: "https://flagcdn.com/w320/au.png" },
        { name: "New Zealand (Residence – Skilled Migrant / Family / Investor)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "United Kingdom (Indefinite Leave to Remain / Settlement)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Germany (Permanent Residence / EU Blue Card)", url: "https://flagcdn.com/w320/de.png" },
        { name: "France (Carte de Résident – 10-year Residence)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Portugal (Permanent Residence / Golden Visa Route)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Spain (Permanent Residence / Investor Pathways)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Italy (Long-Term EU Residence Permit)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Netherlands (Permanent Residence / Highly Skilled Migrant)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Sweden (Permanent Residence after Work or Study)", url: "https://flagcdn.com/w320/se.png" },
        { name: "Ireland (Stamp 4 Permanent Residence)", url: "https://flagcdn.com/w320/ie.png" },
        { name: "Norway (Permanent Residence – Skilled / Family)", url: "https://flagcdn.com/w320/no.png" },
        { name: "Switzerland (C Permit – Permanent Residence)", url: "https://flagcdn.com/w320/ch.png" },
      ]}

      ctaTitle="Explore Your Immigrant Visa Options"
      ctaSubtitle="We’ll help identify the right pathway—family, work, or skilled—and guide you through documentation, medicals, and interviews."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
