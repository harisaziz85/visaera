"use client";

import { BadgeCheck, Briefcase, Building2, Globe, Users } from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function SkilledWorkerVisa() {
  return (
    <SubcategoryVisaPage
      title="Skilled Worker Visa"
      heroImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2400&auto=format&fit=crop"
      heroChips={["Work legally abroad", "Pathway to PR", "For skilled professionals"]}

      introHeading="What is a Skilled Worker Visa"
      introText="A Skilled Worker Visa is designed for foreign nationals with job offers in skilled occupations that are in demand. It allows professionals such as engineers, IT experts, healthcare workers, and tradespeople to live and work abroad legally. Many countries also use this visa type as a pathway to permanent residency."
      introImage="https://images.unsplash.com/photo-1637979909766-ccf55518a928?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2VyfGVufDB8MnwwfHx8MA%3D%3D"

      quickFacts={[
        { label: "Who is it for", value: "Professionals with job offers in recognized skilled occupations." },
        { label: "Stay Duration", value: "2–5 years, renewable; often leads to permanent residency." },
        { label: "Work Rights", value: "Full-time work in approved roles; family sponsorship often included." },
      ]}

      benefits={[
        { icon: <Briefcase className="w-7 h-7" />, text: "Legal right to work in high-demand jobs" },
        { icon: <BadgeCheck className="w-7 h-7" />, text: "Pathway to permanent residency & citizenship" },
        { icon: <Users className="w-7 h-7" />, text: "Family sponsorship included in most cases" },
        { icon: <Building2 className="w-7 h-7" />, text: "Opportunities in healthcare, tech, engineering" },
        { icon: <Globe className="w-7 h-7" />, text: "Work in top economies with skill shortages" },
      ]}

      destinations={[
  { name: "United Kingdom (Skilled Worker Visa)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Canada (Express Entry / Provincial Nominee Program)", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia (Skilled Independent / State Sponsored Migration)", url: "https://flagcdn.com/w320/au.png" },
  { name: "New Zealand (Skilled Migrant Category Visa)", url: "https://flagcdn.com/w320/nz.png" },
  { name: "Germany (EU Blue Card / Skilled Worker Visa)", url: "https://flagcdn.com/w320/de.png" },
  { name: "United States (H-1B / Employment-Based Visa)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Ireland (Critical Skills Employment Permit)", url: "https://flagcdn.com/w320/ie.png" },
  { name: "France (Talent Passport - Skilled Employee)", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Netherlands (Highly Skilled Migrant Visa)", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Sweden (Work Permit for Skilled Professionals)", url: "https://flagcdn.com/w320/se.png" },
  { name: "Finland (Specialist Work Residence Permit)", url: "https://flagcdn.com/w320/fi.png" },
  { name: "Denmark (Positive List / Pay Limit Scheme)", url: "https://flagcdn.com/w320/dk.png" },
  { name: "Norway (Skilled Worker Residence Permit)", url: "https://flagcdn.com/w320/no.png" },
  { name: "United Arab Emirates (Skilled Work Visa / Golden Visa for Professionals)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "Singapore (Employment Pass for Skilled Professionals)", url: "https://flagcdn.com/w320/sg.png" },
  { name: "Switzerland (Skilled Worker Residence Permit)", url: "https://flagcdn.com/w320/ch.png" },
]}


      ctaTitle="Need Skilled Worker Visa Assistance?"
      ctaSubtitle="We provide eligibility checks, document support, and end-to-end application guidance."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
