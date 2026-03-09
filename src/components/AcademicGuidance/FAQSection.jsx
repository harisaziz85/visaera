"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How long does it take to complete a research proposal?", a: "Typically between 7–14 days depending on your academic level and complexity." },
  { q: "Can you help with journal publication?", a: "Yes. We assist in writing, formatting, and submitting papers to reputed journals." },
  { q: "What if I’ve already started my thesis?", a: "No problem. We can refine your work, improve methodology, or provide data analysis support." },
  { q: "Is the work plagiarism-free?", a: "Absolutely. All documents are written from scratch and checked with plagiarism tools." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c9495] text-center mb-12">
          Frequently Asked Questions
        </h2>

        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-md mb-4 p-5 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-[#1c9495] text-lg">{f.q}</h3>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === i && (
              <p className="text-gray-600 text-sm mt-3">{f.a}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
