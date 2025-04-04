"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Hiring at scale just got smarter with SolveHire AI. Faster, accurate sourcing without the manual hassle!",
    author: "Lalit Agrawal - CTO",
    imageUrl: "/emoji_male.png", // Replace with actual image path
    companyLogo: "/zomato.webp", // Replace with actual logo path
  },

];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div id="testimonials" className="flex items-center justify-center bg-gray-50 px-4 py-8 scroll-mt-20">
      <div className="container mx-auto mt-10 flex flex-col md:flex-row items-center justify-between max-w-4xl gap-4">
        {/* Left Button (Hidden on Small Screens) */}
        <button 
          onClick={prevTestimonial} 
          className="hidden md:block bg-gray-300 p-4 rounded-full shadow-md hover:bg-gray-400 transition"
        >
          &#9664;
        </button>
        
        {/* Testimonial Content */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center w-full max-w-lg flex flex-col items-center border border-gray-200">
          <Image 
            src={testimonials[currentIndex].companyLogo} 
            alt="Company Logo" 
            width={100} 
            height={50} 
            className="mb-4"
          />
          <p className="text-purple-700 text-lg md:text-xl font-semibold mb-2">
            "{testimonials[currentIndex].text}"
          </p>
          <p className="text-gray-600 mb-4">{testimonials[currentIndex].author}</p>
          <Image 
            src={testimonials[currentIndex].imageUrl} 
            alt="Author" 
            width={64} 
            height={64} 
            className="rounded-full border border-gray-300"
          />
        </div>
        
        {/* Right Button (Hidden on Small Screens) */}
        <button 
          onClick={nextTestimonial} 
          className="hidden md:block bg-gray-300 p-4 rounded-full shadow-md hover:bg-gray-400 transition"
        >
          &#9654;
        </button>
        
        {/* Mobile Buttons - Shown only on small screens */}
        <div className="flex justify-between w-full max-w-lg mt-4 md:hidden">
          <button 
            onClick={prevTestimonial} 
            className="bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 transition"
          >
            &#9664;
          </button>
          <button 
            onClick={nextTestimonial} 
            className="bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 transition"
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;