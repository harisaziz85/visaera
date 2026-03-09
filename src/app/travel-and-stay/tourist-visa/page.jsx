"use client";

import {
  Building2,
  Camera,
  Globe2,
  Landmark,
  PalmtreeIcon,
  Plane,
  FileText,
  Clock,
  ShieldCheck,
} from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function TouristVisa() {
  return (
    <SubcategoryVisaPage
      title="Tourist Visa"
      heroImage="https://images.unsplash.com/photo-1567502401034-b947ee46e249?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cmlzdHN8ZW58MHwwfDB8fHww"
      heroChips={[
        "Sightseeing & holidays",
        "Short-term stay",
        "Multiple entry options",
      ]}
      introHeading="What is a Tourist Visa"
      introText="A tourist visa allows people to visit another country for a short time to enjoy holidays, sightseeing, or spend time with family and friends. It gives travelers the chance to explore new places, experience different cultures, and relax without working during their stay.  
        Most countries offer tourist visas for a few weeks or months, and many now make it easier with e-Visas or visas on arrival.  
        To apply, travelers usually need to show proof of return tickets, hotel bookings, and enough money to cover their trip."
 
      introImage="https://plus.unsplash.com/premium_photo-1723921232154-574f9172f3f4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG91cmlzdHN8ZW58MHwyfDB8fHww"
      quickFacts={[
        {
          label: "Who is it for",
          value: "Travelers visiting for tourism or leisure.",
        },
        {
          label: "Stay Duration",
          value: "Usually 15 to 90 days (country-dependent).",
        },
        {
          label: "Work Rights",
          value: "No work rights. Strictly for tourism and leisure.",
        },
      ]}
      benefits={[
        {
          icon: <Landmark className="w-7 h-7" />,
          text: "Explore world-famous landmarks",
        },
        {
          icon: <Plane className="w-7 h-7" />,
          text: "Seamless international travel",
        },
        {
          icon: <Camera className="w-7 h-7" />,
          text: "Capture unforgettable experiences",
        },
        {
          icon: <Globe2 className="w-7 h-7" />,
          text: "Access multiple countries (e.g. Schengen)",
        },
        {
          icon: <Building2 className="w-7 h-7" />,
          text: "Stay with family & friends abroad",
        },
        {
          icon: <PalmtreeIcon className="w-7 h-7" />,
          text: "Relax & enjoy vacations legally",
        },
      ]}
       destinations = {[

  { name: "Schengen (EU)", url: "https://flagcdn.com/w320/eu.png" },
  { name: "United States (USA)", url: "https://flagcdn.com/w320/us.png" },
  { name: "United Kingdom (UK)", url: "https://flagcdn.com/w320/gb.png" },
  { name: "Canada", url: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia", url: "https://flagcdn.com/w320/au.png" },
  { name: "New Zealand", url: "https://flagcdn.com/w320/nz.png" },
  { name: "Japan", url: "https://flagcdn.com/w320/jp.png" },
  { name: "Singapore", url: "https://flagcdn.com/w320/sg.png" },
  { name: "Thailand", url: "https://flagcdn.com/w320/th.png" },
  { name: "United Arab Emirates (Dubai)", url: "https://flagcdn.com/w320/ae.png" },
  { name: "Malaysia", url: "https://flagcdn.com/w320/my.png" },
  { name: "Turkey", url: "https://flagcdn.com/w320/tr.png" },
  { name: "Switzerland", url: "https://flagcdn.com/w320/ch.png" },
  { name: "South Korea", url: "https://flagcdn.com/w320/kr.png" },
  { name: "Indonesia (Bali)", url: "https://flagcdn.com/w320/id.png" },
  { name: "Greece", url: "https://flagcdn.com/w320/gr.png" },
  { name: "Italy", url: "https://flagcdn.com/w320/it.png" },
  { name: "France", url: "https://flagcdn.com/w320/fr.png" },
  { name: "Spain", url: "https://flagcdn.com/w320/es.png" },
  { name: "Germany", url: "https://flagcdn.com/w320/de.png" },
  { name: "Austria", url: "https://flagcdn.com/w320/at.png" },
  { name: "Netherlands", url: "https://flagcdn.com/w320/nl.png" },
  { name: "Portugal", url: "https://flagcdn.com/w320/pt.png" },
  { name: "Norway", url: "https://flagcdn.com/w320/no.png" },
  { name: "Sweden", url: "https://flagcdn.com/w320/se.png" },
  { name: "Denmark", url: "https://flagcdn.com/w320/dk.png" },
  { name: "Finland", url: "https://flagcdn.com/w320/fi.png" },
  { name: "Czech Republic", url: "https://flagcdn.com/w320/cz.png" },
  { name: "Hungary", url: "https://flagcdn.com/w320/hu.png" },
  { name: "Poland", url: "https://flagcdn.com/w320/pl.png" },
  { name: "Croatia", url: "https://flagcdn.com/w320/hr.png" },
  { name: "Iceland", url: "https://flagcdn.com/w320/is.png" },
  { name: "Morocco", url: "https://flagcdn.com/w320/ma.png" },
  { name: "Egypt", url: "https://flagcdn.com/w320/eg.png" },
  { name: "South Africa", url: "https://flagcdn.com/w320/za.png" },
  { name: "Qatar", url: "https://flagcdn.com/w320/qa.png" },
  { name: "Saudi Arabia", url: "https://flagcdn.com/w320/sa.png" },
  { name: "Vietnam", url: "https://flagcdn.com/w320/vn.png" },
  { name: "Philippines", url: "https://flagcdn.com/w320/ph.png" },
  { name: "Maldives", url: "https://flagcdn.com/w320/mv.png" },
  { name: "Sri Lanka", url: "https://flagcdn.com/w320/lk.png" },
  { name: "Nepal", url: "https://flagcdn.com/w320/np.png" },
  { name: "Kenya", url: "https://flagcdn.com/w320/ke.png" },
  { name: "Tanzania", url: "https://flagcdn.com/w320/tz.png" },
  { name: "Brazil", url: "https://flagcdn.com/w320/br.png" },
  { name: "Argentina", url: "https://flagcdn.com/w320/ar.png" },
  { name: "Mexico", url: "https://flagcdn.com/w320/mx.png" },
  { name: "Peru", url: "https://flagcdn.com/w320/pe.png" },
  { name: "Chile", url: "https://flagcdn.com/w320/cl.png" },
  { name: "Morocco", url: "https://flagcdn.com/w320/ma.png" },
]}
      extraSections={[
        {
          heading: "Eligibility & Requirements",
          content: (
            <div className="space-y-4">
              <p>
                To qualify for a tourist visa, applicants typically must show:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  A **valid passport** (often valid for at least 6 months beyond
                  the intended stay) and with blank visa pages. (Many countries
                  require passport validity beyond departure date.)
                </li>
                <li>
                  A completed visa application form (online or paper), plus
                  recent passport-sized photos.
                </li>
                <li>
                  Proof of onward/return travel (flight booking or itinerary).
                </li>
                <li>
                  Proof of accommodation (hotel reservations or invitation
                  letter from host).
                </li>
                <li>
                  Evidence of sufficient funds for the duration of stay (bank
                  statements, salary slips, etc.).
                </li>
                <li>
                  Proof of strong ties to home country (employment, business,
                  family, property) to ensure you will return.
                </li>
                <li>
                  Sometimes additional requirements like travel insurance,
                  medical certificates or vaccination records.
                </li>
              </ul>
            </div>
          ),
        },
        {
          heading: "Application Process & Timeline",
          content: (
            <div className="space-y-4">
              <p>The steps generally followed:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Gather required documents and fill out the visa application.
                </li>
                <li>Pay visa application / service fees (non-refundable).</li>
                <li>
                  Schedule (or attend) a visa interview at the relevant embassy
                  or consulate (if required). E.g., for U.S. B-2 visas, an
                  interview is usually required.
                  <a
                    href="https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    [travel.state.gov]
                  </a>
                </li>
                <li>
                  Fingerprinting or biometric data may be captured as part of
                  the process.
                </li>
                <li>
                  Fingerprinting or biometric data may be captured as part of
                  the process.
                </li>
                <li>
                  Wait for visa processing (can take anywhere from a few days to
                  several weeks, depending on country).
                </li>
                <li>
                  If approved, passport is returned with visa sticker or e-visa
                  approval. Then travel as per dates.
                </li>
              </ol>
              <p>
                Processing time depends on destination, embassy workload, and
                whether additional administrative checks are needed.
              </p>
            </div>
          ),
        },
        {
          heading: "Duration, Entry & Extensions",
          content: (
            <div className="space-y-4">
              <p>Once granted, tourist visas typically allow:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  A fixed period of stay (e.g. 30, 60, 90, or 180 days) as
                  decided by the destination country’s immigration rules.
                </li>
                <li>Single or multiple entries depending on visa type.</li>
                <li>
                  Extensions may be possible in-country with approval from
                  immigration authorities (in certain cases).
                </li>
                <li>
                  Overstaying or violating visa conditions may lead to fines,
                  removal, or future visa bans.
                </li>
              </ul>
            </div>
          ),
        },
        {
          heading: "Tips for Visa Approval",
          content: (
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Ensure all documents are clear, accurate, and consistent
                  (names, dates, etc.).
                </li>
                <li>
                  Be honest and transparent in your application and during
                  interviews.
                </li>
                <li>
                  Provide additional proof of financial stability or travel
                  history if available (past travel, bank statements, assets).
                </li>
                <li>
                  Avoid applying too close to travel date — leave buffer time
                  for delays.
                </li>
                <li>
                  Maintain ties to your home country (e.g. job, business,
                  family) — this is often a key evaluation factor.
                </li>
                <li>
                  Check embassy/consulate’s website for any country-specific
                  requirements or updates (e.g. extra documents, biometrics,
                  bond, etc.).
                </li>
              </ul>
            </div>
          ),
        },
      ]}
      ctaTitle="Need help with your Tourist Visa?"
      ctaSubtitle="We provide guidance on tourist visa applications, document checklists and application support."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
