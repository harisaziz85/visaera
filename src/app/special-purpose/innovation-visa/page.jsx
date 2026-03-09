"use client";

import {
  GraduationCap,
  BriefcaseBusiness,
  Globe,
  TrendingUp,
  Award,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function InnovationVisa() {
  return (
    <SubcategoryVisaPage
      title="Innovation Visa"
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Endorsement required",
        "Innovative & scalable ideas",
        "Founder-led ventures",
      ]}

      introHeading="What is an Innovation Visa?"
      introText={`An **Innovation Visa**—often known as a *Startup Visa* or *Innovator Visa*—is designed for entrepreneurs who want to **launch and grow innovative, high-potential businesses abroad**.  

Applicants typically need a **recognized endorsing body or incubator** to validate their business idea as *innovative, viable, and scalable*. They must also show a credible business plan, sufficient investment or funding access, and the skills to execute their venture.  

Many countries offer **mentorship, networking, and investor access** through startup ecosystems, giving founders a structured route from launch to permanent residence or citizenship if milestones are met.`}

      introImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop"

      quickFacts={[
        {
          label: "Who is it for",
          value:
            "Entrepreneurs, startup founders, and innovators with a unique, scalable, and commercially viable business idea.",
        },
        {
          label: "Stay Duration",
          value:
            "Commonly 2–5 years, with eligibility for permanent residence or citizenship upon business success or renewal.",
        },
        {
          label: "Work Rights",
          value:
            "Full right to manage and operate your business; most countries restrict outside employment.",
        },
      ]}

      benefits={[
        {
          icon: <Lightbulb className="w-7 h-7" />,
          text: "Recognition for high-potential, innovative business ideas",
        },
        {
          icon: <TrendingUp className="w-7 h-7" />,
          text: "Milestone-based renewals tied to real business progress",
        },
        {
          icon: <Award className="w-7 h-7" />,
          text: "Endorsement boosts investor confidence and credibility",
        },
        {
          icon: <BriefcaseBusiness className="w-7 h-7" />,
          text: "Access to accelerators, incubators, and startup ecosystems",
        },
        {
          icon: <Globe className="w-7 h-7" />,
          text: "Global exposure and cross-border expansion opportunities",
        },
        {
          icon: <HeartHandshake className="w-7 h-7" />,
          text: "Family inclusion for spouse and dependants in most countries",
        },
      ]}

      destinations={[
        { name: "United Kingdom (Innovator Founder Visa)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Portugal (Startup Visa)", url: "https://flagcdn.com/w320/pt.png" },
        { name: "Italy (Startup Visa for Founders)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Ireland (Start-up Entrepreneur Programme)", url: "https://flagcdn.com/w320/ie.png" },
        { name: "Spain (Entrepreneur Visa)", url: "https://flagcdn.com/w320/es.png" },
        { name: "France (French Tech Visa for Founders)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Netherlands (Startup Residence Permit)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Germany (Entrepreneur & Startup Residence Route)", url: "https://flagcdn.com/w320/de.png" },
        { name: "Estonia (Startup Visa Program)", url: "https://flagcdn.com/w320/ee.png" },
        { name: "Finland (Startup Residence Permit)", url: "https://flagcdn.com/w320/fi.png" },
        { name: "Canada (Startup Visa Program)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Australia (Entrepreneur Stream – Business Innovation & Investment)", url: "https://flagcdn.com/w320/au.png" },
        { name: "United Arab Emirates (Innovation & Startup Residency)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Singapore (EntrePass)", url: "https://flagcdn.com/w320/sg.png" },
        { name: "Denmark (Startup Denmark Scheme)", url: "https://flagcdn.com/w320/dk.png" },
      ]}

      ctaTitle="Start your Innovation Visa journey"
      ctaSubtitle="We’ll evaluate your business idea, align it with endorsement criteria, and prepare your investor-ready application."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
