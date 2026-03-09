import VisaCategoryPage from "@/components/VisaCategoryPage";


export default function FamilyAndRelationship() {
  return (
    <VisaCategoryPage
      title="Family & Relationship Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1661475916373-5aaaeb4a5393?w=1200&auto=format&fit=crop&q=60"
      metaTitle="Family & Relationship Visa - Apply Now"
      metaDescription="Apply for a Family & Relationship Visa to reunite with your loved ones abroad. Includes tailored support for marriage, spousal, and dependent visas."
      subcategories={[
        "Marriage Visa",
        "Spousal Visa",
        "Dependent Visa",
        "Fiance Visa",
        "Family Reunification Visa",
        "Parent of a Citizen Visa",
      ]}
      description="The Family and Relationship Visa is designed to facilitate reunions with loved ones—whether you’re joining a spouse, visiting a fiancé(e), or reconnecting with parents or children living abroad. This visa type covers several categories such as Marriage Visas, Dependent Visas, Spousal Visas, and more. Depending on the category and personal situation, applicants can choose stay durations of 30, 60, or 90 days. Each plan offers tailored support services and ensures a legally supported and emotionally fulfilling visit experience."
      eligibilityCriteria={[
        "Valid passport with minimum 6 months validity",
        "Proof of relationship (marriage certificate, birth certificate, etc.)",
        "Invitation letter from family member (if applicable)",
        "Financial ability to support the stay",
        "Clean criminal and immigration record",
        "Intention to return to home country after visit",
        "Appropriate visa application for the selected family category",
      ]}
      processSteps={[
        { title: "Submit Application", text: "Fill out the online form with your details." },
        { title: "Upload Documents", text: "Provide proof of relationship and identification." },
        { title: "Payment", text: "Pay the applicable visa processing fee." },
        { title: "Visa Approval", text: "Receive your visa and prepare for travel." },
      ]}
      sidebarCards={[
        {
          image: "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?w=800&auto=format&fit=crop",
          title: "Family Visa Consultation",
          text: "Get expert help with your family or relationship visa application.",
          link: "/contact",
          buttonText: "Book Consultation",
          buttonType: "primary",
        },
        {
          image: "https://images.unsplash.com/photo-1581553672347-95d9444c0d2c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFtaWx5JTIwdmlzYXxlbnwwfDB8MHx8fDA%3D",
          title: "Family Visa Checklist (2025)",
          text: "All required documents, fees, and timelines for your family visa.",
          tags: ["Visa Tips", "Checklist"],
          link: "/blog/family-visa-checklist",
          buttonText: "View Checklist",
          buttonType: "link",
        },
      ]}
    />
  );
}
