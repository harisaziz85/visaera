"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Research Support",
    desc: "Get end-to-end assistance for your academic research — from identifying a research gap and refining your topic, to developing a strong methodology and preparing for publication. Our experts help you conduct literature reviews, collect and analyze data, and ensure your findings align with academic standards and journal requirements.",
  },
  {
    title: "Academic Writing",
    desc: "Refine your academic writing with professional guidance that strengthens clarity, coherence, and argument flow. Whether you’re drafting a personal essay, statement of purpose, research proposal, or full-length thesis, our editors help you structure your ideas, enhance your academic tone, and eliminate grammatical and formatting errors.",
  },
  {
    title: "Scholarly Services",
    desc: "Our scholarly services include professional proofreading, advanced editing, and formatting that meet the style guidelines of top institutions and journals (APA, MLA, Chicago, Harvard). We also ensure citation accuracy, logical consistency, and proper academic referencing so your paper is ready for submission or publication.",
  },
  {
    title: "Thesis & Proposals",
    desc: "Receive personalized support in developing impactful Master’s or PhD proposals and theses. We help you define a clear research problem, craft strong objectives, design a sound methodology, and present your analysis convincingly. Our team guides you through every stage — from initial concept to final submission — ensuring academic excellence.",
  },
  {
    title: "Research Guidance",
    desc: "Work 1-on-1 with experienced academic mentors who provide expert advice throughout your research journey. From topic selection and data analysis to refining discussions and preparing presentations, our consultants help you stay confident, organized, and on track to achieve your academic goals with clarity and precision.",
  },
];

// helper to create URL-friendly slugs
const slugify = (str) =>
  str.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");


export default function ServicesTabs() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const index = services.findIndex((s) => slugify(s.title) === hash);
    if (index !== -1) setActive(index);

    // optional: smooth scroll to section
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c9495] mb-10">
          Our Core Services
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 cursor-pointer rounded-full border font-semibold transition-all ${
                active === i
                  ? "bg-[#1c9495] text-white"
                  : "border-[#1c9495] text-[#1c9495] hover:bg-[#097878]/10"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-gray-700 mb-6">{services[active].desc}</p>
          <a
            href="#contact"
            // 016fc1 ---1c9495 parot green
            className="inline-block bg-[#1c9495] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#097878] transition-all duration-300"
          >
            Get Assistance for This Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
