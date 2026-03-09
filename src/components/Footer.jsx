// import { Facebook, Instagram, Linkedin, MailOpen, TicketIcon, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import yt from '../../public/youtube.png';
import fb from '../../public/facebook.png';
import insta from '../../public/instagram.png';
import linkedin from '../../public/linkedin.png';
import twitter from '../../public/twitter.png';
import tiktok from '../../public/tiktok.png';
import iso3 from '../../public/iata.jpeg';

// import mail from '../../public/mail-open.png';

const Footer = () => {
 
  return (
    <section className="relative w-full bg-[#1c9495] px-6 md:px-12 lg:px-24 pt-20 pb-10 overflow-hidden text-white">
      {/* Background Map */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        src="./world-map.png"
        alt=""
      />

      {/* Main Footer Content */}
      <div className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-black">Get in touch</h2>
          <p className="text-sm text-white/90">
            Expert support for every step of your visa process.
          </p>
          <div className='mt-4 flex items-center gap-4'>
            {/* <a  className='w-8 h-8 rounded-full border-[1px] border-white hover:bg-white hover:text-[#1c9495] cursor-pointer flex items-center justify-center text-white transition-all duration-300'>
              <Youtube size={16} />
            </a> */}
            <a href="https://www.youtube.com/@Visaera-com">
              <Image src={yt} alt="youtube" width={40} height={40} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583417004057">
              <Image src={fb} alt="facebook" width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/visaera_com">
              <Image src={insta} alt="insta" width={40} height={40} />
            </a>
            <a href="https://www.linkedin.com/in/visaera">
              <Image src={linkedin} alt="linkedin" width={40} height={40} />
            </a>
            <a href="https://www.x.com/Visa_Era">
              <Image src={twitter} alt="x.xom" width={40} height={40} />
            </a>
            <a href="https://www.tiktok.com/@visaera.com" className='bg-white rounded-full'>
              <Image className='bg-white rounded-full' src={tiktok} alt="tiktok" width={40} height={40} />
            </a>
          </div>
          <div className='flex justify-start sm:justify-center'>
            <Image className='w-[80%] rounded-[8px] mt-5 p-2 bg-white' src={iso3} alt="iso certificate" />
        </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-lg mb-3 font-semibold text-black">Quick Links</p>
          <ul className="space-y-2 text-sm text-white/90">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/student-visa" className="hover:underline">Student Visa</Link></li>
            <li><Link href="/visa-categories" className="hover:underline">Visa Categories</Link></li>
            <li><Link href="/visas" className="hover:underline">Sticker Visa</Link></li>
            <li><Link href="/how-it-works" className="hover:underline">How it Works</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg mb-3 font-semibold text-black">Services</h4>
          <ul className="space-y-2 text-sm text-white/90">
            {/* <li><Link className="hover:underline" href="/visas">Visa Consultation</Link></li> */}
            <li><Link className="hover:underline" href="/academic-guidance#research-support">Research Support</Link></li>
            <li><Link className="hover:underline" href="/academic-guidance#academic-writing">Academic Writing</Link></li>
            <li><Link className="hover:underline" href="/academic-guidance#scholarly-services">Scholarly Services</Link></li>
            <li><Link className="hover:underline" href="/academic-guidance#thesis-proposals">Thesis & Proposals</Link></li>
            <li><Link className="hover:underline" href="/academic-guidance#research-guidance">Research Guidance</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg mb-3 font-semibold text-black">Let's Connect</h4>
          <a
            href="mailto:info@visaera.com"
            className="text-white text-base hover:underline block"
          >
           Email: info@visaera.com
          </a>
          <a
            href="https://wa.me/306973931683"
            target='_blank'
            className="text-white text-base hover:underline block"
          >
           Phone: +30 697 393 1683
          </a>
          <p className='text-white text-sm mb-1 mt-2 font-bold'>Europe Address:</p>
          <a href="https://maps.google.com" className="text-white text-sm hover:underline block">
           Kifissias Avenue & Sofokleous Street. 166 A. Athens, 15126, GRC
          </a>
          <p className='text-white text-sm mb-1 mt-2 font-bold'>Dubai Address:</p>
          <a href="https://maps.google.com" className="text-white text-sm hover:underline block">
           Level 3 & 5, One Central, The Offices 3, Dubai World Trade Center, Sheikh Zayed Road, Dubai, UAE
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 mt-16 border-t border-white/30 pt-4 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} VIsa Era. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
