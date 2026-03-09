import VisaCategoryPage from "@/components/VisaCategoryPage";



export default function ImmigrationAndResidency() {
  return (
    <VisaCategoryPage
      title="Immigration & Residency Visa"
      heroImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80"
      metaTitle="Immigration and Residency Visa - Apply Now"
      metaDescription="Apply for an Immigration and Residency Visa to settle long-term abroad. Includes legal support, accommodation assistance, and tailored visa options."
      subcategories={[
        "Residence Visa",
        "Retirement Visa",
        "Immigrant Visa",
        "Schengen Visa",
        "Return Visa",
        "Diplomatic Visa",
        "Official Visa",
        "Refugee Visa or Asylum Visa",
        "Humanitarian Visa",
        "Religious Worker Visa",
        "Surrogacy Visa",
        "Local Border Traffic Permit",
        "Special Talent Visa",
        "Journalist or Media Visa",
      ]}
      description="The Immigration and Residency Visa is intended for individuals seeking long-term or permanent stay in a foreign country. Whether you're retiring, reuniting with family, or pursuing work and life opportunities, this visa category includes various pathways such as Residence Visas, Diplomatic Visas, Asylum, or even Special Talent entry. Each visa type supports integration and settlement with varying stay durations—30, 60, or 90 days—tailored to your legal and personal circumstances. Our service includes legal assistance, documentation support, and access to residency advisors to help ensure a seamless transition."
      eligibilityCriteria={[
        "Valid passport with required visa blank pages",
        "Proof of purpose (e.g., residency, humanitarian grounds, work offer)",
        "Clean legal, immigration, and health history",
        "Proof of financial means to support stay or sponsor documents",
        "Approval or invitation from relevant authorities (if required)",
        "Medical records or vaccinations as per destination country",
        "Proof of intent to settle or fulfill the visa’s obligations",
      ]}
      processSteps={[
        { title: "Submit Application", text: "Complete the online form with accurate details." },
        { title: "Document Verification", text: "Upload required documents for review." },
        { title: "Payment", text: "Pay the visa fee securely online." },
        { title: "Visa Issuance", text: "Receive your visa via email or courier." },
      ]}
      
      sidebarCards={[
        {
          image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
          title: "Residency & Immigration Consultation",
          text: "Speak to our legal experts about your immigration and residency options.",
          link: "/contact",
          buttonText: "Contact Us Now",
          buttonType: "primary",
        },
        {
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
          title: "Immigration & Residency Visa Checklist (2025)",
          text: "A complete guide to documents, fees, and timelines for immigration and residency applications.",
          tags: ["Visa Tips", "Documents"],
          link: "/blog/immigration-residency-checklist",
          buttonText: "Read Checklist",
          buttonType: "link",
        },
      ]}
    />
  );
}
