// app/work-and-oriented/startup-visa/page.jsx
"use client";

import {
  Rocket,
  Users,
  Globe,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function StartupVisa() {
  return (
    <SubCategoryVisaPage
      title="Startup Visa"
      heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2400&auto=format&fit=crop"
      heroChips={["Innovation-based residency", "Endorsement required", "Global entrepreneurship"]}

      introHeading="What is a Startup Visa"
      introText="A Startup Visa provides a pathway for entrepreneurs with innovative business ideas to establish and grow ventures in another country. Eligibility typically requires endorsement by a government-recognized body, a scalable business plan, and proof of funds to support operations."
      introImage="https://plus.unsplash.com/premium_photo-1723496413713-cb1aa0e2fff6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcnR1cHxlbnwwfDJ8MHx8fDA%3D"

      quickFacts={[
        { label: "Who is it for", value: "Entrepreneurs with innovative, scalable business ideas." },
        { label: "Stay/Outcome", value: "Residency, with potential path to PR if conditions are met." },
        { label: "Key Requirement", value: "Endorsement or approval from an authorized body/investor." },
      ]}

      benefits={[
        { icon: <Rocket className="w-7 h-7" />, text: "Launch innovative ventures abroad" },
        { icon: <Lightbulb className="w-7 h-7" />, text: "Support for high-potential ideas" },
        { icon: <Users className="w-7 h-7" />, text: "Collaborate with local ecosystems" },
        { icon: <Globe className="w-7 h-7" />, text: "Global market access & networks" },
        { icon: <ShieldCheck className="w-7 h-7" />, text: "Pathway to residency or PR" },
        { icon: <TrendingUp className="w-7 h-7" />, text: "Accelerator & investor connections" },
      ]}

      destinations={[
  { name: "Canada (Start-Up Visa Program)", url: "https://flagcdn.com/w320/ca.png" },
  { name: "United Kingdom (Innovator Founder / Start-Up Visa)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "France (French Tech Visa for Founders)", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Portugal (Startup Visa Program)", url: "https://flagcdn.com/w320/pt.png" },
  { name: "Netherlands (Startup Residence Permit)", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Ireland (Start-Up Entrepreneur Programme - STEP)", url: "https://flagcdn.com/w320/ie.png" },
  { name: "Spain (Entrepreneur Visa - Ley de Emprendedores)", url: "https://flagcdn.com/w320/es.png" },
  { name: "Italy (Italia Startup Visa)", url: "https://flagcdn.com/w320/it.png" },
  { name: "Germany (Self-Employment / Entrepreneur Visa)", url: "https://flagcdn.com/w320/de.png" },
  { name: "Estonia (Startup Visa)", url: "https://flagcdn.com/w320/ee.png" },
  { name: "Finland (Startup Permit)", url: "https://flagcdn.com/w320/fi.png" },
  { name: "Denmark (Startup Denmark Program)", url: "https://flagcdn.com/w320/dk.png" },
  { name: "Lithuania (Startup Visa)", url: "https://flagcdn.com/w320/lt.png" },
  { name: "Sweden (Self-Employment Visa for Entrepreneurs)", url: "https://flagcdn.com/w320/se.png" },
  { name: "Chile (Start-Up Chile Visa)", url: "https://flagcdn.com/w320/cl.png" },
  { name: "United Arab Emirates (UAE Startup & Golden Visa for Entrepreneurs)", url: "https://flagcdn.com/w320/ae.png" },
]}


      programNotes={[
        {
          country: "Canada",
          note:
            "Startup Visa requires a Letter of Support from a designated Canadian venture fund, angel group, or incubator. Permanent residence is possible if the business is launched successfully.",
        },
        {
          country: "UK",
          note:
            "Innovator Founder Visa replaced the old Startup Visa. Requires endorsement by an approved endorsing body and demonstration of innovation, viability, and scalability.",
        },
        {
          country: "France",
          note:
            "French Tech Visa offers fast-track residency for startup founders endorsed by French Tech partners. Must show innovative business potential and financial viability.",
        },
        {
          country: "Portugal",
          note:
            "Startup Visa Portugal requires approval from IAPMEI (agency for competitiveness & innovation) and incubation in an accredited program. Focus on tech and job creation.",
        },
        {
          country: "Netherlands",
          note:
            "Dutch Startup Visa grants one year to build a business with the help of a recognized facilitator. Renewal requires progress toward scaling.",
        },
      ]}

      ctaTitle="Need help with your Startup Visa?"
      ctaSubtitle="We guide you through endorsement, documentation, and building a compliant business plan."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
