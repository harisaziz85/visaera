import React from 'react'

const VisaTopBar = () => {
  return (
    <div className="w-full bg-[#1c9495] flex sticky top-0 items-center justify-center mb-10 z-10">
      <ul className="w-full max-w-7xl px-8 py-3 flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-y-2 gap-x-6 overflow-x-auto">
        <li className="text-white font-semibold whitespace-nowrap">
          <a href="#requirements" className="hover:underline">
            Documents Requirements
          </a>
        </li>
        <li className="text-white font-semibold whitespace-nowrap">
          <a href="#eligibility-criteria" className="hover:underline">
            Eligibility Criteria
          </a>
        </li>
        <li className="text-white font-semibold whitespace-nowrap">
          <a href="#how-to-apply" className="hover:underline">
            Application Process
          </a>
        </li>
        <li className="text-white font-semibold whitespace-nowrap">
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
        </li>
        <li className="text-white font-semibold whitespace-nowrap">
          <a href="#form" className="hover:underline">
            Apply Form
          </a>
        </li>
      </ul>
    </div>
  )
}

export default VisaTopBar
