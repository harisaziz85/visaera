"use client";
import HeroSection from "@/components/AcademicGuidance/HeroSection";
import WhyChooseUs from "@/components/AcademicGuidance/WhyChooseUs";
import ServicesTabs from "@/components/AcademicGuidance/ServicesTabs";
import WhoWeHelp from "@/components/AcademicGuidance/WhoWeHelp";
import SuccessStories from "@/components/AcademicGuidance/SuccessStories";
import HowItWorks from "@/components/AcademicGuidance/HowItWorks";
import ValueAddedServices from "@/components/AcademicGuidance/ValueAddedServices";
import CTASection from "@/components/AcademicGuidance/CTASection";
import FAQSection from "@/components/AcademicGuidance/FAQSection";

export default function AcademicGuidancePage() {
  return (
    <main className="bg-white text-gray-800">
      <a
        href="https://wa.me/306973931683"
        target="_blank"
        rel="noopener noreferrer"
        alt="whatsapp link" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600transition-all duration-300 z-50"
      >
        <img className='w-8 h-8' src="/whatsapp.png" alt="whatsapp link" />
      </a>
      <HeroSection />
      <WhyChooseUs />
      <ServicesTabs />
      <WhoWeHelp />
      <SuccessStories />
      <HowItWorks />
      <ValueAddedServices />
      <CTASection />
      <FAQSection />
    </main>
  );
}
