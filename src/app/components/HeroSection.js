// components/HeroSection.js
'use client';
import Image from "next/image";

export default function HeroSection() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[rgb(37,0,91)] text-white text-center p-6">
        
        {/* Container to manage content width */}
        <div className="container mx-auto px-4">
          
          {/* User images and trust badge - Centered */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
          <div className="relative flex">
              <Image
                src="/emoji_female.png"
                alt="User 2"
                width={50}
                height={50}
                className="rounded-full border-2 border-white absolute left-6 sm:left-8 z-0"
              />
              <Image
                src="/emoji_male.png"
                alt="User 1"
                width={50}
                height={50}
                className="rounded-full border-2 border-white relative z-10"
              />
            </div>
            <span className="font-semibold mt-4 sm:mt-0 sm:ml-10 text-center sm:text-left">
              + Trusted by over 500+ users
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            AI-Powered Recruitment Platform for{" "}
            <span
              className="relative inline-block text-white"
              style={{
                backgroundImage: "url('/background.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                padding: "2px 8px"
              }}
            >
              TechHiring
            </span>
          </h1>

          {/* Hero Description */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Solvehire’s AI-powered sourcing instantly delivers pre-vetted, high-intent talent.
            Our proprietary AI, continuously trained on 10,000+ monthly feedback inputs,
            helps you source, rank, and engage the best candidates—faster and more efficiently.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://app.solvehire.ai/" 
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition text-center"
              aria-label="Get Early Access"
            >
              Get Early Access
            </a>

            <a 
              href="https://calendly.com/ashish-intello" 
              className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-700 transition text-center"
              aria-label="Book a Demo"
            >
              Book a Demo
            </a>
          </div>

          {/* Footer Text */}
          <p className="mt-4 text-sm">
            Trusted by over <span className="font-semibold">500+ users</span>
          </p>
        </div>
      </div>
    );
}