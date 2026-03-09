"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1546953304-5d96f43c2e94?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
        alt="Academic background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000]/70 mix-blend-multiply"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-white max-w-3xl mx-auto px-4"
      >
        

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Empowering Your Academic Journey
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8">
          From personal essays to Master, PhD proposals — we help you stand out at every step with expert academic writing & research support.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-white text-[#1c9495] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Get Expert Help
        </motion.a>
      </motion.div>

      {/* Subtle gradient fade at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white"></div>
    </section>
  );
}
