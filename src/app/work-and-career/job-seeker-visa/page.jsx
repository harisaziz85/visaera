"use client";

import { Search, Globe, Users, BadgeCheck, Briefcase } from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function JobSeekerVisa() {
  return (
    <SubcategoryVisaPage
      title="Job Seeker Visa"
      heroImage="https://images.unsplash.com/photo-1459180129673-eefb56f79b45?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am9ic3xlbnwwfDB8MHx8fDA%3D"
      heroChips={["Find jobs abroad", "No job offer required", "Bridge to work visa"]}

      introHeading="What is a Job Seeker Visa"
      introText="A Job Seeker Visa is a temporary residence permit that allows qualified professionals to enter a country and search for work without having a job offer beforehand. Once employment is secured, applicants can usually switch to a work visa or residency permit. It is commonly offered by countries experiencing skill shortages."
      introImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"

      quickFacts={[
        { label: "Who is it for", value: "Skilled professionals looking to find a job abroad." },
        { label: "Stay Duration", value: "Usually 6–12 months depending on the country." },
        { label: "Work Rights", value: "Job search only; must switch to work visa after employment." },
      ]}

      benefits={[
        { icon: <Search className="w-7 h-7" />, text: "Enter without a job offer" },
        { icon: <Briefcase className="w-7 h-7" />, text: "Find work in skill shortage occupations" },
        { icon: <BadgeCheck className="w-7 h-7" />, text: "Pathway to long-term work visas & PR" },
        { icon: <Globe className="w-7 h-7" />, text: "Opportunity to network & attend interviews in person" },
        { icon: <Users className="w-7 h-7" />, text: "Available for global talent in IT, engineering, healthcare" },
      ]}

      destinations={[
  { name: "Germany (Job Seeker Visa)", url: "https://flagcdn.com/w320/de.png" },
  { name: "Portugal (Job Seeker Visa)", url: "https://flagcdn.com/w320/pt.png" },
  { name: "United Arab Emirates (UAE Job Seeker Visa)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "Sweden (Residence Permit for Job Seekers)", url: "https://flagcdn.com/w320/se.png" },
  { name: "Austria (Job Seeker Visa - Red-White-Red Card)", url: "https://flagcdn.com/w320/at.png" },
  { name: "Finland (Residence Permit for Job Searching or Entrepreneurship)", url: "https://flagcdn.com/w320/fi.png" },
  { name: "Denmark (Establishment Card / Job Seeker Permit)", url: "https://flagcdn.com/w320/dk.png" },
  { name: "Norway (Residence Permit for Job Seekers)", url: "https://flagcdn.com/w320/no.png" },
  { name: "Spain (Job Search Residence Visa for Graduates)", url: "https://flagcdn.com/w320/es.png" },
  { name: "France (APS – Temporary Residence Permit for Job Seekers)", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Netherlands (Orientation Year - Zoekjaar Visa)", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Ireland (Third Level Graduate Scheme)", url: "https://flagcdn.com/w320/ie.png" },
  { name: "South Korea (D-10 Job Seeking Visa)", url: "https://flagcdn.com/w320/kr.png" },
  { name: "Japan (Designated Activities Visa - Job Hunting)", url: "https://flagcdn.com/w320/jp.png" },
  { name: "Czech Republic (Long-Term Residence for Job Seeking)", url: "https://flagcdn.com/w320/cz.png" },
]}


      ctaTitle="Need Help with Job Seeker Visa?"
      ctaSubtitle="We assist with eligibility checks, application documents, and next steps once you find a job."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
