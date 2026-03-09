"use client";

import Link from "next/link";
import React from "react";

const PilgrimageSection = () => {
  return (
    <div id="pilgrimagePackages" className="w-full bg-white px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#1c9495] font-medium text-sm uppercase text-center tracking-wide mb-4">
          pilgrimage and religious places
        </p>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Journey to Holy Sites with Ease
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-4">
          <Link href="/hajj-and-umrah" className="relative h-110 bg-gray-300 rounded-lg overflow-hidden group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1627728734379-a5f8c099763e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFra2FofGVufDB8fDB8fHww"
              alt="Makkah"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* Text */}
            <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-semibold">Hajj & Umrah</h3>
              <p className="mt-1 text-sm">
                Discover the spiritual heritage and culture.
              </p>
            </div>
          </Link>

          <Link href="iran-holy-sites" className="relative h-110 bg-gray-300 rounded-lg overflow-hidden group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1632782532013-bd3f5f9197db?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlyYW58ZW58MHwxfDB8fHww"
              alt="iran"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* Text */}
            <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-semibold">Iran</h3>
              <p className="mt-1 text-sm">
                Discover the spiritual heritage and culture.
              </p>
            </div>
          </Link>

          <Link href="iraq-holy-sites" className="relative h-110 bg-gray-300 rounded-lg overflow-hidden group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1718680991516-5c02436f244c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGthcmJhbGF8ZW58MHwxfDB8fHww"
              alt="Iraq"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* Text */}
            <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-semibold">Iraq</h3>
              <p className="mt-1 text-sm">
                Discover the spiritual heritage and culture.
              </p>
            </div>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default PilgrimageSection;
