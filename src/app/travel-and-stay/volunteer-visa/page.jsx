"use client";

import {
  HandHeart,
  Globe2,
  Users,
  Leaf,
  HeartHandshake,
  CalendarDays,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function VolunteerVisa() {
  return (
    <SubcategoryVisaPage
      title="Volunteer Visa"
      heroImage="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Community service",
        "Charity work",
        "Cultural exchange",
      ]}
      introHeading="What is a Volunteer Visa"
      introText="A volunteer visa allows people to travel abroad to take part in unpaid community service or charitable work.  
It is ideal for individuals who want to support NGOs, humanitarian projects, or local development programs while experiencing life in a new country.  
This visa promotes cultural understanding, compassion, and global cooperation without involving paid employment."
      introImage="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop"
      quickFacts={[
        { label: "Who is it for", value: "Individuals engaging in unpaid volunteer or charity work abroad." },
        { label: "Stay Duration", value: "Usually 1–6 months (extensions possible in some countries)." },
        { label: "Work Rights", value: "Strictly unpaid. No commercial or paid employment allowed." },
      ]}
      benefits={[
        { icon: <HandHeart className="w-7 h-7" />, text: "Support humanitarian & social causes" },
        { icon: <Users className="w-7 h-7" />, text: "Engage with local communities" },
        { icon: <Leaf className="w-7 h-7" />, text: "Contribute to environmental projects" },
        { icon: <Globe2 className="w-7 h-7" />, text: "Gain international volunteer experience" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Build cross-cultural friendships" },
        { icon: <CalendarDays className="w-7 h-7" />, text: "Short-term service opportunities" },
      ]}
      destinations={[
  { name: "United Kingdom (UK)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "United States (USA)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Canada", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia", url: "https://flagcdn.com/w320/au.png" },
  { name: "New Zealand", url: "https://flagcdn.com/w320/nz.png" },
  { name: "South Africa", url: "https://flagcdn.com/w320/za.png" },
  { name: "Kenya", url: "https://flagcdn.com/w320/ke.png" },
  { name: "Thailand", url: "https://flagcdn.com/w320/th.png" },
  { name: "Nepal", url: "https://flagcdn.com/w320/np.png" },
  { name: "Costa Rica", url: "https://flagcdn.com/w320/cr.png" },
]}
      ctaTitle="Want to Volunteer Abroad?"
      ctaSubtitle="We help you navigate visa rules for charitable work and community service overseas."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
