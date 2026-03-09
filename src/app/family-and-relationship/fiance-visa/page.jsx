"use client";

import {
  Heart,
  CalendarClock,
  Plane,
  FileCheck,
  ShieldCheck,
  Users,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function FianceVisa() {
  return (
    <SubCategoryVisaPage
      title="Fiancé(e) Visa (Marriage Intent Visa)"
      heroImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop"
      heroChips={[
        "Enter to marry your partner",
        "Transition to spouse visa",
        "Temporary, pre-marriage permit",
      ]}

      introHeading="What is a Fiancé(e) Visa?"
      introText="A Fiancé(e) Visa allows a foreign partner to travel to another country for the purpose of marrying a citizen or lawful resident sponsor.  
This visa helps couples begin their life together while following the legal immigration process.  
The applicant must usually marry their partner within a set period—often between 90 and 180 days—and can then apply to switch to a spouse or partner visa for long-term residence.  
Work rights are often limited before the marriage but become available once the new visa or residence status is granted.  
The fiancé(e) visa is ideal for couples planning a wedding abroad or preparing to start their married life together under the host country’s laws."

      introImage="https://plus.unsplash.com/premium_photo-1670537037688-94a5428256b7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFycmlhZ2V8ZW58MHwyfDB8fHww"

      quickFacts={[
        { label: "Who is it for", value: "Unmarried partners who intend to marry their citizen or resident sponsor in the host country." },
        { label: "Stay Duration", value: "Typically 90–180 days; applicants must marry before expiry." },
        { label: "Work Rights", value: "Usually restricted until marriage; may apply for work rights after changing to spouse or partner visa." },
      ]}

      benefits={[
        { icon: <Heart className="w-7 h-7" />, text: "Enter legally to marry your partner" },
        { icon: <CalendarClock className="w-7 h-7" />, text: "Defined timeline for the wedding" },
        { icon: <FileCheck className="w-7 h-7" />, text: "Simplified transition to spouse or partner visa" },
        { icon: <ShieldCheck className="w-7 h-7" />, text: "Legal and transparent immigration process" },
        { icon: <Users className="w-7 h-7" />, text: "Start your life together officially abroad" },
        { icon: <Plane className="w-7 h-7" />, text: "Specifically designed for couples entering to marry" },
      ]}

      destinations={[
        { name: "United States (K-1 Fiancé(e) Visa)", url: "https://flagcdn.com/w320/us.png" },
        { name: "United Kingdom (Fiancé(e) Visa)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Australia (Prospective Marriage Visa - Subclass 300)", url: "https://flagcdn.com/w320/au.png" },
        { name: "Germany (Visa for Marriage / Intended Spouse)", url: "https://flagcdn.com/w320/de.png" },
        { name: "New Zealand (Partner or Visitor to Marry Visa)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "Canada (Marriage Visitor / Spousal Sponsorship Pathway)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "France (Marriage Visa / Long-Stay for Intended Spouse)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Netherlands (Visa for Marriage to Dutch Resident)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "Spain (Visa to Marry a Spanish Citizen or Resident)", url: "https://flagcdn.com/w320/es.png" },
        { name: "Italy (Visa for Marriage in Italy)", url: "https://flagcdn.com/w320/it.png" },
        { name: "Sweden (Residence Permit for Marriage or Cohabitation)", url: "https://flagcdn.com/w320/se.png" },
        { name: "Denmark (Visa for Marriage to Danish Citizen)", url: "https://flagcdn.com/w320/dk.png" },
        { name: "Norway (Fiancé(e) Visa / Marriage Intent)", url: "https://flagcdn.com/w320/no.png" },
        { name: "Switzerland (Marriage Visa / Family Formation Route)", url: "https://flagcdn.com/w320/ch.png" },
        { name: "United Arab Emirates (Marriage Visa / Family Formation)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Singapore (Marriage Long-Term Visit Pass)", url: "https://flagcdn.com/w320/sg.png" },
      ]}

      programNotes={[
        { country: "USA", note: "K-1 visa holders must marry a U.S. citizen sponsor within 90 days of entry and then apply for adjustment of status (green card). Work is permitted only after receiving an EAD." },
        { country: "UK", note: "Valid for 6 months; applicant must marry their British partner and switch to a spouse visa to stay. No work rights before marriage." },
        { country: "Australia", note: "Subclass 300 allows entry to marry an Australian citizen or PR within 9 months, followed by a Partner visa application." },
        { country: "Germany", note: "Visa issued for the purpose of marrying a German citizen or resident in Germany. Once married, the spouse can apply for residence." },
        { country: "New Zealand", note: "Visa allows entry to marry a New Zealand citizen or resident and transition to a partner visa after marriage." },
        { country: "France", note: "Applicants can enter France to marry a French citizen or resident and later apply for residence as a spouse." },
        { country: "Canada", note: "No formal fiancé(e) visa—couples may marry on a visitor visa and apply for spousal sponsorship after marriage." },
        { country: "Italy", note: "Foreign nationals may enter Italy to marry and then apply for residence under family reunification rules." },
        { country: "Netherlands", note: "Allows foreign partners to marry Dutch nationals and later transition to a partner residence permit." },
        { country: "UAE", note: "Residents can sponsor their fiancé(e) for marriage and convert status to spouse visa after marriage registration." },
      ]}

      ctaTitle="Planning to Marry Abroad?"
      ctaSubtitle="We’ll guide you through the fiancé(e) visa process, marriage documentation, and post-marriage residence options."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
