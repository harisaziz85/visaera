"use client";

import {
  Globe,
  Award,
  HeartHandshake,
  Shield,
  FileCheck,
  Home,
  TrendingUp,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function RetirementVisa() {
  return (
    <SubcategoryVisaPage
      title="Retirement Visa"
      heroImage="https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmV0aXJlbWVudHxlbnwwfDB8MHx8fDA%3D"
      heroChips={[
        "Pension or savings proof",
        "Health insurance required",
        "Peaceful long-stay lifestyle",
      ]}

      introHeading="What is a Retirement Visa?"
      introText={`A Retirement Visa allows financially independent retirees to live abroad for an extended or permanent stay.  
These programs are designed for individuals who can support themselves through pensions, savings, or passive income without working.  
Most countries require applicants to show proof of stable income, medical insurance, a clean background, and suitable accommodation.  
Retirement visas often come with renewal options, tax advantages, and the possibility to include a spouse or dependents—making them ideal for a relaxed and secure post-career lifestyle abroad.`}

      introImage="https://plus.unsplash.com/premium_photo-1667509347968-c0006be9bc8e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Retirees with sufficient savings, pension income, or passive earnings who wish to live abroad long-term.",
        },
        {
          label: "Stay Duration",
          value:
            "Typically 1–5 years; renewable, and may lead to permanent residence or long-term settlement.",
        },
        {
          label: "Work Rights",
          value:
            "Employment is generally restricted; some programs allow limited business or volunteer activities.",
        },
      ]}

      benefits={[
        {
          icon: <Home className="w-7 h-7" />,
          text: "Enjoy long-term residence in a peaceful and scenic destination",
        },
        {
          icon: <Shield className="w-7 h-7" />,
          text: "Guaranteed stability with income, insurance, and legal compliance",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Access healthcare, housing, and community services locally",
        },
        {
          icon: <Award className="w-7 h-7" />,
          text: "Benefit from retiree-friendly taxes or incentives",
        },
        {
          icon: <HeartHandshake className="w-7 h-7" />,
          text: "Include spouse or dependents where permitted",
        },
        {
          icon: <FileCheck className="w-7 h-7" />,
          text: "Simple renewal or upgrade to long-term residence with maintained criteria",
        },
      ]}

      destinations={[
        { name: "Portugal (D7 Passive Income Visa)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Spain (Non-Lucrative Residence Visa)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Thailand (Long-Stay & O-A/O-X Retirement Visa)", url: "https://flagcdn.com/w320/th.png" },
        { name: "Malaysia (MM2H – My Second Home)", url: "https://flagcdn.com/w320/my.png" },
        { name: "Mexico (Temporary/Permanent Resident Visa)", url: "https://flagcdn.com/w320/mx.png" },
        { name: "Costa Rica (Pensionado & Rentista Program)", url: "https://flagcdn.com/w320/cr.png" },
        { name: "Panama (Pensionado Program)", url: "https://flagcdn.com/w320/pa.png" },
        { name: "Greece (Financially Independent Visa)", url: "https://flagcdn.com/w320/gr.png" },
        { name: "Italy (Elective Residence Visa)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Philippines (SRRV Retirement Visa)", url: "https://flagcdn.com/w320/ph.png" },
        { name: "Indonesia (Retirement KITAS)", url: "https://flagcdn.com/w320/id.png" },
        { name: "Malta (Retirement Programme / Permanent Residence)", url: "https://flagcdn.com/w320/mt.png" },
        { name: "Cyprus (Category F Residence Permit)", url: "https://flagcdn.com/w320/cy.png" },
        { name: "Turkey (Long-Term Residence for Retirees)", url: "https://flagcdn.com/w320/tr.png" },
        { name: "Belize (Qualified Retired Persons Program)", url: "https://flagcdn.com/w320/bz.png" },
      ]}

      ctaTitle="Ready to Retire Abroad?"
      ctaSubtitle="We’ll help you choose the best country, confirm income requirements, and prepare your complete visa application."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
