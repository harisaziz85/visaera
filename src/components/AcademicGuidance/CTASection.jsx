"use client";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#1c9495] text-white text-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        <PhoneCall className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Elevate Your Academic Career?
        </h2>
        <p className="text-white/90 mb-8">
          Connect with our expert consultants today and get personalized academic guidance for your research and writing journey.
        </p>

       

        <motion.a
          href="https://wa.me/306973931683"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white inline-flex items-center gap-4 text-[#1c9495] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          <img className='w-8 h-8' src="/whatsapp.png" alt="whatsapp link" /> Message on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
