import VisaCategoryPage from "@/components/VisaCategoryPage";

export default function IranHolySites() {
  return (
    <VisaCategoryPage
      title="Ziyarat Iran 2025 – Qom Holy Shrines"
      heroImage="https://images.unsplash.com/photo-1690324460768-e2a7a3922ffc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
      metaTitle="Iran Ziyarat Visa 2025 – Mashhad, Qom, Shiraz | Apply from Anywhere"
      metaDescription="Official Iran religious tourism visa for visiting Imam Reza (as) shrine in Mashhad, Hazrat Masooma (sa) in Qom & other holy sites. 30-day e-Visa + complete packages with flights, 5-star hotels, luxury buses & Arabic/Persian-speaking guides."

      subcategories={[
        "Iran Ziyarat Visa (30 Days)",
        "Mashhad & Qom Package",
        "Tehran & Jamkaran Mosque",
        "Muharram-Safar Iran Packages",
      ]}

      description="Authorized Iranian Ziyarat visa service for Shia Muslims worldwide. We are registered with Iran Ministry of Foreign Affairs & Iran Pilgrimage Organization. Get 30-day multiple-entry e-Visa in 48-72 hours. All-inclusive packages starting from PKR 195,000 / USD 680."

      eligibilityCriteria={[
        "Valid passport with minimum 6 months validity",
        "Must be Muslim (Shia/Sunni both welcome for Ziyarat)",
        "No Israeli passport stamps or visa",
        "Age 5–80 years (no Mahram required for women over 18)",
        "Vaccination: Polio + COVID-19 recommended",
        "Clean criminal record",
        "Booking must include hotel + return ticket",
        "Apply from any country – no embassy visit needed",
      ]}

      processSteps={[
        { title: "Select Package & Fill Form", text: "Choose 7/10/14 days Mashhad-Qom package on our portal." },
        { title: "Upload Documents", text: "Passport scan, 1 photo (ladies with hijab), flight itinerary." },
        { title: "Pay Securely", text: "Pay via card/bank transfer. Zero hidden charges." },
        { title: "Receive e-Visa + Vouchers", text: "Iran e-Visa in 48-72 hours. Hotel vouchers & internal flight tickets via WhatsApp." },
      ]}

      sidebarCards={[
        {
          image: "https://images.unsplash.com/photo-1708843473777-763eb5112e1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
          title: "Mashhad 8 Days Luxury Ziyarat – Limited Seats!",
          text: "5-Star hotel 200m from Haram • All meals • VIP Ziyarat permits • 24/7 guide • PKR 248,000",
          link: "/iran-ziyarat-mashhad",
          buttonText: "Book Now",
          buttonType: "primary",
        },
        {
          image: "https://images.unsplash.com/photo-1671812059484-86af50853942?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
          title: "Iran Ziyarat Visa 2025 New Rules (PDF Guide)",
          text: "No Israel stamp rule, women solo travel allowed, biometric at airport, banned items, dress code & 2025 fees.",
          tags: ["Iran Visa", "Ziyarat Guide", "Mashhad 2025"],
          link: "/blog/iran-ziyarat-visa-2025",
          buttonText: "Download Free Guide",
          buttonType: "link",
        },
      ]}
    />
  );
}