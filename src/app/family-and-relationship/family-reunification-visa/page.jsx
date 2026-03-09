"use client";

import {
  Users,
  Home,
  HeartHandshake,
  ShieldCheck,
  Globe,
  Calendar,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function FamilyReunificationVisa() {
  return (
    <SubCategoryVisaPage
      title="Family Reunification Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1661475916373-5aaaeb4a5393?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFtaWx5fGVufDB8MHwwfHx8MA%3D%3D"
      heroChips={["Rejoin close family", "Residence pathways", "Country-specific rules"]}

      introHeading="What is a Family Reunification Visa?"
      introText="A Family Reunification Visa allows close family members of citizens or legal residents to join them abroad and live together long-term.  
It is designed to help families stay united while maintaining legal residence status.  
Eligible relatives usually include a spouse or partner, children, and in some cases, parents or other dependants.  
Requirements such as proof of relationship, sufficient income, housing, and health coverage vary by country.  
Once approved, family members typically receive residence rights that can lead to permanent residency or citizenship in the future."

      introImage="https://plus.unsplash.com/premium_photo-1722945718944-231804044283?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFtaWx5fGVufDB8MnwwfHx8MA%3D%3D"

      quickFacts={[
        { label: "Who is it for", value: "Spouse/partner, minor children, and—in some cases—parents or dependants of a citizen or resident." },
        { label: "Stay/Outcome", value: "Usually grants renewable residence status, often leading to permanent residence or citizenship." },
        { label: "Key Requirements", value: "Genuine family relationship, adequate income and housing, valid sponsorship, and country-specific eligibility checks." },
      ]}

      benefits={[
        { icon: <Users className="w-7 h-7" />, text: "Reunite and live together with your loved ones" },
        { icon: <Home className="w-7 h-7" />, text: "Secure legal long-term residence abroad" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Promotes family unity and emotional well-being" },
        { icon: <ShieldCheck className="w-7 h-7" />, text: "Enjoy legal protections under immigration law" },
        { icon: <Globe className="w-7 h-7" />, text: "Available across major immigration destinations worldwide" },
        { icon: <Calendar className="w-7 h-7" />, text: "Clear renewal timelines and potential path to citizenship" },
      ]}

      destinations={[
        { name: "European Union (Family Reunification Directive)", url: "https://flagcdn.com/w320/eu.png" },
        { name: "Germany (Family Reunion Visa)", url: "https://flagcdn.com/w320/de.png" },
        { name: "France (Family Reunification Residence Permit)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Netherlands (Family Member Residence Permit)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Spain (Reagrupación Familiar)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Italy (Family Reunification Visa - Ricongiungimento Familiare)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Canada (Family Sponsorship Program)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "United States (Immediate Relatives / Family Preference)", url: "https://flagcdn.com/w320/us.png" },
        { name: "United Kingdom (Family Route Visa)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Australia (Partner & Family Visa Streams)", url: "https://flagcdn.com/w320/au.png" },
        { name: "New Zealand (Partner & Dependent Child Visa)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "Sweden (Residence Permit for Family Members)", url: "https://flagcdn.com/w320/se.png" },
        { name: "Norway (Family Immigration Visa)", url: "https://flagcdn.com/w320/no.png" },
        { name: "Denmark (Family Reunification Permit)", url: "https://flagcdn.com/w320/dk.png" },
        { name: "Finland (Residence Permit on the Basis of Family Ties)", url: "https://flagcdn.com/w320/fi.png" },
        { name: "United Arab Emirates (Family Residence Visa)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Qatar (Family Residence Visa)", url: "https://flagcdn.com/w320/qa.png" },
      ]}

      programNotes={[
        { country: "European Union", note: "Directive 2003/86/EC allows non-EU nationals legally residing in the EU to bring close family members under common standards." },
        { country: "Germany", note: "Permits for spouses, partners, and children; income, accommodation, and language rules may apply." },
        { country: "France", note: "Foreign nationals can sponsor their spouse, partner, and dependent children; family members gain residence rights after approval." },
        { country: "Canada", note: "Covers spouse/partner, children, and parents under Family Class sponsorship. Processing and quotas may vary by category." },
        { country: "USA", note: "Includes Immediate Relative (IR) and Family Preference (F) categories; IR visas are uncapped, while F categories are quota-limited." },
        { country: "UK", note: "Family route includes spouse/partner, child, and parent. Requires financial proof and English proficiency (for adults)." },
        { country: "Australia", note: "Family and partner visas allow permanent or temporary reunification with an eligible sponsor." },
        { country: "UAE", note: "Residents earning the required income can sponsor their spouse, children, and in some cases, parents." },
      ]}

      ctaTitle="Planning Family Reunification?"
      ctaSubtitle="We’ll guide you through eligibility checks, sponsorship rules, and the right visa for your family."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
