"use client";

import {
  Award,
  TrendingUp,
  BriefcaseBusiness,
  Globe,
  Shield,
  FileCheck,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function SpecialTalentVisa() {
  return (
    <SubcategoryVisaPage
      title="Special Talent Visa"
      heroImage="https://images.unsplash.com/photo-1598863505577-74750d3b4475?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRhbGVudHxlbnwwfDB8MHx8fDA%3D"
      heroChips={[
        "Exceptional ability",
        "Global recognition",
        "Path to residence",
      ]}

      introHeading="What is a Special Talent Visa?"
      introText={`A Special Talent Visa (also known as a Global Talent, Distinguished Talent, or Exceptional Ability visa) is designed for **individuals who have demonstrated outstanding skill, innovation, or international recognition** in their professional fields.  
It caters to high achievers in **science, technology, business, research, academia, arts, and sports**, often offering **fast-tracked residence and flexible work rights**.  

Applicants must typically prove sustained excellence through **awards, publications, patents, leadership roles, or industry impact**, and in some cases, secure **endorsements from recognized authorities or institutions**.`}

      introImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Top professionals, innovators, artists, and researchers with internationally recognized achievements.",
        },
        {
          label: "Stay Duration",
          value:
            "Commonly 3–5 years with a direct or expedited route to permanent residence or citizenship.",
        },
        {
          label: "Work Rights",
          value:
            "Full employment freedom; self-employment and startup creation often permitted.",
        },
      ]}

      benefits={[
        {
          icon: <Award className="w-7 h-7" />,
          text: "Recognizes extraordinary global achievements",
        },
        {
          icon: <TrendingUp className="w-7 h-7" />,
          text: "Accelerated pathways to residence and citizenship",
        },
        {
          icon: <BriefcaseBusiness className="w-7 h-7" />,
          text: "Freedom to work, consult, or establish ventures",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Global mobility and relocation flexibility",
        },
        {
          icon: <FileCheck className="w-7 h-7" />,
          text: "Transparent evaluation criteria (endorsements, evidence, awards)",
        },
        {
          icon: <Shield className="w-7 h-7" />,
          text: "Long-term residence stability and family inclusion",
        },
      ]}

      destinations={[
        { name: "United Kingdom (Global Talent Visa)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Australia (Global Talent Independent / Distinguished Talent)", url: "https://flagcdn.com/w320/au.png" },
        { name: "Canada (Self-Employed / Startup or Express Entry Talent Stream)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "United States (O-1, EB-1A Extraordinary Ability)", url: "https://flagcdn.com/w320/us.png" },
        { name: "New Zealand (Talent Accredited Employer / Exceptional Talent)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "Germany (Blue Card for Highly Qualified Workers)", url: "https://flagcdn.com/w320/de.png" },
        { name: "France (Talent Passport)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Singapore (Overseas Networks & Expertise Pass – ONE Pass)", url: "https://flagcdn.com/w320/sg.png" },
        { name: "Portugal (Highly Qualified Activity Visa)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Netherlands (Highly Skilled Migrant / EU Talent Scheme)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Ireland (Critical Skills Employment Permit)", url: "https://flagcdn.com/w320/ie.png" },
        { name: "Sweden (Highly Qualified Worker Residence)", url: "https://flagcdn.com/w320/se.png" },
        { name: "Finland (Specialist Residence Permit)", url: "https://flagcdn.com/w320/fi.png" },
        { name: "United Arab Emirates (Golden Visa – Exceptional Talent)", url: "https://flagcdn.com/w320/ae.png" },
      ]}

      ctaTitle="Ready to apply for a Global Talent Visa?"
      ctaSubtitle="We’ll evaluate your achievements, draft your statement of distinction, and prepare endorsement or evidence documentation."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
