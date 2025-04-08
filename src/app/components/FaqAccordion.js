'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "How is SolveHire different from traditional job boards like LinkedIn, Naukri?",
    answer: "solvehire is an AI-powered Sourcing Automation platform to source relevant candidates based on 50+ parameters, trained actively over 10,000+ monthly candidate feedbacks, to generate a ranked list ensuring you spend time on the most promising candidates first."
  },
  {
    question: "Can I filter candidates based on specific criteria?",
    answer: "Absolutely! Apart from using AI, the system allows you to filter candidates by CTC, skills, experience, industry, job role, location, and even intent (active vs. passive job seekers)."
  },
  {
    question: "What roles does SolveHire support?",
    answer: "SOur proprietary AI is majorly trained for 50+ distinct tech roles, but the platform is being trained for other non-tech roles too."
  },
  {
    question: "Does SolveHire integrate with my current ATS?",
    answer: " Yes! We seamlessly integrate with popular ATS, CRM, and HR tools to keep your hiring workflow smooth. No need to switch systems—just enhance them."
  },
  {
    question: "Does SolveHire offer a free trial?",
    answer: "Yes! You can experience AI-powered sourcing before committing. You’ll be able to source and see our AI ranking in action."
  },
  {
    question: "What pricing plans does SolveHire offer?",
    answer: "We offer flexible annual pricing based on your company’s hiring needs. Our plans scale with your usage, whether you’re a startup or an enterprise. Contact us for a custom quote."
  }
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="F&Q" className="min-h-screen bg-[rgb(37,0,91)] text-black flex items-center">
      <div className="container mx-auto mt-4 px-6 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white rounded-md overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
