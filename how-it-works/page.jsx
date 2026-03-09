import WorkingSection from '@/components/WorkingSection'
import React from 'react'

const HowitWorks = () => {
  return (
    <div>
      <a
        href="https://wa.me/306973931683"
        target="_blank"
        rel="noopener noreferrer"
        alt="whatsapp link" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600transition-all duration-300 z-50"
      >
        <img className='w-8 h-8' src="/whatsapp.png" alt="whatsapp link" />
      </a>
      <WorkingSection/>
    </div>
  )
}

export default HowitWorks