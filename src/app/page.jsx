import AboutSection from '@/components/AboutSection'
import AnimationStrip from '@/components/AnimationStrip'
import BlogSection from '@/components/BlogSection'
import Faq from '@/components/Faq'
import HeroSection from '@/components/HeroSection'
import NewsLetterSection from '@/components/NewsLetterSection'
import PilgrimageSection from '@/components/PilgrimageSection'
import VisaCategories from '@/components/VisaCategories'
import WhyChooseUs from '@/components/WhyChooseUs'
import WorkingSection from '@/components/WorkingSection'
import React from 'react'

const HomePage = () => {
  return (
    <div className='relative'>
      <HeroSection />
      <AnimationStrip />
      <AboutSection />
      <WhyChooseUs />
      <WorkingSection />
      <PilgrimageSection />
      <VisaCategories />
      <AnimationStrip />
      <NewsLetterSection />
      <BlogSection />

      <a
        href="https://wa.me/306973931683"
        target="_blank"
        rel="noopener noreferrer"
        alt="whatsapp link" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600transition-all duration-300 z-50"
      >
        <img className='w-8 h-8' src="/whatsapp.png" alt="whatsapp link" />
      </a>
    </div>
  )
}

export default HomePage
