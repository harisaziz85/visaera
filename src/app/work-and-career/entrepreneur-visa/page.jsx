"use client";

import {
  BriefcaseBusiness,
  Rocket,
  Handshake,
  Building2,
  TrendingUp,
  Banknote,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function EntrepreneurVisa() {
  return (
    <SubcategoryVisaPage
      title="Entrepreneur Visa"
      heroImage="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RW50cmVwcmVuZXVyfGVufDB8MHwwfHx8MA%3D%3D"
      heroChips={[
        "Start & scale a business",
        "Founder residence options",
        "Potential PR pathways",
      ]}

      introHeading="What is an Entrepreneur Visa"
      introText="An entrepreneur visa lets founders establish and operate a business abroad. These routes typically require a viable business plan (often innovative), endorsement or incubation, and proof of funds. Successful operation and job creation can support extensions and, in some countries, permanent residence."
      introImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"

      quickFacts={[
        { label: "Who is it for", value: "Founders and business owners with a viable, scalable venture." },
        { label: "Stay Duration", value: "Commonly 1–5 years, renewable; PR options vary by country." },
        { label: "Work Rights", value: "Run your own company; family sponsorship may be available." },
      ]}

      benefits={[
        { icon: <Rocket className="w-7 h-7" />, text: "Launch and operate an innovative venture" },
        { icon: <BriefcaseBusiness className="w-7 h-7" />, text: "Residence tied to entrepreneurial activity" },
        { icon: <Handshake className="w-7 h-7" />, text: "Access incubators, endorsing bodies, and investors" },
        { icon: <Banknote className="w-7 h-7" />, text: "Pathways linked to investment and job creation" },
        { icon: <TrendingUp className="w-7 h-7" />, text: "Potential route to long-term residence" },
        { icon: <Building2 className="w-7 h-7" />, text: "Build in established startup ecosystems" },
      ]}


      destinations={[
  { name: "United Kingdom (Innovator Founder Visa)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Canada (Start-up Visa Program)", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Portugal (Startup Visa Program)", url: "https://flagcdn.com/w320/pt.png" },
  { name: "France (French Tech Visa for Founders)", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Singapore (EntrePass for Entrepreneurs)", url: "https://flagcdn.com/w320/sg.png" },
  { name: "United Arab Emirates (UAE Golden Visa for Entrepreneurs)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "United States (E-2 Treaty Investor / EB-5 Visa)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Australia (Business Innovation & Investment Visa - Subclass 188)", url: "https://flagcdn.com/w320/au.png" },
  { name: "New Zealand (Entrepreneur Work Visa)", url: "https://flagcdn.com/w320/nz.png" },
  { name: "Netherlands (Startup Residence Permit)", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Ireland (Start-up Entrepreneur Programme)", url: "https://flagcdn.com/w320/ie.png" },
  { name: "Spain (Entrepreneur Visa - Ley de Emprendedores)", url: "https://flagcdn.com/w320/es.png" },
  { name: "Italy (Italia Startup Visa)", url: "https://flagcdn.com/w320/it.png" },
  { name: "Germany (Self-Employment / Entrepreneur Visa)", url: "https://flagcdn.com/w320/de.png" },
  { name: "Estonia (Startup Visa)", url: "https://flagcdn.com/w320/ee.png" },
  { name: "Finland (Startup Permit)", url: "https://flagcdn.com/w320/fi.png" },
  { name: "Chile (Start-Up Chile Visa)", url: "https://flagcdn.com/w320/cl.png" },
  { name: "Japan (Business Manager Visa)", url: "https://flagcdn.com/w320/jp.png" },
]}


      ctaTitle="Need help with your Entrepreneur Visa?"
      ctaSubtitle="We’ll review your business plan, map eligible routes, and prepare country-specific documents."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
