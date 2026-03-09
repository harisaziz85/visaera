import React from "react";

const BlogSection = () => {
  return (
    <div className="w-full bg-white px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#1c9495] font-medium text-sm uppercase text-center tracking-wide mb-4">
          Latest from blogs
        </p>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Fresh Visa Tips & Global Insights
        </h2>


        {/* Blogs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-auto">
  {/* Blog 1 */}
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all">
    <div className="h-74">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
        alt=""
      />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-semibold text-[#1c9495] mb-2">
        7 Things to Know Before Applying for a Student Visa
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        Planning to study abroad? Discover the most important requirements,
        documents, and common mistakes to avoid when applying for a student
        visa.
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>📅 August 1, 2025</span>
        <button className="text-[#1c9495] hover:underline cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  </div>

  {/* Blog 2 */}
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all">
    <div className="h-74">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1502920514313-52581002a659?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
        alt=""
      />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-semibold text-[#1c9495] mb-2">
        How to Prepare for Your Visa Interview
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        Nervous about your upcoming visa interview? Here’s a guide to common
        questions, required documents, and expert tips to boost your chances.
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>📅 July 25, 2025</span>
        <button className="text-[#1c9495] hover:underline cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  </div>

  {/* Blog 3 */}
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all">
    <div className="h-74">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1499914485622-a88fac536970?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
        alt=""
      />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-semibold text-[#1c9495] mb-2">
        Common Mistakes That Delay Visa Approvals
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        Avoid unnecessary delays by steering clear of these frequent application
        errors that could set your travel plans back.
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>📅 July 18, 2025</span>
        <button className="text-[#1c9495] hover:underline cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default BlogSection;
