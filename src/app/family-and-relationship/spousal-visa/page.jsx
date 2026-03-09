"use client";

import {
  HeartHandshake,
  Home,
  ShieldCheck,
  Users,
  Briefcase,
  CalendarClock,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function SpousalVisa() {
  return (
    <SubCategoryVisaPage
      title="Spousal Visa"
      heroImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Join your spouse",
        "Live together legally",
        "Work & residency options",
      ]}

      introHeading="What is a Spousal Visa?"
      introText="A Spousal Visa allows the legally married spouse or recognized partner of a citizen or permanent resident to live together in the same country.  
It is one of the most common family-based visas, offering foreign spouses the right to stay, work, and access public services.  
Most countries require proof of a genuine relationship, marriage registration, and the sponsor’s ability to provide financial support.  
Spousal visas often serve as a bridge to long-term residency or citizenship, making them a key pathway for couples to build their lives together abroad."

      introImage="https://images.unsplash.com/photo-1672288336066-8cd91b57b510?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZ3xlbnwwfDJ8MHx8fDA%3D"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Legally married spouses or recognized partners of citizens or permanent residents.",
        },
        {
          label: "Stay Duration",
          value:
            "Typically valid for 2–5 years, with renewal or permanent residence options.",
        },
        {
          label: "Work Rights",
          value:
            "Most spousal visa holders are allowed to work full-time once residence is granted.",
        },
      ]}

      benefits={[
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Live together with your spouse abroad" },
        { icon: <Home className="w-7 h-7" />, text: "Secure and stable family residence" },
        { icon: <Briefcase className="w-7 h-7" />, text: "Work rights granted in most countries" },
        { icon: <Users className="w-7 h-7" />, text: "Include dependent children under family sponsorship" },
        { icon: <ShieldCheck className="w-7 h-7" />, text: "Legal protection and recognized partnership" },
        { icon: <CalendarClock className="w-7 h-7" />, text: "Often leads to permanent residence or citizenship" },
      ]}

      destinations={[
        { name: "United States (CR1/IR1, K-3)", url: "https://flagcdn.com/w320/us.png" },
        { name: "United Kingdom (Spouse/Partner Visa)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Canada (Spousal Sponsorship)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Australia (Partner 309/100, 820/801)", url: "https://flagcdn.com/w320/au.png" },
        { name: "New Zealand (Partner of a Citizen/Resident)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "Germany (Marriage-Based Residence Permit)", url: "https://flagcdn.com/w320/de.png" },
        { name: "France (Long-Stay Visa for Spouses of French Citizens)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Spain (Marriage Residence Visa)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Italy (Family Reunification Visa for Spouses)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Netherlands (Residence Permit for Spouses)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Portugal (Spouse Residence Permit)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Ireland (Join Spouse/Partner Visa)", url: "https://flagcdn.com/w320/ie.png" },
        { name: "Sweden (Spouse Residence Permit)", url: "https://flagcdn.com/w320/se.png" },
        { name: "UAE (Marriage Visa / Spousal Sponsorship)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Singapore (Long-Term Visit Pass for Spouses)", url: "https://flagcdn.com/w320/sg.png" },
        { name: "Norway (Family Immigration for Spouses)", url: "https://flagcdn.com/w320/no.png" },
      ]}

      programNotes={[
        {
          country: "USA",
          note:
            "CR1/IR1 visas grant permanent residence to spouses of U.S. citizens. K-3 is a temporary visa while the immigrant petition is processed.",
        },
        {
          country: "UK",
          note:
            "Spouse/Partner Visa allows residence and work in the UK with a 5-year route to Indefinite Leave to Remain (ILR).",
        },
        {
          country: "Canada",
          note:
            "Spousal Sponsorship offers inland and outland routes. Inland applicants may receive an open work permit while awaiting decision.",
        },
        {
          country: "Australia",
          note:
            "Two-stage Partner Visa (309/100 or 820/801) grants temporary residence, then permanent status after relationship verification.",
        },
        {
          country: "New Zealand",
          note:
            "Partner of a New Zealander visa allows residence and full work rights for eligible spouses in genuine, stable relationships.",
        },
        {
          country: "Germany",
          note:
            "Spouses of German citizens receive residence permits with full work authorization and a pathway to settlement.",
        },
        {
          country: "France",
          note:
            "Spouses of French citizens can apply for long-stay residence visas; work is permitted upon residence approval.",
        },
        {
          country: "UAE",
          note:
            "Residents can sponsor foreign spouses for renewable 1–3 year family residence visas, subject to income and accommodation requirements.",
        },
        {
          country: "Ireland",
          note:
            "Non-EEA spouses of Irish citizens can live and work in Ireland under the 'Join Family' route, renewable after two years.",
        },
      ]}

      ctaTitle="Need Help with a Spousal Visa?"
      ctaSubtitle="We help couples gather documentation, prove relationship authenticity, and apply for residence successfully."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
