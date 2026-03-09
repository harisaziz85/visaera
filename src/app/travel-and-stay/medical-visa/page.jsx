"use client";

import {
  Stethoscope,
  Hospital,
  HeartPulse,
  Pill,
  Syringe,
  Users,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function MedicalVisa() {
  return (
    <SubcategoryVisaPage
      title="Medical Visa"
      heroImage="https://images.unsplash.com/photo-1652787545245-5e39748cdf97?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNhbCUyMGFuZCUyMG1lZGljaW5lc3xlbnwwfDB8MHx8fDA%3D"
      heroChips={[
        "Specialized treatment",
        "Global hospitals",
        "Patient + attendant access",
      ]}
      introHeading="What is a Medical Visa"
      introText="A medical visa allows foreign nationals to travel to another country for medical treatment at recognized hospitals or specialized healthcare centers.  
It is commonly issued to patients seeking advanced or affordable care abroad. In many cases, a separate attendant visa is also granted for a family member or caregiver to accompany the patient during treatment."

      introImage="https://plus.unsplash.com/premium_photo-1664297459636-8096a2b535a8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
      quickFacts={[
        { label: "Who is it for", value: "Patients seeking specialized medical treatment abroad." },
        { label: "Stay Duration", value: "Typically 30 days to 6 months, extensions possible depending on treatment." },
        { label: "Work Rights", value: "Not allowed. Strictly for treatment purposes." },
      ]}
      benefits={[
        { icon: <Stethoscope className="w-7 h-7" />, text: "Access to world-class healthcare facilities" },
        { icon: <Hospital className="w-7 h-7" />, text: "Specialized hospitals and doctors" },
        { icon: <HeartPulse className="w-7 h-7" />, text: "Focus on critical treatment and recovery" },
        { icon: <Pill className="w-7 h-7" />, text: "Availability of advanced medicines and therapies" },
        { icon: <Syringe className="w-7 h-7" />, text: "High-tech surgical & diagnostic services" },
        { icon: <Users className="w-7 h-7" />, text: "Attendant visa for family support" },
      ]}
      destinations={[
  { name: "India", url: "https://flagcdn.com/w320/in.png" },
  { name: "Thailand", url: "https://flagcdn.com/w320/th.png" },
  { name: "Turkey", url: "https://flagcdn.com/w320/tr.png" },
  { name: "Germany", url: "https://flagcdn.com/w320/de.png" },
  { name: "United Arab Emirates (UAE)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "Singapore", url: "https://flagcdn.com/w320/sg.png" },
  { name: "South Korea", url: "https://flagcdn.com/w320/kr.png" },
  { name: "Malaysia", url: "https://flagcdn.com/w320/my.png" },
  { name: "United States (USA)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Switzerland", url: "https://flagcdn.com/w320/ch.png" },
]}
      ctaTitle="Need help with your Medical Visa?"
      ctaSubtitle="We assist with medical invitation letters, documentation, and attendant visa guidance."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
