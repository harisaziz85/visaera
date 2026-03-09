// app/work-and-oriented/crew-member-visa/page.jsx
"use client";

import {
  Plane,
  Ship,
  Clock,
  Globe,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function CrewMemberVisa() {
  return (
    <SubCategoryVisaPage
      title="Crew Member Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1726837453321-5a798f6b7029?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3Jld3xlbnwwfDB8MHx8fDA%3D"
      heroChips={[
        "Airline crew",
        "Ship crew",
        "International travel",
      ]}

      introHeading="What is a Crew Member Visa?"
      introText="A Crew Member Visa is a special category that allows airline staff, seafarers, and international transport crew to enter and remain temporarily in a country while on duty. It is designed to facilitate cross-border operations for air and sea carriers."
      introImage="https://plus.unsplash.com/premium_photo-1661627735794-042fec982af1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3Jld3xlbnwwfDB8MHx8fDA%3D"

      quickFacts={[
        { label: "Who is it for", value: "Airline staff, ship crew, and international transport employees." },
        { label: "Stay Duration", value: "Short-term, aligned with duty schedules and port calls." },
        { label: "Work Rights", value: "Restricted to crew duties only; not valid for general employment." },
      ]}

      benefits={[
        { icon: <Plane className="w-7 h-7" />, text: "Facilitates international airline operations" },
        { icon: <Ship className="w-7 h-7" />, text: "Supports seafarers on global shipping routes" },
        { icon: <Clock className="w-7 h-7" />, text: "Quick processing and short-term entry" },
        { icon: <ShieldCheck className="w-7 h-7" />, text: "Ensures legal compliance for crew members" },
        { icon: <Briefcase className="w-7 h-7" />, text: "Allows smooth continuation of professional duties" },
        { icon: <Globe className="w-7 h-7" />, text: "International recognition across major transport hubs" },
      ]}

      destinations={[
  { name: "United States (C-1/D Crew Visa)", url: "https://flagcdn.com/w320/us.png" },
  { name: "United Kingdom (Seafarer & Air Crew Visa)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Australia (Maritime Crew Visa - Subclass 988)", url: "https://flagcdn.com/w320/au.png" },
  { name: "Canada (Crew Member Visa / Marine Crew Work Permit)", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Schengen Area (Seafarer Transit Visa - Type C)", url: "https://flagcdn.com/w320/eu.png" },
  { name: "Singapore (Maritime Crew & Seafarer Visa)", url: "https://flagcdn.com/w320/sg.png" },
  { name: "New Zealand (Crew Member Visa)", url: "https://flagcdn.com/w320/nz.png" },
  { name: "United Arab Emirates (UAE Crew Visa)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "Qatar (Crew Entry Permit)", url: "https://flagcdn.com/w320/qa.png" },
  { name: "Hong Kong (Crew Member Visa / Landing Permit)", url: "https://flagcdn.com/w320/hk.png" },
  { name: "Japan (Crew Landing Permit)", url: "https://flagcdn.com/w320/jp.png" },
  { name: "South Korea (C-1 Crew Visa)", url: "https://flagcdn.com/w320/kr.png" },
  { name: "Norway (Seafarer Visa)", url: "https://flagcdn.com/w320/no.png" },
  { name: "Philippines (Seafarer Deployment Visa)", url: "https://flagcdn.com/w320/ph.png" },
  { name: "Panama (Seaman Transit Visa)", url: "https://flagcdn.com/w320/pa.png" },
]}


      programNotes={[
        {
          country: "USA",
          note: "Crew Visa (C-1/D) required for airline and ship crew entering U.S. ports. Valid for duty stays only.",
        },
        {
          country: "UK",
          note: "Issued to seafarers and crew arriving at UK ports; limited stay tied to ship or airline schedules.",
        },
        {
          country: "Australia",
          note: "Maritime Crew Visa (subclass 988) grants entry to crew of international ships docking in Australia.",
        },
        {
          country: "Canada",
          note: "Crew members on international flights or ships may require temporary resident visas depending on nationality.",
        },
        {
          country: "Schengen",
          note: "Crew visas allow entry into Schengen ports/airports for duty; stay duration tied to transport schedule.",
        },
      ]}

      ctaTitle="Need Help Applying for a Crew Member Visa?"
      ctaSubtitle="We assist airline staff, ship crew, and transport professionals with quick visa processing."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
