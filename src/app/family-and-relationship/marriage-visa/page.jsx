"use client";

import {
  Heart,
  Home,
  ShieldCheck,
  Users,
  Globe,
  Calendar,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function MarriageVisa() {
  return (
    <SubCategoryVisaPage
      title="Marriage Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1706485734742-4a4153f34d2f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFycmlhZ2V8ZW58MHwwfDB8fHww"
      heroChips={[
        "Spouse of citizen",
        "Family unity",
        "Pathway to residency",
      ]}

      introHeading="What is a Marriage Visa?"
      introText="A Marriage Visa allows a foreign national who is legally married to a citizen or permanent resident to live together in the same country.  
It is one of the most common family-based visa types and provides foreign spouses with the right to reside, work, and in many cases, study.  
Most Marriage Visas serve as a pathway to permanent residency and eventually citizenship, helping couples build their lives together abroad.  
Eligibility requirements usually include proof of a genuine marriage, shared financial and living arrangements, and the sponsor’s income or residence status.  
The visa reinforces family unity and ensures legal protection for international couples."

      introImage="https://images.unsplash.com/photo-1672288336066-8cd91b57b510?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZ3xlbnwwfDJ8MHx8fDA%3D"

      quickFacts={[
        { label: "Who is it for", value: "Foreign spouses of citizens or permanent residents legally married under local or international law." },
        { label: "Stay Duration", value: "Typically 2–5 years, with eligibility for renewal or permanent residence afterward." },
        { label: "Work Rights", value: "Most countries grant full work rights and access to essential public services." },
      ]}

      benefits={[
        { icon: <Heart className="w-7 h-7" />, text: "Live with your spouse legally abroad" },
        { icon: <Home className="w-7 h-7" />, text: "Enjoy residence and long-term settlement options" },
        { icon: <Users className="w-7 h-7" />, text: "Strengthens family stability and togetherness" },
        { icon: <ShieldCheck className="w-7 h-7" />, text: "Ensures legal protection and recognized rights" },
        { icon: <Globe className="w-7 h-7" />, text: "Available in most major immigration systems" },
        { icon: <Calendar className="w-7 h-7" />, text: "Often leads to permanent residence or citizenship" },
      ]}

      destinations={[
        { name: "United States (CR1/IR1 Marriage Visa)", url: "https://flagcdn.com/w320/us.png" },
        { name: "United Kingdom (Spouse Visa)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Canada (Spousal Sponsorship)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Australia (Partner Visa)", url: "https://flagcdn.com/w320/au.png" },
        { name: "Germany (Marriage-Based Residence Permit)", url: "https://flagcdn.com/w320/de.png" },
        { name: "France (Marriage Residence Permit)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Italy (Family Reunification via Marriage)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Spain (Marriage Residence Visa)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Netherlands (Residence for Married Partners)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "New Zealand (Partner of a Citizen/Resident Visa)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "Ireland (Join Spouse/Partner Visa)", url: "https://flagcdn.com/w320/ie.png" },
        { name: "Sweden (Residence Permit for Spouses)", url: "https://flagcdn.com/w320/se.png" },
        { name: "Denmark (Marriage & Family Reunification Visa)", url: "https://flagcdn.com/w320/dk.png" },
        { name: "Norway (Marriage-Based Family Immigration Visa)", url: "https://flagcdn.com/w320/no.png" },
        { name: "Switzerland (Marriage & Residence Permit)", url: "https://flagcdn.com/w320/ch.png" },
        { name: "United Arab Emirates (Marriage Visa / Spouse Sponsorship)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Singapore (Long-Term Visit Pass for Married Partners)", url: "https://flagcdn.com/w320/sg.png" },
      ]}

      programNotes={[
        { country: "USA", note: "CR1/IR1 visas grant permanent residence to spouses of U.S. citizens. Conditional residence applies if married for less than two years." },
        { country: "UK", note: "Spouse Visa allows the foreign partner to live and work in the UK, with a route to Indefinite Leave to Remain (ILR) after five years." },
        { country: "Canada", note: "Spousal Sponsorship enables Canadian citizens and PRs to bring their foreign spouses under inland or outland routes." },
        { country: "Australia", note: "Partner Visa (subclass 820/801 or 309/100) allows temporary residence, leading to permanent residency after a qualifying period." },
        { country: "Germany", note: "Spouses of German citizens are eligible for residence and often immediate work rights upon arrival." },
        { country: "France", note: "Foreign spouses of French nationals can apply for a residence card after marriage registration in France." },
        { country: "Italy", note: "Marriage to an Italian citizen grants eligibility for a residence permit and eventual citizenship after two years." },
        { country: "Spain", note: "Non-EU spouses of Spanish citizens can apply for a residence visa and later permanent status." },
        { country: "UAE", note: "Residents can sponsor their spouse for a renewable family residence visa after marriage." },
        { country: "Ireland", note: "Non-EEA spouses can join Irish citizens under the 'Join Family' route with residence rights." },
      ]}

      ctaTitle="Need Help Applying for a Marriage Visa?"
      ctaSubtitle="We help couples prepare documentation, meet sponsorship criteria, and secure legal residence together."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
