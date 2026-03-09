import React from "react";
import VisaCategoryPage from "@/components/VisaCategoryPage";

const workAndCareerVisaSubCategory = [
  "Work Visa",
  "Tech Visa",
  "Skilled Worker Visa",
  "Job Seeker Visa",
  "Entrepreneur Visa",
  "Investor Visa",
  "Startup Visa",
  "Digital Nomad Visa",
  "Seasonal Work Visa",
  "Extraordinary Ability Visa",
  "Relocation Visa",
  "Post-Graduation Work Permit",
  "Crew Member Visa",
];

const WorkAndCareer = () => {
  return (
    <VisaCategoryPage
      heroImage="https://plus.unsplash.com/premium_photo-1663013447756-f645cdec247d?w=1200&auto=format&fit=crop&q=60"
      title="Work And Career"
      heading="Work and Career Visa"
      description="The Work and Career Visa is designed for professionals, job seekers, and skilled individuals aiming to explore employment opportunities or advance their careers abroad. This visa facilitates short to mid-term stays of 30, 60, or 90 days, allowing applicants to attend interviews, network with potential employers, participate in job fairs, or begin short-term contracts. It offers a gateway to international career exposure, with additional support services such as accommodation assistance, local guidance, and document facilitation. Whether you're launching your career or seeking new professional horizons, this visa ensures a smooth and productive journey."
      subcategories={workAndCareerVisaSubCategory}
      requirements={[
        "Valid passport with at least 6 months validity from travel date",
        "Clear purpose of visit – work, career advancement, or networking",
        "No criminal record or immigration violations in any country",
        "Sufficient financial means to cover the stay",
        "Physically and mentally fit to travel",
        "Intention to return to home country after visa expiry",
        "Applicant should not take up unauthorized employment in destination country",
      ]}
      faqId="faq"
      showPricing={false} // Hide pricing section for this category
      sidebarCards={[
        {
          image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
          title: "Land Your Dream Job Abroad",
          text: "Get step-by-step guidance on securing work abroad — from resume tweaks to interview prep and visa assistance.",
          link: "/contact",
          buttonText: "Contact Us Now",
          buttonType: "primary",
        },
        {
          image:
            "https://images.unsplash.com/photo-1646082276009-bb35409086ed?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMGZhY3Rvcnl8ZW58MHwwfDB8fHww",
          title: "Work & Career Visa Era (2025): Requirements, Fees & Tips",
          text: "Everything you need to know about applying for a Work & Career Visa — documents, costs, timelines, and insider tips.",
          tags: ["Visa Tips", "Career Advice"],
          link: "/blog/work-career-visa-guide",
          buttonText: "Read Guide",
          buttonType: "link",
        },
      ]}
    />
  );
};

export default WorkAndCareer;
