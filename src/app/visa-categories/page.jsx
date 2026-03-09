import React from "react";
import Link from "next/link";
import { visaData } from "../../../data";

export default function VisaPage() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://static1.thetravelimages.com/wordpress/wp-content/uploads/2023/09/resized-image-promo-78.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Visa Categories
          </h1>
          <p className="text-lg md:text-xl">
            Find the right visa for travel, study, work, or residency — all in one place.
          </p>
        </div>
      </section>

      {/* All Visa Categories */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        {Object.entries(visaData).map(([slug, data]) => (
          <div key={slug} className="mb-16">
            {/* Category Header */}
            <Link href={`/${slug}`}>
              <h2 className="text-2xl font-bold text-[#1c9495] mb-2 hover:underline cursor-pointer">
                {data.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-4">{data.metaDescription}</p>

            {/* Subcategories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.subcategories.map((sub, idx) => {
                const subSlug = sub.toLowerCase().replace(/\s+/g, "-");
                return (
                  <Link key={idx} href={`/${slug}/${subSlug}`}>
                    <div className="bg-[#1c9495] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center cursor-pointer">
                      <p className="font-medium text-white hover:underline">{sub}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}