"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
export default function JobSourcing() {
  return (
    <div id="how-to-source" className="bg-[rgb(37,0,91)] text-white py-20 scroll-mt-10">
      <div className="container mx-auto px-6 md:px-12 space-y-24">

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-5xl font-bold">Okay! How do we start sourcing here?</h1>
            <h2 className="text-2xl font-semibold">Step 1: Upload your Job Description</h2>
            <p className="max-w-xl">
              Our proprietary AI enriches JOB irrespective of details provided, using global data
              available for the company using LinkedIn, Google, Glassdoor, etc., optimizing skills
              and salary details.
            </p>
            <h1 className="text-2xl font-bold">No manual Keyword Search</h1>
            <p className="max-w-sm">
              Get instant results from 7M+ database updated regularly and AI trained from 2Lakh+ feedbacks.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href="https://app.solvehire.ai"
                className="group relative overflow-hidden bg-blue-500 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
                aria-label="Employer Login"
              >
                <div className="flex items-center gap-2 justify-center">
                  <div className="h-2 w-2 rounded-full bg-white transition-transform duration-300 group-hover:scale-[100.8]" />
                  <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    Try It Now
                  </span>
                </div>
                <div className="absolute top-0 left-5 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
                  <span>    Try It Now</span>
                  <ArrowRight size={18} />
                </div>
              </Link>
            </div>

          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-[500px] bg-white flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/image4.png"
                alt="Job Sourcing"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
          {/* Text */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">Step 2: Get AI-Screened Candidates</h1>
            <p className="max-w-xl">
              No manual filtering, just high-quality talent ranked by relevance for you to select or reject in a single click. Ready to download and move to your ATS.
            </p>
            <h2 className="text-4xl font-bold">Step 3: Start Campaigning</h2>
            <p className="max-w-sm">
              Engage with top talent with our automated Whatsapp Sequencing and make data-driven hiring decisions fast, only with high-intent candidates.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-[500px] bg-amber-50 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/image5.png"
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