"use client";
import React from "react";
import { motion } from "framer-motion";
import { ColourfulText } from "./ui/colourful-text"; // Adjust the import path as needed.

const ComparisonTable = () => {
  const data = [
    {
      label: "Sourcing Platforms",
      manual: "Majorly LinkedIn & Naukri",
      ai: "Sourcing from 20+ database platforms",
    },
    {
      label: "Keywords / Filters",
      manual: "Manual Boolean Searches",
      ai: "AI Job Enrichment & AI-Generated Keywords",
    },
    {
      label: "Screening",
      manual: "Manual Resume Screening",
      ai: "Advanced AI-Matchmaking",
    },
    {
      label: "Response Rate",
      manual: "Slow + Monotonous",
      ai: "5x Faster & Personalized",
    },
  ];

  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <div id="Comparison" className="relative min-h-screen flex flex-col bg-gray-50  py-12 px-4 md:px-12 lg:px-20 ">
      {/* Title with Wave Animation */}

      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="text-4xl md:text-5xl mt-10  font-extrabold text-gray-800 mb-10 text-center"
      >
       Comparison
      </motion.h1>
    
      {/* Desktop View (Table) */}
      <div className="hidden md:block bg-white shadow-xl mb- rounded-2xl p-6 md:p-10">
        
        <table className="w-full">
          
          <thead>
            <tr className="text-gray-800 text-lg font-semibold">
              <th className="p-6 text-left">Feature</th>
              <th className="p-6 text-left">Manual Recruitment</th>
              <th className="p-6 text-left">
              <h1>
          <ColourfulText text="AI Recruitment " />
  
</h1>
                </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-lg ">
            {data.map((row, index) => (
              <motion.tr
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeVariant}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="p-6 font-semibold text-gray-900">{row.label}</td>
                <td className="p-6">{row.manual}</td>
                <td className="p-6 text-blue-600 font-semibold">{row.ai}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (Cards) */}
      <div className="block md:hidden space-y-6">
        {data.map((row, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeVariant}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-800">{row.label}</h2>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700">
                <strong>Manual:</strong> {row.manual}
              </p>
              <p className="text-gray-700">
                <strong className="text-blue-600">AI:</strong> {row.ai}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;