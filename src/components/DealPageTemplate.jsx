import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";

const DealPageTemplate = ({ header, sections, containerClassName, gridClassName }) => {
  const {
    imageUrl,
    title,
    subtitle,
    heightClass = "h-[65vh]",
    overlayClass = "bg-black/40",
  } = header || {};

  const {
    topPicksTitle = "Our Top Picks for You",
    topPicks = [],
    allDealsTitle = "All Deals",
    allDeals = [],
  } = sections || {};

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
      <header className={`relative w-full ${heightClass}`}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="px-6 pt-10">
            <h1 className="text-white max-w-4xl text-4xl md:text-6xl leading-18 font-bold">{title}</h1>
            {subtitle && (
              <p className="mt-4 text-white max-w-xl mx-auto text-sm md:text-base">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </header>

      <section
        className={`max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10 ${containerClassName || ""}`}
        style={{ contentVisibility: "auto", containIntrinsicSize: "1000px" }}
      >
        <h2 className="font-semibold text-2xl">{topPicksTitle}</h2>
        <div className="mt-4 -mx-6 md:mx-0">
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 md:px-0 pb-3 no-scrollbar"
               aria-label="Top Picks carousel">
            {topPicks.map((d) => (
              <div key={d.title} className="snap-start shrink-0 w-72 md:w-80">
                <DealCard deal={d} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10">
        <h2 className="font-semibold text-2xl mb-4">{allDealsTitle}</h2>
        <div className={gridClassName || "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"}>
          {allDeals.map((d) => (
            <DealCard key={d.title} deal={d} />
          ))}
        </div>
      </section>
    </>
  );
};

export default DealPageTemplate;

// Small, memoized card
const DealCard = React.memo(function DealCard({ deal }) {
  const card = (
    <div className="group h-full rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md
                    shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_60px_rgba(0,0,0,0.18)]
                    transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-2xl p-1">
        <Image
          src={deal.img}
          alt={deal.title}
          fill
          className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 33vw, 25vw"
          placeholder={deal.blurDataURL ? "blur" : undefined}
          blurDataURL={deal.blurDataURL}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900">{deal.title}</h3>
        <div className="mt-1 inline-flex items-center gap-2 text-sm text-slate-700">
          <Clock className="h-4 w-4 text-[#1c9495]" />
          <span>{deal.duration}</span>
        </div>
      </div>
    </div>
  );

  return deal.href ? (
    <Link href={deal.href} className="block focus:outline-none focus:ring-2 focus:ring-[#1c9495]/40 rounded-2xl">
      {card}
    </Link>
  ) : (
    card
  );
});
