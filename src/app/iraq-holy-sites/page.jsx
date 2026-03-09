import VisaCategoryPage from "@/components/VisaCategoryPage";

export default function IraqHolySites() {
  return (
    <VisaCategoryPage
      title="Ziyarat Iraq 2026 – Najaf, Karbala Holy Shrines"
      heroImage="https://images.unsplash.com/photo-1724051526928-ae6f5d53bead?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331"
      metaTitle="Iraq Ziyarat Visa 2026 | Arbaeen 2026 Packages from All Countries"
      metaDescription="Official Iraq religious visa for visiting Imam Ali (as), Imam Hussain (as), Abbas (as) & other shrines. 30-day e-Visa + Arbaeen walking packages, flights, Mawkib stays, security escorts & 24/7 support."

      subcategories={[
        "Iraq Ziyarat Visa 30 Days",
        "Najaf-Karbala 10 Days",
        "Arbaeen Walking Package",
        "Baghdad Kazmain Ziyarat",
        "Iraq Ziyarat from India",
        "Chehlum Arbaeen 2026 Special",
      ]}

      description="Licensed Iraq Ziyarat visa agency working with Iraqi Ministry of Interior & Holy Shrines Board. Fast-track 30-day visa in 24 hours. Arbaeen 2026 packages with guaranteed security, medical team & Arabic/Urdu guides. Prices from PKR 168,000 / USD 580."

      eligibilityCriteria={[
        "Valid passport minimum 6 months",
        "Must be Muslim (Shia/Sunni both allowed)",
        "No Israeli stamps or travel history",
        "Age 7–75 years (women can travel without Mahram)",
        "Yellow Fever vaccine if coming from Africa/South America commend",
        "No criminal record",
        "Visa on Arrival available at Najaf/Baghdad airport for 120+ countries",
        "For Arbaeen: must register with Hayya card (we do it free)",
      ]}

      processSteps={[
        { title: "Choose Dates & Package", text: "Select Muharram, Arbaeen or regular 10-day Ziyarat." },
        { title: "Submit Documents", text: "Passport copy, 2 photos, vaccination if required." },
        { title: "Instant Payment", text: "Pay online – confirmation in 5 minutes." },
        { title: "Get Visa + Full Itinerary", text: "Electronic visa + Hayya card + hotel/Mawkib details on WhatsApp." },
      ]}

      sidebarCards={[
        {
          image: "https://images.unsplash.com/photo-1560832563-22dceec8fe1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
          title: "Arbaeen 2026 – 18 Days Walking Najaf to Karbala",
          text: "Free Mawkib stay • 3 meals daily • Security escort • Medical team • PKR 185,000 only",
          link: "/arbaeen-2026",
          buttonText: "Reserve Seat Now",
          buttonType: "primary",
        },
        {
          image: "https://images.unsplash.com/photo-1710367446064-0815d9a9f9c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1140",
          title: "Iraq Visa + Arbaeen Hayya Card 2026 (Step-by-Step)",
          text: "Visa on Arrival countries list, Hayya registration link, new security rules, what to pack for 40km walk.",
          tags: ["Arbaeen 2026", "Iraq Visa", "Ziyarat Guide"],
          link: "/blog/arbaeen-2026-guide",
          buttonText: "Free Download",
          buttonType: "link",
        },
      ]}
    />
  );
}