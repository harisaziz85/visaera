"use client";

import {
  BriefcaseBusiness,
  Globe,
  GraduationCap,
  HeartHandshake,
  School,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function TrainingVisa() {
  return (
    <SubcategoryVisaPage
      title="Training Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1682144748274-add3d8ed04ea?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kdXN0cnl8ZW58MHwwfDB8fHww"
      heroChips={[
        "Skill development",
        "Industry exposure",
        "Career growth",
      ]}
      introHeading="What is a Training Visa"
      introText="A training visa allows individuals to travel abroad and take part in structured workplace or industry-based training programs.  
It is designed to help participants gain hands-on experience, learn international best practices, and develop professional skills that enhance their career prospects.  
Training visas are ideal for professionals, interns, or graduates seeking to upgrade their expertise under recognized organizations."
      introImage="https://plus.unsplash.com/premium_photo-1723773716610-489804bab3c6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZHVzdHJ5fGVufDB8MnwwfHx8MA%3D%3D"
      quickFacts={[
        {
          label: "Who is it for",
          value: "Professionals and trainees enrolled in recognized training programs.",
        },
        {
          label: "Stay Duration",
          value: "Generally 6 months to 2 years (varies by country and program).",
        },
        {
          label: "Work Rights",
          value: "Restricted to training activities with approved host organizations.",
        },
      ]}
      benefits={[
        {
          icon: <BriefcaseBusiness className="w-7 h-7" />,
          text: "Gain structured on-the-job training in global industries",
        },
        {
          icon: <School className="w-7 h-7" />,
          text: "Enhance technical and professional skills",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "International exposure to workplace standards",
        },
        {
          icon: <HeartHandshake className="w-7 h-7" />,
          text: "Build global networks and mentor relationships",
        },
        {
          icon: <GraduationCap className="w-7 h-7" />,
          text: "Boost career growth with recognized experience",
        },
      ]}
      destinations={[
  { name: "Germany", url: "https://flagcdn.com/w320/de.png" },
  { name: "United States (J-1 Trainee Visa)", url: "https://flagcdn.com/w320/us.png" },
  { name: "Australia (Training Visa - Subclass 407)", url: "https://flagcdn.com/w320/au.png" },
  { name: "United Kingdom (Temporary Worker - GAE)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Canada", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Japan (Technical Intern Training Program)", url: "https://flagcdn.com/w320/jp.png" },
  { name: "South Korea", url: "https://flagcdn.com/w320/kr.png" },
  { name: "France", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Netherlands", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Switzerland", url: "https://flagcdn.com/w320/ch.png" },
  { name: "Singapore", url: "https://flagcdn.com/w320/sg.png" },
  { name: "New Zealand", url: "https://flagcdn.com/w320/nz.png" },
  { name: "Denmark", url: "https://flagcdn.com/w320/dk.png" },
  { name: "Finland", url: "https://flagcdn.com/w320/fi.png" },
  { name: "Sweden", url: "https://flagcdn.com/w320/se.png" },
]}
      ctaTitle="Need help with your Training Visa?"
      ctaSubtitle="Get a tailored checklist, country options, and host organization guidance."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
