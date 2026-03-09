"use client"

import React, { useState } from 'react'
import {  Minus, Plus } from 'lucide-react'

const faqData = [
  {
    question: "How can I extend my Visit Visa?",
    answer:
      "Visit visas can often be extended by applying through the official immigration portal of the destination country. Extensions are usually granted based on eligibility and may require payment of additional fees. It’s recommended to apply for an extension well before your current visa expires.",
  },
  {
    question: "Can I work with Visit Visa?",
    answer:
      "No, a visit visa does not permit you to work in desired country. If you plan to work, you must apply for a work visa or permit.",
  },
  {
    question: "How soon should I apply for a travel visa?",
    answer:
      "It's advisable to apply at least four weeks before your intended travel date to account for any delays.",
  },
];


const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleMenu = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

  return (
    <div>
        <h2
            id="faq"
            className="text-lg font-semibold uppercase text-[#1c9495] mt-8"
          >
            frequently asked questions
          </h2>
          {faqData.map((item, index) => (
            <div
              key={index}
              className="max-w-5xl border border-gray-200 rounded-xl mt-4 overflow-hidden transition-all duration-300"
            >
              <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer bg-white shadow-sm"
                onClick={() => toggleMenu(index)}
              >
                <h2 className="text-lg font-semibold text-[#1c9495]">
                  {item.question}
                </h2>
                <div className="p-1 rounded-full bg-[#1c9495] text-white transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </div>

              <div
                className={`px-6 text-sm text-gray-700 transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 py-4 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
    </div>
  )
}

export default Faq