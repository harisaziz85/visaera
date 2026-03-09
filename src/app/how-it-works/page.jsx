"use client";

import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "Schedule a call or meeting",
    details:
      "Schedule a call or meeting with our team to discuss your travel plans, visa type, and requirements.",
  },
  {
    id: 2,
    title: "Document Checklist",
    description: "Get a tailored list of documents",
    details:
      "We provide you with a customized checklist of documents required for your chosen destination.",
  },
  {
    id: 3,
    title: "Application Preparation",
    description: "We help you fill out forms accurately",
    details:
      "Our team assists in completing your application forms and reviewing your documents for accuracy.",
  },
  {
    id: 4,
    title: "Submission",
    description: "Submit at embassy or online",
    details:
      "We guide you through submitting your application online or at the embassy/consulate.",
  },
  {
    id: 5,
    title: "Processing & Updates",
    description: "Stay informed at every step",
    details:
      "We track your application status and keep you updated on its progress.",
  },
  {
    id: 6,
    title: "Visa Approval & Delivery",
    description: "Get your visa and prepare to travel",
    details:
      "Once approved, we arrange collection or delivery of your visa and help you prepare for your trip.",
  },
];

const WorkingSection = () => {
  return (
    <section className="w-full bg-[#FDFBF7] px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto rounded-2xl md:py-18 py-8">
        <p className="text-[#1c9495] font-medium text-sm uppercase text-center tracking-wide mb-6">
          process overview
        </p>
        <h2 className="text-black text-2xl font-semibold text-center mb-10">
          Your journey abroad starts here <br /> Follow each step to get your
          visa without the hassle.
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative px-8 py-6 bg-white rounded-2xl space-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] transition-all"
            >
              {/* Outlined Number */}
              <h2 className="text-transparent stroke-text text-4xl font-bold">
                {String(step.id).padStart(2, "0")}
              </h2>

              {/* Heading */}
              <h2 className="text-[#1c9495] font-semibold text-xl">
                {step.title}
              </h2>

              {/* Description */}
              <p className="max-w-xs text-xs text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
