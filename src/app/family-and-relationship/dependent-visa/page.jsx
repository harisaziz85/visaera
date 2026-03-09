"use client";

import {
  Users,
  Baby,
  Home,
  ShieldCheck,
  HeartHandshake,
  Briefcase,
} from "lucide-react";
import SubCategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function DependentVisa() {
  return (
    <SubCategoryVisaPage
      title="Dependent Visa"
      heroImage="https://images.unsplash.com/photo-1736479494399-e5cac0c43110?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnRuZXIlMjAlMkIlMjBmYW1pbHl8ZW58MHwwfDB8fHww"
      heroChips={["Join family abroad", "Spouse & children", "Linked to main visa"]}

      introHeading="What is a Dependent Visa?"
      introText="A Dependent Visa allows the family members of a main visa holder—such as a worker, student, investor, or researcher—to legally live with them in another country.  
It helps families stay together while one member studies, works, or conducts business abroad.  
Typically, dependents include a spouse or partner and minor children, but in some countries, parents or other close relatives may also qualify.  
Dependent visas often grant access to essential services such as education, healthcare, and housing. In many destinations, spouses may be allowed to work, while children can attend schools freely.  
The validity of a dependent visa is usually tied to the duration of the primary applicant’s visa."

      introImage="https://images.unsplash.com/photo-1736479494399-e5cac0c43110?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnRuZXIlMjAlMkIlMjBmYW1pbHl8ZW58MHwwfDB8fHww"

      quickFacts={[
        { label: "Who is it for", value: "Spouse/partner, children, or sometimes parents of the main visa holder." },
        { label: "Stay Duration", value: "Generally the same as the principal visa holder’s duration." },
        { label: "Work/Study", value: "Varies by country—some allow full work rights for spouses; children can study freely." },
      ]}

      benefits={[
        { icon: <Users className="w-7 h-7" />, text: "Keep your family together while abroad" },
        { icon: <Home className="w-7 h-7" />, text: "Enjoy access to housing, healthcare, and education" },
        { icon: <HeartHandshake className="w-7 h-7" />, text: "Emotional and social support for the main applicant" },
        { icon: <ShieldCheck className="w-7 h-7" />, text: "Legally recognized family residency rights" },
        { icon: <Briefcase className="w-7 h-7" />, text: "Spouses may work depending on visa conditions" },
        { icon: <Baby className="w-7 h-7" />, text: "Children can enroll in schools or childcare centers" },
      ]}

      destinations={[
        { name: "United Kingdom (Dependent of Worker/Student)", url: "https://flagcdn.com/w320/gb.png" },
        { name: "Canada (Spousal Open Work Permit)", url: "https://flagcdn.com/w320/ca.png" },
        { name: "Australia (Secondary Applicants)", url: "https://flagcdn.com/w320/au.png" },
        { name: "United States (H-4, L-2, F-2 Dependents)", url: "https://flagcdn.com/w320/us.png" },
        { name: "Germany (Family Reunion / Blue Card Dependents)", url: "https://flagcdn.com/w320/de.png" },
        { name: "France (Family Reunification Visa)", url: "https://flagcdn.com/w320/fr.png" },
        { name: "Netherlands (Family Member Residence Permit)", url: "https://flagcdn.com/w320/nl.png" },
        { name: "New Zealand (Partner of a Worker/Student Visa)", url: "https://flagcdn.com/w320/nz.png" },
        { name: "Ireland (Join Family Visa)", url: "https://flagcdn.com/w320/ie.png" },
        { name: "Sweden (Residence Permit for Family Members)", url: "https://flagcdn.com/w320/se.png" },
        { name: "Finland (Residence Permit for Family Ties)", url: "https://flagcdn.com/w320/fi.png" },
        { name: "Denmark (Family Reunification Visa)", url: "https://flagcdn.com/w320/dk.png" },
        { name: "United Arab Emirates (UAE Family Residence Visa)", url: "https://flagcdn.com/w320/ae.png" },
        { name: "Qatar (Family Residence Visa)", url: "https://flagcdn.com/w320/qa.png" },
        { name: "Singapore (Dependant’s Pass / Long-Term Visit Pass)", url: "https://flagcdn.com/w320/sg.png" },
        { name: "Norway (Family Immigration Visa)", url: "https://flagcdn.com/w320/no.png" },
        { name: "Switzerland (Family Reunification Permit)", url: "https://flagcdn.com/w320/ch.png" },
      ]}

      programNotes={[
        { country: "UK", note: "Dependents can live and, in many cases, work full-time if linked to eligible principal routes." },
        { country: "Canada", note: "Spouses of skilled workers or full-time students may qualify for an open work permit; children can study freely." },
        { country: "Australia", note: "Secondary applicants’ rights depend on the principal visa (e.g., student or skilled worker)." },
        { country: "USA", note: "H-4 spouses can work with EAD; L-2 spouses work automatically incident to status; F-2 dependents cannot work." },
        { country: "Germany", note: "Spouses and children can join Blue Card holders and usually gain work rights upon arrival." },
        { country: "France", note: "Family reunification available for legal residents with sufficient income and accommodation." },
        { country: "Netherlands", note: "Family members receive a residence permit with rights often matching the main visa holder." },
        { country: "UAE", note: "Family sponsorship available for workers earning the minimum income threshold; spouse and children eligible." },
      ]}

      ctaTitle="Bringing Family as Dependants?"
      ctaSubtitle="We’ll help you confirm eligibility, understand work rights, and prepare your dependent visa application."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
