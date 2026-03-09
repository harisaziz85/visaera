"use client";

import {
  GraduationCap,
  Briefcase,
  Globe,
  TrendingUp,
  Building,
  Users,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function PostGraduationWorkPermit() {
  return (
    <SubCategoryVisaPage
      title="Post-Graduation Work Permit"
      heroImage="https://plus.unsplash.com/premium_photo-1714265045463-554b14836d42?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdCUyMGdyYWR1YXRpb258ZW58MHwwfDB8fHww"
      heroChips={[
        "Work after study",
        "Pathway to residency",
        "Career growth",
      ]}

      introHeading="What is a Post-Graduation Work Permit?"
      introText="A Post-Graduation Work Permit (PGWP) or Post-Study Work Visa enables international graduates to stay back after completing higher education abroad. It allows them to gain valuable professional experience, often with the option to transition towards permanent residency."
      introImage="https://images.unsplash.com/photo-1719604353026-f6f131333289?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvc3QlMjBncmFkdWF0aW9ufGVufDB8MnwwfHx8MA%3D%3D  "

      quickFacts={[
        { label: "Who is it for", value: "International students who have completed a recognized degree abroad." },
        { label: "Stay Duration", value: "1 to 3 years depending on country and program length." },
        { label: "Work Rights", value: "Full-time work rights after graduation in any eligible sector." },
      ]}

      benefits={[
        { icon: <Briefcase className="w-7 h-7" />, text: "Gain professional work experience abroad" },
        { icon: <TrendingUp className="w-7 h-7" />, text: "Improves career growth and employability" },
        { icon: <GraduationCap className="w-7 h-7" />, text: "Smooth transition from study to work" },
        { icon: <Globe className="w-7 h-7" />, text: "Pathway to permanent residency (country-specific)" },
        { icon: <Building className="w-7 h-7" />, text: "Eligible to work for any employer" },
        { icon: <Users className="w-7 h-7" />, text: "Opportunity to build international networks" },
      ]}

      destinations={[
  { name: "Canada (Post-Graduation Work Permit - PGWP)", url: "https://flagcdn.com/w320/ca.png" },
  { name: "United Kingdom (Graduate Route)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Australia (Temporary Graduate Visa - Subclass 485)", url: "https://flagcdn.com/w320/au.png" },
  { name: "New Zealand (Post-Study Work Visa)", url: "https://flagcdn.com/w320/nz.png" },
  { name: "Germany (18-Month Job Search Residence Permit)", url: "https://flagcdn.com/w320/de.png" },
  { name: "France (APS - Autorisation Provisoire de Séjour)", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Ireland (Third Level Graduate Scheme)", url: "https://flagcdn.com/w320/ie.png" },
  { name: "Netherlands (Orientation Year - Zoekjaar Visa)", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Sweden (Residence Permit for Job Seekers / Graduates)", url: "https://flagcdn.com/w320/se.png" },
  { name: "Finland (Residence Permit for Job Search After Graduation)", url: "https://flagcdn.com/w320/fi.png" },
  { name: "Denmark (Establishment Card for Graduates)", url: "https://flagcdn.com/w320/dk.png" },
  { name: "Norway (Residence Permit for Job Seekers After Study)", url: "https://flagcdn.com/w320/no.png" },
  { name: "Japan (Designated Activities - Job Hunting After Graduation)", url: "https://flagcdn.com/w320/jp.png" },
  { name: "South Korea (D-10 Visa for Job Seekers / Graduates)", url: "https://flagcdn.com/w320/kr.png" },
  { name: "Singapore (Long-Term Visit Pass for Graduates)", url: "https://flagcdn.com/w320/sg.png" },
]}


      programNotes={[
        {
          country: "Canada",
          note:
            "PGWP is valid for up to 3 years depending on program length. Provides work flexibility and pathway to PR via Express Entry.",
        },
        {
          country: "UK",
          note:
            "Graduate Route allows 2 years of work (3 for PhDs). Can work in any role and later switch to Skilled Worker visa.",
        },
        {
          country: "Australia",
          note:
            "Subclass 485 Graduate Work visa provides 2–4 years of post-study work, extendable in regional areas.",
        },
        {
          country: "New Zealand",
          note:
            "Allows graduates to work for up to 3 years in NZ, with opportunities to apply for residency.",
        },
        {
          country: "Germany",
          note:
            "Graduates get an 18-month residence permit to seek full-time employment in Germany.",
        },
      ]}

      ctaTitle="Need Help with Your Post-Graduation Work Permit?"
      ctaSubtitle="We guide students in securing post-study work visas and transitioning to careers abroad."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
