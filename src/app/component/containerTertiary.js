"use client";

import Image from "next/image";

export default function JobSourcing() {
  return (
    <div className="bg-[rgb(37,0,91)] text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* First Section: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          {/* Left Side - Text & Button */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Okay! How do we start sourcing here?</h1>
            <h2 className="text-2xl font-semibold mb-2">Step 1: Upload your Job Description</h2>
            <p className="mb-4 max-w-xl">
              Our proprietary AI enriches JOB irrespective of details provided, using global data 
              available for the company using LinkedIn, Google, Glassdoor, etc., optimizing skills 
              and salary details.
            </p>
            <h1 className="text-2xl font-bold">No manual Keyword Search</h1>
            <p className="mb-4 max-w-sm">
              Get instant results from 7M+ database updated regularly and AI trained from 2Lakh+ feedbacks.
            </p>
            <div className="flex justify-center items-center">
              <button className="bg-yellow-500 py-2 px-4 mb-4 rounded-md text-white font-semibold">
                Try It Now
              </button>
            </div>
          </div>
          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-[500px] bg-white flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67e129f519bc4a85c34797cb_SECTION%204%20UPLOAD%20YOUR%20JOB%20DESCRIPTION%20IMAGE%205.png" 
                alt="Job Sourcing"
                width={500} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        {/* Second Section: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          {/* Right Side - Text & Button */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Step 2: Get AI-Screened Candidates</h1>
            <p className="mb-4 max-w-xl">
              No manual filtering, just high-quality talent ranked by relevance for you to select or reject in a single click. Ready to download and move to your ATS.
            </p>
            <h2 className="text-4xl font-bold mb-4">Step 3: Start Hiring</h2>
            <p className="mb-4 max-w-sm">
              Engage with top talent with our automated mail sequencing and make data-driven hiring decisions fast, only with high-intent candidates.
            </p>
          </div>
          {/* Left Side - Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-[500px] bg-amber-50 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67e12c5ca729395f634cc269_SECTION%204%20START%20HIRING%20IMAGE%206-min-min%20(1)%20(1).png" 
                alt="AI Matching"
                width={500} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}