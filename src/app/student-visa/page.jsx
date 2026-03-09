"use client";

import React, { useState } from "react";
import Link from "next/link";
import { studentVisaCountries, getFlagBySlug } from "../../../data";
import NewsLetterSection from "@/components/NewsLetterSection";
import { ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 60;

const VisasPage = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter visas by search
  const filteredVisas = studentVisaCountries.filter((visa) =>
    visa.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredVisas.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVisas = filteredVisas.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <a
        href="https://wa.me/306973931683"
        target="_blank"
        rel="noopener noreferrer"
        alt="whatsapp link" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600transition-all duration-300 z-50"
      >
        <img className="w-8 h-8" src="/whatsapp.png" alt="whatsapp link" />
      </a>
      <div className="w-full md:h-[60vh] h-[60vh] relative">
        <img
          className="absolute w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlzYXN8ZW58MHwwfDB8fHww"
          alt="Visas"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Heading */}
        <div className="absolute inset-0 z-20 flex flex-col md:top-50 top-40 md:items-start items-        center md:px-20 px-6">
          <p className="flex items-center text-white">
            <a className="underline" href="/">
              Home
            </a>{" "}
            <ChevronRight size={18} />
            Student Visa
          </p>
          <h2 className="text-white md:text-7xl text-4xl mb-6 mt-1 font-semibold">
            Explore Our Student Visa Services
          </h2>
          <p className="max-w-2xl text-white text-sm md:text-left text-center">
            We provide a wide range of visa solutions tailored to meet your
            travel, study, or business needs. Our expert team ensures a smooth
            and hassle-free process, guiding you every step of the way so you
            can focus on your journey ahead.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Search */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // reset to first page on search
            }}
            className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Visa Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentVisas.map((visa) => {
           const slug = visa.name || visa.href.split("/").pop(); // 'germany'
            const flagUrl = getFlagBySlug(slug);
           return (
                <Link
                key={visa.id}
                href={visa.href}
                className="border border-zinc-300 rounded-xl shadow-sm hover:shadow-md transition bg-white px-5 py-4 flex items-center gap-4 text-sm font-medium"
                >
                {/* Flag wrapper */}
                <div className="w-12 h-8 rounded-sm overflow-hidden border border-zinc-200 bg-white flex items-center justify-center">
                    {flagUrl && (
                    <img
                        src={flagUrl}
                        alt={visa.title}
                        // className="w-5 h-4 object-cover rounded-sm"
                        loading="lazy"
                    />
                    )}
                </div>

                <span className="text-zinc-800">{visa.title}</span>
                </Link>
            );
          })}
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center mt-10 space-x-3">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-100"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-100"
          >
            Next
          </button>
        </div> */}
      </section>

      <NewsLetterSection />
    </>
  );
};

export default VisasPage;
