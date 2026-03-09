"use client";

import {
  GraduationCap,
  BriefcaseBusiness,
  Globe,
  TrendingUp,
  Award,
  HeartHandshake,
  Diamond,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function GoldenVisa() {
  return (
    <SubcategoryVisaPage
      title="Golden Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1754759085353-d4ef2feb53c5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
      heroChips={[
        "Investment-based residency",
        "Long-term stay & global access",
        "Family inclusion",
      ]}

      introHeading="What is a Golden Visa?"
      introText={`A **Golden Visa**—also known as a *Residency by Investment Program*—grants long-term residence (and, in some cases, citizenship eligibility) to individuals who invest in a country’s economy through **real estate, business creation, capital transfer, or national funds**.  

Governments use these programs to attract **foreign investment, innovation, and high-value residents**, offering participants and their families residence rights, education access, healthcare, and the ability to live and travel freely within the host region.  

Applications typically involve **proof of lawful funds, due diligence screening, and maintenance of qualifying investments**. Some programs also accept routes via **donations, innovation/startup funding, or high-value employment**, broadening accessibility beyond real estate.`}

      introImage="/golden-visa.png"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Global investors, entrepreneurs, startup founders, and skilled professionals seeking long-term residency with travel and lifestyle benefits.",
        },
        {
          label: "Stay Duration",
          value:
            "Generally 5–10 years; renewable; many programs offer permanent residency or citizenship after continuous residence.",
        },
        {
          label: "Work Rights",
          value:
            "Usually includes full right to work, invest, and operate businesses locally.",
        },
      ]}

      benefits={[
        {
          icon: <Diamond className="w-7 h-7" />,
          text: "Secure, renewable long-term residence for you and your family",
        },
        {
          icon: <TrendingUp className="w-7 h-7" />,
          text: "Flexible investment options: real estate, funds, business, or innovation capital",
        },
        {
          icon: <Award className="w-7 h-7" />,
          text: "Potential eligibility for citizenship or permanent residence",
        },
        {
          icon: <BriefcaseBusiness className="w-7 h-7" />,
          text: "Full business ownership and economic participation",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Visa-free mobility across regional blocs (e.g., Schengen, GCC, Caribbean)",
        },
        {
          icon: <HeartHandshake className="w-7 h-7" />,
          text: "Include spouse, children, and parents in one unified application",
        },
      ]}

      destinations={[
        { name: "United Arab Emirates (Golden Residence)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Portugal (Golden Residence Permit Program)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Greece (Golden Visa Program)", url: "https://flagcdn.com/w320/gr.png" },
        { name: "Spain (Investor Residence Program)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Italy (Investor Visa for Italy)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Malta (Permanent Residency/Investor Program)", url: "https://flagcdn.com/w320/mt.png" },
        { name: "Cyprus (Permanent Residence by Investment)", url: "https://flagcdn.com/w320/cy.png" },
        { name: "Ireland (Immigrant Investor Programme)", url: "https://flagcdn.com/w320/ie.png" },
        { name: "Singapore (Global Investor Program)", url: "https://flagcdn.com/w320/sg.png" },
        { name: "United Kingdom (Innovator/Investor Route)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Canada (Provincial Nominee & Investor Pathways)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Australia (Significant Investor Visa)", url: "https://flagcdn.com/w320/au.png" },
        { name: "Turkey (Citizenship & Long-Stay via Investment)", url: "https://flagcdn.com/w320/tr.png" },
        { name: "Saint Kitts & Nevis (Citizenship by Investment)", url: "https://flagcdn.com/w320/kn.png" },
        { name: "Mauritius (Investor Residence Permit)", url: "https://flagcdn.com/w320/mu.png" },
      ]}

      ctaTitle="Start your Golden Visa application"
      ctaSubtitle="We’ll help identify the best investment route—real estate, funds, or innovation—and guide you through every compliance step."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
