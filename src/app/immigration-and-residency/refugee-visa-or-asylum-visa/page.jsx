"use client";

import {
  Shield,
  FileCheck,
  Globe,
  Award,
  Landmark,
  HeartHandshake,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function RefugeeAsylumVisa() {
  return (
    <SubcategoryVisaPage
      title="Refugee / Asylum Visa"
      heroImage="https://images.unsplash.com/photo-1594841355095-17ebe26d5f6b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVmdWdlZXxlbnwwfDB8MHx8fDA%3D"
      heroChips={[
        "Protection & asylum",
        "Non-refoulement",
        "International rights",
      ]}

      introHeading="What is a Refugee / Asylum Visa?"
      introText={`A Refugee or Asylum Visa provides international protection to individuals who have fled their home countries due to a well-founded fear of persecution, war, or serious human rights violations.  
These visas safeguard people from being returned to danger (*non-refoulement*) and offer legal stay, safety, and access to humanitarian support.  
Applications are assessed case-by-case and often involve registration, interviews, and evidence evaluation by national authorities or the UNHCR.  
Recognized refugees typically receive residence rights, access to healthcare and education, and—over time—pathways to permanent settlement or citizenship.`}

      introImage="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Individuals facing persecution or harm due to race, religion, nationality, political opinion, or social group membership.",
        },
        {
          label: "Stay Duration",
          value:
            "Usually indefinite or long-term; may lead to permanent residence or citizenship depending on country.",
        },
        {
          label: "Work Rights",
          value:
            "Varies—many host nations grant work, education, and integration access post-recognition.",
        },
      ]}

      benefits={[
        { icon: <Shield className="w-7 h-7" />, text: "Legal protection under international refugee law" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Humanitarian assistance and integration support" },
        { icon: <FileCheck className="w-7 h-7" />, text: "Documentation and recognized legal status" },
        { icon: <Globe className="w-7 h-7" />, text: "Access to family reunification programs" },
        { icon: <Landmark className="w-7 h-7" />, text: "Appeal, resettlement, and permanent residence rights" },
        { icon: <Award className="w-7 h-7" />, text: "Pathway to naturalization in many countries" },
      ]}

      destinations={[
        { name: "Canada (Refugee & Asylum Protection Program)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "United States (Asylum & Refugee Resettlement)", url: "https://flagcdn.com/w320/us.png" },
        { name: "Germany (Asylum & Refugee Status)", url: "https://flagcdn.com/w320/de.png" },
        { name: "Sweden (Humanitarian Protection)", url: "https://flagcdn.com/w320/se.png" },
        { name: "France (Right of Asylum – OFPRA)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Australia (Refugee & Humanitarian Program)", url: "https://flagcdn.com/w320/au.png" },
        { name: "United Kingdom (Asylum & Protection Route)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "New Zealand (Refugee Quota Program)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "Netherlands (Asylum Procedure IND)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Norway (Refugee Protection & Integration)", url: "https://flagcdn.com/w320/no.png" },
        { name: "Switzerland (Asylum & Refugee System)", url: "https://flagcdn.com/w320/ch.png" },
        { name: "Denmark (Asylum & Temporary Protection)", url: "https://flagcdn.com/w320/dk.png" },
        { name: "Belgium (Refugee Protection CGRS)", url: "https://flagcdn.com/w320/be.png" },
        { name: "Italy (Humanitarian & Asylum Route)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Finland (Asylum & Protection Process)", url: "https://flagcdn.com/w320/fi.png" },
      ]}

      ctaTitle="Need Guidance on Refugee or Asylum Applications?"
      ctaSubtitle="We provide confidential, compassionate guidance to help you navigate protection procedures safely and effectively."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
