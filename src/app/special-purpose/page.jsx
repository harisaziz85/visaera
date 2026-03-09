import VisaCategoryPage from "@/components/VisaCategoryPage";

export default function SpecialPurpose() {
  return (
    <VisaCategoryPage
      title="Special Purpose Visa"
      heroImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmswYj5PDwc4zO7EDw2dkI9ycobA9wT3ukg&s"
      metaTitle="Special Purpose Visa - Apply Now"
      metaDescription="Apply for a Special Purpose Visa for unique, humanitarian, cultural, or specialized travel needs with tailored support and documentation assistance."
      subcategories={[
        "Startup Founder Visa",
        "Innovation Visa",
        "Elite Visa",
        "Golden Visa",
      ]}
      description="A Special Purpose Visa is designed for travelers or applicants with unique, exceptional, or non-standard entry requirements that go beyond regular tourism, work, or residency visas. This may include visas for humanitarian missions, cultural exchanges, religious work, medical treatments, research projects, media coverage, or other specific objectives recognized by the host country. These visas typically come with tailored conditions, documentation requirements, and stay durations, ensuring applicants can fulfill their special purpose while remaining compliant with immigration laws."
      eligibilityCriteria={[
        "Valid passport with sufficient validity for the visa duration",
        "Clear explanation and evidence of the special purpose (e.g., humanitarian aid, research, medical treatment)",
        "Invitation letter or official approval from relevant authorities (if applicable)",
        "Proof of financial stability or sponsor support for the entire stay",
        "Compliance with health and safety regulations, including required vaccinations",
        "No pending criminal or immigration violations",
        "Commitment to leave the country or transition to another visa upon completion of the special purpose",
      ]}
      processSteps={[
        { title: "Submit Application", text: "Complete the online form with accurate details." },
        { title: "Document Verification", text: "Upload required documents for review." },
        { title: "Payment", text: "Pay the visa fee securely online." },
        { title: "Visa Issuance", text: "Receive your visa via email or courier." },
      ]}
      sidebarCards={[
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiC_hKyVDUZadROKElJx_WAnjbvURRqSQaQ&s",
          title: "Exclusive Visa Consultation",
          text: "Get personalized advice for your unique travel needs with our special purpose visa experts.",
          link: "/contact",
          buttonText: "Contact Us Now",
          buttonType: "primary",
        },
        {
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
          title: "Special Purpose Visa Checklist (2025)",
          text: "Essential documents, requirements, and timelines for humanitarian, cultural, and project-specific visas.",
          tags: ["Visa Tips", "Documents"],
          link: "/blog/special-purpose-visa-checklist",
          buttonText: "Read Checklist",
          buttonType: "link",
        },
      ]}
    />
  );
}
