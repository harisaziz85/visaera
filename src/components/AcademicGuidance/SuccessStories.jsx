"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  {
    name: "Sara Khan",
    text: "My PhD proposal got accepted on the first submission! The expert team made my research idea clear and impactful.",
  },
  {
    name: "Ahmed Malik",
    text: "They edited my Master’s thesis to perfection. The structure and citations were flawless!",
  },
  {
    name: "Emily Zhang",
    text: "The team guided me through publishing my paper in a Scopus-indexed journal — truly life-changing support.",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1c9495] mb-12"
        >
          Success Stories from Our Students
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#1c9495] mx-auto mb-4" />
              <p className="text-gray-700 text-sm mb-3 italic">"{s.text}"</p>
              <h4 className="font-semibold text-[#1c9495]">{s.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
