"use client";
import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Users, PenTool } from "lucide-react";

const features = [
  { icon: BookOpen, text: "Personalized guidance for Bachelor’s, Master’s, and PhD students" },
  { icon: PenTool, text: "Expert writing support for essays, proposals, and theses" },
  { icon: Users, text: "1-on-1 collaboration with research professionals" },
  { icon: CheckCircle, text: "100% plagiarism-free and publication-ready assistance" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1c9495] mb-10"
        >
          Why Students Choose Our Academic Support
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <f.icon className="text-[#1c9495] w-10 h-10 mb-4 mx-auto" />
              <p className="text-gray-700 text-sm font-medium">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
