"use client";

import {
  Shield,
  FileCheck,
  Globe,
  Award,
  Landmark,
  Home,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function ReturnVisa() {
  return (
    <SubcategoryVisaPage
      title="Return Visa"
      heroImage="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D"
      heroChips={[
        "Re-entry authorization",
        "Status protection",
        "Travel while processing",
      ]}

      introHeading="What is a Return Visa?"
      introText={`A Return Visa — also known as a Re-entry Permit — allows lawful residents to leave a country and return without losing their residence status.  
It is mainly used when a residence card is being renewed, replaced, or processed, and provides legal proof of the holder’s ongoing status.  
Return visas are typically time-limited and linked to the validity of the underlying residence permit.  
They are essential for residents who need to travel temporarily abroad but must ensure uninterrupted legal re-entry into their country of residence.`}

      introImage="https://images.unsplash.com/photo-1515622472995-1a06094d2224?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MnwwfHx8MA%3D%3D"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Lawful residents awaiting residence card renewal or approval who need to travel temporarily abroad.",
        },
        {
          label: "Stay Duration",
          value:
            "Usually valid for a few months — aligned with the residence or processing period.",
        },
        {
          label: "Work Rights",
          value:
            "Work rights remain unchanged as they depend on the underlying residence authorization.",
        },
      ]}

      benefits={[
        {
          icon: <Shield className="w-7 h-7" />,
          text: "Preserves residence status during temporary travel",
        },
        {
          icon: <FileCheck className="w-7 h-7" />,
          text: "Acts as legal proof of status at immigration checkpoints",
        },
        {
          icon: <Home className="w-7 h-7" />,
          text: "Prevents loss of residence rights due to travel needs",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Allows re-entry while new cards or permits are being processed",
        },
        {
          icon: <Landmark className="w-7 h-7" />,
          text: "Issued by immigration authorities under specific residence rules",
        },
        {
          icon: <Award className="w-7 h-7" />,
          text: "Defined validity and renewability for eligible residents",
        },
      ]}

      destinations={[
        { name: "United Kingdom (Returning Resident / BRP Travel Letter)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Ireland (Re-entry Visa)", url: "https://flagcdn.com/w320/ie.png" },
        { name: "United Arab Emirates (Re-entry Permit)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Germany (Fiktionsbescheinigung – Temporary Residence Proof)", url: "https://flagcdn.com/w320/de.png" },
        { name: "France (Retour Visa)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Netherlands (Return Visa – MVV / Residence Processing)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Sweden (Return Visa for Residents Abroad)", url: "https://flagcdn.com/w320/se.png" },
        { name: "Italy (Re-entry Authorization)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Spain (Autorización de Regreso)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Portugal (Temporary Re-entry Permit)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Australia (Resident Return Visa – Subclass 155/157)", url: "https://flagcdn.com/w320/au.png" },
        { name: "New Zealand (Permanent Resident Return Conditions)", url: "https://flagcdn.com/w320/nz.png" },
      ]}

      ctaTitle="Need a Return Visa or Re-entry Permit?"
      ctaSubtitle="We’ll verify your eligibility, prepare supporting documents, and ensure your residence remains protected while you travel."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
