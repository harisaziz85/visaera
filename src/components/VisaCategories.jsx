import { ArrowUpRight, BriefcaseBusiness, BriefcaseBusinessIcon, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";

const visaCategories = [
  {
    title: "Travel & Short-Term",
    description:
      "Tourist or business visit visas for short stays, including leisure or official trips.",
    image:
      "https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwdmlzYXxlbnwwfHwwfHx8MA%3D%3D",
    link: "/travel-and-stay",
    icon: <GraduationCap />
    
  },
  {
    title: "Study & Training",
    description:
      "For students enrolling in academic programs or short-term courses and internships abroad.",
    image:
      "https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZHl8ZW58MHx8MHx8fDA%3D",
    link: "/study-and-training",
    icon: <GraduationCap />
  },
  {
    title: "Work & Career-Oriented",
    description:
      "Designed for professionals seeking job opportunities, skilled worker visas, or internships.",
    image:
      "https://plus.unsplash.com/premium_photo-1681074963522-00ca908dce4e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29yayUyMHZpc2F8ZW58MHx8MHx8fDA%3D",
    link: "/work-and-career",
    icon: <BriefcaseBusinessIcon />
  },
  {
    title: "Family & Relationship",
    description:
      "Visas for spouses, children, parents, or dependents visiting or joining family overseas.",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFtaWx5JTIwdmlzYXxlbnwwfHwwfHx8MA%3D%3D",
    link: "/family-and-relationship",
    icon: <GraduationCap />
  },
  {
    title: "Immigration & Long-Term",
    description:
      "Long-term residency, PR, or settlement visas for individuals planning permanent relocation.",
    image:
      "https://images.unsplash.com/photo-1561121864-3e4031788fdd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1tZWdyYXRpb24lMjB2aXNhfGVufDB8fDB8fHww",
    link: "/immigration-and-residency",
    icon: <GraduationCap />
  },
  {
    title: "Special Purpose Visas",
    description:
      "Covers religious, cultural, diplomatic, sports, medical, or other unique travel purposes.",
    image:
      "https://plus.unsplash.com/premium_photo-1663075939035-a0ed8b6307eb?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlzYXxlbnwwfHwwfHx8MA%3D%3D",
    link: "/special-purpose",
    icon: <GraduationCap />
  },
];

const VisaCategories = () => {
  return (
    <section id="visaTypes" className="w-full bg-[#FDFBF7] px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#1c9495] font-medium text-sm uppercase text-center tracking-wide mb-4">
          visa categories
        </p>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Explore the Visa Options We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {visaCategories.map((visa, index) => (
            <div
              key={index}
              className="flex lg:flex-row flex-col lg:items-center gap-6 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="lg:w-58 w-full h-48 rounded-lg bg-gray-300 overflow-hidden flex-shrink-0">
                <img
                  src={visa.image}
                  alt={visa.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center flex-grow">
                <h3 className="text-xl font-semibold text-[#1c9495] mb-2">
                  {visa.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-lg">
                  {visa.description}
                </p>

                <div className="mt-4 flex items-center gap-10">
                  {/* Icon Button with arrow */}
                  <Link href={visa.link}>
                    <div className="w-10 h-10 border border-[#1c9495] rounded-lg flex items-center justify-center text-[#1c9495] hover:bg-green-600hover:text-white transition-colors"
                    aria-label={`See details about ${visa.title}`}>
                      <ArrowUpRight size={18} />
                    </div>
                  </Link>
                
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaCategories;
