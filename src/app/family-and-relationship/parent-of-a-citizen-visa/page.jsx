"use client";

import {
  Users,
  Home,
  ShieldCheck,
  Heart,
  FileText,
  Globe,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function ParentOfCitizenVisa() {
  return (
    <SubCategoryVisaPage
      title="Parent of a Citizen Visa"
      heroImage="https://images.unsplash.com/photo-1662987619545-1844207dedac?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFyZW50cyUyMCUyQiUyMGdyYW5kcGFyZW50c3xlbnwwfDB8MHx8fDA%3D"
      heroChips={[
        "Parents & grandparents",
        "Sponsorship",
        "Residence options",
      ]}

      introHeading="What is a Parent of a Citizen Visa?"
      introText="A Parent of a Citizen Visa allows parents—and in some countries, grandparents—of citizens or permanent residents to live with their family abroad.  
It’s designed to promote family unity by enabling parents to join their children and grandchildren, either temporarily or permanently.  
Programs often include financial sponsorship, income thresholds, and medical insurance requirements to ensure sustainable family support.  
While some countries offer direct permanent residence routes, others provide long-term visitor or renewable residence permits.  
Due to high demand, several programs—such as Canada’s PGP or New Zealand’s Parent Resident Visa—operate under annual caps or invitation systems."

      introImage="https://plus.unsplash.com/premium_photo-1664304568088-414b56839572?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFyZW50cyUyMCUyQiUyMGdyYW5kcGFyZW50c3xlbnwwfDJ8MHx8fDA%3D"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Parents and grandparents of citizens or permanent residents seeking family reunification.",
        },
        {
          label: "Stay/Outcome",
          value:
            "Can lead to permanent residence or allow long-term, renewable stays depending on the country.",
        },
        {
          label: "Key Requirements",
          value:
            "Sponsorship, adequate financial resources, and valid health or medical insurance coverage.",
        },
      ]}

      benefits={[
        { icon: <Heart className="w-7 h-7" />, text: "Reunite with children and grandchildren abroad" },
        { icon: <Home className="w-7 h-7" />, text: "Live in a family environment with long-term residence options" },
        { icon: <ShieldCheck className="w-7 h-7" />, text: "Secure legal stay under family sponsorship" },
        { icon: <Users className="w-7 h-7" />, text: "Enjoy emotional and family support abroad" },
        { icon: <FileText className="w-7 h-7" />, text: "Clear eligibility and sponsorship requirements" },
        { icon: <Globe className="w-7 h-7" />, text: "Available in major immigration destinations worldwide" },
      ]}

      destinations={[
        { name: "United States (IR-5 Parents of U.S. Citizen)", url: "https://flagcdn.com/w320/us.png" },
        { name: "Canada (Parent & Grandparent Program / Super Visa)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Australia (Parent / Contributory Parent Visa)", url: "https://flagcdn.com/w320/au.png" },
        { name: "United Kingdom (Adult Dependent Relative Visa)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "New Zealand (Parent Resident / Visitor Visa)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "Germany (Family Reunion for Parents)", url: "https://flagcdn.com/w320/de.png" },
        { name: "France (Long-Stay Visa for Parents of French Citizens)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Spain (Family Reunification Visa)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Italy (Family Reunification Residence Permit)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Portugal (Family Reunification for Parents)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Netherlands (Parent / Family Immigration Route)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Ireland (Join Family Visa for Parents of Citizens)", url: "https://flagcdn.com/w320/ie.png" },
        { name: "Sweden (Residence Permit for Parents)", url: "https://flagcdn.com/w320/se.png" },
        { name: "Norway (Family Immigration for Parents)", url: "https://flagcdn.com/w320/no.png" },
        { name: "UAE (Residence Visa for Parents of Residents)", url: "https://flagcdn.com/w320/ae.png" },
      ]}

      programNotes={[
        { country: "USA", note: "IR-5 visas allow U.S. citizens aged 21+ to sponsor their parents for permanent residence with no annual caps." },
        { country: "Canada", note: "The Parent & Grandparent Program (PGP) is lottery-based with limited annual intake; the Super Visa allows long multiple-entry stays (up to 10 years)." },
        { country: "Australia", note: "Parent and Contributory Parent visas offer permanent residence, though processing times and fees differ significantly." },
        { country: "UK", note: "Adult Dependent Relative route is highly restrictive and only available for those requiring long-term personal care unavailable in their home country." },
        { country: "New Zealand", note: "Parent Resident Visa operates on a capped invitation system; sponsors must meet high income thresholds." },
        { country: "Germany", note: "Parents of minors or dependants may qualify under family reunion laws, often requiring proof of dependency or care needs." },
        { country: "France", note: "Parents of French citizens may obtain long-stay visas for family unity if financially supported by the sponsor." },
        { country: "Spain", note: "Family Reunification Visa allows Spanish citizens or residents to bring their dependent parents under income-based sponsorship." },
        { country: "Portugal", note: "Allows reunification for parents of residents or citizens with proof of dependency and stable accommodation." },
        { country: "UAE", note: "Residents can sponsor parents for renewable one-year residence visas by meeting salary and housing criteria." },
      ]}

      ctaTitle="Sponsoring Your Parents?"
      ctaSubtitle="We’ll assess your eligibility, sponsorship options, and the most suitable visa route for family reunification."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
