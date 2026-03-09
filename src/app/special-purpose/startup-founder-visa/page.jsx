"use client";

import {
  GraduationCap,
  BriefcaseBusiness,
  Globe,
  TrendingUp,
  Award,
  HeartHandshake,
  Rocket,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function StartupFounderVisa() {
  return (
    <SubcategoryVisaPage
      title="Startup Founder Visa"
      heroImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Incubator/VC support",
        "Scalable business model",
        "Pathway to residency",
      ]}

      introHeading="What is a Startup Founder Visa?"
      introText={`A **Startup Founder Visa** enables entrepreneurs to establish and grow innovative, high-potential ventures abroad.  
      
These visas are designed for **founders with scalable, original business ideas** that demonstrate clear potential for job creation, technological advancement, or export growth. Applicants typically require an **endorsement or letter of support** from a recognized **incubator, accelerator, or venture capital investor**, along with a well-documented business plan and proof of maintenance funds.  

Most startup visa programs are structured as **stepping stones to permanent residence**, offering access to local startup ecosystems, investors, and mentorship networks that help founders turn ideas into global enterprises.`}

      introImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Founders, entrepreneurs, and early-stage innovators with a viable, scalable, and impactful business plan.",
        },
        {
          label: "Stay Duration",
          value:
            "Typically 2–5 years, with extensions or permanent residence options based on business growth and job creation.",
        },
        {
          label: "Work Rights",
          value:
            "Full rights to operate and manage your own business. Some programs also allow limited outside work under specific conditions.",
        },
      ]}

      benefits={[
        {
          icon: <Rocket className="w-7 h-7" />,
          text: "Launch and scale your startup in an innovation-driven ecosystem",
        },
        {
          icon: <TrendingUp className="w-7 h-7" />,
          text: "Progress to residency through business milestones and success metrics",
        },
        {
          icon: <Award className="w-7 h-7" />,
          text: "Gain endorsement or backing from accredited startup bodies or investors",
        },
        {
          icon: <BriefcaseBusiness className="w-7 h-7" />,
          text: "Access to incubators, co-working spaces, and venture funding networks",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Expand globally with recognized residence and mobility benefits",
        },
        {
          icon: <HeartHandshake className="w-7 h-7" />,
          text: "Include dependants and co-founders where permitted by law",
        },
      ]}

      destinations={[
        { name: "United Kingdom (Innovator Founder Route)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Canada (Startup Visa Program)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "France (French Tech Visa for Founders)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Netherlands (Startup Residence Permit)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Portugal (Startup Visa)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Spain (Entrepreneur Visa)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Italy (Startup Visa Program)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Ireland (Start-up Entrepreneur Programme)", url: "https://flagcdn.com/w320/ie.png" },
        { name: "Germany (Entrepreneur Residence Permit)", url: "https://flagcdn.com/w320/de.png" },
        { name: "Estonia (Startup Visa)", url: "https://flagcdn.com/w320/ee.png" },
        { name: "Finland (Startup Residence Permit)", url: "https://flagcdn.com/w320/fi.png" },
        { name: "Sweden (Self-Employed & Startup Route)", url: "https://flagcdn.com/w320/se.png" },
        { name: "Australia (Business Innovation & Investment – Entrepreneur Stream)", url: "https://flagcdn.com/w320/au.png" },
        { name: "United Arab Emirates (Startup & Innovation Residence Program)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Singapore (EntrePass for Entrepreneurs & Innovators)", url: "https://flagcdn.com/w320/sg.png" },
      ]}

      ctaTitle="Launch your global startup journey"
      ctaSubtitle="We’ll help you secure endorsements, prepare your business plan, and apply for your Startup Founder Visa with confidence."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
