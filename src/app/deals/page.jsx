import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cardArray } from "../../../data";
import Image from "next/image";

const page = () => {
  

  return (
    <>
    <a
        href="https://wa.me/306973931683"
        target="_blank"
        rel="noopener noreferrer"
        alt="whatsapp link" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600transition-all duration-300 z-50"
      >
        <img className='w-8 h-8' src="/whatsapp.png" alt="whatsapp link" />
      </a>
      <header className="w-full px-6 flex md:flex-row flex-col items-start justify-center gap-16 pt-30 mb-20">
        <div className="flex flex-col mt-10">
          <h2 className="md:text-[5vw] sm:text-[6vh] text-[5vh] font-semibold md:leading-18 leading-10 tracking-tighter">
            Let's <br /> travel the <br /> world
          </h2>
          <p className="mt-3 max-w-md text-black text-sm">
            Discover breathtaking destinations across continents with our
            curated travel deals. From vibrant cities to serene beaches, your
            next adventure starts here.
          </p>

          <div>
            <p className="font-semibold mt-10 mb-4 text-sm">
              Got any Query? Contact Us Now
            </p>
            <Link
              href="/contact"
              className="px-6 py-2 rounded-lg bg-[#1c9495] text-white text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col object-center sm:gap-6">
          <div className="space-y-4">
            <div className="md:w-[17vw] w-full h-[35vh] rounded-lg bg-black overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1513415564515-763d91423bdd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYXxlbnwwfDF8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div className="md:w-[17vw] h-[35vh] rounded-lg bg-black overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1522010675502-c7b3888985f6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cmlzdHxlbnwwfDF8MHx8fDA%3D"
                alt=""
              />
            </div>
          </div>
          <div className="md:w-[17vw] h-[45vh] md:mt-14 mt-4 rounded-lg bg-black overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1516892321417-58fbf571d129?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJpc3R8ZW58MHwxfDB8fHww"
              alt=""
            />
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto my-10 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          Handpicked Destinations, Exclusive Offers
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
          We’ve curated special travel deals across continents—crafted to make
          your journeys seamless, affordable, and unforgettable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardArray.map((card, i) => (
            <Link key={i} href={card.link}>
              <div
                className="group cursor-pointer rounded-xl bg-white/80 backdrop-blur-md
             shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_45px_rgb(0,0,0,0.2)]
             hover:-translate-y-1 transition transform"
              >
                <h2 className="text-center py-4 font-semibold text-xl shadow-xl">
                  {card.title}
                </h2>

                <div className="relative h-66 w-full overflow-hidden rounded-t-xl">
                  <Image
                  fill
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-4 flex items-end justify-between">
                  <p className="text-sm text-slate-700">
                    {card.description} <br />
                    <span className="font-medium text-[#1c9495]">
                      {card.highlight}
                    </span>
                    .
                  </p>
                  <p className="text-[#1c9495] hover:scale-110 transition">
                    <ArrowUpRight size={22} />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
