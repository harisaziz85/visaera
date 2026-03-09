import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SubCategoryVisa = ({ subcategories }) => {
  const pathname = usePathname()
  const slug = pathname.split("/").pop() // e.g. "study-and-training"

  return (
    <section className='pb-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-6'>
        {subcategories.map((category, index) => {
          const categorySlug = category.toLowerCase().replace(/\s+/g, "-")
          return (
            <Link key={index} href={`/${slug}/${categorySlug}`}>
              <div className='text-center cursor-pointer hover:scale-102 transition-all duration-300 rounded-2xl w-full px-6 py-3 text-black bg-white shadow-lg flex items-center justify-center'>
                <h2 className='font-medium text-md'>{category}</h2>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default SubCategoryVisa
