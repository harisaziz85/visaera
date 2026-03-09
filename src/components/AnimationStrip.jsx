"use client";
import React from "react";

const items = [
  "Work Visas",
  "Student Visas",
  "Tourist Visas",
  "Family Sponsorship",
  "Permanent Residency",
  "Business Immigration",
  "Skilled Worker Programs",
  "Visa Consultation",
];


const AnimationStrip = () => {
  return (
    <div className="strip-container bg-[#1c9495] py-4">
      <div className="strip-track" style={{ "--speed": "15s" }}>
        {/* First copy */}
        <div className="flex items-center gap-16 text-white text-xl font-semibold px-8">
          {items.map((text, i) => (
            <h2 key={i}>{text}</h2>
          ))}
        </div>

        {/* Second copy (immediately after first, no gap) */}
        <div className="flex items-center gap-16 text-white text-xl font-semibold px-8">
          {items.map((text, i) => (
            <h2 key={`dup-${i}`}>{text}</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimationStrip;
