"use client";

import {
  BriefcaseBusiness,
  Globe,
  Award,
  HeartHandshake,
  Shield,
  FileCheck,
  Home,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function ResidenceVisa() {
  return (
    <SubcategoryVisaPage
      title="Residence Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1680281937008-f9b19ed9afb6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzaWRlbmNlfGVufDB8MHwwfHx8MA%3D%3D"
      heroChips={[
        "Long-term stay",
        "Family inclusion",
        "Permanent residence pathways",
      ]}

      introHeading="What is a Residence Visa?"
      introText={`A Residence Visa allows foreign nationals to live in a country for an extended period—typically beyond 6 or 12 months.  
It is granted for various purposes such as employment, family reunification, investment, study, retirement, or humanitarian reasons.  
Most residence visas are renewable and, in many cases, serve as a pathway to permanent residency or citizenship after a qualifying period.  
Holders of a residence visa can access essential services like healthcare, education, and banking, while contributing to local communities and economies.`}

      introImage="https://images.unsplash.com/photo-1596276020587-8044fe049813?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzaWRlbmNlfGVufDB8MnwwfHx8MA%3D%3D"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Individuals relocating abroad for work, study, family, investment, or retirement purposes.",
        },
        {
          label: "Stay Duration",
          value:
            "Typically 1–5 years; renewable with the possibility of permanent residence or citizenship.",
        },
        {
          label: "Work Rights",
          value:
            "Depend on visa type—many categories allow employment, study, or business activities.",
        },
      ]}

      benefits={[
        {
          icon: <Home className="w-7 h-7" />,
          text: "Legally reside in your destination country for long-term stay",
        },
        {
          icon: <HeartHandshake className="w-7 h-7" />,
          text: "Include spouse, partner, or children under dependent routes",
        },
        {
          icon: <BriefcaseBusiness className="w-7 h-7" />,
          text: "Access employment or self-employment opportunities (as permitted)",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Enjoy travel flexibility with re-entry permissions",
        },
        {
          icon: <Shield className="w-7 h-7" />,
          text: "Clear pathway to permanent residence or citizenship",
        },
        {
          icon: <FileCheck className="w-7 h-7" />,
          text: "Access national benefits such as healthcare and education",
        },
      ]}

      destinations={[
        { name: "Canada (Temporary & Permanent Residence)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "United Kingdom (Skilled Worker / Family Route)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Germany (Residence Permit / Blue Card)", url: "https://flagcdn.com/w320/de.png" },
        { name: "United States (Permanent Resident / Green Card)", url: "https://flagcdn.com/w320/us.png" },
        { name: "United Arab Emirates (Golden Visa / Residence)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Australia (Temporary & Permanent Residency)", url: "https://flagcdn.com/w320/au.png" },
        { name: "New Zealand (Resident Visa Pathways)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "Portugal (D7, Work, & Golden Visa)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Spain (Non-Lucrative & Work Residence)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Italy (Elective Residence / Work Permits)", url: "https://flagcdn.com/w320/it.png" },
        { name: "France (Long-Stay Residence Visa)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Netherlands (MVV Residence Permit)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Sweden (Work / Family Residence Permit)", url: "https://flagcdn.com/w320/se.png" },
        { name: "Greece (Golden & Residence Permits)", url: "https://flagcdn.com/w320/gr.png" },
        { name: "Ireland (Stamp 1–4 Residence Permissions)", url: "https://flagcdn.com/w320/ie.png" },
      ]}

      ctaTitle="Need help applying for a Residence Visa?"
      ctaSubtitle="We’ll assess your visa eligibility, gather your documents, and help plan your long-term residence pathway."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
