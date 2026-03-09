"use client";

import { BriefcaseBusiness, Globe, Building2, Landmark, Users } from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function WorkVisa() {
  return (
    <SubcategoryVisaPage
      title="Work Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1661284828052-ea25d6ea94cd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHx8MA%3D%3D"
      heroChips={["Employment rights", "Country-specific permits", "Residency pathways"]}

      introHeading="What is a Work Visa"
      introText="A work visa is an authorization that allows foreign nationals to enter, live, and work legally in a host country for a specific employer or sector. Work visas are usually tied to an employment contract and often require labor market tests, proof of skills, or sponsorship from an employer. They are among the most common visa types worldwide and can serve as a pathway to permanent residency."
      introImage="https://plus.unsplash.com/premium_photo-1722945652527-d8d7ba9fd0d5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya3xlbnwwfDJ8MHx8fDA%3D"

      quickFacts={[
        { label: "Who is it for", value: "Foreign nationals hired by an employer abroad." },
        { label: "Stay Duration", value: "Varies — usually 1–5 years, renewable." },
        { label: "Work Rights", value: "Full-time work with a sponsoring employer." },
      ]}

      benefits={[
        { icon: <BriefcaseBusiness className="w-7 h-7" />, text: "Legal right to work abroad" },
        { icon: <Building2 className="w-7 h-7" />, text: "Sponsorship by employer or company" },
        { icon: <Users className="w-7 h-7" />, text: "Access to employee benefits & protections" },
        { icon: <Globe className="w-7 h-7" />, text: "Cultural & professional experience" },
        { icon: <Landmark className="w-7 h-7" />, text: "Possible pathway to residency/citizenship" },
      ]}

      destinations={[
  { name: "United States (H-1B / Employment-Based Visa)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Canada (Work Permit / Express Entry)", url: "https://flagcdn.com/w320/ca.png" },
  { name: "United Kingdom (Skilled Worker Visa)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Australia (Temporary Skill Shortage Visa - Subclass 482)", url: "https://flagcdn.com/w320/au.png" },
  { name: "Germany (Work Visa / EU Blue Card)", url: "https://flagcdn.com/w320/de.png" },
  { name: "United Arab Emirates (Employment / Work Residence Visa)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "New Zealand (Accredited Employer Work Visa)", url: "https://flagcdn.com/w320/nz.png" },
  { name: "Ireland (General & Critical Skills Employment Permit)", url: "https://flagcdn.com/w320/ie.png" },
  { name: "France (Talent Passport - Employee Visa)", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Netherlands (Highly Skilled Migrant Visa)", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Singapore (Employment Pass / S Pass)", url: "https://flagcdn.com/w320/sg.png" },
  { name: "Japan (Engineer / Specialist in Humanities / International Services Visa)", url: "https://flagcdn.com/w320/jp.png" },
  { name: "South Korea (E-Series Work Visas)", url: "https://flagcdn.com/w320/kr.png" },
  { name: "Qatar (Work Residence Permit)", url: "https://flagcdn.com/w320/qa.png" },
  { name: "Saudi Arabia (Employment / Iqama Work Visa)", url: "https://flagcdn.com/w320/sa.png" },
  { name: "Sweden (Work Permit for Professionals)", url: "https://flagcdn.com/w320/se.png" },
]}


      ctaTitle="Need Help with Your Work Visa?"
      ctaSubtitle="We provide document checklists, eligibility guidance, and application support."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
