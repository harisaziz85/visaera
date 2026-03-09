import VisaCategoryPage from "@/components/VisaCategoryPage";

export default function TravelAndStay() {
  return (
    <VisaCategoryPage
      title="Travel And Stay Visa"
      heroImage="https://static1.thetravelimages.com/wordpress/wp-content/uploads/2023/09/resized-image-promo-78.jpeg"
      metaTitle="Travel and Stay Visa - Apply Now"
      metaDescription="Apply for a Travel and Stay Visa for tourism, leisure, or visiting family. Choose from 30, 60, or 90-day plans with accommodation support."
      subcategories={[
        "Tourist Visa",
        "Visit Visa",
        "Transit Visa",
        "Medical Visa",
        "Cultural Exchange Visa",
        "Sports Visa",
        "Artist Visa",
        "Religious Visa",
        "Volunteer Visa",
        "Au Pair Visa",
      ]}
      description="The Travel and Stay Visa is a specialized visa designed for individuals planning to visit a country for both tourism and extended accommodation purposes..."
      eligibilityCriteria={[
        "Applicant must hold a valid passport with at least 6 months of validity from the date of travel",
        "Applicant must have a clear purpose of visit – tourism, leisure, or visiting family/friends",
        "No criminal record or immigration violations in any country",
        "Applicant must have sufficient financial means to cover the stay",
        "Applicant must be physically and mentally fit to travel",
        "Intention to return to home country after visa expiry must be evident",
        "Applicant should not be employed in the destination country during the stay",
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
          title: "Grab The Best Deals On Airline Tickets!",
          text: "Find low fare deals and travel to your dream destination without breaking the bank.",
          link: "/contact",
          buttonText: "Contact Us Now",
          buttonType: "primary",
        },
        {
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
          title: "Travel & Stay Visa Checklist (2025): Documents, Fees & Timeline",
          text: "The exact paperwork you need, expected fees, and how long each step takes—plus pro tips to avoid delays.",
          tags: ["Visa Tips", "Documents"],
          link: "/blog/travel-stay-visa-checklist",
          buttonText: "Read Checklist",
          buttonType: "link",
        },
      ]}
    />
  );
}
