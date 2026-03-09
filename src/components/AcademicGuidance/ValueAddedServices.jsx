"use client";
import { motion } from "framer-motion";
import { FileSignature, PenTool, Award, FileText } from "lucide-react";

const services = [
  { icon: FileSignature, title: "Professional Résumé / CV Writing", desc: "Highlight your academic and professional strengths effectively." },
  { icon: PenTool, title: "Publication Assistance", desc: "Get help publishing in reputed academic journals." },
  { icon: Award, title: "Editing & Formatting", desc: "Ensure your papers meet strict university and journal standards." },
  { icon: FileText, title: "Scholarship Essay Review", desc: "Make your scholarship applications truly persuasive." },
];

export default function ValueAddedServices() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c9495] mb-12">
          Boost Your Academic Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <s.icon className="text-[#1c9495] w-10 h-10 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-[#1c9495] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-10 bg-[#1c9495] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#097878] transition-all duration-300"
        >
          Upgrade My Academic Profile
        </motion.a>
      </div>
    </section>
  );
}
