"use client";

import {
  Banknote,
  Building2,
  ShieldCheck,
  TrendingUp,
  Globe,
  Users,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function InvestorVisa() {
  return (
    <SubcategoryVisaPage
      title="Investor Visa"
      heroImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZXN0b3J8ZW58MHwwfDB8fHww"
      heroChips={[
        "Capital investment routes",
        "Residency pathways",
        "Regulated programs",
      ]}

      introHeading="What is an Investor Visa"
      introText="An investor visa grants residence (and in some cases, a path to permanent residence) to foreign nationals who invest in qualifying assets such as approved funds, businesses, or government-designated projects. Programs are tightly regulated and change frequently—most no longer accept passive real estate purchases."
      introImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"

      quickFacts={[
        { label: "Who is it for", value: "High-net-worth individuals investing in approved funds or enterprises." },
        { label: "Stay/Outcome", value: "Typically residency with renewal; some offer PR after conditions are met." },
        { label: "What changed", value: "Many countries ended real-estate routes; check current rules per country." },
      ]}

      benefits={[
        { icon: <ShieldCheck className="w-7 h-7" />, text: "Structured, compliant route to residency" },
        { icon: <TrendingUp className="w-7 h-7" />, text: "Invest in regulated funds or job-creating businesses" },
        { icon: <Building2 className="w-7 h-7" />, text: "Access to stable markets and ecosystems" },
        { icon: <Users className="w-7 h-7" />, text: "Include eligible dependants in many programs" },
        { icon: <Globe className="w-7 h-7" />, text: "Mobility and lifestyle benefits tied to residency" },
        { icon: <Banknote className="w-7 h-7" />, text: "Potential path to permanent residence (program-dependent)" },
      ]}

     destinations={[
  { name: "United States (EB-5 Immigrant Investor Program)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Portugal (Golden Visa / Fund Investment Route)", url: "https://flagcdn.com/w320/pt.png" },
  { name: "Greece (Golden Visa Program)", url: "https://flagcdn.com/w320/gr.png" },
  { name: "United Arab Emirates (UAE Golden Visa)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "Malta (Permanent Residency by Investment)", url: "https://flagcdn.com/w320/mt.png" },
  { name: "Spain (Golden Visa Program)", url: "https://flagcdn.com/w320/es.png" },
  { name: "Italy (Investor Visa for Italy)", url: "https://flagcdn.com/w320/it.png" },
  { name: "Ireland (Immigrant Investor Programme)", url: "https://flagcdn.com/w320/ie.png" },
  { name: "Cyprus (Residency by Investment)", url: "https://flagcdn.com/w320/cy.png" },
  { name: "Canada (Investor / Entrepreneur Immigration)", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia (Investor Stream - Subclass 188)", url: "https://flagcdn.com/w320/au.png" },
  { name: "New Zealand (Investor Visa Category 1 & 2)", url: "https://flagcdn.com/w320/nz.png" },
  { name: "Singapore (Global Investor Programme)", url: "https://flagcdn.com/w320/sg.png" },
  { name: "Switzerland (Residence by Investment)", url: "https://flagcdn.com/w320/ch.png" },
  { name: "Turkey (Citizenship by Investment Program)", url: "https://flagcdn.com/w320/tr.png" },
  { name: "Dominica (Citizenship by Investment)", url: "https://flagcdn.com/w320/dm.png" },
  { name: "St. Kitts & Nevis (Citizenship by Investment)", url: "https://flagcdn.com/w320/kn.png" },
]}


      ctaTitle="Need help with your Investor Visa?"
      ctaSubtitle="We verify current rules, assess eligibility, and prepare compliant investment documentation."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
