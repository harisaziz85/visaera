import VisaCategoryPage from "@/components/VisaCategoryPage";

export default function HajjAndUmrah() {
  return (
    <VisaCategoryPage
      title="Book your Hajj And Umrah Packages 2026"
      heroImage="https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
      metaTitle="Saudi Hajj & Umrah Visa 2026 - Official Application"
      metaDescription="Apply for Saudi Arabia Hajj Visa or Umrah Visa online. Authorized agent for Nusuk platform. Complete packages with visa, flights, 5-star hotels & luxury transport."
      
      subcategories={[
        `Hajj Visa 2026`,
        "Umrah Visa Individual",
        "Umrah Group Package",
        "Umrah with Ziyarat",
        "Ramadan Umrah 2026",
        "Hajj CV Short Hajj",
        "Hajj Premium Package",
      ]}

      description="Official Saudi Hajj & Umrah Visa services for 2026 season. We are licensed by Ministry of Hajj & Umrah KSA and registered with Nusuk (Saudi Official Platform). Get your e-Visa within 24-48 hours with 100% approval rate. All-inclusive packages starting from PKR 385,000."

      eligibilityCriteria={[
        "Valid passport with minimum 8 months validity from date of travel",
        "Age 18–65 years (women under 45 must travel with Mahram)",
        "Must be Muslim (non-Muslims not eligible)",
        "First-time Hajj performers get priority (repeat Hajj after 5 years only)",
        "Vaccination: Meningitis (ACYW), Polio, COVID-19 (updated doses)",
        "Women require Mahram (husband, father, brother, son over 18)",
        "No criminal record or blacklist in Saudi systems",
        "Must book through licensed agent via Nusuk platform only",
      ]}

      processSteps={[
        { 
          title: "Choose Package & Register", 
          text: "Select your Hajj/Umrah package and create profile on Nusuk via our portal." 
        },
        { 
          title: "Upload Documents", 
          text: "Passport copy, CNIC, 4 photos (white background), vaccination card, Mahram proof (if applicable)." 
        },
        { 
          title: "Pay & Confirm Booking", 
          text: "Secure payment via bank transfer. Package confirmed instantly on Nusuk." 
        },
        { 
          title: "Receive e-Visa + Tickets", 
          text: "Saudi e-Visa delivered in 24-48 hours. Flight tickets & hotel vouchers via email/WhatsApp." 
        },
      ]}

      sidebarCards={[
        {
          image: "https://images.unsplash.com/photo-1713239060784-e6ed820a0715?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765",
          title: "Hajj 2026 Packages From All over the world – Limited Seats!",
          text: "5-Star Shifting Hajj ₹1,150,000 | Economy Hajj ₹895,000 | 22–42 days packages with Madinah first.",
          link: "/hajj-2026-packages",
          buttonText: "View All Hajj Packages",
          buttonType: "primary",
        },
        {
          image: "https://plus.unsplash.com/premium_photo-1697730274057-19338e84db8e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
          title: "Umrah 2026 Complete Checklist & Guide",
          text: "Nusuk registration, new rules for women, vaccine requirements, biometric, banned items list & 2026 fees.",
          tags: [`Hajj 2026`, "Umrah Guide", "Nusuk"],
          link: "/blog/umrah-2026-checklist",
          buttonText: "Download Free PDF",
          buttonType: "link",
        },
      ]}
    />
  );
}