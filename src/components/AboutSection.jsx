import { Crown, Phone, Users } from 'lucide-react';
import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="w-full bg-[#FDFBF7] px-6 md:px-12 lg:px-24 py-20">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left: Text */}
        <div>
          <p className="text-[#1c9495] font-semibold text-sm uppercase tracking-wide mb-3">
            About Us
          </p>
          <h2 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight mb-8">
            Your Trusted Partner in Global Visa & Immigration Solutions
          </h2>
          <div className="flex flex-col gap-5 text-gray-700 text-lg leading-relaxed">
            <p>
              At <span className="font-semibold text-[#1c9495]">VisaEra</span>, we believe that moving across borders shouldn’t feel overwhelming. Whether you're exploring new destinations, studying abroad, seeking career opportunities, or reuniting with loved ones — we simplify the visa process with expert guidance, clear information, and reliable support.
            </p>
            <p>
              Our mission is to help you choose the right visa with confidence and clarity — no jargon, no stress. From short-term travel to permanent residency, we’re here to guide your global journey every step of the way.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://img.freepik.com/free-photo/top-view-hands-holding-travel-documents_23-2150433383.jpg"
            alt="Visa support"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CTA's */}
        <div
          className="
            w-full bg-[#1c9495] text-white rounded-md
            px-4 md:px-8 lg:px-20
            py-6 lg:py-0

            /* Small/Tablet: natural flow under image */
            static mt-6 md:mt-8
            flex flex-col md:flex-row md:flex-wrap
            items-start md:items-center
            gap-6 md:gap-8
            justify-between

            /* Large+: keep previous absolute band behavior/position */
            lg:absolute lg:mt-0 lg:h-40 lg:-bottom-55 lg:left-0 lg:right-0
          "
        >
          <div className="flex items-start md:items-center gap-4">
            <div className="w-14 h-14 rounded-md flex items-center justify-center bg-white shrink-0">
              <Crown className="text-[#1c9495]" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Best Visa Service</h2>
              <p className="text-sm font-medium max-w-[250px]">
                Fast, reliable visa processing for top destinations.
              </p>
            </div>
          </div>

          <div className="flex items-start md:items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-md bg-white shrink-0">
              <Phone className="text-[#1c9495]" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">24/7 Support</h2>
              <p className="text-sm font-medium max-w-[200px]">
                Wherever You Go, We’re Just a Call Away!
              </p>
            </div>
          </div>

          <div className="flex items-start md:items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-md bg-white shrink-0">
              <Users className="text-[#1c9495]" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Well Experienced</h2>
              <p className="text-sm font-medium max-w-[200px]">
                Experience You Can Trust, Journeys You’ll Love!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
