import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";
import Image from 'next/image';
import yt from '../../../public/youtube.png';
import fb from '../../../public/facebook.png';
import insta from '../../../public/instagram.png';
import linkedin from '../../../public/linkedin.png';
import twitter from '../../../public/twitter.png';
import tiktok from '../../../public/tiktok.png';

const Contactpage = () => {
  return (
    <section className="w-full bg-[#FDFBF7]">
      <a
        href="https://wa.me/306973931683"
        target="_blank"
        rel="noopener noreferrer"
        alt="whatsapp link" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600transition-all duration-300 z-50"
      >
        <img className="w-8 h-8" src="/whatsapp.png" alt="whatsapp link" />
      </a>
      <div className="w-full h-[60vh] relative">
        <img
          className="absolute w-full h-full object-cover"
          src="https://pk.usembassy.gov/wp-content/uploads/sites/147/2021/01/Contact-Us-1440X345.jpg"
          alt="Study"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Heading */}
        <div className="absolute inset-0 z-20 flex flex-col md:top-50 top-40 gap-6 md:items-start items-center md:px-20 px-6">
          <h2 className="text-white md:text-7xl text-4xl font-semibold">
            Contact Us
          </h2>
          <p className="max-w-2xl text-white text-sm md:text-left text-center">
            Our dedicated team is ready to assist you with any questions,
            concerns, or feedback you may have. Whether you’re a customer,
            partner, or potential client, we’re here to help. Please feel free
            to contact us using the information below.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12 mt-12 px-6">
        {/* Form Section */}
        <div className="max-w-4xl w-full md:w-[60%]">
          <h2 className="text-2xl font-semibold mb-6">Send Us A Message</h2>
          <form className="p-8 bg-white rounded-lg shadow space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="px-2 py-3 mt-1 outline-none w-full border-gray-300 border bg-white rounded-md shadow-sm focus:ring-[#1c9495] focus:border-[#1c9495]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="px-2 py-3 mt-1 outline-none w-full border-gray-300 border bg-white rounded-md shadow-sm focus:ring-[#1c9495] focus:border-[#1c9495]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="sub" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="sub"
                className="px-2 py-3 mt-1 w-full outline-none border-gray-300 border bg-white rounded-md shadow-sm focus:ring-[#1c9495] focus:border-[#1c9495]"
              />
            </div>

            <div>
              <label htmlFor="msg" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                id="msg"
                className="px-2 py-3 outline-none mt-1 w-full border-gray-300 border bg-white rounded-md shadow-sm focus:ring-[#1c9495] focus:border-[#1c9495] resize-none"
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-[#1c9495] text-white px-6 py-2 rounded-md hover:bg-[#097878] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white border-b-4 border-[#1c9495] text-black p-8 rounded-lg shadow max-w-sm w-full mt-14">
          <p className="mb-4 font-semibold">Contact Us Now</p>
          <p className="text-sm mb-10">Feel Free to Contact Us now</p>

          {/* Email */}
          <div className="mb-8 flex items-center gap-3 text-sm break-words">
            <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-md bg-[#1c9495] text-white">
              <Mail />
            </div>
            <a href="mailto:info@visaera.com" className="leading-snug">info@visaera.com</a>
          </div>

          {/* Phone */}
          <div className="mb-8 flex items-center gap-3 text-sm break-words">
            <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-md bg-[#1c9495] text-white">
              <Phone />
            </div>
            <a href="https://wa.me/306973931683" target="_blank" alt="whatapp number" title="whatapp number" className="leading-snug">+30 697 393 1683</a>
          </div>

          {/* Address */}
          <div className="mb-8 flex items-center gap-3 text-sm break-words">
            <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-md bg-[#1c9495] text-white">
              <MapPin />
            </div>
            <a href="https://maps.google.com" className="leading-snug">
                Level 3 & 5, One Central, The Offices 3, Dubai World Trade Center, Sheikh Zayed Road, Dubai, UAE
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
             <a href="https://www.youtube.com/@Visaera-com">
              <Image src={yt} alt="youtube" width={35} height={35} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583417004057">
              <Image src={fb} alt="facebook" width={35} height={35} />
            </a>
            <a href="https://www.instagram.com/visaera_com">
              <Image src={insta} alt="insta" width={35} height={35} />
            </a>
            <a href="https://www.linkedin.com/in/visaera">
              <Image src={linkedin} alt="linkedin" width={35} height={35} />
            </a>
            <a href="https://www.x.com/Visa_Era">
              <Image src={twitter} alt="x.xom" width={35} height={35} />
            </a>
            <a href="https://www.tiktok.com/@visaera.com" className='bg-white rounded-full'>
              <Image className='bg-white rounded-full' src={tiktok} alt="tiktok" width={35} height={35} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
