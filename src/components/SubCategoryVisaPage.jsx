
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SubcategoryVisaPage({

  

  
  // Hero
  title,
  heroImage,
  heroChips = [],
  whatsappHref = "https://wa.me/306973931683",

  
  introHeading,
  introText,
  introImage,
  quickFacts = [], 
  benefits = [],
  destinations = [], 
  ctaTitle = "Need help with your Visa?",
  ctaSubtitle = "Get a document checklist review and application guidance.",
  ctaHref = "/contact",
}) {
  const pathname = usePathname();
const segments = pathname?.split("/") || [];

const mainCategory = segments[1]?.replace(/-/g, " ");
const subCategory = segments[2]?.replace(/-/g, " ");
  return (
    <main className="min-h-screen bg-gray-50">
      
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        alt="whatsapp link" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600transition-all duration-300 z-50"
      >
        <img className="w-8 h-8" src="/whatsapp.png" alt="WhatsApp" />
      </a>

      
      <section className="relative overflow-hidden">
        <Image
          fill
          className="absolute inset-0 w-full h-full object-cover"
          src={heroImage}
          alt={`${title} hero`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-white">
          <p className="inline-flex items-center gap-3 mb-3 px-4 py-2 bg-[#1c9495] rounded-md text-sm">
  <a href="/" className="hover:underline">Home</a> /
  {mainCategory && (
    <>
      <a
        href={`/${segments[1]}`}
        className="hover:underline capitalize"
      >
        {mainCategory}
      </a> /
    </>
  )}
  <span className="capitalize">{title || subCategory}</span>
</p>
          <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
          {heroChips?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {heroChips.map((chip, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/10 backdrop-blur"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      
      <section>
        
        <div className="mt-10 mb-12 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="flex-1 pt-10">
              
              <h2 className="text-xl font-semibold">{introHeading}</h2>
              <p className="mt-2  text-gray-800">{introText}</p>
            </div>
            <div className="flex-shrink-0">
              <img
                src={introImage}
                alt={introHeading}
                className="rounded-lg object-cover h-[23vw] w-full"
              />
            </div>
          </div>
        </div>

       
        {quickFacts?.length > 0 && (
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {quickFacts.map((q, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow">
                <p className="text-sm text-gray-500">{q.label}</p>
                <p className="mt-1 font-medium">{q.value}</p>
              </div>
            ))}
          </div>
        )}

        
        {destinations?.length > 0 && (
          <section className="mt-20 max-w-6xl mx-auto px-6">
            <h3 className="text-xl font-semibold">Popular Destinations</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {destinations.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 shadow-lg bg-white p-3"
                >
                  <img
                    src={f.url}
                    alt={f.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm">{f.name}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        
        {benefits?.length > 0 && (
          <section className="mt-20 bg-[#1c9495] rounded-3xl shadow-2xl py-20 px-6">
            <h2 className="text-3xl font-bold text-white text-center">
              Key Benefits
            </h2>
            <div className="max-w-6xl mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/95 p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full border-2 border-[#1c9495] bg-[#1c9495]/10 text-[#1c9495] shadow-md">
                    {b.icon}
                  </div>
                  <p className="mt-6 font-semibold text-gray-800 leading-snug">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        

       
        <div className="max-w-6xl mx-auto mt-12 mb-20 px-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border p-6 bg-white">
          <div>
            <h3 className="text-lg font-semibold">{ctaTitle}</h3>
            <p className="text-gray-600 text-sm">{ctaSubtitle}</p>
          </div>
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-[#1c9495] text-white hover:opacity-90"
          >
            Book a Free Consultation
          </a>
        </div>

        
        <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
          <div className="mx-3 mb-3 rounded-xl shadow-lg bg-white border flex">
            <a href={ctaHref} className="flex-1 text-center py-3 font-semibold">
              Book Consultation
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 font-semibold bg-[#1c9495] text-white rounded-r-xl"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
