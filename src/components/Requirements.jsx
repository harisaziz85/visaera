import { Check } from "lucide-react";
import React from "react";

const Requirements = () => {
  return (
    <>
      <h2
        id="requirements"
        className="text-xl font-semibold uppercase text-[#1c9495] mt-8"
      >
        Requirements
      </h2>
      <ul className="list-disc pl-2  mt-2 text-gray-700 space-y-2">
        <li className="flex items-center gap-3">
          {" "}
          <span className="p-0.5 inline-block rounded-full text-white bg-[#1c9495] items-center justify-center">
            <Check size={16} />
          </span>{" "}
          Clear scanned copy of the passport (first and last page)
        </li>
        <li className="flex items-center gap-3">
          {" "}
          <span className="p-0.5 inline-block rounded-full text-white bg-[#1c9495] items-center justify-center">
            <Check size={16} />
          </span>{" "}
          Recent passport-size photograph with white background
        </li>
        <li className="flex items-center gap-3">
          {" "}
          <span className="p-0.5 inline-block rounded-full text-white bg-[#1c9495] items-center justify-center">
            <Check size={16} />
          </span>{" "}
          Confirmed round-trip flight reservation
        </li>
        <li className="flex items-center gap-3">
          {" "}
          <span className="p-0.5 inline-block rounded-full text-white bg-[#1c9495] items-center justify-center">
            <Check size={16} />
          </span>{" "}
          Hotel booking or accommodation details
        </li>
        <li className="flex items-center gap-3">
          {" "}
          <span className="p-0.5 inline-block rounded-full text-white bg-[#1c9495] items-center justify-center">
            <Check size={16} />
          </span>{" "}
          Travel itinerary outlining your stay plans
        </li>
        <li className="flex items-center gap-3">
          {" "}
          <span className="p-0.5 inline-block rounded-full text-white bg-[#1c9495] items-center justify-center">
            <Check size={16} />
          </span>{" "}
          Bank statement or financial proof for the stay duration
        </li>
        <li className="flex items-center gap-3">
          {" "}
          <span className="p-0.5 inline-block rounded-full text-white bg-[#1c9495] items-center justify-center">
            <Check size={16} />
          </span>{" "}
          Valid email address for e-visa delivery
        </li>
        <li className="flex items-center gap-3">
          {" "}
          <span className="p-0.5 inline-block rounded-full text-white bg-[#1c9495] items-center justify-center">
            <Check size={16} />
          </span>{" "}
          Contact number (WhatsApp preferred for updates)
        </li>
        
      </ul>
    </>
  );
};

export default Requirements;
