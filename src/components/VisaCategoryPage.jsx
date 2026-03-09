"use client";

import AnimationStrip from "@/components/AnimationStrip";
import Faq from "@/components/Faq";
import Requirements from "@/components/Requirements";
import SubCategoryVisa from "@/components/SubCategoryVisa";
import VisaApplyForm from "@/components/VisaApplyForm";
import VisaTopBar from "@/components/VisaTopBar";
import { Check } from "lucide-react";
import Head from "next/head";
import React from "react";

const VisaCategoryPage = ({
  title,
  heroImage,
  metaTitle,
  metaDescription,
  subcategories = [],
  description,
  eligibilityCriteria = [],
  processSteps = [],
  sidebarCards = [],
  showAnimationStrip = true,
}) => {
  const WHATSAPP_NUMBER = "12345678";
  const WHATSAPP_MSG = encodeURIComponent(
    `Hi! I’d like to apply for a ${title}. Can you help?`
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        alt="whatsapp link" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600transition-all duration-300 z-50"
      >
        <img className="w-8 h-8" src="/whatsapp.png" alt="WhatsApp" />
      </a>

      <div className="w-full md:h-[60vh] h-[25vh] relative">
        <img
          className="absolute w-full h-full object-cover"
          src={heroImage}
          alt={title}
        />

        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h2 className="text-white font-semibold text-6xl text-center">
            {title}
          </h2>
        </div>
        <Head>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
        </Head>
      </div>

      {showAnimationStrip && <AnimationStrip />}

      <div className="max-w-7xl mx-auto py-12 px-6 bg-[#FDFBF7]">
        <VisaTopBar />

        {/* Layout Wrapper */}
        <section className="md:mx-10 mx-2">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="grid md:grid-cols-2 grid-cols-1 mx-auto gap-10 mb-16">
                <div>
                  <h2 className="text-lg font-semibold uppercase text-[#1c9495]">
                    What is {title}?
                  </h2>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Image placeholder for content */}
                <div className="w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Subcategories */}
              {subcategories.length > 0 && (
                <>
                  <h2 className="font-semibold text-xl uppercase text-[#1c9495] mt-20">
                    Types of {title} Available
                  </h2>
                  <SubCategoryVisa subcategories={subcategories} />
                </>
              )}

              {/* Requirements */}
              <Requirements />

              {/* Eligibility */}
              {eligibilityCriteria.length > 0 && (
                <>
                  <h2
                    id="eligibility-criteria"
                    className="text-lg font-semibold uppercase text-[#1c9495] mt-8"
                  >
                    Eligibility Criteria
                  </h2>
                  <ul className="list-disc pl-2 mt-2 text-gray-700 space-y-2">
                    {eligibilityCriteria.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="p-0.5 inline-block rounded-full text-white bg-[#1c9495] items-center justify-center">
                          <Check size={16} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Process Steps */}
              {processSteps.length > 0 && (
                <section id="how-to-apply" className="my-15">
                  <h2 className="text-lg font-semibold uppercase text-[#1c9495]">
                    Visa Application Process
                  </h2>
                  <div className="grid md:grid-cols-4 gap-6 mt-4 my-20 bg-[#1c9495] p-6 rounded-lg">
                    {processSteps.map((step, idx) => (
                      <div key={idx} className="text-center">
                        <div className="p-4 bg-white text-[#1c9495] text-3xl font-semibold rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                          {idx + 1}
                        </div>
                        <p className="mt-2 text-lg font-semibold text-white mb-2">
                          {step.title}
                        </p>
                        <p className="text-white text-sm">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <Faq id="#faq" />
            </div>

            {/* RIGHT Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {sidebarCards.map((card, idx) => (
                  <article
                    key={idx}
                    className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      {card.tags?.length > 0 && (
                        <div className="flex gap-2 mb-2">
                          {card.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h3 className="font-semibold text-gray-900">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{card.text}</p>
                      {card.link && (
                        <a
                          href={card.link}
                          className={`mt-3 inline-block text-sm font-medium ${
                            card.buttonType === "primary"
                              ? "text-white bg-[#1c9495] px-4 py-2 rounded-md"
                              : "text-[#1c9495] underline"
                          }`}
                        >
                          {card.buttonText}
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* Form */}
        <VisaApplyForm id="form" />
      </div>
    </>
  );
};

export default VisaCategoryPage;
