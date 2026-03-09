"use client";

import {
  Microscope,
  FlaskConical,
  GraduationCap,
  Globe,
  Building2,
  HeartHandshake,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function ResearchVisa() {
  return (
    <SubcategoryVisaPage
      title="Research Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1661456217110-8454ef18e72a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzZWFyY2h8ZW58MHwwfDB8fHww"
      heroChips={[
        "University & lab placements",
        "Funded projects",
        "International collaboration",
      ]}

      introHeading="What is a Research Visa"
      introText="A research visa allows academics, scientists, and scholars to travel abroad to conduct research at universities, laboratories, or recognized institutes.  
It usually requires an official invitation or research agreement from a host organization and supports both short-term projects and long-term academic collaboration.  
These visas encourage global innovation, knowledge sharing, and scientific advancement across borders."

      introImage="https://plus.unsplash.com/premium_photo-1726736581322-bf96fe6b6627?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzZWFyY2h8ZW58MHwyfDB8fHww"

      quickFacts={[
        { label: "Who is it for", value: "Researchers with a host invitation or project funding." },
        { label: "Stay Duration", value: "Often 1–4 years, extendable based on project & country." },
        { label: "Work Rights", value: "Research activities with approved host; some allow dependants & limited side work." },
      ]}

      benefits={[
        { icon: <Microscope className="w-7 h-7" />, text: "Access to world-class labs & research infrastructure" },
        { icon: <FlaskConical className="w-7 h-7" />, text: "Work on funded, cutting-edge projects" },
        { icon: <Building2 className="w-7 h-7" />, text: "Affiliation with leading universities & institutes" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "International collaboration and co-authorship" },
        { icon: <GraduationCap className="w-7 h-7" />, text: "Supervision, teaching, and academic career pathways" },
        { icon: <Globe className="w-7 h-7" />, text: "Residence options & researcher-friendly mobility" },
      ]}

      destinations={[
        { name: "United Kingdom (UK)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Germany", url: "https://flagcdn.com/w320/de.png" },
        { name: "France", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Netherlands", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Canada", url: "https://flagcdn.com/w320/ca.png" },
        { name: "United States (USA)", url: "https://flagcdn.com/w320/us.png" },
        { name: "Australia", url: "https://flagcdn.com/w320/au.png" },
        { name: "Sweden", url: "https://flagcdn.com/w320/se.png" },
        { name: "Switzerland", url: "https://flagcdn.com/w320/ch.png" },
        { name: "Japan", url: "https://flagcdn.com/w320/jp.png" },
        { name: "South Korea", url: "https://flagcdn.com/w320/kr.png" },
        { name: "Norway", url: "https://flagcdn.com/w320/no.png" },
        { name: "Finland", url: "https://flagcdn.com/w320/fi.png" },
        { name: "Denmark", url: "https://flagcdn.com/w320/dk.png" },
        { name: "Singapore", url: "https://flagcdn.com/w320/sg.png" },
      ]}

      ctaTitle="Need help with your Research Visa?"
      ctaSubtitle="We’ll assess eligibility, align you with host requirements, and build a country-specific document plan."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
