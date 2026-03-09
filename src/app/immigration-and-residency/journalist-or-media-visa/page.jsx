"use client";

import {
  FileCheck,
  Shield,
  Globe,
  Award,
  Landmark,
  Newspaper,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function JournalistMediaVisa() {
  return (
    <SubCategoryVisaPage
      title="Journalist / Media Visa"
      heroImage="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Sm91cm5hbGlzdHxlbnwwfHwwfHx8MA%3D%3D"
      heroChips={[
        "Accreditation required",
        "Assignment-based entry",
        "Press & media regulations",
      ]}

      introHeading="What is a Journalist / Media Visa?"
      introText="A Journalist or Media Visa is issued to professional reporters, correspondents, camera crews, and production teams entering a country for official media assignments.  
It allows accredited media professionals to gather news, produce documentaries, and conduct interviews while complying with local press and broadcasting regulations.  
Applicants are generally required to submit employer letters, proof of assignment, media credentials, and a detailed list of filming or recording equipment.  
These visas ensure transparency, lawful reporting, and controlled access to designated regions for international and domestic coverage."

      introImage="https://images.unsplash.com/photo-1569016832321-084c128adeb8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Sm91cm5hbGlzdHxlbnwwfHwwfHx8MA%3D%3D"

      quickFacts={[
        { label: "Who is it for", value: "Journalists, correspondents, producers, camera operators, and technical media staff." },
        { label: "Stay Duration", value: "Varies by country — typically tied to project duration, with renewals possible." },
        { label: "Work Rights", value: "Restricted to officially approved journalism and filming assignments." },
      ]}

      benefits={[
        { icon: <Newspaper className="w-7 h-7" />, text: "Work legally as an accredited journalist or crew member" },
        { icon: <FileCheck className="w-7 h-7" />, text: "Streamlined approvals for assignment and filming equipment" },
        { icon: <Shield className="w-7 h-7" />, text: "Legal protection and compliance under national media laws" },
        { icon: <Globe className="w-7 h-7" />, text: "Facilitated access for international coverage and reporting" },
        { icon: <Landmark className="w-7 h-7" />, text: "Government-approved entry for news and press activities" },
        { icon: <Award className="w-7 h-7" />, text: "Extendable for recurring or long-term media projects" },
      ]}

      destinations={[
        { name: "United States (I Visa – Foreign Media Representatives)", url: "https://flagcdn.com/w320/us.png" },
        { name: "United Kingdom (Media / Journalist Visa)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "India (Journalist Visa – J Type)", url: "https://flagcdn.com/w320/in.png" },
        { name: "Australia (Temporary Activity Visa – Subclass 400 / 408)", url: "https://flagcdn.com/w320/au.png" },
        { name: "Canada (Media / Film Crew Entry Visa)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "France (Journalist Long-Stay Visa)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Germany (Press / Media Accreditation Visa)", url: "https://flagcdn.com/w320/de.png" },
        { name: "Japan (Media Visa – Journalist Category)", url: "https://flagcdn.com/w320/jp.png" },
        { name: "South Korea (D-5 Visa – Media & Reporting)", url: "https://flagcdn.com/w320/kr.png" },
        { name: "UAE (Media Visa / Dubai Media City License)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Qatar (Journalist / Media Visa for Coverage)", url: "https://flagcdn.com/w320/qa.png" },
        { name: "Singapore (Short-Term Work Pass for Media Filming)", url: "https://flagcdn.com/w320/sg.png" },
        { name: "New Zealand (Short-Term Work Visa – Media / Filming)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "South Africa (Media / Filming Visa)", url: "https://flagcdn.com/w320/za.png" },
        { name: "Brazil (Press & Media Visa)", url: "https://flagcdn.com/w320/br.png" },
        { name: "Kenya (Media Accreditation / Journalist Visa)", url: "https://flagcdn.com/w320/ke.png" },
      ]}

      ctaTitle="Apply for a Journalist / Media Visa"
      ctaSubtitle="We’ll assist with your accreditation letters, assignment approvals, and required media documentation."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
