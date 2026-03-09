"use client";

import { Briefcase, Globe, Home, Plane, Users } from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function RelocationVisa() {
  return (
    <SubCategoryVisaPage
      title="Relocation Visa"
      heroImage="https://images.unsplash.com/photo-1614926781997-9ca2e6d2785a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVsb2NhdGlvbnxlbnwwfDB8MHx8fDA%3D"
      heroChips={[
        "Employer-sponsored moves",
        "Corporate transfers",
        "Long-term relocation",
      ]}

      introHeading="What is a Relocation Visa"
      introText="A Relocation Visa enables employees to be transferred by their employers to a position abroad, often with long-term or permanent residency intent. It typically includes provisions for accompanying family members and can be part of a global mobility program."
      introImage="https://plus.unsplash.com/premium_photo-1683141105358-0c27e5527cf0?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVsb2NhdGlvbnxlbnwwfDB8MHx8fDA%3D"

      quickFacts={[
        { label: "Who is it for", value: "Employees transferred by their company or hired directly with relocation benefits." },
        { label: "Stay Duration", value: "Typically 1 year to indefinite, depending on employment agreement." },
        { label: "Work Rights", value: "Full work rights under employment contract; family usually eligible for dependent visas." },
      ]}

      benefits={[
        { icon: <Briefcase className="w-7 h-7" />, text: "Immediate authorization to work abroad" },
        // { icon: <BuildingStore className="w-7 h-7" />, text: "Corporate support with immigration & logistics" },
        { icon: <Plane className="w-7 h-7" />, text: "Assisted transition to new country for work" },
        { icon: <Home className="w-7 h-7" />, text: "Family-inclusive visas/residencies" },
        { icon: <Users className="w-7 h-7" />, text: "Access to internal company relocation guidance" },
        { icon: <Globe className="w-7 h-7" />, text: "Network in global offices and expand opportunities" },
      ]}

      destinations={[
  { name: "United States (L-1 Intracompany Transfer Visa)", url: "https://flagcdn.com/w320/us.png" },
  { name: "United Kingdom (Intra-Company Transfer Visa)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Canada (Intra-Company Transfer / Global Talent Stream)", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia (Employer Sponsored / TSS Subclass 482)", url: "https://flagcdn.com/w320/au.png" },
  { name: "Germany (ICT / EU Blue Card / Transfer of Employees)", url: "https://flagcdn.com/w320/de.png" },
  { name: "France (Talent Passport – Employee on Assignment)", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Netherlands (Intra-Corporate Transferee Permit)", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Ireland (Intra-Company Transfer Employment Permit)", url: "https://flagcdn.com/w320/ie.png" },
  { name: "Singapore (Employment Pass for Corporate Transfers)", url: "https://flagcdn.com/w320/sg.png" },
  { name: "United Arab Emirates (UAE Employment / Relocation Visa)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "Japan (Intra-Company Transferee Visa)", url: "https://flagcdn.com/w320/jp.png" },
  { name: "South Korea (D-7 Intra-Company Transfer Visa)", url: "https://flagcdn.com/w320/kr.png" },
  { name: "Switzerland (Work & Residence Permit for Corporate Employees)", url: "https://flagcdn.com/w320/ch.png" },
  { name: "New Zealand (Accredited Employer Work Visa)", url: "https://flagcdn.com/w320/nz.png" },
  { name: "Sweden (Work Permit for Intra-Corporate Transfers)", url: "https://flagcdn.com/w320/se.png" },
  { name: "Denmark (Intra-Corporate Transfer Scheme)", url: "https://flagcdn.com/w320/dk.png" },
]}


      programNotes={[
        {
          country: "USA",
          note:
            "L-1 visa allows intracompany transfer for executives/professionals; start-up L-1 options also exist. Spouses eligible for L-2 work permits.",
        },
        {
          country: "UK",
          note:
            "Intra-company Transfer (ICT) visas let employees work in UK office under short-term or long-term assignments. Sponsors must be approved and the transfer genuine.",
        },
        {
          country: "Canada",
          note:
            "Facilitates employer transfers via Global Skills Strategy or intra-company transfers. Includes work permits and potential PR pathways.",
        },
        {
          country: "Australia",
          note:
            "Employer-sponsored visas (e.g., subclass 482 TSS or ENS) allow firms to relocate long-term staff; includes support for dependents.",
        },
        {
          country: "Germany",
          note:
            "Intra-company transferee arrangements exist through EU Blue Card or tailored agreements; paper-based transfers under TGTR possible.",
        },
      ]}

      ctaTitle="Need assistance with Relocation Visa?"
      ctaSubtitle="We support global mobility through employer-assisted transfers and relocation documentation."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
