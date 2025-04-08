"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const words = [
    { text: "AI-Powered" },
    { text: "\u00A0" },
    { text: "Recruitment" },
    { text: "\u00A0" },
    { text: "Platform" },
    { text: "\u00A0" },
    { text: "for" },
    { text: "\u00A0" },
    {
      text: "TechHiring",
      className: "text-blue-800 dark:text-blue-500",
    },
  ];

  const paragraph = `Solvehire’s AI-powered sourcing instantly delivers pre-vetted, high-intent talent. Our proprietary AI, continuously trained on 10,000+ monthly feedback inputs, helps you source, rank, and engage the best candidates—faster and more efficiently.`;

  return (
    <div id ="home" className="flex flex-col items-center justify-center min-h-screen bg-[rgb(37,0,91)] text-white text-center p-6">
      <div  className="container mx-auto px-4">
        {/* User images and trust badge */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-12 mb-5">
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
            + Trusted by  500+ users
          </span>
        </div>
        <h1 className="block sm:hidden text-3xl font-bold mb-4">
          AI-Powered Recruitment Platform for{" "}
          <span className="text-blue-500">TechHiring</span>
        </h1>
        {/* Hero Title */}

        {/* Typewriter effect for tablet & desktop */}
        <div className="hidden sm:flex flex-col items-center justify-center mb-6">

          <TypewriterEffectSmooth words={words} />
        </div>
        {/* Animated Description */}
        <div className=" md:text-sm mb-8 max-w-2xl mx-auto text-white">
          <TextGenerateEffect words={paragraph} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* Get Early Access */}
          <a
            href="https://app.solvehire.ai/"
            className="group relative overflow-hidden bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
            aria-label="Get Early Access"
          >
            <div className="flex items-center gap-2 justify-center">
              {/* Dot */}
              <div className="h-2 w-2 rounded-full bg-white transition-transform duration-300 group-hover:scale-[100.8]" />
              {/* Main Text */}
              <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                Get Early Access
              </span>
            </div>

            {/* Hover Reveal Layer */}
            <div className="absolute top-0 left-5 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
              <span>Get Early Access</span>
              <ArrowRight size={18} />
            </div>
          </a>

          {/* Book a Demo */}
          <a
            href="https://calendly.com/ashish-intello"
            className="group relative overflow-hidden bg-gray-800 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-gray-700 hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600"
            aria-label="Book a Demo"
          >
            <div className="flex items-center gap-2 justify-center">
              <div className="h-2 w-2 rounded-full bg-white transition-transform duration-300 group-hover:scale-[100.8]" />
              <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                Book a Demo
              </span>
            </div>

            <div className="absolute top-0 left-5 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
              <span>Book a Demo</span>
              <ArrowRight size={18} />
            </div>
          </a>
        </div>

        {/* Footer Text */}
        <p className="mt-4 text-sm">
          Trusted by  <span className="font-semibold">500+ users</span>
        </p>
      </div>
    </div>
  );
}