"use client";
import { motion } from "framer-motion";
import { User, GraduationCap, BookOpen } from "lucide-react";

const levels = [
  {
    icon: User,
    title: "Undergraduate Students",
    desc: "Personal essays, statement of purpose, and scholarship applications designed to impress top institutions.",
  },
  {
    icon: GraduationCap,
    title: "Master’s Applicants",
    desc: "Research proposals, thesis guidance, and assistance with study abroad applications.",
  },
  {
    icon: BookOpen,
    title: "PhD Candidates",
    desc: "Comprehensive dissertation support, data analysis, and publication guidance in top journals.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1c9495] mb-12"
        >
          Support Tailored for Every Academic Level
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <item.icon className="w-12 h-12 text-[#1c9495] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-[#1c9495]">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-10 bg-[#1c9495] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#097878] transition-all duration-300"
        >
          Book a Free Consultation
        </motion.a>
      </div>
    </section>
  );
}
