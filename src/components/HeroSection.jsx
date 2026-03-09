"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="max-w-[100vw] h-[100vh] bg-[#F1F5EB] relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1000} // smooth fade speed
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1663075939035-a0ed8b6307eb?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 ">
              <h2 className="text-white md:text-6xl text-4xl font-semibold max-w-4xl leading-tight mt-30">
                Get the Right Visa Without the Confusion.
              </h2>
              <p className="text-white max-w-xl mt-4">
                Whether you're planning to study, work, travel, or move abroad permanently — we help you find the right visa category with ease and confidence.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#visaTypes" className="px-6 py-3 cursor-pointer font-semibold text-white bg-[#1c9495] rounded-lg hover:bg-[#097878] transition-all">
                  Explore Visa Types
                </a>
                <a href="#about" className="px-6 py-3 cursor-pointer font-semibold text-[#1c9495] bg-[#FDFBF7] rounded-lg hover:bg-[#097878] hover:text-white transition-all">
                  About Us
                </a>
              </div>             
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
              <h2 className="text-white md:text-6xl text-4xl font-semibold max-w-4xl leading-tight mt-30">
                Visit the Holy Places Yourself
              </h2>
              <p className="text-white max-w-xl mt-4">
                Check out our economical Hajj & Umrah packages and make your spiritual journey unforgettable.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#pilgrimagePackages" className="px-6 py-3 cursor-pointer font-semibold text-white bg-[#1c9495] rounded-lg hover:bg-[#097878] transition-all">
                  View Packages
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover absolute top-20"
              // https://maxtravel.com.pk/images/slider/slider3.jpg
              // good: https://images.unsplash.com/photo-1638180940769-bc94c1ffc9cd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10"></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
              <h2 className="text-white md:text-6xl text-4xl font-semibold max-w-4xl leading-tight mt-30">
                Explore the Wonders of the World
              </h2>
              <p className="text-white max-w-xl mt-4">
                Discover the world’s most iconic destinations — where history, culture, and beauty come alive.
              </p>
              <div className="flex gap-4 mt-6">
                <Link href="/deals" className="px-6 py-3 cursor-pointer font-semibold text-white bg-[#1c9495] rounded-lg hover:bg-[#097878] transition-all">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;