import VisaCategoryPage from "@/components/VisaCategoryPage";


export default function StudyAndTraining() {
  return (
    <VisaCategoryPage
      title="Study And Training Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?w=1200&auto=format&fit=crop&q=60"
      metaTitle="Study and Training Visa - Apply Now"
      metaDescription="Apply for a Study and Training Visa to pursue education, research, or skill training abroad. Choose from flexible stay durations with accommodation support."
      subcategories={[
        "Study Visa",
        "Student Exchange Visa",
        "Graduate Visa",
        "Research Visa",
        "Internship Visa",
        "Training Visa",
        "Tech Visa"
      ]}
      description="The Study and Training Visa is specifically designed for individuals seeking to pursue educational courses, skill development programs, or professional training abroad. This visa allows applicants to stay for extended durations such as 30, 60, or 90 days, depending on the chosen program and requirements. It offers the flexibility to combine learning with cultural exploration, making it ideal for students, interns, and professionals looking to enhance their knowledge and experience in a global environment. Comprehensive support services are provided to ensure a smooth transition and comfortable stay throughout the learning journey."
      eligibilityCriteria={[
        "Applicant must hold a valid passport with at least 6 months of validity from the date of travel",
        "Applicant must have a clear purpose of visit – education, training, or research",
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
          title: "Scholarships & Study Abroad Deals!",
          text: "Find the best study abroad opportunities and scholarships to make your education more affordable.",
          link: "/contact",
          buttonText: "Contact Us Now",
          buttonType: "primary",
        },
        {
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
          title: "Study & Training Visa Checklist (2025)",
          text: "The exact paperwork you need, expected fees, and how long each step takes—plus pro tips to avoid delays.",
          tags: ["Visa Tips", "Documents"],
          link: "/blog/study-training-visa-checklist",
          buttonText: "Read Checklist",
          buttonType: "link",
        },
      ]}
    />
  );
}
