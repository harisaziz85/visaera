import BlogSection from "@/components/BlogSection";
import React from "react";

const Blogpage = () => {
  return (
    <section className="w-full bg-white">
      <a
        href="https://wa.me/306973931683"
        target="_blank"
        rel="noopener noreferrer"
        alt="whatsapp link" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600transition-all duration-300 z-50"
      >
        <img className='w-8 h-8' src="/whatsapp.png" alt="whatsapp link" />
      </a>
      <div className="w-full md:h-[50vh] h-[25vh] relative">
        <img
          className="absolute w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfDB8MHx8fDA%3D"
          alt="Study"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Heading */}
        <div className="absolute inset-0 z-20 flex items-center md:px-20 px-6">
          <h2 className="text-white md:text-6xl text-3xl font-bold">Latest From Blog</h2>
        </div>
      </div>

      <div className="max-w-7xl px-6 md:px-12 lg:px-24 py-20 mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 place-content-center">
          {/* Image Section */}
          <div className="h-[60vh] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Working Abroad"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="h-auto  rounded-2xl md:p-6 flex flex-col ">
            <h2 className="text-2xl font-bold text-[#1c9495] mb-4">
              Unlock Global Career Opportunities
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Exploring international work options can open the door to
              life-changing career opportunities. The Work and Career Visa
              allows professionals and skilled workers to network with global
              companies, attend interviews, or begin short-term roles. This visa
              not only supports career growth but also enhances cultural and
              professional development through real-world experience in a global
              setting.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-auto mt-20 mb-20">
          <div className="h-[60vh] rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="w-full h-[55%] bg-white rounded-b-2xl shadow-xl  overflow-hidden">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" alt="" />
            </div>
            <div className="p-6">
             <h3 className="text-xl font-semibold text-[#1c9495] mb-2">
              7 Things to Know Before Applying for a Student Visa
            </h3>
             <p className="text-gray-600 text-sm mb-1">
              Planning to study abroad? Discover the most important
              requirements, documents, and common mistakes to avoid when
              applying for a student visa.
            </p>
            <a className="text-sm text-[#1c9495] hover:underline" href="#">Read More</a>
            </div>
          </div>
          <div className="h-[60vh] rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="w-full h-[55%] bg-white rounded-b-2xl shadow-xl  overflow-hidden">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" alt="" />
            </div>
            <div className="p-6">
             <h3 className="text-xl font-semibold text-[#1c9495] mb-2">
              7 Things to Know Before Applying for a Student Visa
            </h3>
             <p className="text-gray-600 text-sm mb-1">
              Planning to study abroad? Discover the most important
              requirements, documents, and common mistakes to avoid when
              applying for a student visa.
            </p>
            <a className="text-sm text-[#1c9495] hover:underline" href="#">Read More</a>
            </div>
          </div>
          <div className="h-[60vh] rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="w-full h-[55%] bg-white rounded-b-2xl shadow-xl  overflow-hidden">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" alt="" />
            </div>
            <div className="p-6">
             <h3 className="text-xl font-semibold text-[#1c9495] mb-2">
              7 Things to Know Before Applying for a Student Visa
            </h3>
             <p className="text-gray-600 text-sm mb-1">
              Planning to study abroad? Discover the most important
              requirements, documents, and common mistakes to avoid when
              applying for a student visa.
            </p>
            <a className="text-sm text-[#1c9495] hover:underline" href="#">Read More</a>
            </div>
          </div>

        </div>

         <div className="grid md:grid-cols-2 grid-cols-1 gap-10 place-content-center">


          {/* Text Section */}
          <div className="h-auto  rounded-2xl md:p-6 flex flex-col ">
            <h2 className="text-2xl font-bold text-[#1c9495] mb-4">
              Unlock Global Career Opportunities
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Exploring international work options can open the door to
              life-changing career opportunities. The Work and Career Visa
              allows professionals and skilled workers to network with global
              companies, attend interviews, or begin short-term roles. This visa
              not only supports career growth but also enhances cultural and
              professional development through real-world experience in a global
              setting.
            </p>
          </div>

          {/* Image Section */}
          <div className="h-[60vh] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Working Abroad"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blogpage;
