import React from 'react'

const NewsLetterSection = () => {
  return (
    <section className="w-full bg-[#FDFBF7] px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - CTA Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Visa Application Today
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you’re applying for study, work, or travel visas — our experts are here 
            to guide you through every step of the process.  
            Fill out the form and we’ll get back to you within 24 hours.
          </p>
          <ul className="space-y-2 text-gray-800 mb-8">
            <li>✅ Expert Visa Consultation</li>
            <li>✅ Fast & Reliable Processing</li>
            <li>✅ Free Initial Assessment</li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name *"
                className="w-full border-b text-sm border-black  py-2  outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor='email' className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                id='email'
                placeholder="Enter your email *"
                className="w-full border-b border-black  text-sm py-2  outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor='tel' className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                id='tel'
                placeholder="Enter your Phone No *"
                className="w-full border-b border-black  text-sm py-2  outline-none"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor='msg' className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                placeholder="Tell us about your visa needs..."
                rows="6"
                id='msg'
                className="w-full border-b border-black text-sm  py-2 outline-none resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1c9495] hover:bg-[#097878] text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
            >
              Get Free Consultation
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default NewsLetterSection
