"use client";

import {
  Palette,
  Music,
  Film,
  Globe,
  Award,
  HeartHandshake,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function ArtistVisa() {
  return (
    <SubcategoryVisaPage
      title="Artist Visa"
      heroImage="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3JlYXRpdmV8ZW58MHwwfDB8fHww"
      heroChips={[
        "Cultural contribution",
        "Performances & exhibitions",
        "Residencies & collaborations",
      ]}
      introHeading="What is an Artist Visa"
      introText="An artist visa allows creative professionals such as musicians, performers, visual artists, filmmakers, and writers to live and work abroad for cultural projects, exhibitions, or performances.  
It is usually granted to those who can show proof of artistic work, sponsorship, or professional contracts.  
These visas support international collaboration and help artists share their talent and creativity across borders."
      introImage="https://images.unsplash.com/photo-1549499090-5fa12865059c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aXN0fGVufDB8MnwwfHx8MA%3D%3D"
      quickFacts={[
        { label: "Who is it for", value: "Artists, performers, musicians, and cultural professionals." },
        { label: "Stay Duration", value: "Varies by country: from a few months (project-based) to 1–3 years renewable." },
        { label: "Work Rights", value: "Restricted to artistic and cultural activities with sponsors or self-employment." },
      ]}
      benefits={[
        { icon: <Palette className="w-7 h-7" />, text: "Legal right to perform, exhibit, and work on creative projects" },
        { icon: <Music className="w-7 h-7" />, text: "Opportunities for international performances and collaborations" },
        { icon: <Film className="w-7 h-7" />, text: "Access to cultural residencies and sponsorships" },
        { icon: <Award className="w-7 h-7" />, text: "Eligibility for grants and recognition programs" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Networking with global artists and institutions" },
        { icon: <Globe className="w-7 h-7" />, text: "Contribute to cultural exchange and international festivals" },
      ]}
      destinations={[
  { name: "United States (O-1B Visa)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Germany (Berlin Artist Visa)", url: "https://flagcdn.com/w320/de.png" },
  { name: "France (Talent Passport - Artist)", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Canada (Performing Artist Work Permit)", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Spain", url: "https://flagcdn.com/w320/es.png" },
  { name: "United Kingdom (Global Talent Visa)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Netherlands (Artist Residence Permit)", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Italy", url: "https://flagcdn.com/w320/it.png" },
  { name: "South Korea", url: "https://flagcdn.com/w320/kr.png" },
  { name: "Australia", url: "https://flagcdn.com/w320/au.png" },
]}
      ctaTitle="Need help with your Artist Visa?"
      ctaSubtitle="We’ll guide you through eligibility, contracts, and documentation to ensure a smooth application."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
