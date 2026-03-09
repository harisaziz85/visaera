"use client";

import { Cpu, Globe, BriefcaseBusiness, Rocket, Network, Award } from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function TechVisa() {
  return (
    <SubcategoryVisaPage
      title="Tech Visa"
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "For skilled tech professionals",
        "Fast-track work permits",
        "Innovation-driven opportunities",
      ]}

      introHeading="What is a Tech Visa"
      introText="A Tech Visa is a special type of work visa designed to attract highly skilled technology professionals, entrepreneurs, and startup founders. Countries issue these visas to strengthen their digital economies by inviting talent in areas like software engineering, AI, cybersecurity, blockchain, and emerging technologies. Tech Visas often provide fast-track application processes, flexible work rights, and in some cases, pathways to permanent residency."
      introImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2h8ZW58MHx8MHx8fDA%3D"

      quickFacts={[
        { label: "Who is it for", value: "Tech experts, engineers, IT specialists, and startup founders." },
        { label: "Stay Duration", value: "Usually 1–5 years, renewable; some offer permanent residency pathways." },
        { label: "Work Rights", value: "Full-time work, often flexible between employers or startups." },
      ]}

      benefits={[
        { icon: <Cpu className="w-7 h-7" />, text: "Work in cutting-edge technology roles" },
        { icon: <Rocket className="w-7 h-7" />, text: "Fast-track visa processing & relocation" },
        { icon: <BriefcaseBusiness className="w-7 h-7" />, text: "Access to top tech hubs & ecosystems" },
        { icon: <Globe className="w-7 h-7" />, text: "Pathways to residency & citizenship" },
        { icon: <Network className="w-7 h-7" />, text: "Networking with global tech leaders" },
        { icon: <Award className="w-7 h-7" />, text: "Boost to career recognition & opportunities" },
      ]}

      destinations={[
      { name: "Canada (Global Talent Stream)", url: "https://flagcdn.com/w320/ca.png" },
      { name: "United Kingdom (Global Talent Visa)", url: "https://flagcdn.com/w320/gb.png" },
      { name: "Germany (EU Blue Card)", url: "https://flagcdn.com/w320/de.png" },
      { name: "Portugal (Tech Visa Program)", url: "https://flagcdn.com/w320/pt.png" },
      { name: "France (French Tech Visa)", url: "https://flagcdn.com/w320/fr.png" },
      { name: "Australia (Global Talent Independent Visa)", url: "https://flagcdn.com/w320/au.png" },
      { name: "United Arab Emirates (Golden Visa for Tech Talent)", url: "https://flagcdn.com/w320/ae.png" },
      { name: "United States (H-1B / O-1 Visa for Tech Experts)", url: "https://flagcdn.com/w320/us.png" },
      { name: "Netherlands (Highly Skilled Migrant Visa)", url: "https://flagcdn.com/w320/nl.png" },
      { name: "Sweden (Talent Visa for Skilled Professionals)", url: "https://flagcdn.com/w320/se.png" },
      { name: "Finland (Startup & Specialist Residence Permit)", url: "https://flagcdn.com/w320/fi.png" },
      { name: "Denmark (Positive List & Pay Limit Schemes)", url: "https://flagcdn.com/w320/dk.png" },
      { name: "Singapore (Tech.Pass & Employment Pass)", url: "https://flagcdn.com/w320/sg.png" },
      { name: "New Zealand (Accredited Employer Work Visa)", url: "https://flagcdn.com/w320/nz.png" },
      { name: "Estonia (Startup Visa & Digital Nomad Visa)", url: "https://flagcdn.com/w320/ee.png" },
      { name: "Ireland (Critical Skills Employment Permit)", url: "https://flagcdn.com/w320/ie.png" },
      { name: "Spain (High Skilled Professional Visa)", url: "https://flagcdn.com/w320/es.png" },
    ]}


      ctaTitle="Need Help with your Tech Visa?"
      ctaSubtitle="Get expert guidance on eligibility, document requirements, and fast-track application support."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
