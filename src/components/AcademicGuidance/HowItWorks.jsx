"use client";
import { motion } from "framer-motion";
import { FileText, Users, MessageCircle, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: FileText, title: "Share Your Requirements", desc: "Tell us your goals and what kind of academic help you need." },
  { icon: Users, title: "Get Matched with an Expert", desc: "We assign a subject specialist who understands your field." },
  { icon: MessageCircle, title: "Collaborate 1-on-1", desc: "Work closely through revisions, feedback, and detailed guidance." },
  { icon: CheckCircle2, title: "Receive the Final Draft", desc: "Get your proposal, thesis, or paper ready for submission." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c9495] mb-12">
          How Our Process Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <s.icon className="text-[#1c9495] w-10 h-10 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-[#1c9495] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
