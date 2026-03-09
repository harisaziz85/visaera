import React from 'react';
import { CheckCircle, Phone, Globe, FileText } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className='max-w-7xl bg-white md:py-20 py-8 mx-auto md:mt-30'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
        {/* Left Section with Images and Circle */}
        <div className='h-[50vh] sm:h-[80vh] flex md:flex-row flex-col-reverse gap-6 p-4'>
          <div className=' md:w-1/2 hidden md:flex flex-col justify-center items-center gap-4'>
            <div className='md:h-[70%] w-full rounded-xl overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src='https://images.unsplash.com/photo-1654163601053-ea0362be3429?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
                alt='Visa Consultant'
              />
            </div>
            <div className='hidden w-40 h-40 border border-gray-300 md:flex flex-col items-center justify-center rounded-full text-center p-4'>
              <p className='text-sm tracking-widest'>
                Immigration Agency
                <br />
                Worldwide Access
              </p>
            </div>
          </div>
          <div className='md:w-1/2 flex flex-col gap-4'>
            <div className='h-[20%] w-full bg-[#1c9495] text-white rounded-xl flex items-center justify-center'>
              <div className='flex gap-4 items-center'>
                <h2 className='text-4xl font-semibold'>25</h2>
                <p className='text-lg leading-5'>
                  Years of <br /> experience
                </p>
              </div>
            </div>
            <div className='h-[80%] rounded-xl overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src='https://www.dminternational.com.pk/wp-content/uploads/2024/10/Visa-consultant-3-1.jpg'
                alt='Visa Assistance'
              />
            </div>
          </div>
        </div>

        {/* Right Section with Text and Cards */}
        <div className='text-gray-800 p-6 '>
          <h2 className='uppercase text-md font-semibold text-[#1c9495]'>
            Why Choose us
          </h2>
          <h2 className='text-4xl font-semibold mt-5'>
            Your Gateway to{' '}
            <span className='text-[#1c9495]'>Hassle-Free Visa</span> Approvals
          </h2>
          <p className='mt-3 text-sm max-w-md'>
            Get expert guidance and tailored solutions for your travel, work,
            study, or special-purpose visa needs. From documentation to legal
            compliance, we ensure a smooth and stress-free application process.
          </p>

          {/* Cards */}
          <div className='mt-8 grid sm:grid-cols-2 gap-6'>
            {/* Card 1 */}
            <div className='border rounded-xl p-6 shadow-sm'>
              <div className='w-12 h-12 bg-[#1c9495] flex items-center justify-center rounded-full mb-4'>
                <FileText className='text-white' size={20} />
              </div>
              <h3 className='text-lg font-semibold mb-3'>Visa Assistance</h3>
              <ul className='space-y-1 text-sm'>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='text-[#1c9495]' size={16} /> End-to-End
                  Application Support
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='text-[#1c9495]' size={16} /> Guidance for
                  All Visa Categories
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className='border rounded-xl p-6 shadow-sm'>
              <div className='w-12 h-12 bg-[#1c9495] flex items-center justify-center rounded-full mb-4'>
                <Globe className='text-white' size={20} />
              </div>
              <h3 className='text-lg font-semibold mb-3'>
                Special Purpose Experts
              </h3>
              <ul className='space-y-1 text-sm'>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='text-[#1c9495]' size={16} /> Humanitarian,
                  Medical & Research Visas
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle className='text-[#1c9495]' size={16} /> Cultural,
                  Diplomatic & Event Entry Permits
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className='mt-8 flex flex-wrap items-center gap-6'>
            <button className='px-6 py-3 border-2 border-[#1c9495] rounded-full text-sm font-medium flex items-center gap-2 hover:bg-green-600hover:text-white transition'>
              Read More →
            </button>
            
            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 bg-[#1c9495] flex items-center justify-center rounded-full'>
                <Phone className='text-white' size={18} />
              </div>
              <div>
                <p className='text-xs'>Need help?</p>
                <a href='https://wa.me/306973931683' target='_blank' className='text-lg font-semibold'>+30 697 393 1683</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
