"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Logo from "@/components/Logo";
import visaEra from '../../public/visa-logo.jpeg';
import visaEraText from '../../public/visaera2.png';
import Image from 'next/image';


import { stickerVisaCountries } from "../../data";
import { EVisa } from "../../data";
import { visaCategories, getFlagBySlug } from "../../data";
import { studentVisaCountries } from "@/lib/studentVisa.content";

const Navbar = () => {
  // Desktop
  const [openMenu, setOpenMenu] = useState(null); // "student" | "categories" | "countries" | "evisa" | null

  // Close intent timer
  const closeTimer = useRef(null);
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 250); // small delay
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  // Mobile
  const [openMobile, setOpenMobile] = useState(false);
  const [openMobileCategories, setOpenMobileCategories] = useState(false);
  const [openMobileCountries, setOpenMobileCountries] = useState(false);
  const [openEVisa, setOpenEVisa] = useState(false);

  const toggleMobileMenu = () => setOpenMobile((s) => !s);
  const open = (key) => setOpenMenu(key);
  const closeAll = () => setOpenMenu(null);

  const mobileSections = [
    {
      title: "Visa Categories",
      data: visaCategories,
      state: openMobileCategories,
      setState: setOpenMobileCategories,
    },
    {
      title: "Sticker Visas",
      data: stickerVisaCountries,
      state: openMobileCountries,
      setState: setOpenMobileCountries,
    },
    { title: "E-Visas", data: EVisa, state: openEVisa, setState: setOpenEVisa },
  ];

  return (
    <div className="absolute w-full bg-[#1c9495] text-[#fff] px-6 py-4 z-50">
      {/* Keep events on the container to handle intent-based closing  bg-[#*/}
      <div
        className="max-w-8xl mx-auto relative"
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            <Link href="/">
              {/* <Logo /> */}
              <div className="flex gap-0 items-center">
              <Image src={visaEra} alt="Visaera" width={50} height={50} />
              {/* <Image src={visaEraText} alt="Visaera" width={130} height={50} /> */}

              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-7 items-center text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>

            {/* Visa Categories (regular dropdown) */}
            <li
              className="relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => open("categories")}
            >
              <button
                type="button"
                className="flex items-center gap-1 relative"
                aria-expanded={openMenu === "categories"}
              >
                Visa Categories 
                <span className="ml-1 absolute top-[-14] right-[-10] bg-gradient-to-r from-orange-500 to-red-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full animate-pulse">
                  NEW
                </span>
                <ChevronDown size={16} />
              </button>

              {openMenu === "categories" && (
                <div
                  className="absolute top-full left-0 mt-4 bg-white text-black shadow-lg rounded-lg py-2 w-72 z-50 border border-gray-100"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <ul className="flex flex-col">
                    {visaCategories.map(({ href, label }) => (
                      <Link key={href} href={href} onClick={closeAll}>
                        <li className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">
                          {label}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Student Visas (full-width panel) */}
            <li
              className="flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => open("student")}
            >
              <button
                type="button"
                className="flex items-center gap-1"
                aria-expanded={openMenu === "student"}
              >
                Student Visas <ChevronDown size={16} />
              </button>
            </li>
            {/* Sticker Visas (full-width panel) */}
            <li
              className="flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => open("countries")}
            >
              <button
                type="button"
                className="flex items-center gap-1"
                aria-expanded={openMenu === "countries"}
              >
                Sticker Visas <ChevronDown size={16} />
              </button>
            </li>

            {/* E-Visas (full-width panel) */}
            <li
              className="flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => open("evisa")}
            >
              <button
                type="button"
                className="flex items-center gap-1"
                aria-expanded={openMenu === "evisa"}
              >
                E-Visa <ChevronDown size={16} />
              </button>
            </li>
            
              <li className="relative">
              <Link href="/academic-guidance">Academic Guidance</Link>
                <span className="ml-1 absolute top-[-14] right-[-10] bg-gradient-to-r from-orange-500 to-red-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full animate-pulse">
                  NEW
                </span>
            </li>
            <li>
              <Link href="/work-and-career">Career</Link>
            </li>
            <li>
              <Link href="/deals">Deals</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <Link
            href="/contact"
            className="inline-block px-6 py-2 rounded-md bg-[#fff] hover:text-[#0f6364] text-sm  transition-all duration-300 border border-[#1c9495] font-medium text-[#0f6364]"
          >
            Book A Consultation
          </Link>

          {/* Hamburger */}
          <div className="lg:hidden">
            <div className="cursor-pointer" onClick={toggleMobileMenu}>
              {openMobile ? <X size={26} /> : <Menu size={26} />}
            </div>
          </div>
        </div>

        {/* ===== Hover bridge + Panels (Student) ===== */}
        {openMenu === "student" && (
          <>
            {/* Invisible bridge so mouse never leaves the hover zone */}
            <div
              className="absolute left-0 right-0 top-full h-4 z-40"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            />
            <div
              className="absolute left-0 right-0 top-full mt-4 bg-white text-black shadow-lg rounded-lg p-6 z-50 border border-gray-100"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {studentVisaCountries.map(({ id, title, name }) => {
                  const flagUrl = getFlagBySlug(name); // e.g. 'germany' → 🇩🇪

                  return (
                    <Link
                      key={id}
                      href={`/student-visa/${name}`}
                      className="group"
                      onClick={closeAll}
                    >
                      <div className="px-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 group-hover:text-gray-900 flex items-center gap-2">
                        {flagUrl && (
                          <img
                            src={flagUrl}
                            alt={title}
                            className="w-5 h-4 object-cover rounded-sm"
                            loading="lazy"
                          />
                        )}
                        {title}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* ===== Hover bridge + Panels (Sticker Visas) ===== */}
        {openMenu === "countries" && (
          <>
            <div
              className="absolute left-0 right-0 top-full h-4 z-40"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            />
            <div
              className="absolute left-0 right-0 top-full mt-4 bg-white text-black shadow-lg rounded-lg p-6 z-50 border border-gray-100"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
                {/* Show only first 20 countries */}
                {stickerVisaCountries.slice(0, 20).map(({ id, href, title }) => {
                  const slug = href.split("/").pop(); // e.g. '/sticker-visa/france' → 'france'
                  const flagUrl = getFlagBySlug(slug);

                  return (
                    <Link
                      key={id}
                      href={href}
                      className="group"
                      onClick={closeAll}
                    >
                      <div className="px-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 group-hover:text-gray-900 flex items-center gap-2">
                        {flagUrl && (
                          <img
                            src={flagUrl}
                            alt={title}
                            className="w-5 h-4 object-cover rounded-sm"
                            loading="lazy"
                          />
                        )}
                        {title}
                      </div>
                    </Link>
                  );
                })}
                {/* "See All Countries" Button */}
                <Link
                  href="/visas"
                  className="group col-span-full"
                  onClick={closeAll}
                >
                  <div className="px-3 py-2 rounded-md bg-[#1c9495] text-black hover:scale-102 transition-all duration-300 text-sm text-center font-medium ">
                    See All Countries →
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}

        {/* ===== Hover bridge + Panels (E-Visa) ===== */}
        {openMenu === "evisa" && (
          <>
            <div
              className="absolute left-0 right-0 top-full h-4 z-40"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            />
            <div
              className="absolute left-0 right-0 top-full mt-4 bg-white text-black shadow-lg rounded-lg p-6 z-50 border border-gray-100"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {EVisa.map(({ href, label }) => {
  const slug = href.split("/").pop(); // e.g. '/e-visa/japan' → 'japan'
  const flagUrl = getFlagBySlug(slug);

  return (
    <Link
      key={href}
      href={href}
      className="group"
      onClick={closeAll}
    >
      <div className="px-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 group-hover:text-gray-900 flex items-center gap-2">
        {flagUrl && (
          <img
            src={flagUrl}
            alt={label}
            className="w-5 h-4 object-cover rounded-sm"
            loading="lazy"
          />
        )}
        {label}
      </div>
    </Link>
  );
})}
              </div>
            </div>
          </>
        )}
      </div>

      {openMobile && (
        <div className="lg:hidden mt-4 px-6 pb-4 space-y-3 font-poppins bg-white text-black rounded-2xl p-4">
          <Link href="/" className="block" onClick={toggleMobileMenu}>
            Home
          </Link>
          {/* mobile navbar */}
          {mobileSections.map(({ title, data, state, setState }) => (
            <div key={title}>
              <button
                onClick={() => setState((s) => !s)}
                className="flex items-center gap-1 font-medium"
              >
                {title} <ChevronDown size={16} />
              </button>

              {state && (
                <ul
                  className={`mt-2 ml-2 text-sm space-y-1 ${
                    title === "Sticker Visas" ? "max-h-72 overflow-y-auto pr-2" : ""
                  }`}
                >
                  {data.map((item) => {
                    // extract the slug (country identifier)
                    const slug =
                      item.name || item.href?.split("/").pop()?.toLowerCase() || "";
                    const flagUrl = getFlagBySlug(slug);

                    return (
                      <Link
                        key={item.id || item.href}
                        href={item.href}
                        onClick={toggleMobileMenu}
                      >
                        <li
                          className={`pl-2 py-1 border-b flex items-center gap-2 ${
                            title === "Visa Categories" ? "mb-2" : ""
                          }`}
                        >
                          {/* flag */}
                          {flagUrl && (
                            <img
                              src={flagUrl}
                              alt={item.label || item.title}
                              className="w-5 h-4 object-cover rounded-sm"
                              loading="lazy"
                            />
                          )}
                          {/* text */}
                          <span>{item.label || item.title}</span>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}

          <Link
            href="/work-and-career"
            className="block"
            onClick={toggleMobileMenu}
          >
            Work and Career
          </Link>
          <Link href="/deals" className="block" onClick={toggleMobileMenu}>
            Deals
          </Link>
          <Link href="/contact" className="block" onClick={toggleMobileMenu}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
